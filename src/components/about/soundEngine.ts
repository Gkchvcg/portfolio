// Web Audio API Sound Engine for Portfolio Digital Journal
// Zero external dependencies, 100% reliable, zero broken links, works fully offline.

class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  public analyser: AnalyserNode | null = null;
  private isMuted: boolean = false;
  private currentSongId: string | null = null;
  private songTimer: NodeJS.Timeout | null = null;
  private songStep: number = 0;
  private isPlayingSong: boolean = false;
  private droneOscillators: OscillatorNode[] = [];
  private droneGains: GainNode[] = [];

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.7, this.ctx.currentTime);

      // Analyser Node for real-time visualizer
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.analyser.smoothingTimeConstant = 0.8;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public setMuted(muted: boolean): boolean {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 0.7, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  public toggleMute(): boolean {
    return this.setMuted(!this.isMuted);
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // ----------------------------------------------------
  // PIANO KEY SYNTHESIZER
  // Rich grand piano timbre with 5 harmonics + hammer percussion
  // ----------------------------------------------------
  public playPiano(frequency: number, duration: number = 1.8) {
    const ctx = this.getContext();
    if (!ctx || !this.masterGain || this.isMuted) return;

    const now = ctx.currentTime;

    // Filter to warm up sound and simulate acoustic piano body
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(Math.min(8000, frequency * 6), now);
    filter.frequency.exponentialRampToValueAtTime(Math.max(200, frequency * 1.5), now + duration);

    // Note Gain Envelope
    const noteGain = ctx.createGain();
    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(0.5, now + 0.005); // Rapid 5ms hammer attack
    noteGain.gain.exponentialRampToValueAtTime(0.2, now + 0.3); // Decay
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration); // Long release

    // Harmonics: fundamental, 2nd, 3rd, 4th, 5th harmonic
    const harmonics = [
      { ratio: 1, gain: 1.0, type: 'triangle' as OscillatorType },
      { ratio: 2, gain: 0.5, type: 'sine' as OscillatorType },
      { ratio: 3, gain: 0.25, type: 'sine' as OscillatorType },
      { ratio: 4, gain: 0.12, type: 'sine' as OscillatorType },
      { ratio: 5, gain: 0.06, type: 'triangle' as OscillatorType },
    ];

    harmonics.forEach((h) => {
      const osc = ctx.createOscillator();
      const hGain = ctx.createGain();

      osc.type = h.type;
      osc.frequency.setValueAtTime(frequency * h.ratio, now);

      // Micro detuning for realistic natural acoustic string chorus
      const detuneCents = (Math.random() - 0.5) * 4;
      osc.detune.setValueAtTime(detuneCents, now);

      hGain.gain.setValueAtTime(h.gain, now);

      osc.connect(hGain);
      hGain.connect(filter);

      osc.start(now);
      osc.stop(now + duration);
    });

    // Hammer click transient (wood strike on string)
    const hammerOsc = ctx.createOscillator();
    const hammerGain = ctx.createGain();
    hammerOsc.type = 'sine';
    hammerOsc.frequency.setValueAtTime(1400, now);
    hammerOsc.frequency.exponentialRampToValueAtTime(120, now + 0.015);
    hammerGain.gain.setValueAtTime(0.3, now);
    hammerGain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

    hammerOsc.connect(hammerGain);
    hammerGain.connect(filter);
    hammerOsc.start(now);
    hammerOsc.stop(now + 0.02);

    filter.connect(noteGain);
    noteGain.connect(this.masterGain);
  }

  // ----------------------------------------------------
  // VINYL SOUNDS & UI SOUND EFFECTS
  // ----------------------------------------------------
  public playNeedleDrop() {
    const ctx = this.getContext();
    if (!ctx || !this.masterGain || this.isMuted) return;

    const now = ctx.currentTime;

    // Tonearm thud
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(90, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.12);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.15);

    // Vinyl surface scratch noise burst
    const bufferSize = ctx.sampleRate * 0.25;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.08));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, now);
    filter.Q.setValueAtTime(2.5, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.12, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    noise.start(now);
  }

  public playUiClick() {
    const ctx = this.getContext();
    if (!ctx || !this.masterGain || this.isMuted) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.025);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.03);
  }

  public playToggle(isLove: boolean) {
    const ctx = this.getContext();
    if (!ctx || !this.masterGain || this.isMuted) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (isLove) {
      // Upward bright pleasant chime
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.08); // G5
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    } else {
      // Downward subtle low tone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now); // A4
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.08); // A3
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    }

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  public playFootballKick() {
    const ctx = this.getContext();
    if (!ctx || !this.masterGain || this.isMuted) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(42, now + 0.1);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  public playChime() {
    const ctx = this.getContext();
    if (!ctx || !this.masterGain || this.isMuted) return;

    const now = ctx.currentTime;
    const notes = [659.25, 880, 1046.5]; // E5, A5, C6 crystalline chord

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);

      gain.gain.setValueAtTime(0, now + idx * 0.06);
      gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 1.2);

      osc.connect(gain);
      gain.connect(this.masterGain!);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 1.3);
    });
  }

  // ----------------------------------------------------
  // VINYL LOUNGE: PROCEDURAL SONG ARRANGEMENTS
  // Real melodic compositions for Nusrat, Jass Manak, and Parda
  // ----------------------------------------------------

  private stopDrones() {
    this.droneOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (_) {}
    });
    this.droneOscillators = [];
    this.droneGains = [];
  }

  public playSong(trackId: string) {
    this.stopSong();
    this.currentSongId = trackId;
    this.isPlayingSong = true;
    this.songStep = 0;

    // First, play needle drop sound
    this.playNeedleDrop();

    const ctx = this.getContext();
    if (!ctx) return;

    if (trackId === 'nusrat') {
      this.startNusratLoop();
    } else if (trackId === 'jass-manak') {
      this.startJassManakLoop();
    } else if (trackId === 'parda') {
      this.startPardaLoop();
    }
  }

  public pauseSong() {
    this.isPlayingSong = false;
    if (this.songTimer) {
      clearInterval(this.songTimer);
      this.songTimer = null;
    }
    this.stopDrones();
  }

  public resumeSong() {
    if (this.currentSongId) {
      this.playSong(this.currentSongId);
    }
  }

  public stopSong() {
    this.pauseSong();
    this.currentSongId = null;
    this.songStep = 0;
  }

  public getCurrentSong(): string | null {
    return this.currentSongId;
  }

  public getIsPlayingSong(): boolean {
    return this.isPlayingSong;
  }

  // 1. NUSRAT FATEH ALI KHAN: "Yeh Jo Halka Halka Suroor Hai"
  // Harmonium lead + Sufi drone (Sa-Pa) + Tabla rhythmic thumps
  private startNusratLoop() {
    const ctx = this.getContext();
    if (!ctx || !this.masterGain) return;

    // Continuous Sufi Harmonium Drone (C3: 130.81 Hz + G3: 196.00 Hz)
    const droneFreqs = [130.81, 196.0];
    droneFreqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);

      osc.start();
      this.droneOscillators.push(osc);
      this.droneGains.push(gain);
    });

    // Iconic vocal/harmonium melody sequence of "Yeh Jo Halka Halka Suroor Hai"
    // G3, C4, D4, Eb4, D4, C4, G3, Bb3, C4, D4, C4, Bb3, G3, C4, Eb4, G4...
    const melody = [
      { note: 196.0, dur: 0.35, isTabla: true }, // G3
      { note: 261.63, dur: 0.35, isTabla: false }, // C4
      { note: 293.66, dur: 0.35, isTabla: true }, // D4
      { note: 311.13, dur: 0.55, isTabla: false }, // Eb4
      { note: 293.66, dur: 0.35, isTabla: true }, // D4
      { note: 261.63, dur: 0.45, isTabla: false }, // C4
      { note: 233.08, dur: 0.35, isTabla: true }, // Bb3
      { note: 261.63, dur: 0.7, isTabla: true }, // C4 (held)
      { note: 293.66, dur: 0.35, isTabla: true }, // D4
      { note: 311.13, dur: 0.35, isTabla: false }, // Eb4
      { note: 392.0, dur: 0.6, isTabla: true }, // G4 (soaring sargam high note)
      { note: 349.23, dur: 0.35, isTabla: false }, // F4
      { note: 311.13, dur: 0.35, isTabla: true }, // Eb4
      { note: 293.66, dur: 0.45, isTabla: false }, // D4
      { note: 261.63, dur: 0.8, isTabla: true }, // C4
    ];

    const stepDuration = 320; // ~94 BPM step
    this.songTimer = setInterval(() => {
      if (!this.isPlayingSong || !this.ctx || this.isMuted) return;

      const item = melody[this.songStep % melody.length];
      const now = this.ctx.currentTime;

      // Play Harmonium Reed Voice
      const harmOsc1 = this.ctx.createOscillator();
      const harmOsc2 = this.ctx.createOscillator();
      const harmGain = this.ctx.createGain();
      const harmFilter = this.ctx.createBiquadFilter();

      harmOsc1.type = 'sawtooth';
      harmOsc2.type = 'square';
      harmOsc1.frequency.setValueAtTime(item.note, now);
      harmOsc2.frequency.setValueAtTime(item.note * 1.004, now); // 6 cents chorus

      harmFilter.type = 'bandpass';
      harmFilter.frequency.setValueAtTime(800, now);
      harmFilter.Q.setValueAtTime(1.8, now);

      harmGain.gain.setValueAtTime(0, now);
      harmGain.gain.linearRampToValueAtTime(0.25, now + 0.04);
      harmGain.gain.exponentialRampToValueAtTime(0.001, now + item.dur);

      harmOsc1.connect(harmFilter);
      harmOsc2.connect(harmFilter);
      harmFilter.connect(harmGain);
      harmGain.connect(this.masterGain!);

      harmOsc1.start(now);
      harmOsc2.start(now);
      harmOsc1.stop(now + item.dur + 0.05);
      harmOsc2.stop(now + item.dur + 0.05);

      // Tabla Bayan / Dagga pulse on key rhythm beats
      if (item.isTabla) {
        const tablaOsc = this.ctx.createOscillator();
        const tablaGain = this.ctx.createGain();
        tablaOsc.frequency.setValueAtTime(110, now);
        tablaOsc.frequency.exponentialRampToValueAtTime(55, now + 0.14);
        tablaGain.gain.setValueAtTime(0.3, now);
        tablaGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        tablaOsc.connect(tablaGain);
        tablaGain.connect(this.masterGain!);
        tablaOsc.start(now);
        tablaOsc.stop(now + 0.16);
      }

      this.songStep++;
    }, stepDuration);
  }

  // 2. JASS MANAK: "Prada / Lehanga"
  // Upbeat modern Punjabi pop rhythm + acoustic pluck melody + punchy 808 bass
  private startJassManakLoop() {
    const ctx = this.getContext();
    if (!ctx || !this.masterGain) return;

    // Upbeat Punjabi Pop Hook (D minor: D4, F4, G4, A4, C5...)
    const melody = [
      { note: 440.0, bass: 146.83, drum: 'kick' }, // A4, D3 bass
      { note: 440.0, bass: 146.83, drum: 'none' }, // A4
      { note: 392.0, bass: 146.83, drum: 'snare' }, // G4
      { note: 349.23, bass: 146.83, drum: 'none' }, // F4
      { note: 392.0, bass: 116.54, drum: 'kick' }, // G4, Bb2 bass
      { note: 440.0, bass: 116.54, drum: 'none' }, // A4
      { note: 349.23, bass: 116.54, drum: 'snare' }, // F4
      { note: 293.66, bass: 116.54, drum: 'none' }, // D4
      { note: 523.25, bass: 130.81, drum: 'kick' }, // C5, C3 bass
      { note: 440.0, bass: 130.81, drum: 'none' }, // A4
      { note: 392.0, bass: 130.81, drum: 'snare' }, // G4
      { note: 349.23, bass: 130.81, drum: 'none' }, // F4
      { note: 392.0, bass: 110.0, drum: 'kick' }, // G4, A2 bass
      { note: 440.0, bass: 110.0, drum: 'none' }, // A4
      { note: 349.23, bass: 110.0, drum: 'snare' }, // F4
      { note: 293.66, bass: 110.0, drum: 'kick' }, // D4
    ];

    const stepDuration = 220; // 136 BPM energetic cadence
    this.songTimer = setInterval(() => {
      if (!this.isPlayingSong || !this.ctx || this.isMuted) return;

      const item = melody[this.songStep % melody.length];
      const now = this.ctx.currentTime;

      // Pop Pluck Lead
      const pluckOsc = this.ctx.createOscillator();
      const pluckGain = this.ctx.createGain();
      pluckOsc.type = 'triangle';
      pluckOsc.frequency.setValueAtTime(item.note, now);

      pluckGain.gain.setValueAtTime(0.3, now);
      pluckGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      pluckOsc.connect(pluckGain);
      pluckGain.connect(this.masterGain!);
      pluckOsc.start(now);
      pluckOsc.stop(now + 0.23);

      // Bassline note
      const bassOsc = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      bassOsc.type = 'sine';
      bassOsc.frequency.setValueAtTime(item.bass, now);
      bassGain.gain.setValueAtTime(0.35, now);
      bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      bassOsc.connect(bassGain);
      bassGain.connect(this.masterGain!);
      bassOsc.start(now);
      bassOsc.stop(now + 0.3);

      // Drums
      if (item.drum === 'kick') {
        const kickOsc = this.ctx.createOscillator();
        const kickGain = this.ctx.createGain();
        kickOsc.frequency.setValueAtTime(150, now);
        kickOsc.frequency.exponentialRampToValueAtTime(45, now + 0.08);
        kickGain.gain.setValueAtTime(0.45, now);
        kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

        kickOsc.connect(kickGain);
        kickGain.connect(this.masterGain!);
        kickOsc.start(now);
        kickOsc.stop(now + 0.1);
      } else if (item.drum === 'snare') {
        // Crisp pop snap / clap
        const snapOsc = this.ctx.createOscillator();
        const snapGain = this.ctx.createGain();
        snapOsc.type = 'triangle';
        snapOsc.frequency.setValueAtTime(600, now);
        snapOsc.frequency.exponentialRampToValueAtTime(180, now + 0.05);
        snapGain.gain.setValueAtTime(0.2, now);
        snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        snapOsc.connect(snapGain);
        snapGain.connect(this.masterGain!);
        snapOsc.start(now);
        snapOsc.stop(now + 0.07);
      }

      this.songStep++;
    }, stepDuration);
  }

  // 3. PARDA: "The Mystical Veil"
  // Meditative acoustic Sufi strings / santur pluck + warm atmospheric pad
  private startPardaLoop() {
    const ctx = this.getContext();
    if (!ctx || !this.masterGain) return;

    // Atmospheric warm pad (E minor: E3 + B3)
    const padFreqs = [164.81, 246.94];
    padFreqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start();
      this.droneOscillators.push(osc);
      this.droneGains.push(gain);
    });

    // Meditative Sufi acoustic melody
    // E4, G4, B4, A4, G4, F#4, E4, D4, E4...
    const melody = [
      { note: 329.63, dur: 0.6 }, // E4
      { note: 392.0, dur: 0.5 }, // G4
      { note: 493.88, dur: 0.9 }, // B4 (mystic pinnacle)
      { note: 440.0, dur: 0.6 }, // A4
      { note: 392.0, dur: 0.5 }, // G4
      { note: 369.99, dur: 0.6 }, // F#4
      { note: 329.63, dur: 0.8 }, // E4
      { note: 293.66, dur: 0.5 }, // D4
      { note: 329.63, dur: 1.1 }, // E4
      { note: 246.94, dur: 0.6 }, // B3
      { note: 293.66, dur: 0.6 }, // D4
      { note: 329.63, dur: 1.2 }, // E4
    ];

    const stepDuration = 450; // Slow, poetic 70 BPM
    this.songTimer = setInterval(() => {
      if (!this.isPlayingSong || !this.ctx || this.isMuted) return;

      const item = melody[this.songStep % melody.length];
      const now = this.ctx.currentTime;

      // Plucked Acoustic String (Karplus / multi-harmonic pluck)
      const pluck1 = this.ctx.createOscillator();
      const pluck2 = this.ctx.createOscillator();
      const pluckGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      pluck1.type = 'triangle';
      pluck2.type = 'sine';
      pluck1.frequency.setValueAtTime(item.note, now);
      pluck2.frequency.setValueAtTime(item.note * 2, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2200, now);
      filter.frequency.exponentialRampToValueAtTime(300, now + item.dur);

      pluckGain.gain.setValueAtTime(0.28, now);
      pluckGain.gain.exponentialRampToValueAtTime(0.001, now + item.dur);

      pluck1.connect(filter);
      pluck2.connect(filter);
      filter.connect(pluckGain);
      pluckGain.connect(this.masterGain!);

      pluck1.start(now);
      pluck2.start(now);
      pluck1.stop(now + item.dur + 0.05);
      pluck2.stop(now + item.dur + 0.05);

      this.songStep++;
    }, stepDuration);
  }
}

export const sound = new SoundEngine();

export const PIANO_FREQUENCIES: { [key: string]: number } = {
  'C': 261.63,
  'C#': 277.18,
  'D': 293.66,
  'D#': 311.13,
  'E': 329.63,
  'F': 349.23,
  'F#': 369.99,
  'G': 392.00,
  'G#': 415.30,
  'A': 440.00,
  'A#': 466.16,
  'B': 493.88,
  'C2': 523.25,
  'C#2': 554.37,
  'D2': 587.33,
};

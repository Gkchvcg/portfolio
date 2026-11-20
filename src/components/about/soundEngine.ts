// Web Audio API Sound Engine with Real Audio Streaming & Synthesizer
// Handles real MP3 playback with live AnalyserNode FFT visualization + Piano Synthesizer + Sound Effects.

class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  public analyser: AnalyserNode | null = null;
  private isMuted: boolean = false;
  private isPlayingSong: boolean = false;
  private audioElement: HTMLAudioElement | null = null;
  private mediaSource: MediaElementAudioSourceNode | null = null;
  private currentSrc: string | null = null;

  public getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.8, this.ctx.currentTime);

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

  public initAudioElement(): HTMLAudioElement | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.preload = 'auto';
      this.audioElement.volume = this.isMuted ? 0 : 0.85;
      this.audioElement.muted = this.isMuted;
    }
    return this.audioElement;
  }

  public setMuted(muted: boolean): boolean {
    this.isMuted = muted;
    if (this.audioElement) {
      this.audioElement.muted = muted;
      this.audioElement.volume = muted ? 0 : 0.85;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 0.8, this.ctx.currentTime);
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
  // REAL AUDIO TRACK PLAYBACK (MP3 / M4A)
  // ----------------------------------------------------
  public async playTrack(src: string, onEnded?: () => void): Promise<boolean> {
    const audio = this.initAudioElement();
    if (!audio) return false;

    // Trigger subtle needle drop sound via Web Audio if available
    try {
      this.playNeedleDrop();
    } catch {
      // ignore
    }

    if (this.currentSrc !== src || !audio.src.endsWith(src)) {
      this.currentSrc = src;
      audio.src = src;
      audio.load();
    }

    if (onEnded) {
      audio.onended = onEnded;
    }

    try {
      audio.volume = this.isMuted ? 0 : 0.85;
      audio.muted = this.isMuted;
      await audio.play();
      this.isPlayingSong = true;
      return true;
    } catch (err) {
      console.warn('Audio play prevented or interrupted:', err);
      this.isPlayingSong = false;
      return false;
    }
  }

  public pauseTrack() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.isPlayingSong = false;
  }

  public resumeTrack(): Promise<boolean> {
    if (this.audioElement && this.currentSrc) {
      return this.playTrack(this.currentSrc);
    }
    return Promise.resolve(false);
  }

  public seekTrack(seconds: number) {
    if (this.audioElement) {
      this.audioElement.currentTime = seconds;
    }
  }

  public stopTrack() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    }
    this.isPlayingSong = false;
  }

  public getAudioElement(): HTMLAudioElement | null {
    return this.audioElement;
  }

  public getIsPlayingSong(): boolean {
    return this.isPlayingSong;
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
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.08);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.08);
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
    const notes = [659.25, 880, 1046.5];

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

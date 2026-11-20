'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Download,
  Send,
  CheckCircle2,
  Copy,
  Check,
  FileText,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ResumeModal } from './ResumeModal';
import { BatIcon } from './gotham/BatIcon';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Form states
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = 'Please provide your name.';
    if (!formState.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formState.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formState.message.trim()) errs.message = 'Please include a message.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    
    // Construct mailto link with encoded form parameters
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio] ${formState.subject}`
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-[#232A38] bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#D4A338] uppercase tracking-wider">
            <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
            <span>06 // BATCAVE SECURE TRANSMISSION TERMINAL • FREQUENCY 2027-MH</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-wider text-[#E2E8F0]">
            Encrypted Comms & Contact
          </h2>
          <p className="text-sm sm:text-base text-[#8B95A5] max-w-2xl leading-relaxed">
            Open to Software Development Engineer (SDE) opportunities, systems architecture discussions, and full-stack engineering collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-sm border border-[#232A38] bg-[#12161F] shadow-md hover:border-[#D4A338]/50 hover:shadow-[0_0_20px_rgba(212,163,56,0.12)] transition-all space-y-3 batcomputer-scanlines">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-sm bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#8B95A5]">
                      Direct Email Transmission
                    </h3>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-[#E2E8F0] hover:text-[#D4A338] transition-colors"
                      id="contact-email-link"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-sm text-[#8B95A5] hover:text-[#E2E8F0] hover:bg-[#232A38]/50 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#D4A338]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-[11px] text-[#D4A338] font-mono">
                  ✓ Email copied to clipboard
                </p>
              )}
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-sm border border-[#232A38] bg-[#12161F] shadow-md hover:border-[#D4A338]/50 transition-all batcomputer-scanlines">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-sm bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#8B95A5]">
                    Direct Phone Line
                  </h3>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm sm:text-base font-semibold text-[#E2E8F0] hover:text-[#D4A338] transition-colors"
                    id="contact-phone-link"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Download Direct Card */}
            <div className="p-6 rounded-sm border border-[#232A38] bg-[#12161F] shadow-md space-y-4 batcomputer-scanlines">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-sm bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold uppercase tracking-wider text-[#E2E8F0]">
                    WayneTech Verified Dossier (Resume)
                  </h3>
                  <p className="text-xs text-[#8B95A5]">
                    Updated PDF formatted for technical recruiters
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download={PERSONAL_INFO.resumeFilename}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#D4A338] hover:bg-[#E5B54A] text-black font-mono uppercase tracking-wider font-bold text-xs transition-all shadow-lg shadow-[#D4A338]/20"
                  id="contact-download-resume-btn"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  onClick={() => setResumeModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm border border-[#232A38] bg-[#0B0E14] text-[#E2E8F0] text-xs font-mono uppercase tracking-wider hover:border-[#D4A338]/40 transition-colors"
                >
                  <span>Preview</span>
                </button>
              </div>
            </div>

            {/* Verified Social Connects */}
            <div className="p-4 rounded-sm border border-[#232A38] bg-[#12161F] flex items-center justify-around font-mono text-xs">
              <a
                href="https://github.com/Gkchvcg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#8B95A5] hover:text-[#E2E8F0] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-[#232A38]">•</span>

              <a
                href="https://www.linkedin.com/in/maroof-husain-arima/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#8B95A5] hover:text-[#D4A338] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#D4A338]" />
                <span>LinkedIn</span>
              </a>

              <span className="text-[#232A38]">•</span>

              <a
                href="https://leetcode.com/u/MaroofHusain/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#8B95A5] hover:text-[#D4A338] transition-colors"
              >
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-sm border border-[#232A38] bg-[#12161F] shadow-2xl relative overflow-hidden batcomputer-scanlines">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#232A38] text-[10px] font-mono text-[#8B95A5]">
                <span className="text-[#D4A338] flex items-center gap-1.5 font-semibold">
                  <BatIcon className="w-3 h-auto text-[#D4A338]" />
                  ENCRYPTION: AES-256 GCM
                </span>
                <span>COMMS RELAY: WAYNE SATELLITE</span>
              </div>

              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#E2E8F0] mb-1">
                Send an Encrypted Message
              </h3>
              <p className="text-xs text-[#8B95A5] mb-6">
                Fill out the form below to dispatch an email transmission directly to {PERSONAL_INFO.email}.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-sm border border-[#D4A338]/40 bg-[#0B0E14] text-[#E2E8F0] flex items-start gap-3 text-xs leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#D4A338]" />
                  <div>
                    <span className="font-semibold text-[#D4A338]">Email Client Triggered!</span>
                    <p className="mt-0.5 text-[#8B95A5]">
                      Your default mail application has been opened with your pre-filled inquiry. You can also send directly to {PERSONAL_INFO.email}.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-[#8B95A5] uppercase">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-3.5 py-2.5 rounded-sm border text-sm bg-[#0B0E14] text-[#E2E8F0] placeholder-[#8B95A5] focus:outline-hidden focus:border-[#D4A338] ${
                        errors.name
                          ? 'border-rose-500'
                          : 'border-[#232A38]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-[#8B95A5] uppercase">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-sm border text-sm bg-[#0B0E14] text-[#E2E8F0] placeholder-[#8B95A5] focus:outline-hidden focus:border-[#D4A338] ${
                        errors.email
                          ? 'border-rose-500'
                          : 'border-[#232A38]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-[#8B95A5] uppercase">
                    Subject / Topic *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. SDE Opportunity / Technical Interview"
                    className={`w-full px-3.5 py-2.5 rounded-sm border text-sm bg-[#0B0E14] text-[#E2E8F0] placeholder-[#8B95A5] focus:outline-hidden focus:border-[#D4A338] ${
                      errors.subject
                        ? 'border-rose-500'
                        : 'border-[#232A38]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-500">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-[#8B95A5] uppercase">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hello Maroof, I reviewed your portfolio and would like to connect regarding..."
                    className={`w-full px-3.5 py-2.5 rounded-sm border text-sm bg-[#0B0E14] text-[#E2E8F0] placeholder-[#8B95A5] focus:outline-hidden focus:border-[#D4A338] ${
                      errors.message
                        ? 'border-rose-500'
                        : 'border-[#232A38]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#D4A338] hover:bg-[#E5B54A] text-black text-xs sm:text-sm font-mono uppercase tracking-wider font-bold transition-all shadow-lg shadow-[#D4A338]/20"
                  id="contact-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </section>
  );
}

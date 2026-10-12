'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Download,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  FileText,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './icons/BrandIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ResumeModal } from './ResumeModal';

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
    <section id="contact" className="py-20 lg:py-28 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <span>06 // INQUIRIES & COLLABORATION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Open to Software Development Engineer (SDE) opportunities, technical discussions, and full-stack engineering collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Direct Email
                    </h3>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      id="contact-email-link"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">
                  ✓ Email copied to clipboard
                </p>
              )}
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/60">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Phone Contact
                  </h3>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    id="contact-phone-link"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Download Direct Card */}
            <div className="p-6 rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/30 dark:from-indigo-950/30 dark:via-zinc-900 dark:to-violet-950/20 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-600 text-white">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                    Download Verified Resume
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Updated PDF formatted for technical recruiters
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download={PERSONAL_INFO.resumeFilename}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors shadow-xs"
                  id="contact-download-resume-btn"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  onClick={() => setResumeModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
                >
                  <span>Preview</span>
                </button>
              </div>
            </div>

            {/* Verified Social Connects */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 flex items-center justify-around">
              <a
                href="https://github.com/Gkchvcg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-zinc-300 dark:text-zinc-700">•</span>

              <a
                href="https://www.linkedin.com/in/maroof-husain-arima/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-500" />
                <span>LinkedIn</span>
              </a>

              <span className="text-zinc-300 dark:text-zinc-700">•</span>

              <a
                href="https://leetcode.com/u/MaroofHusain/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-500 transition-colors"
              >
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                Fill out the form below to initiate an email directly to {PERSONAL_INFO.email}.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 flex items-start gap-3 text-xs leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Email Client Triggered!</span>
                    <p className="mt-0.5">
                      Your default mail application has been opened with your pre-filled inquiry. You can also send directly to {PERSONAL_INFO.email}.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                        errors.name
                          ? 'border-rose-500'
                          : 'border-zinc-200 dark:border-zinc-800'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                        errors.email
                          ? 'border-rose-500'
                          : 'border-zinc-200 dark:border-zinc-800'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                    Subject / Topic *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. SDE Opportunity / Technical Interview"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                      errors.subject
                        ? 'border-rose-500'
                        : 'border-zinc-200 dark:border-zinc-800'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-500">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hello Maroof, I reviewed your portfolio and would like to connect regarding..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                      errors.message
                        ? 'border-rose-500'
                        : 'border-zinc-200 dark:border-zinc-800'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
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

'use client';

import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[88vh] flex flex-col bg-[#090b12] border border-zinc-800 rounded-2xl shadow-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden tactical-bracket"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#07090e]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-dialog-title" className="text-base font-semibold text-white">
                {PERSONAL_INFO.name} — Curriculum Vitae
              </h2>
              <p className="text-xs text-zinc-400">
                Verified B.Tech Computer Science & Engineering Resume (2023–2027)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download={PERSONAL_INFO.resumeFilename}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)]"
              id="resume-modal-download-btn"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF viewer frame */}
        <div className="flex-1 bg-zinc-950 w-full h-full relative overflow-hidden">
          <iframe
            src={`${PERSONAL_INFO.resumePath}#toolbar=1&navpanes=0`}
            className="w-full h-full border-none"
            title="Maroof Husain Resume PDF Viewer"
          />
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-zinc-800 bg-[#07090e] flex items-center justify-between text-xs text-zinc-400">
          <span>Format: Standard Verified PDF (719 KB)</span>
          <a
            href={PERSONAL_INFO.resumePath}
            download={PERSONAL_INFO.resumeFilename}
            className="text-sky-400 hover:text-sky-300 font-medium underline underline-offset-4"
          >
            Direct download link
          </a>
        </div>
      </div>
    </div>
  );
}

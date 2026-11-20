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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050608]/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[88vh] flex flex-col bg-[#12161F] border border-[#232A38] rounded-sm shadow-2xl overflow-hidden batcomputer-scanlines"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#232A38] bg-[#0B0E14]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-sm bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-dialog-title" className="font-display text-base font-bold uppercase tracking-wider text-[#E2E8F0]">
                {PERSONAL_INFO.name} — Curriculum Vitae
              </h2>
              <p className="text-xs text-[#8B95A5]">
                Verified B.Tech Computer Science & Engineering Resume (2023–2027)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download={PERSONAL_INFO.resumeFilename}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider font-bold rounded-sm bg-[#D4A338] hover:bg-[#E5B54A] text-black transition-all shadow-md shadow-[#D4A338]/20"
              id="resume-modal-download-btn"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm bg-[#0B0E14] hover:bg-[#1E2430] border border-[#232A38] text-[#E2E8F0] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-sm text-[#8B95A5] hover:text-[#E2E8F0] hover:bg-[#232A38]/50 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF viewer frame */}
        <div className="flex-1 bg-[#050608] w-full h-full relative overflow-hidden">
          <iframe
            src={`${PERSONAL_INFO.resumePath}#toolbar=1&navpanes=0`}
            className="w-full h-full border-none"
            title="Maroof Husain Resume PDF Viewer"
          />
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-[#232A38] bg-[#0B0E14] flex items-center justify-between text-xs text-[#8B95A5] font-mono">
          <span>Format: Standard Verified PDF (787 KB)</span>
          <a
            href={PERSONAL_INFO.resumePath}
            download={PERSONAL_INFO.resumeFilename}
            className="text-[#D4A338] hover:underline font-medium"
          >
            Direct download link
          </a>
        </div>
      </div>
    </div>
  );
}

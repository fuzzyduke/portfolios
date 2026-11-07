import React, { useEffect, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { getWhatsAppLink, getWhatsAppMessage } from '../utils/whatsapp';
import type { EnquiryContext } from '../utils/whatsapp';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: EnquiryContext;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, context }) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    // Focus close button for accessibility
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const messageText = getWhatsAppMessage(context);
  const waUrl = getWhatsAppLink(context);

  return (
    <div
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#27202eb3] backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialogTitle"
        aria-describedby="dialogDesc"
        className="w-full max-w-[490px] bg-[#fffefa] rounded-3xl p-7 sm:p-9 shadow-2xl relative border border-luma-lavender-200"
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f0e9f0] hover:bg-[#e4d8e4] text-luma-lavender-800 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-500"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-luma-lavender-100/80 text-luma-lavender-700 flex items-center justify-center mb-4 border border-luma-lavender-200">
          <Sparkles className="w-6 h-6 text-luma-gold-500" />
        </div>

        <div className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-luma-lavender-700 mb-1">
          Prototype Interaction
        </div>

        <h2 id="dialogTitle" className="font-serif text-2xl sm:text-3xl font-normal text-luma-lavender-950 mb-3">
          A real conversation, soon.
        </h2>

        <p id="dialogDesc" className="text-sm text-luma-lavender-800 leading-relaxed font-sans mb-6">
          This is a design preview for {CONTACT_CONFIG.practitionerName}'s updated website. Official contact details, session options, and booking availability are currently being confirmed, so this button does not send a live inquiry or make a reservation.
        </p>

        <div className="mb-6 p-4 bg-[#fbf9f6] border border-luma-lavender-200/80 rounded-2xl text-xs sm:text-sm text-luma-lavender-900 leading-relaxed italic">
          <span className="block not-italic font-semibold text-[10px] uppercase tracking-wider text-luma-lavender-600 mb-1">
            Prepared contextual message:
          </span>
          "{messageText}"
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center bg-luma-lavender-700 hover:bg-luma-lavender-800 text-white font-semibold text-sm py-3 px-6 rounded-full shadow-sm hover:shadow transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-500"
          >
            Understood
          </button>

          {/* Test Link for Reviewers */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-xs text-luma-lavender-600 hover:text-luma-lavender-900 underline py-2 px-3 text-center"
          >
            Preview Deep Link
          </a>
        </div>
      </div>
    </div>
  );
};

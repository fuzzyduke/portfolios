import React, { useEffect, useRef, useState } from 'react';
import { X, Sparkles, AlertCircle, Copy, Check } from 'lucide-react';
import { getWhatsAppMessage, type EnquiryContext } from '../utils/whatsapp';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: EnquiryContext;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, context }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Capture the previously focused element to restore on close
    const previouslyFocusedElement = document.activeElement as HTMLElement | null;

    // Save previous body styles
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    // Set aria-hidden on other root sibling elements for accessibility
    const rootContainer = document.getElementById('root');
    const prevAriaHidden = rootContainer?.getAttribute('aria-hidden');

    // Focus close button initially
    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    // Keyboard handling: Escape to close and Tab focus containment (trap)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      if (prevAriaHidden) {
        rootContainer?.setAttribute('aria-hidden', prevAriaHidden);
      } else {
        rootContainer?.removeAttribute('aria-hidden');
      }

      // Restore focus to initiating element
      if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === 'function') {
        previouslyFocusedElement.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const messageText = getWhatsAppMessage(context);

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#27202eb3] backdrop-blur-xs overflow-y-auto"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialogTitle"
        aria-describedby="dialogDesc"
        className="w-full max-w-[490px] my-auto bg-[#fffefa] rounded-3xl p-6 sm:p-9 shadow-2xl relative border border-luma-lavender-300 max-h-[90vh] flex flex-col justify-between overflow-y-auto"
      >
        <div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f0e9f0] hover:bg-[#e4d8e4] text-luma-lavender-900 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-luma-lavender-100 text-luma-lavender-800 flex items-center justify-center mb-4 border border-luma-lavender-300">
            <Sparkles className="w-6 h-6 text-luma-gold-600" />
          </div>

          <div className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-luma-lavender-800 mb-1">
            Design Preview Notice
          </div>

          <h2 id="dialogTitle" className="font-serif text-2xl sm:text-3xl font-normal text-luma-lavender-950 mb-3">
            A real conversation, soon.
          </h2>

          <p id="dialogDesc" className="text-sm text-luma-lavender-900 leading-relaxed font-sans mb-5">
            This is an isolated design preview. Reshma's verified contact details, session options, and booking availability are currently being confirmed with her.
          </p>

          {/* Safe Demo Notice Banner (C1 Compliance: Zero external navigation) */}
          <div className="flex items-start gap-2.5 p-3.5 bg-amber-50/90 border border-amber-200/90 rounded-2xl mb-5 text-xs text-amber-950 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block text-amber-900 mb-0.5">Demo Boundary Active</strong>
              Outbound messaging is disabled in this prototype. No live WhatsApp chat or external requests are triggered.
            </div>
          </div>

          {/* Contextual Inactive Message Display */}
          <div className="mb-6 p-4 bg-[#f8f6f1] border border-luma-lavender-300/80 rounded-2xl text-xs sm:text-sm text-luma-lavender-950 leading-relaxed">
            <span className="block font-semibold text-[11px] uppercase tracking-wider text-luma-lavender-800 mb-1">
              Contextual sample message:
            </span>
            <div className="italic font-serif text-luma-lavender-900">
              "{messageText}"
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-luma-lavender-200/60">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center bg-luma-lavender-800 hover:bg-luma-lavender-900 text-white font-semibold text-sm py-3 px-6 rounded-full shadow-sm hover:shadow transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-700"
          >
            Understood
          </button>

          <button
            type="button"
            onClick={handleCopyMessage}
            className="inline-flex items-center justify-center gap-2 border border-luma-lavender-300 hover:bg-luma-cream-100 text-luma-lavender-800 font-medium text-xs sm:text-sm py-3 px-5 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-700"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-700" />
                <span className="text-emerald-800 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-luma-lavender-700" />
                <span>Copy sample text</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

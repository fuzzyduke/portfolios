import React, { useState } from 'react';
import { Check, Copy, ExternalLink, X, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { getWhatsAppLink, getWhatsAppMessage } from '../utils/whatsapp';
import type { EnquiryContext } from '../utils/whatsapp';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: EnquiryContext;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, context }) => {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;

  const messageText = getWhatsAppMessage(context);
  const waUrl = getWhatsAppLink(context);

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luma-lavender-900/40 backdrop-blur-sm">
      <div className="bg-luma-cream-50 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-luma-lavender-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-luma-lavender-600 hover:text-luma-lavender-900 rounded-full hover:bg-luma-lavender-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-luma-lavender-100 text-luma-lavender-700 flex items-center justify-center mb-4 border border-luma-lavender-200 shadow-xs">
          <Sparkles className="w-6 h-6 text-luma-gold-500" />
        </div>

        <h3 className="font-serif text-2xl font-semibold text-luma-lavender-900 mb-1">
          Connect with {CONTACT_CONFIG.practitionerName}
        </h3>
        <p className="text-xs text-luma-lavender-700 bg-luma-lavender-100/70 px-3 py-1 rounded-full mb-5 inline-block font-medium border border-luma-lavender-200">
          Prototype Mode: Direct WhatsApp link prepared
        </p>

        <div className="mb-6">
          <label className="text-xs font-semibold text-luma-lavender-700 uppercase tracking-wider block mb-2">
            Contextual Inquiry Message:
          </label>
          <div className="p-4 bg-white border border-luma-lavender-200 rounded-2xl text-luma-lavender-900 text-sm font-medium leading-relaxed italic shadow-2xs">
            "{messageText}"
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full bg-luma-lavender-700 hover:bg-luma-lavender-800 text-white font-semibold text-sm py-3.5 px-5 rounded-2xl shadow-sm transition-all"
          >
            <span>Open WhatsApp</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 w-full bg-white hover:bg-luma-cream-100 text-luma-lavender-800 font-semibold text-sm py-3 px-5 rounded-2xl border border-luma-lavender-200 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Message Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-luma-lavender-500" />
                <span>Copy Message Text</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export const useWhatsAppAction = () => {
  const [modalContext, setModalContext] = useState<EnquiryContext | null>(null);

  const triggerWhatsApp = (context: EnquiryContext = 'general') => {
    if (CONTACT_CONFIG.isDemoNumber) {
      setModalContext(context);
    } else {
      window.open(getWhatsAppLink(context), '_blank');
    }
  };

  const closeModal = () => setModalContext(null);

  return {
    triggerWhatsApp,
    modalContext,
    closeModal,
  };
};

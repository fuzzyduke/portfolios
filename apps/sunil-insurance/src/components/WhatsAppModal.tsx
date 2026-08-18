import React, { useState } from 'react';
import { MessageSquare, Check, Copy, ExternalLink, X } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-xl bg-whatsapp-500 text-white flex items-center justify-center mb-4 shadow-sm">
          <MessageSquare className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-1">
          WhatsApp Contact Demo
        </h3>
        <p className="text-xs text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md mb-4 inline-block font-medium border border-amber-200">
          Prototype Mode: Sunil's phone number awaiting confirmation
        </p>

        <div className="mb-4">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
            Generated WhatsApp Message:
          </label>
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium leading-relaxed italic">
            "{messageText}"
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-bold text-sm py-3 px-4 rounded-xl shadow transition-colors"
          >
            <span>Open WhatsApp Web / App</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Message Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-500" />
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

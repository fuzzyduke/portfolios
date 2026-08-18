import React from 'react';
import { MessageCircle } from 'lucide-react';
import type { EnquiryContext } from '../utils/whatsapp';

interface StickyMobileCTAProps {
  onConnect: (ctx: EnquiryContext) => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onConnect }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-luma-cream-50/95 backdrop-blur-md border-t border-luma-lavender-200/60 shadow-lg sm:hidden">
      <button
        onClick={() => onConnect('general')}
        className="flex items-center justify-center gap-2.5 w-full bg-luma-lavender-800 hover:bg-luma-lavender-900 text-white font-semibold text-sm py-3 px-4 rounded-full shadow transition-all active:scale-98 cursor-pointer"
      >
        <MessageCircle className="w-4 h-4 text-luma-gold-400" />
        <span>Talk to Reshma</span>
      </button>
    </div>
  );
};

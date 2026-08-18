import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur border-t border-slate-200 shadow-lg sm:hidden">
      <a
        href={getWhatsAppLink('general')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-bold text-sm py-3 px-4 rounded-xl shadow transition-colors active:scale-98"
      >
        <MessageSquare className="w-5 h-5" />
        <span>Chat with Sunil on WhatsApp</span>
      </a>
    </div>
  );
};

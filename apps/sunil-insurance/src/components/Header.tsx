import { MessageSquare, Shield } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { getWhatsAppLink } from '../utils/whatsapp';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-brand-700 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-brand-800 transition-colors">
            S
          </div>
          <div>
            <div className="font-bold text-slate-900 leading-tight flex items-center gap-1.5">
              <span>{CONTACT_CONFIG.advisorName} Insurance</span>
              <span className="text-[10px] uppercase font-semibold bg-brand-50 text-brand-700 px-1.5 py-0.5 rounded border border-brand-100">
                Advisor
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Independent Guidance</p>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Shield className="w-4 h-4 text-brand-600" />
            <span>Categories</span>
          </a>
          <a
            href={getWhatsAppLink('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp-500 hover:bg-whatsapp-600 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-sm transition-all hover:shadow transform active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Talk to Sunil</span>
          </a>
        </div>
      </div>
    </header>
  );
};

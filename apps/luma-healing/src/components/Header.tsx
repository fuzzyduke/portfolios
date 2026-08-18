import { MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import type { EnquiryContext } from '../utils/whatsapp';

interface HeaderProps {
  onConnect: (ctx?: EnquiryContext) => void;
}

export const Header: React.FC<HeaderProps> = ({ onConnect }) => {
  return (
    <header className="sticky top-0 z-40 bg-luma-cream-100/90 backdrop-blur-md border-b border-luma-lavender-200/50">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-luma-lavender-300 via-luma-sage-300 to-luma-gold-300 p-0.5 shadow-2xs group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-luma-cream-50 flex items-center justify-center text-luma-lavender-800 font-serif font-semibold text-lg">
              ✨
            </div>
          </div>
          <div>
            <span className="font-serif text-xl font-semibold text-luma-lavender-900 tracking-wide block leading-tight">
              {CONTACT_CONFIG.brandName}
            </span>
            <span className="text-[11px] font-sans text-luma-sage-700 tracking-wider uppercase block font-medium">
              Reiki & Restorative Practice
            </span>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-luma-lavender-800">
            <a href="#about" className="hover:text-luma-lavender-900 transition-colors">What is Luma?</a>
            <a href="#services" className="hover:text-luma-lavender-900 transition-colors">Services</a>
            <a href="#journey" className="hover:text-luma-lavender-900 transition-colors">Experience</a>
            <a href="#reshma" className="hover:text-luma-lavender-900 transition-colors">About Reshma</a>
          </nav>

          <button
            onClick={() => onConnect('general')}
            className="inline-flex items-center gap-2 bg-luma-lavender-800 hover:bg-luma-lavender-900 text-luma-cream-50 text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xs transition-all hover:shadow-xs transform active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-luma-gold-400" />
            <span>Talk to Reshma</span>
          </button>
        </div>
      </div>
    </header>
  );
};

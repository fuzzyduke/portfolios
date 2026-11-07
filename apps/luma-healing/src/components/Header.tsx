import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import type { EnquiryContext } from '../utils/whatsapp';

interface HeaderProps {
  onConnect: (ctx?: EnquiryContext) => void;
}

export const Header: React.FC<HeaderProps> = ({ onConnect }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#f8f6f1]/90 backdrop-blur-md border-b border-[#e9e3e6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo / Brand Mark */}
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-500 rounded-lg">
          <div className="relative w-11 h-11 rounded-full border border-luma-lavender-400/80 flex items-center justify-center text-luma-gold-500 bg-luma-cream-50 shadow-2xs group-hover:scale-105 transition-transform">
            <span className="text-xl leading-none">✦</span>
            <div className="absolute inset-1 rounded-full border-2 border-luma-sage-400/30 border-t-luma-lavender-400 border-l-luma-lavender-400 rotate-12 pointer-events-none" />
          </div>
          <div>
            <strong className="font-serif text-xl sm:text-2xl font-normal text-luma-lavender-900 leading-tight block">
              {CONTACT_CONFIG.brandName}
            </strong>
            <small className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-sans text-luma-lavender-600 block font-semibold">
              Reiki & Inner Journey
            </small>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-luma-lavender-800 tracking-wide">
          <a href="#explore" className="hover:text-luma-lavender-950 transition-colors py-1">Self-Reflection</a>
          <a href="#about" className="hover:text-luma-lavender-950 transition-colors py-1">Meet Reshma</a>
          <a href="#sessions" className="hover:text-luma-lavender-950 transition-colors py-1">Sessions</a>
          <a href="#reflections" className="hover:text-luma-lavender-950 transition-colors py-1">Reflections</a>
          <button
            onClick={() => onConnect('general')}
            className="inline-flex items-center justify-center gap-2 bg-luma-lavender-700 hover:bg-luma-lavender-800 text-white font-medium text-xs px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all transform active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-500 focus-visible:ring-offset-2"
          >
            <span>Talk to Reshma</span>
            <span aria-hidden="true" className="text-sm">↗</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden p-2 rounded-full text-luma-lavender-800 hover:bg-luma-lavender-100/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-500"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e9e3e6] bg-[#f8f6f1] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-semibold text-luma-lavender-800">
            <a href="#explore" onClick={closeMenu} className="py-2 hover:text-luma-lavender-950 transition-colors border-b border-luma-lavender-100">
              Self-Reflection
            </a>
            <a href="#about" onClick={closeMenu} className="py-2 hover:text-luma-lavender-950 transition-colors border-b border-luma-lavender-100">
              Meet Reshma
            </a>
            <a href="#sessions" onClick={closeMenu} className="py-2 hover:text-luma-lavender-950 transition-colors border-b border-luma-lavender-100">
              Sessions
            </a>
            <a href="#reflections" onClick={closeMenu} className="py-2 hover:text-luma-lavender-950 transition-colors border-b border-luma-lavender-100">
              Reflections
            </a>
            <button
              onClick={() => {
                closeMenu();
                onConnect('general');
              }}
              className="mt-3 flex items-center justify-center gap-2 w-full bg-luma-lavender-700 hover:bg-luma-lavender-800 text-white font-medium text-sm py-3 px-5 rounded-full shadow-sm"
            >
              <span>Talk to Reshma</span>
              <span aria-hidden="true">↗</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

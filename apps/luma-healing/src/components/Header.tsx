import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import type { EnquiryContext } from '../utils/whatsapp';

interface HeaderProps {
  onConnect: (ctx?: EnquiryContext) => void;
}

export const Header: React.FC<HeaderProps> = ({ onConnect }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  // Close mobile drawer on Escape and return focus to menu toggle button
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#f8f6f1]/95 backdrop-blur-md border-b border-[#e9e3e6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 lg:gap-4">
        {/* Logo / Brand Mark */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-700 rounded-lg p-0.5 shrink-0"
        >
          <div className="relative w-9 sm:w-11 h-9 sm:h-11 rounded-full border border-luma-lavender-400 flex items-center justify-center text-luma-gold-600 bg-luma-cream-50 shadow-2xs group-hover:scale-105 transition-transform shrink-0">
            <span className="text-lg sm:text-xl leading-none">✦</span>
            <div className="absolute inset-1 rounded-full border-2 border-luma-sage-400/40 border-t-luma-lavender-500 border-l-luma-lavender-500 rotate-12 pointer-events-none" />
          </div>
          <div className="min-w-0">
            <strong className="font-serif text-lg sm:text-2xl font-normal text-luma-lavender-950 leading-tight block truncate">
              {CONTACT_CONFIG.brandName}
            </strong>
            <small className="text-[9px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.2em] uppercase font-sans text-luma-lavender-800 block font-bold whitespace-nowrap">
              Reiki & Inner Journey
            </small>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-4 xl:gap-7 text-xs font-semibold text-luma-lavender-900 tracking-wide shrink-0"
        >
          <a href="#explore" className="hover:text-luma-lavender-950 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-700 rounded">
            Self-Reflection
          </a>
          <a href="#about" className="hover:text-luma-lavender-950 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-700 rounded">
            Meet Reshma
          </a>
          <a href="#sessions" className="hover:text-luma-lavender-950 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-700 rounded">
            Sessions
          </a>
          <a href="#reflections" className="hover:text-luma-lavender-950 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-700 rounded">
            Reflections
          </a>
          <button
            type="button"
            onClick={() => onConnect('general')}
            className="inline-flex items-center justify-center gap-2 bg-luma-lavender-800 hover:bg-luma-lavender-900 text-white font-medium text-xs px-4 xl:px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all transform active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-700 focus-visible:ring-offset-2 shrink-0"
          >
            <span>Talk to Reshma</span>
            <span aria-hidden="true" className="text-sm">↗</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          id="mobile-menu-toggle"
          type="button"
          onClick={toggleMenu}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          className="lg:hidden p-2.5 rounded-full text-luma-lavender-900 hover:bg-luma-lavender-200/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-700 cursor-pointer shrink-0"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-[#e9e3e6] bg-[#f8f6f1] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav aria-label="Mobile primary navigation" className="flex flex-col gap-4 text-sm font-semibold text-luma-lavender-900">
            <a
              href="#explore"
              onClick={closeMenu}
              className="py-2.5 hover:text-luma-lavender-950 transition-colors border-b border-luma-lavender-200"
            >
              Self-Reflection
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="py-2.5 hover:text-luma-lavender-950 transition-colors border-b border-luma-lavender-200"
            >
              Meet Reshma
            </a>
            <a
              href="#sessions"
              onClick={closeMenu}
              className="py-2.5 hover:text-luma-lavender-950 transition-colors border-b border-luma-lavender-200"
            >
              Sessions
            </a>
            <a
              href="#reflections"
              onClick={closeMenu}
              className="py-2.5 hover:text-luma-lavender-950 transition-colors border-b border-luma-lavender-200"
            >
              Reflections
            </a>
            <button
              type="button"
              onClick={() => {
                onConnect('general');
                closeMenu();
              }}
              className="mt-3 flex items-center justify-center gap-2 w-full bg-luma-lavender-800 hover:bg-luma-lavender-900 text-white font-medium text-sm py-3 px-5 rounded-full shadow-sm cursor-pointer"
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

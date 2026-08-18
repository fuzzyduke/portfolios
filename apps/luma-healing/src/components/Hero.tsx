import React from 'react';
import { Sparkles, Heart, ArrowDown, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import type { EnquiryContext } from '../utils/whatsapp';

interface HeroProps {
  onConnect: (ctx?: EnquiryContext) => void;
}

export const Hero: React.FC<HeroProps> = ({ onConnect }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 bg-luma-cream-100 overflow-hidden">
      {/* Signature Visual: Soft Eclipse & Prism Light Portal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] md:w-[700px] h-[350px] sm:h-[550px] md:h-[700px] pointer-events-none z-0">
        {/* Layered blurred glowing circles (Eclipse Glow motif) */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-luma-lavender-300/40 via-luma-sage-300/30 to-luma-gold-300/40 blur-3xl animate-pulse-slow" />
        <div className="absolute inset-12 sm:inset-20 rounded-full bg-gradient-to-br from-luma-gold-400/20 via-luma-cream-50 to-luma-lavender-400/30 blur-2xl animate-float" />
        <div className="absolute inset-28 sm:inset-36 rounded-full border border-luma-gold-400/30 shadow-[0_0_50px_rgba(217,183,122,0.3)] animate-glow-spin" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-luma-lavender-200/80 text-luma-lavender-900 text-xs font-medium px-4 py-1.5 rounded-full mb-8 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-luma-gold-500" />
          <span>{CONTACT_CONFIG.brandName}</span>
        </div>

        {/* Primary Line */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-luma-lavender-900 leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
          A gentle space for <span className="italic font-normal text-luma-lavender-700">Reiki</span>, energy healing and restorative wellbeing.
        </h1>

        {/* Secondary Supporting Line */}
        <p className="text-base sm:text-lg text-luma-sage-700 font-medium uppercase tracking-widest mb-8">
          {CONTACT_CONFIG.subTagline}
        </p>

        {/* Narrative Intro */}
        <p className="text-sm sm:text-base text-luma-lavender-800 font-normal leading-relaxed max-w-xl mx-auto mb-10">
          Pause the rush. Step into an inviting, quiet sanctuary designed to ground your thoughts, harmonize your personal energy, and create space for deep reflection.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-luma-lavender-800 hover:bg-luma-lavender-900 text-luma-cream-50 text-sm font-semibold px-8 py-4 rounded-full shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Sessions</span>
            <ArrowDown className="w-4 h-4 text-luma-gold-400" />
          </a>

          <button
            onClick={() => onConnect('general')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-luma-cream-50 text-luma-lavender-900 border border-luma-lavender-300/80 text-sm font-semibold px-8 py-4 rounded-full shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-whatsapp-500" />
            <span>Talk to Reshma</span>
          </button>
        </div>

        {/* Subtle Decorative Element */}
        <div className="mt-16 pt-8 flex items-center justify-center gap-4 text-luma-lavender-500/60 text-xs">
          <span className="w-12 h-px bg-luma-lavender-300/40" />
          <Heart className="w-3.5 h-3.5 text-luma-gold-400 fill-luma-gold-400/20" />
          <span className="w-12 h-px bg-luma-lavender-300/40" />
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import type { EnquiryContext } from '../utils/whatsapp';

interface HeroProps {
  onTalkToSunil: (ctx?: EnquiryContext) => void;
}

export const Hero: React.FC<HeroProps> = ({ onTalkToSunil }) => {
  return (
    <section className="relative pt-8 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-brand-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-800/80 border border-brand-600/40 text-brand-100 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Personal Insurance Advisor</span>
          </div>

          {/* Primary Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            {CONTACT_CONFIG.tagline}
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-brand-100 font-semibold mb-3">
            {CONTACT_CONFIG.subTagline}
          </p>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl mx-auto">
            Sunil helps customers understand their requirements, explore appropriate insurance options and find suitable coverage without unnecessary complexity.
          </p>

          {/* Positioning Quote */}
          <blockquote className="my-6 p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm sm:text-base italic max-w-xl mx-auto">
            "Insurance shouldn't begin with a policy. It should begin with understanding what you actually need."
          </blockquote>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8">
            <button
              onClick={() => onTalkToSunil('general')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-whatsapp-500 hover:bg-whatsapp-600 text-white text-base font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Talk to Sunil</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#categories"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 text-base font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              <span>Explore Insurance</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-12 pt-8 border-t border-slate-800/80 text-left text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Personal Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Clear Options</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Renewal Support</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

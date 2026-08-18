import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { EnquiryContext } from '../utils/whatsapp';

interface WhoIsThisForProps {
  onAction: (ctx: EnquiryContext) => void;
}

export const WhoIsThisFor: React.FC<WhoIsThisForProps> = ({ onAction }) => {
  const cues = [
    "You feel mentally or emotionally overloaded by daily demands",
    "You want dedicated time to slow down, rest, and reconnect with yourself",
    "You are curious about Reiki or energy practices in a calm setting",
    "You prefer quiet, respectful one-to-one wellbeing experiences",
    "You want a reflective space alongside your existing self-care routine",
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-luma-cream-50 via-white to-luma-lavender-50/50 rounded-3xl p-8 sm:p-12 border border-luma-lavender-200/60 shadow-xs relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-luma-gold-300/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-luma-sage-700 block mb-2">
              Gentle Guidance
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-luma-lavender-900">
              Who Is This For?
            </h2>
            <p className="text-sm text-luma-lavender-800 mt-2">
              Luma Healing Space is designed for anyone seeking quiet sanctuary and intentional pause.
            </p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto mb-10">
            {cues.map((cue, idx) => (
              <div key={idx} className="flex items-start gap-3.5 bg-white/80 p-4 rounded-2xl border border-luma-lavender-100/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-luma-gold-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-luma-lavender-900 leading-snug">
                  {cue}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onAction('find_session')}
              className="inline-flex items-center gap-2 bg-luma-lavender-800 hover:bg-luma-lavender-900 text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <span>Find Your Session</span>
              <ArrowRight className="w-4 h-4 text-luma-gold-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

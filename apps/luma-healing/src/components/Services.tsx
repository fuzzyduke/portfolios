import React from 'react';
import type { EnquiryContext } from '../utils/whatsapp';

interface ServicesProps {
  onSelectService: (ctx: EnquiryContext) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="sessions"
      aria-label="Explore Modalities"
      className="py-20 sm:py-28 bg-[#f8f6f1] border-b border-[#e9e3e6]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.24em] text-luma-lavender-800 block mb-3">
            Exploratory Modalities
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-luma-lavender-950 tracking-tight leading-tight mb-4">
            Space for your own discovery.
          </h2>

          <p className="text-sm sm:text-base text-luma-lavender-900 leading-relaxed font-sans">
            Different people arrive with different questions. These practices are referenced in Reshma's public Instagram profile; session availability, formats, duration, and pricing are pending confirmation.
          </p>
        </div>

        {/* Publicly Mentioned Modalities Grid (C4: Not asserted as confirmed bookable services) */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Reiki Card */}
          <article className="relative overflow-hidden rounded-3xl bg-[#fffefa] border border-[#ece6e8] p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            {/* Ambient Background Aura */}
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[radial-gradient(circle,#e0d4e7,transparent_70%)] pointer-events-none"
            />

            <div>
              <div className="flex items-center justify-between gap-2 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-luma-lavender-900 bg-luma-lavender-100 px-3 py-1 rounded-full border border-luma-lavender-300">
                  Publicly Mentioned · Details to Verify
                </span>
                <span className="text-[11px] text-luma-sage-700 font-semibold">
                  Complementary Practice
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-luma-lavender-950 mb-3">
                Reiki
              </h3>

              <p className="text-sm text-luma-lavender-900 leading-relaxed font-sans mb-6">
                A gentle, non-invasive complementary practice centered on quiet relaxation, personal reflection, and peaceful stillness. Learn what Reshma's specific approach involves before deciding whether a session feels appropriate for you.
              </p>

              <div className="text-xs text-luma-lavender-800 bg-luma-cream-50 p-3.5 rounded-xl border border-luma-lavender-200 mb-8 space-y-1">
                <div><strong className="text-luma-lavender-950">Session format:</strong> Format to be verified (e.g. in-person or distance)</div>
                <div><strong className="text-luma-lavender-950">Duration & Pricing:</strong> Will be listed once confirmed by Reshma</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectService('reiki')}
              className="inline-flex items-center gap-2 self-start text-xs sm:text-sm font-bold text-luma-lavender-800 hover:text-luma-lavender-950 border-b border-luma-lavender-500 pb-1 hover:border-luma-lavender-800 transition-all cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-700"
            >
              <span>Ask about Reiki</span>
              <span aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </button>
          </article>

          {/* Akashic Records Card */}
          <article className="relative overflow-hidden rounded-3xl bg-[#fffefa] border border-[#ece6e8] p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            {/* Ambient Background Aura */}
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[radial-gradient(circle,#d8e4d5,transparent_70%)] pointer-events-none"
            />

            <div>
              <div className="flex items-center justify-between gap-2 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-luma-lavender-900 bg-luma-lavender-100 px-3 py-1 rounded-full border border-luma-lavender-300">
                  Publicly Mentioned · Details to Verify
                </span>
                <span className="text-[11px] text-luma-sage-700 font-semibold">
                  Spiritual Tradition
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-luma-lavender-950 mb-3">
                Akashic Records
              </h3>

              <p className="text-sm text-luma-lavender-900 leading-relaxed font-sans mb-6">
                An exploration framed within a spiritual tradition, providing an introspective, reflective lens on personal questions, recurring patterns, and life themes. Reshma's specific process, boundaries, and reading guidelines will be published following her review.
              </p>

              <div className="text-xs text-luma-lavender-800 bg-luma-cream-50 p-3.5 rounded-xl border border-luma-lavender-200 mb-8 space-y-1">
                <div><strong className="text-luma-lavender-950">Format:</strong> Guided consultation (to be confirmed)</div>
                <div><strong className="text-luma-lavender-950">Duration & Pricing:</strong> Will be listed once confirmed by Reshma</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectService('akashic')}
              className="inline-flex items-center gap-2 self-start text-xs sm:text-sm font-bold text-luma-lavender-800 hover:text-luma-lavender-950 border-b border-luma-lavender-500 pb-1 hover:border-luma-lavender-800 transition-all cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-700"
            >
              <span>Ask about readings</span>
              <span aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

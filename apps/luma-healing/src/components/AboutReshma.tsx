import React from 'react';
import { CONTACT_CONFIG } from '../config/contact';

export const AboutReshma: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="Meet Reshma"
      className="py-20 sm:py-28 bg-[#fffefa] border-b border-[#e9e3e6]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Explicit Portrait Placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-[#e9e3ea] rounded-t-[200px] sm:rounded-t-[220px] rounded-b-3xl p-4 sm:p-5 relative shadow-sm">
              <div
                role="img"
                aria-label="Placeholder for approved Reshma portrait"
                className="h-[380px] sm:h-[460px] rounded-t-[185px] sm:rounded-t-[205px] rounded-b-2xl border-2 border-dashed border-[#beaeca] bg-gradient-to-br from-[#faf6f3] to-[#e8e9e2] flex flex-col items-center justify-center p-6 text-center text-[#766779]"
              >
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 stroke-[#a894b0] stroke-1 fill-none mb-4 opacity-75"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="31" r="18" />
                  <path d="M15 95c1-28 15-42 35-42s34 14 35 42" />
                </svg>

                <strong className="text-xs sm:text-sm font-sans font-bold tracking-[0.14em] uppercase text-luma-lavender-900 block mb-1">
                  Reshma's Portrait
                </strong>
                <small className="text-xs text-luma-lavender-600 block max-w-xs">
                  Approved photograph & visual assets to be added upon Reshma's verification
                </small>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-4 sm:-right-4 bg-[#fffefa] shadow-md border border-luma-lavender-200/70 rounded-full py-3 px-6 font-serif italic text-base sm:text-lg text-[#78607f]">
                A gentle guide inward
              </div>
            </div>
          </div>

          {/* Right: Thoughtful Practitioner Introduction */}
          <div>
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.24em] text-luma-lavender-700 block mb-3">
              The heart behind the space
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-luma-lavender-950 tracking-tight leading-tight mb-4">
              Meet {CONTACT_CONFIG.practitionerName}.
            </h2>

            <div className="w-16 h-0.5 bg-luma-gold-400 mb-6" />

            <div className="space-y-4 text-sm sm:text-base text-luma-lavender-800 leading-relaxed font-sans">
              <p>
                Behind every thoughtful practice is a person who understands how noisy the world can get. Reshma's writing explores self-awareness, emotional patterns, inner reflection, and the quiet possibility of meeting ourselves with deeper compassion.
              </p>
              <p>
                Her verified personal story, certifications, practice philosophy, and session boundaries will be authored together in her authentic voice. We preserve this space strictly for the genuine details that make her work hers.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#sessions"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-luma-cream-50 text-luma-lavender-800 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full border border-luma-lavender-300 shadow-2xs hover:shadow-xs transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore her practice</span>
                <span aria-hidden="true">↗</span>
              </a>

              <span className="text-xs text-luma-lavender-600 italic">
                Bio & credentials pending client confirmation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

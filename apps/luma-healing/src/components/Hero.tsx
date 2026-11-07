import React from 'react';
import { CONTACT_CONFIG } from '../config/contact';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative overflow-hidden min-h-[640px] lg:min-h-[720px] bg-[radial-gradient(ellipse_36%_52%_at_57%_65%,#e9e2ebc0,transparent_82%),linear-gradient(125deg,#fbf9f6_15%,#f7f3ef_80%)] border-b border-[#e9e3e6]"
    >
      {/* Decorative Aura Rings */}
      <div
        aria-hidden="true"
        className="absolute -right-32 sm:-right-24 top-12 w-[480px] sm:w-[620px] h-[480px] sm:h-[620px] rounded-full border border-luma-lavender-400/40 shadow-[0_0_0_60px_#e7e1e94d,0_0_0_135px_#d3dfd02c,0_0_0_200px_#ede5e334] -rotate-12 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 -bottom-24 w-80 h-80 rounded-full bg-[radial-gradient(circle,#d3dfcf6b,transparent_65%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 min-h-[600px] lg:min-h-[680px] grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-12 py-16 sm:py-20">
        {/* Left Column: Visitor-First Copy */}
        <div className="max-w-2xl">
          <div className="text-[11px] font-sans font-bold uppercase tracking-[0.24em] text-luma-lavender-700 mb-4 inline-block">
            {CONTACT_CONFIG.tagline}
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-luma-lavender-950 tracking-tight leading-[1.08] mb-6">
            A journey <em className="italic font-normal text-luma-lavender-600">back</em> to yourself.
          </h1>

          <p className="text-base sm:text-lg text-luma-lavender-800/90 leading-relaxed font-sans max-w-xl mb-10">
            {CONTACT_CONFIG.heroLead}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#explore"
              className="inline-flex items-center justify-center gap-3 bg-luma-lavender-700 hover:bg-luma-lavender-800 text-white font-semibold text-sm px-6 sm:px-7 py-3.5 sm:py-4 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-500 focus-visible:ring-offset-2"
            >
              <span>Take a moment for yourself</span>
              <span aria-hidden="true">↓</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-luma-lavender-800 font-semibold text-sm px-6 py-3.5 sm:py-4 rounded-full border border-luma-lavender-200/80 shadow-2xs hover:shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-500 focus-visible:ring-offset-2"
            >
              <span>Meet Reshma</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Meditative Visual Halo & Botanical Accent */}
        <div className="relative flex items-center justify-center h-[380px] sm:h-[460px] lg:h-[540px]" aria-hidden="true">
          {/* Central Radiant Halo */}
          <div className="w-[320px] sm:w-[420px] lg:w-[460px] h-[320px] sm:h-[420px] lg:h-[460px] rounded-full relative bg-[radial-gradient(circle_at_54%_47%,#fffff2_0_29%,#f8f4e9_33%,#ebdfeb_43%,#c3d1c16b_53%,#b8a6c45c_62%,transparent_72%)] filter drop-shadow-[0_20px_50px_#bca9bc35] flex items-center justify-center">
            {/* Concentric Golden Orbit Ring */}
            <div className="absolute inset-[17%] border border-luma-gold-400/50 rounded-full" />

            {/* Inner Sacred Center Ring */}
            <div className="absolute inset-[28%] border border-[#bdb29a77] rounded-full flex items-center justify-center text-center">
              <svg className="w-20 h-20 sm:w-24 sm:h-24 stroke-luma-lavender-500 stroke-1 fill-none opacity-80" viewBox="0 0 100 100">
                <path d="M50 88V35M50 74C29 72 23 59 24 44c17 1 26 11 26 30M50 61c24-2 28-17 27-32-20 1-27 14-27 32M50 45c-15-6-17-19-12-32 13 7 16 18 12 32M50 45c15-6 17-19 12-32-13 7-16 18-12 32" />
              </svg>
            </div>
          </div>

          {/* Botanical Foliage Motif */}
          <svg className="absolute right-0 sm:right-4 bottom-0 w-36 sm:w-48 lg:w-52 h-44 sm:h-60 opacity-60 pointer-events-none" viewBox="0 0 180 250">
            <path d="M80 250Q85 100 140 10M78 210Q32 180 20 110M95 150Q140 132 155 95" stroke="#829f86" fill="none" strokeWidth="2" />
            <ellipse cx="39" cy="147" rx="18" ry="33" transform="rotate(-50 39 147)" fill="#a7b8a1aa" />
            <ellipse cx="121" cy="92" rx="17" ry="36" transform="rotate(34 121 92)" fill="#a7b8a1aa" />
            <ellipse cx="139" cy="48" rx="14" ry="29" transform="rotate(20 139 48)" fill="#a7b8a1aa" />
          </svg>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.25em] font-sans font-semibold uppercase text-luma-lavender-500/80">
        Scroll to explore ↓
      </div>
    </section>
  );
};

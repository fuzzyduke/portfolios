import React from 'react';

interface ReflectionCard {
  tag: string;
  headline: string;
  copy: string;
  gradientClass: string;
}

const REFLECTIONS: ReflectionCard[] = [
  {
    tag: 'Self-awareness',
    headline: 'When did you stop listening to yourself?',
    copy: 'On navigating everyday roles, external expectations, and recognizing your own inner voice once again.',
    gradientClass: 'bg-[linear-gradient(145deg,#e5d9e7,#faf8ef_55%,#dce6da)]',
  },
  {
    tag: 'Inner patterns',
    headline: 'Noticing what keeps repeating.',
    copy: 'Looking at recurring habits or situations not as bad luck, but as invitations to understand what needs care.',
    gradientClass: 'bg-[linear-gradient(155deg,#e2eade,#faf4e4)]',
  },
  {
    tag: 'Self-compassion',
    headline: 'You are not a project to fix.',
    copy: 'Moving away from relentless self-improvement and toward meeting yourself with safety, patience, and warmth.',
    gradientClass: 'bg-[linear-gradient(155deg,#e6e7ec,#eee2e9,#faf8ea)]',
  },
];

export const Reflections: React.FC = () => {
  return (
    <section
      id="reflections"
      aria-label="Notes for the Journey"
      className="py-20 sm:py-28 bg-[#fffefa] border-b border-[#e9e3e6]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.24em] text-luma-lavender-700 block mb-3">
            Notes for the journey
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-luma-lavender-950 tracking-tight leading-tight mb-4">
            Little invitations to look inward.
          </h2>

          <p className="text-sm sm:text-base text-luma-lavender-700 leading-relaxed font-sans">
            Inspired by themes from Reshma's Instagram reflections. Full writing, imagery, and carousel excerpts will be integrated upon verified client approval.
          </p>
        </div>

        {/* Reflection Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {REFLECTIONS.map((item, idx) => (
            <article
              key={idx}
              className="rounded-2xl overflow-hidden bg-[#fffefa] border border-luma-lavender-100 shadow-[0_15px_40px_#56644c0d] flex flex-col justify-between"
            >
              {/* Artistic Header Accent */}
              <div
                aria-hidden="true"
                className={`h-48 sm:h-52 ${item.gradientClass} relative flex items-center justify-center`}
              >
                <span className="font-serif text-7xl text-[#b7a6c5] opacity-60 select-none">
                  ✧
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <small className="text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-[#947e9c] block mb-2">
                    {item.tag}
                  </small>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-luma-lavender-950 mb-3 leading-snug">
                    {item.headline}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-luma-lavender-700 leading-relaxed font-sans mt-2">
                  {item.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';

interface Step {
  num: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Begin with curiosity',
    description: 'Explore what speaks to you, take time with your thoughts, and give yourself room to ask any preliminary questions.',
  },
  {
    num: '02',
    title: 'Choose with clarity',
    description: 'Understand the practice, format, pricing, and expectations clearly before scheduling any commitment.',
  },
  {
    num: '03',
    title: 'Make space for yourself',
    description: 'If you decide to proceed, follow the confirmed preparation and scheduling process designed to keep your experience calm.',
  },
];

export const WhatToExpect: React.FC = () => {
  return (
    <section
      aria-label="What to Expect"
      className="py-20 sm:py-28 bg-[#eff0e9] border-b border-[#e9e3e6]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.24em] text-luma-lavender-700 block mb-3">
            A gentle beginning
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-luma-lavender-950 tracking-tight leading-tight mb-4">
            What might a first step look like?
          </h2>

          <p className="text-sm sm:text-base text-luma-lavender-700 leading-relaxed font-sans">
            We will replace this outline with Reshma's verified session workflow once confirmed. Here is how a supportive experience typically unfolds:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="border-t border-[#cfc5ce] pt-6 flex flex-col justify-between"
            >
              <div>
                <b className="font-serif text-3xl sm:text-4xl text-[#b39bbd] font-normal block mb-3">
                  {step.num}
                </b>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-luma-lavender-950 mb-3">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-luma-lavender-800 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

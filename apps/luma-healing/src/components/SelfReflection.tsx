import React, { useState } from 'react';

interface PromptChoice {
  id: string;
  label: string;
  response: string;
}

const PROMPT_CHOICES: PromptChoice[] = [
  {
    id: 'disconnected',
    label: 'I feel disconnected',
    response: "It's okay to pause before you have everything figured out. What is one need you could acknowledge today without judgment?",
  },
  {
    id: 'put-others-first',
    label: 'I put everyone else first',
    response: "Sometimes a boundary begins with noticing what you really want. Where could you give yourself permission to say a quiet, honest 'no'?",
  },
  {
    id: 'patterns',
    label: 'I keep repeating patterns',
    response: "Recurring patterns are invitations to look with compassion rather than blame. What feels familiar, and what might you want to gently understand?",
  },
  {
    id: 'space-to-breathe',
    label: 'I need space to breathe',
    response: "Rest doesn't have to be earned through exhaustion. What would a softer, gentler pace look like for you in this moment?",
  },
];

export const SelfReflection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(PROMPT_CHOICES[0].id);

  const activeChoice = PROMPT_CHOICES.find((c) => c.id === selectedId) || PROMPT_CHOICES[0];

  return (
    <section
      id="explore"
      aria-label="Interactive Self-Reflection"
      className="py-20 sm:py-28 bg-[#f8f6f1] border-b border-[#e9e3e6]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-[11px] font-sans font-bold uppercase tracking-[0.24em] text-luma-lavender-700 block mb-3">
          Start where you are
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-luma-lavender-950 tracking-tight leading-tight mb-4">
          What's been on your mind lately?
        </h2>

        <p className="text-sm sm:text-base text-luma-lavender-700 max-w-xl mx-auto leading-relaxed mb-10">
          There isn't a right answer. Choose a thought that resonates right now, and take a small moment to reflect. Nothing is saved or shared.
        </p>

        {/* Reflection Choice Buttons */}
        <div
          role="group"
          aria-label="Reflection prompts"
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-8"
        >
          {PROMPT_CHOICES.map((choice) => {
            const isSelected = choice.id === selectedId;
            return (
              <button
                key={choice.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(choice.id)}
                className={`text-xs sm:text-sm font-medium py-3 px-5 sm:px-6 rounded-full border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-500 ${
                  isSelected
                    ? 'bg-[#e6dce9] border-luma-lavender-500 text-luma-lavender-950 shadow-inner font-semibold'
                    : 'bg-white/90 border-[#d9ccd9] text-luma-lavender-700 hover:bg-white hover:border-luma-lavender-300 shadow-2xs'
                }`}
              >
                {choice.label}
              </button>
            );
          })}
        </div>

        {/* Live Reflection Card */}
        <div
          aria-live="polite"
          className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#fffefa] text-luma-lavender-900 border border-luma-lavender-200/70 shadow-[0_15px_35px_#654e700a] text-sm sm:text-base leading-relaxed italic transition-all min-h-[96px] flex items-center justify-center"
        >
          <span className="block font-serif text-base sm:text-lg text-luma-lavender-800 not-italic">
            "{activeChoice.response}"
          </span>
        </div>

        <p className="text-[11px] text-luma-lavender-500 mt-4 tracking-wide font-sans">
          ✦ Take a breath. This reflection is entirely private and stays only in your browser.
        </p>
      </div>
    </section>
  );
};

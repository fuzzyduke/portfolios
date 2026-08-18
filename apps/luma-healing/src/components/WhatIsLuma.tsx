import React from 'react';
import { Feather, Sun, Compass } from 'lucide-react';

export const WhatIsLuma: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="w-12 h-12 rounded-full bg-luma-lavender-100 text-luma-lavender-700 flex items-center justify-center mx-auto mb-6 shadow-2xs">
          <Feather className="w-5 h-5 text-luma-gold-500" />
        </div>

        <span className="text-xs font-sans font-semibold uppercase tracking-widest text-luma-sage-700 block mb-2">
          Understanding Our Sanctuary
        </span>

        <h2 className="font-serif text-2xl sm:text-4xl font-normal text-luma-lavender-900 mb-6">
          What is Luma Healing Space?
        </h2>

        <div className="space-y-4 text-luma-lavender-800 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          <p>
            Life can become noisy, rushed and disconnected.
          </p>
          <p className="text-luma-lavender-900 font-medium">
            Luma Healing Space offers a quiet environment to pause, reconnect and explore practices centered around relaxation, Reiki, energy work and personal wellbeing.
          </p>
          <p className="text-sm text-luma-lavender-700 pt-2">
            A gentle sanctuary where stillness is welcomed, and every session is tailored to support your personal sense of balance.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-14 text-left">
          <div className="p-6 rounded-2xl bg-luma-cream-50/80 border border-luma-lavender-100">
            <div className="w-8 h-8 rounded-full bg-luma-sage-100 text-luma-sage-700 flex items-center justify-center mb-3">
              <Sun className="w-4 h-4" />
            </div>
            <h3 className="font-serif font-semibold text-luma-lavender-900 text-lg mb-1">
              Restorative Calm
            </h3>
            <p className="text-xs text-luma-lavender-700 leading-relaxed">
              Create distance from daily stress with dedicated time reserved solely for quiet renewal.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-luma-cream-50/80 border border-luma-lavender-100">
            <div className="w-8 h-8 rounded-full bg-luma-lavender-100 text-luma-lavender-700 flex items-center justify-center mb-3">
              <Feather className="w-4 h-4" />
            </div>
            <h3 className="font-serif font-semibold text-luma-lavender-900 text-lg mb-1">
              Personalized Guidance
            </h3>
            <p className="text-xs text-luma-lavender-700 leading-relaxed">
              Thoughtfully structured one-to-one sessions respecting your individual pace and comfort.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-luma-cream-50/80 border border-luma-lavender-100">
            <div className="w-8 h-8 rounded-full bg-luma-gold-100 text-luma-gold-600 flex items-center justify-center mb-3">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="font-serif font-semibold text-luma-lavender-900 text-lg mb-1">
              Gentle Integration
            </h3>
            <p className="text-xs text-luma-lavender-700 leading-relaxed">
              Integrate simple grounding techniques into your daily self-care and morning/evening rituals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

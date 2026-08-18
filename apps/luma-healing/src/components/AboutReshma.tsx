import React from 'react';
import { Heart, Sparkles, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import type { EnquiryContext } from '../utils/whatsapp';

interface AboutReshmaProps {
  onConnect: (ctx?: EnquiryContext) => void;
}

export const AboutReshma: React.FC<AboutReshmaProps> = ({ onConnect }) => {
  return (
    <section id="reshma" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Avatar / Visual Frame */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              {/* Outer soft glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-luma-lavender-300 via-luma-sage-300 to-luma-gold-300 blur-xl opacity-60 scale-105" />
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-luma-cream-100 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                {/* Visual placeholder for Reshma */}
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-luma-lavender-100 text-luma-lavender-700 flex items-center justify-center mx-auto mb-3 border border-luma-lavender-200">
                    <Sparkles className="w-8 h-8 text-luma-gold-500" />
                  </div>
                  <span className="font-serif text-2xl font-semibold text-luma-lavender-900 block">
                    {CONTACT_CONFIG.practitionerName}
                  </span>
                  <span className="text-xs font-sans text-luma-sage-700 uppercase tracking-widest block font-medium mt-1">
                    Holistic Practitioner
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Copy */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luma-cream-100 text-luma-lavender-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-luma-lavender-200/60">
              <Heart className="w-3.5 h-3.5 text-luma-gold-500" />
              <span>Meet Your Practitioner</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-luma-lavender-900 mb-6">
              Welcome to Luma Healing Space
            </h2>

            <div className="space-y-4 text-luma-lavender-800 text-base leading-relaxed font-normal mb-8">
              <p>
                {CONTACT_CONFIG.practitionerName} created Luma Healing Space as a calm, personal environment for people who want to pause, reconnect and explore holistic wellbeing practices such as Reiki and energy healing.
              </p>
              <p className="text-sm text-luma-lavender-700">
                Whether you are seeking relief from a hectic schedule or simply curious about energy work, sessions are held with warm presence, deep respect, and gentle intentionality.
              </p>
            </div>

            <button
              onClick={() => onConnect('general')}
              className="inline-flex items-center gap-2.5 bg-luma-lavender-800 hover:bg-luma-lavender-900 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-sm transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-luma-gold-400" />
              <span>Connect with Reshma</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

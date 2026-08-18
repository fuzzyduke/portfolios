import React from 'react';
import { Sparkles, Globe, RefreshCw, Moon, ArrowRight } from 'lucide-react';
import type { EnquiryContext } from '../utils/whatsapp';

interface ServicesProps {
  onSelectService: (ctx: EnquiryContext) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 md:py-24 bg-luma-cream-100 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-luma-sage-700 block mb-2">
            Restorative Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-luma-lavender-900">
            Sessions & Practice
          </h2>
          <p className="text-sm sm:text-base text-luma-lavender-800 mt-3">
            Explorative, gentle sessions designed to meet you wherever you are on your personal journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Service 1: Reiki Healing Session */}
          <div className="bg-white/90 rounded-3xl p-8 border border-luma-lavender-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-luma-lavender-100 text-luma-lavender-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-luma-gold-500" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-luma-lavender-50 text-luma-lavender-700 text-[11px] font-semibold uppercase tracking-wider mb-3">
                In-Person One-to-One
              </div>

              <h3 className="font-serif text-2xl font-semibold text-luma-lavender-900 mb-3">
                Reiki Healing Session
              </h3>
              
              <p className="text-luma-lavender-800 text-sm leading-relaxed mb-6 font-normal">
                A gentle one-to-one Reiki session focused on relaxation, grounding and creating space to slow down and reconnect.
              </p>
            </div>

            <button
              onClick={() => onSelectService('reiki_session')}
              className="inline-flex items-center justify-between w-full bg-luma-cream-100 hover:bg-luma-lavender-800 hover:text-white text-luma-lavender-900 font-semibold text-sm px-6 py-3.5 rounded-2xl border border-luma-lavender-200 transition-all cursor-pointer group-button"
            >
              <span>Book a Reiki Session</span>
              <ArrowRight className="w-4 h-4 text-luma-gold-500" />
            </button>
          </div>

          {/* Service 2: Distance Reiki */}
          <div className="bg-white/90 rounded-3xl p-8 border border-luma-lavender-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-luma-sage-100 text-luma-sage-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Globe className="w-6 h-6 text-luma-sage-600" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-luma-sage-50 text-luma-sage-700 text-[11px] font-semibold uppercase tracking-wider mb-3">
                Remote / Virtual Practice
              </div>

              <h3 className="font-serif text-2xl font-semibold text-luma-lavender-900 mb-3">
                Distance Reiki
              </h3>
              
              <p className="text-luma-lavender-800 text-sm leading-relaxed mb-6 font-normal">
                A remote Reiki experience for people who prefer to receive a session from the comfort of their own space.
              </p>
            </div>

            <button
              onClick={() => onSelectService('distance_reiki')}
              className="inline-flex items-center justify-between w-full bg-luma-cream-100 hover:bg-luma-lavender-800 hover:text-white text-luma-lavender-900 font-semibold text-sm px-6 py-3.5 rounded-2xl border border-luma-lavender-200 transition-all cursor-pointer"
            >
              <span>Explore Distance Reiki</span>
              <ArrowRight className="w-4 h-4 text-luma-gold-500" />
            </button>
          </div>

          {/* Service 3: Energy Balancing */}
          <div className="bg-white/90 rounded-3xl p-8 border border-luma-lavender-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-luma-gold-100 text-luma-gold-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <RefreshCw className="w-6 h-6 text-luma-gold-500" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-luma-gold-50 text-luma-gold-700 text-[11px] font-semibold uppercase tracking-wider mb-3">
                Holistic Alignment
              </div>

              <h3 className="font-serif text-2xl font-semibold text-luma-lavender-900 mb-3">
                Energy Balancing
              </h3>
              
              <p className="text-luma-lavender-800 text-sm leading-relaxed mb-6 font-normal">
                A holistic session focused on grounding, calm and restoring a personal sense of balance.
              </p>
            </div>

            <button
              onClick={() => onSelectService('energy_healing')}
              className="inline-flex items-center justify-between w-full bg-luma-cream-100 hover:bg-luma-lavender-800 hover:text-white text-luma-lavender-900 font-semibold text-sm px-6 py-3.5 rounded-2xl border border-luma-lavender-200 transition-all cursor-pointer"
            >
              <span>Discuss Energy Healing</span>
              <ArrowRight className="w-4 h-4 text-luma-gold-500" />
            </button>
          </div>

          {/* Service 4: Guided Relaxation & Meditation */}
          <div className="bg-white/90 rounded-3xl p-8 border border-luma-lavender-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-luma-lavender-100 text-luma-lavender-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Moon className="w-6 h-6 text-luma-lavender-600" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-luma-lavender-50 text-luma-lavender-700 text-[11px] font-semibold uppercase tracking-wider mb-3">
                Mindful Stillness
              </div>

              <h3 className="font-serif text-2xl font-semibold text-luma-lavender-900 mb-3">
                Guided Relaxation & Meditation
              </h3>
              
              <p className="text-luma-lavender-800 text-sm leading-relaxed mb-6 font-normal">
                Calm guided sessions designed to help you slow down, reconnect and create space for reflection.
              </p>
            </div>

            <button
              onClick={() => onSelectService('guided_relaxation')}
              className="inline-flex items-center justify-between w-full bg-luma-cream-100 hover:bg-luma-lavender-800 hover:text-white text-luma-lavender-900 font-semibold text-sm px-6 py-3.5 rounded-2xl border border-luma-lavender-200 transition-all cursor-pointer"
            >
              <span>Book a Calm Session</span>
              <ArrowRight className="w-4 h-4 text-luma-gold-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

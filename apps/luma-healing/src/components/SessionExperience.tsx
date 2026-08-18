import React from 'react';
import { MessageCircle, Heart, Sparkles, Sun } from 'lucide-react';

export const SessionExperience: React.FC = () => {
  const elements = [
    {
      icon: MessageCircle,
      title: 'Quiet Conversation',
      description: 'A gentle opening dialogue to discuss how you feel and what you would like to focus on.',
    },
    {
      icon: Heart,
      title: 'Intention Setting',
      description: 'Aligning your thoughts around relaxation, letting go, or finding personal clarity.',
    },
    {
      icon: Sun,
      title: 'Guided Relaxation',
      description: 'Soothing breathwork and mindful guidance to help your nervous system settle into ease.',
    },
    {
      icon: Sparkles,
      title: 'Reiki & Energy Practice',
      description: 'A quiet, non-invasive session inviting deep rest and a subtle sense of balance.',
    },
  ];

  return (
    <section id="journey" className="py-16 md:py-24 bg-luma-cream-100 border-t border-luma-lavender-200/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-luma-sage-700 block mb-2">
            The Flow of Your Time
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-luma-lavender-900">
            What a Session May Feel Like
          </h2>
          <p className="text-sm text-luma-lavender-800 mt-3">
            Every individual experience is unique. Here is a glimpse into how your session unfolds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {elements.map((el, idx) => {
            const IconComp = el.icon;
            return (
              <div key={idx} className="bg-white/80 rounded-3xl p-6 border border-luma-lavender-200/60 shadow-2xs relative">
                <div className="w-10 h-10 rounded-2xl bg-luma-lavender-100 text-luma-lavender-700 flex items-center justify-center mb-4">
                  <IconComp className="w-5 h-5 text-luma-gold-500" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-luma-lavender-900 mb-2">
                  {el.title}
                </h3>
                <p className="text-xs text-luma-lavender-800 leading-relaxed font-normal">
                  {el.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center max-w-lg mx-auto p-4 rounded-2xl bg-white/60 border border-luma-lavender-200/50 text-xs text-luma-lavender-700 italic">
          "Each session provides a peaceful buffer away from daily responsibilities. Take as much time as you need after the session to ground yourself before stepping back out."
        </div>
      </div>
    </section>
  );
};

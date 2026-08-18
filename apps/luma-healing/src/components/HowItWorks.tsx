import React from 'react';
import { Calendar, MessageCircle, Heart } from 'lucide-react';
import type { EnquiryContext } from '../utils/whatsapp';

interface HowItWorksProps {
  onAction: (ctx: EnquiryContext) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onAction }) => {
  const steps = [
    {
      number: '01',
      icon: Calendar,
      title: 'Choose Your Session',
      description: 'Explore Reiki, distance sessions, energy balancing or guided relaxation.',
    },
    {
      number: '02',
      icon: MessageCircle,
      title: 'Talk to Reshma',
      description: "Share what you're looking for and ask any questions over WhatsApp.",
    },
    {
      number: '03',
      icon: Heart,
      title: 'Create Space for Yourself',
      description: 'Schedule the session and take time to slow down and reconnect.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-luma-lavender-900 text-luma-cream-50 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luma-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-luma-gold-400 block mb-2">
            Simple 3-Step Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
            How It Works
          </h2>
          <p className="text-sm text-luma-lavender-200 mt-3 font-normal">
            Beginning your experience at Luma is straightforward, personal, and comfortable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={idx} className="bg-luma-lavender-800/60 border border-luma-lavender-700/60 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-luma-lavender-700 text-luma-gold-400 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-3xl font-light text-luma-lavender-500">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-luma-lavender-200 text-sm leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onAction('general')}
            className="inline-flex items-center gap-2.5 bg-luma-gold-400 hover:bg-luma-gold-500 text-luma-lavender-900 font-semibold text-sm px-8 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-luma-lavender-900" />
            <span>Connect with Reshma</span>
          </button>
        </div>
      </div>
    </section>
  );
};

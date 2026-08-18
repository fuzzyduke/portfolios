import React from 'react';
import { MessageSquare, Sliders, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Tell us what you need',
      description: 'Share whether you need protection for an individual, family member, or business team.',
    },
    {
      number: '02',
      icon: Sliders,
      title: 'Discuss suitable options',
      description: 'Understand key coverage parameters, terms, and compare suitable alternatives transparently.',
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Choose your protection',
      description: 'Proceed with the appropriate insurance option with full confidence and ongoing guidance.',
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
            Simple 3-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            How It Works
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base">
            Getting insurance guidance should be straight to the point and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={idx} className="relative flex flex-col items-start bg-slate-800/80 border border-slate-700/60 p-6 rounded-2xl">
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-black text-slate-600">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href={getWhatsAppLink('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp-500 hover:bg-whatsapp-600 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Start Step 1 on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

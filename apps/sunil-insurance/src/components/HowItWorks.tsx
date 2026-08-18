import React from 'react';
import { MessageSquare, Sliders, ShieldCheck, HeartHandshake } from 'lucide-react';
import type { EnquiryContext } from '../utils/whatsapp';

interface HowItWorksProps {
  onAction: (ctx: EnquiryContext) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onAction }) => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Tell Sunil What You Need',
      description: 'Health, motor, personal or business.',
    },
    {
      number: '02',
      icon: Sliders,
      title: 'Discuss Your Options',
      description: 'Understand suitable coverage and relevant considerations.',
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Choose Your Cover',
      description: 'Proceed with the appropriate policy.',
    },
    {
      number: '04',
      icon: HeartHandshake,
      title: 'Stay Connected',
      description: 'Maintain a human point of contact for renewals and assistance.',
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
            Simple Customer Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            How It Works
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base">
            Getting insurance guidance should be straight to the point and stress-free.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
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
          <button
            onClick={() => onAction('general')}
            className="inline-flex items-center gap-2 bg-whatsapp-500 hover:bg-whatsapp-600 text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Start Step 1 on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

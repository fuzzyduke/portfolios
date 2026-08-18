import React from 'react';
import { Compass, GitCompare, CheckCircle, LifeBuoy } from 'lucide-react';

export const WhyWorkWithSunil: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Understand',
      description: 'Help customers understand what they actually need before jumping into policy details or premiums.',
    },
    {
      icon: GitCompare,
      title: 'Compare',
      description: 'Discuss suitable options objectively rather than blindly selecting or recommending a single policy.',
    },
    {
      icon: CheckCircle,
      title: 'Choose',
      description: 'Help customers make an informed, confident decision tailored to their financial budget.',
    },
    {
      icon: LifeBuoy,
      title: 'Stay Supported',
      description: 'Provide a reliable human point of contact for ongoing policy updates, renewals, and general insurance assistance.',
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why Work With Sunil?
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            The value of a dedicated human insurance advisor over automated comparison algorithms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:shadow-md transition-shadow relative"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-700 text-white flex items-center justify-center mb-5 shadow-xs">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

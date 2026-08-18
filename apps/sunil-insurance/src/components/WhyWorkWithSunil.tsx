import React from 'react';
import { Compass, Compass as ExploreIcon, CheckCircle, LifeBuoy } from 'lucide-react';

export const WhyWorkWithSunil: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Understand',
      description: 'Start by understanding what protection the customer actually needs.',
    },
    {
      icon: ExploreIcon,
      title: 'Explore',
      description: 'Discuss suitable insurance options and important differences.',
    },
    {
      icon: CheckCircle,
      title: 'Choose',
      description: 'Help the customer make an informed selection.',
    },
    {
      icon: LifeBuoy,
      title: 'Stay Supported',
      description: 'Remain a point of contact for renewals and insurance-related assistance.',
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
            The value of having a dedicated human point of contact for your insurance needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:shadow-xs transition-shadow relative"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-700 text-white flex items-center justify-center mb-5 shadow-2xs">
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

import React from 'react';
import { HeartPulse, Heart, Shield, Users, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const HealthSection: React.FC = () => {
  return (
    <section id="categories" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
            <HeartPulse className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Core Service Category
          </span>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Health Insurance Guidance
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
            Protecting your financial security against medical emergencies with thoughtful, customized health coverage options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 1. Individual & Family */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-700 flex items-center justify-center mb-4 shadow-xs">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Individual & Family Health
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Hospitalisation protection for individuals, couples and families, with options designed around different coverage needs and budgets.
              </p>
            </div>
            
            <a
              href={getWhatsAppLink('health_individual')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 pt-3 border-t border-slate-200"
            >
              <span>Discuss Family Health</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* 2. Senior Citizen */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-700 flex items-center justify-center mb-4 shadow-xs">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Senior Citizen Health
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Health protection designed around the requirements of older family members, focusing on pre-existing condition management and comprehensive care.
              </p>
            </div>

            <a
              href={getWhatsAppLink('health_senior')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 pt-3 border-t border-slate-200"
            >
              <span>Discuss Senior Citizen Plans</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* 3. Corporate Group Health */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-700 flex items-center justify-center mb-4 shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Corporate Group Health
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Employee medical coverage options for businesses and teams, offering customized sum insured tiers and simplified onboarding.
              </p>
            </div>

            <a
              href={getWhatsAppLink('health_corporate')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 pt-3 border-t border-slate-200"
            >
              <span>Discuss Corporate Group Mediclaim</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
          * Product category examples. Specific policy terms, exclusions, waiting periods, and insurer approval depend on the final chosen policy documentation.
        </div>
      </div>
    </section>
  );
};

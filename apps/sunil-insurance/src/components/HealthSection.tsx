import React from 'react';
import { HeartPulse, Heart, Shield, Users, ArrowUpRight, UserCheck } from 'lucide-react';
import type { EnquiryContext } from '../utils/whatsapp';

interface HealthSectionProps {
  onAction: (ctx: EnquiryContext) => void;
}

export const HealthSection: React.FC<HealthSectionProps> = ({ onAction }) => {
  return (
    <section id="categories" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
            <HeartPulse className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Healthcare & Medical Coverage
          </span>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Health Insurance
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
            Protecting your financial security against healthcare expenses with thoughtful health coverage options.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Individual Health */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-700 flex items-center justify-center mb-4 shadow-2xs">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Individual Health Insurance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Medical coverage designed around an individual's healthcare and hospitalisation needs.
              </p>
            </div>
            
            <button
              onClick={() => onAction('health_individual')}
              className="inline-flex items-center justify-between w-full text-xs font-bold text-brand-700 hover:text-brand-900 pt-3 border-t border-slate-200 cursor-pointer"
            >
              <span>Discuss Individual Health</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 2. Family Health */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-700 flex items-center justify-center mb-4 shadow-2xs">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Family Health Insurance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Health protection designed to cover families under an appropriate shared or family-oriented policy structure.
              </p>
            </div>

            <button
              onClick={() => onAction('health_family')}
              className="inline-flex items-center justify-between w-full text-xs font-bold text-brand-700 hover:text-brand-900 pt-3 border-t border-slate-200 cursor-pointer"
            >
              <span>Discuss Family Health</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3. Senior Citizen Health */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-700 flex items-center justify-center mb-4 shadow-2xs">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Senior Citizen Health
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Health insurance options focused on the requirements of parents and senior family members.
              </p>
            </div>

            <button
              onClick={() => onAction('health_senior')}
              className="inline-flex items-center justify-between w-full text-xs font-bold text-brand-700 hover:text-brand-900 pt-3 border-t border-slate-200 cursor-pointer"
            >
              <span>Discuss Senior Health</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4. Corporate Group Health */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-700 flex items-center justify-center mb-4 shadow-2xs">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Corporate Group Health
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Employee medical insurance options for companies and teams.
              </p>
            </div>

            <button
              onClick={() => onAction('health_corporate')}
              className="inline-flex items-center justify-between w-full text-xs font-bold text-brand-700 hover:text-brand-900 pt-3 border-t border-slate-200 cursor-pointer"
            >
              <span>Discuss Employee Health</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

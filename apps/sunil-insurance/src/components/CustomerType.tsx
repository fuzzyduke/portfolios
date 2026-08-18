import React from 'react';
import { User, Building2, ArrowRight } from 'lucide-react';
import type { EnquiryContext } from '../utils/whatsapp';

interface CustomerTypeProps {
  onSelectJourney: (ctx: EnquiryContext) => void;
}

export const CustomerType: React.FC<CustomerTypeProps> = ({ onSelectJourney }) => {
  return (
    <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Who We Serve
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Clear insurance guidance tailored to your specific situation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For Individuals & Families */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full pointer-events-none -mr-4 -mt-4" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-5">
                <User className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Individuals & Families
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Protect yourself, your family, senior parents, and vehicles with health and motor insurance options designed around peace of mind.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Personal Health Insurance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Family Floater Health</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Senior Citizen Medical Cover</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Car & Two-Wheeler Insurance</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectJourney('individual_general')}
              className="inline-flex items-center justify-between w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors group cursor-pointer"
            >
              <span>Explore Personal Insurance</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* For Businesses */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-brand-500 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-brand-600 text-white text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-lg">
              Strategic Focus
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-700 text-white flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Businesses & Companies
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Group health insurance for employees, SME operational risk management, and commercial vehicle fleet insurance options.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Employee & Group Health Policies</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>SME & Corporate Benefit Options</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Commercial Vehicles & Fleet Cover</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Tailored Group Policy Guidance</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectJourney('business_general')}
              className="inline-flex items-center justify-between w-full bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors group shadow-2xs cursor-pointer"
            >
              <span>Explore Business Insurance</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

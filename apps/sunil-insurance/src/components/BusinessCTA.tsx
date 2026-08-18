import React from 'react';
import { Building2, MessageSquare, Check, ArrowRight } from 'lucide-react';
import type { EnquiryContext } from '../utils/whatsapp';

interface BusinessCTAProps {
  onAction: (ctx: EnquiryContext) => void;
}

export const BusinessCTA: React.FC<BusinessCTAProps> = ({ onAction }) => {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-r from-brand-900 via-slate-900 to-brand-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="bg-slate-800/80 border border-brand-500/40 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800 text-brand-200 text-xs font-semibold mb-4">
                <Building2 className="w-4 h-4 text-brand-400" />
                <span>Corporate & SME Solutions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                Insurance Solutions for Your Team and Business
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Protect your company, support your workforce, and manage commercial vehicle risks with structured group coverage.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-200 mb-8">
                <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-700">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Employee Health Coverage</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-700">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Group Policy Options</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-700">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Commercial & Fleet Cover</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 text-center lg:text-right">
              <button
                onClick={() => onAction('business_general')}
                className="inline-flex items-center justify-center gap-3 bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Discuss Business Insurance</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-slate-400 mt-3">
                Direct WhatsApp consultation with Sunil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

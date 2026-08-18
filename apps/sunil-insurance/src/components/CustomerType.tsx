import { User, Building2, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const CustomerType: React.FC = () => {
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
          {/* For Individuals */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full pointer-events-none -mr-4 -mt-4" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-5">
                <User className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                For Individuals & Families
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Protect yourself, your spouse, children, and elderly parents with health and vehicle coverage designed for peace of mind.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Individuals & Working Professionals</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Couples & Nuclear Families</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Senior Citizens & Parents</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Private Car & Two-Wheeler Owners</span>
                </li>
              </ul>
            </div>

            <a
              href={getWhatsAppLink('health_individual')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors group"
            >
              <span>Explore Individual Coverage</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* For Businesses */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-brand-500 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-brand-600 text-white text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-lg">
              High Value Support
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-700 text-white flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                For Businesses & SMEs
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Group health insurance for employees, SME operational risk management, and commercial fleet insurance options.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Employee Health & Group Mediclaim</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>SME & Startup Business Insurance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Company Fleet & Commercial Vehicles</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Tailored Corporate Plan Structuring</span>
                </li>
              </ul>
            </div>

            <a
              href={getWhatsAppLink('business_general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors group shadow-sm"
            >
              <span>Discuss Business Insurance</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

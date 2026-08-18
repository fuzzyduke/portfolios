import React from 'react';
import { Car, ShieldAlert, Truck, ArrowUpRight, Info } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

/**
 * PROVISIONAL — awaiting confirmation from Sunil
 * Motor Insurance is included provisionally for prototype demonstration.
 */
export const MotorSection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <Car className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Vehicle & Fleet Insurance
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-semibold">
            <Info className="w-3.5 h-3.5 text-amber-600" />
            <span>PROVISIONAL — awaiting confirmation from Sunil</span>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Motor Insurance Solutions
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
            Protection options for personal vehicles, commercial transports, and business fleets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 1. Comprehensive Motor */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Comprehensive Motor Insurance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Protection options covering own-vehicle damage together with third-party legal liability for private cars and two-wheelers.
              </p>
            </div>

            <a
              href={getWhatsAppLink('motor_comprehensive')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 pt-3 border-t border-slate-100"
            >
              <span>Discuss Comprehensive Motor</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* 2. Third-Party Motor */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Third-Party Motor Insurance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Mandatory third-party liability protection for vehicle owners complying with statutory requirements.
              </p>
            </div>

            <a
              href={getWhatsAppLink('motor_third_party')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 pt-3 border-t border-slate-100"
            >
              <span>Discuss Third-Party Coverage</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* 3. Commercial & Fleet */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Commercial & Fleet Insurance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Insurance options for companies operating commercial vehicles, goods carriers, or employee transport fleets.
              </p>
            </div>

            <a
              href={getWhatsAppLink('motor_fleet')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 pt-3 border-t border-slate-100"
            >
              <span>Discuss Fleet & Commercial Insurance</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

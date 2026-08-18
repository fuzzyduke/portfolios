import React from 'react';
import { Car, ShieldAlert, Truck, Bike, ArrowUpRight } from 'lucide-react';
import type { EnquiryContext } from '../utils/whatsapp';

interface MotorSectionProps {
  onAction: (ctx: EnquiryContext) => void;
}

export const MotorSection: React.FC<MotorSectionProps> = ({ onAction }) => {
  return (
    <section className="py-14 md:py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
            <Car className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Vehicle & Transport Protection
          </span>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Motor Insurance
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
            Protection options for personal vehicles, motorcycles, commercial transports, and business fleets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Comprehensive Car */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-2xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Comprehensive Car Insurance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Protection options covering own-vehicle damage together with applicable third-party liability.
              </p>
            </div>

            <button
              onClick={() => onAction('motor_car')}
              className="inline-flex items-center justify-between w-full text-xs font-bold text-blue-700 hover:text-blue-900 pt-3 border-t border-slate-100 cursor-pointer"
            >
              <span>Discuss Car Insurance</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 2. Third-Party Motor */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-2xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Third-Party Motor Insurance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Third-party liability coverage for vehicle owners.
              </p>
            </div>

            <button
              onClick={() => onAction('motor_third_party')}
              className="inline-flex items-center justify-between w-full text-xs font-bold text-blue-700 hover:text-blue-900 pt-3 border-t border-slate-100 cursor-pointer"
            >
              <span>Discuss Third-Party Cover</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3. Two-Wheeler Insurance */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-2xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Bike className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Two-Wheeler Insurance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Insurance options for motorcycles and scooters.
              </p>
            </div>

            <button
              onClick={() => onAction('motor_two_wheeler')}
              className="inline-flex items-center justify-between w-full text-xs font-bold text-blue-700 hover:text-blue-900 pt-3 border-t border-slate-100 cursor-pointer"
            >
              <span>Discuss Two-Wheeler Insurance</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4. Commercial & Fleet */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-2xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Commercial & Fleet Insurance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Motor insurance options for businesses operating commercial vehicles or vehicle fleets.
              </p>
            </div>

            <button
              onClick={() => onAction('motor_fleet')}
              className="inline-flex items-center justify-between w-full text-xs font-bold text-blue-700 hover:text-blue-900 pt-3 border-t border-slate-100 cursor-pointer"
            >
              <span>Discuss Fleet Insurance</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

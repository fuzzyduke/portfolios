import React from 'react';
import { CONTACT_CONFIG } from '../config/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 pb-20 sm:pb-10 border-t border-slate-800 text-xs leading-relaxed">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          <div>
            <div className="font-bold text-white text-base mb-2">
              {CONTACT_CONFIG.advisorName} Insurance Advisor
            </div>
            <p className="text-slate-400 text-xs">
              Personal insurance guidance for individuals, families, and businesses.
            </p>
          </div>

          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              Service Categories
            </div>
            <ul className="space-y-1 text-xs">
              <li>Individual & Family Health</li>
              <li>Senior Citizen Health</li>
              <li>Corporate Group Mediclaim</li>
              <li>Motor & Fleet Insurance (Provisional)</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              Contact Details
            </div>
            <p className="text-xs">Phone: {CONTACT_CONFIG.displayPhone}</p>
            <p className="text-xs">Email: {CONTACT_CONFIG.email}</p>
            <p className="text-xs">Location: {CONTACT_CONFIG.location}</p>
          </div>

          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              Regulatory Note
            </div>
            <p className="text-xs text-slate-400">
              Regulatory and license identification details will be displayed here upon confirmation of advisor registration.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-[11px] text-slate-500 max-w-4xl">
          <p className="mb-2 font-medium text-slate-400">Important Disclaimer:</p>
          <p>{CONTACT_CONFIG.disclaimer}</p>
          <p className="mt-4 text-slate-600">
            © {new Date().getFullYear()} {CONTACT_CONFIG.advisorName} Insurance. All rights reserved. Designed for zero-cost micro-app deployment.
          </p>
        </div>
      </div>
    </footer>
  );
};

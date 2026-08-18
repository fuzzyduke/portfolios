import React from 'react';
import { CONTACT_CONFIG } from '../config/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 pb-20 sm:pb-10 border-t border-slate-800 text-xs leading-relaxed">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          <div>
            <div className="font-bold text-white text-base mb-2">
              {CONTACT_CONFIG.advisorName} Insurance
            </div>
            <p className="text-slate-400 text-xs">
              Personal insurance guidance for health and motor insurance across individuals, families, and businesses.
            </p>
          </div>

          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              Health Insurance
            </div>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>Individual Health Insurance</li>
              <li>Family Health Insurance</li>
              <li>Senior Citizen Health</li>
              <li>Corporate Group Health</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              Motor Insurance
            </div>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>Comprehensive Car Insurance</li>
              <li>Third-Party Motor Insurance</li>
              <li>Two-Wheeler Insurance</li>
              <li>Commercial & Fleet Cover</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-2">
              Advisor Guidance
            </div>
            <p className="text-xs text-slate-400">
              Direct personal support for understanding requirements, policy selection, and ongoing renewal assistance.
            </p>
          </div>
        </div>

        {/* Prototype Disclaimer */}
        <div className="text-[11px] text-slate-500 max-w-4xl">
          <p className="mb-1.5 font-semibold text-slate-400">Prototype Disclaimer:</p>
          <p>{CONTACT_CONFIG.disclaimer}</p>
          <p className="mt-4 text-slate-600">
            © {new Date().getFullYear()} {CONTACT_CONFIG.advisorName} Insurance. All rights reserved. Prototype edition.
          </p>
        </div>
      </div>
    </footer>
  );
};

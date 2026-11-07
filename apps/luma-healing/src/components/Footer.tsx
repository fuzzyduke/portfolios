import React from 'react';
import { CONTACT_CONFIG } from '../config/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f6f1] text-[#716a73] py-12 pb-24 sm:pb-12 border-t border-[#e9e3e6] text-xs leading-relaxed font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#e5dde2]">
          <div>
            <strong className="font-serif text-xl sm:text-2xl font-normal text-luma-lavender-900 block mb-1">
              {CONTACT_CONFIG.brandName}
            </strong>
            <p className="text-xs text-luma-lavender-700">
              V2 Journey-First Design Study · Not yet a public booking experience
            </p>
          </div>

          <a
            href="#home"
            className="text-xs font-semibold text-luma-lavender-800 hover:text-luma-lavender-950 transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luma-lavender-500 rounded"
          >
            <span>Back to top</span>
            <span aria-hidden="true">↑</span>
          </a>
        </div>

        {/* Detailed Grounded Wellness Disclaimer */}
        <div className="mt-8 text-[11px] text-luma-lavender-600/90 max-w-4xl space-y-2">
          <p className="font-semibold text-luma-lavender-800">
            Wellness Practice Disclaimer:
          </p>
          <p className="leading-relaxed">
            {CONTACT_CONFIG.disclaimer}
          </p>
          <p className="text-[10px] text-luma-lavender-500 pt-2">
            © {new Date().getFullYear()} {CONTACT_CONFIG.brandName}. All concepts and research notes are strictly confidential preview material.
          </p>
        </div>
      </div>
    </footer>
  );
};

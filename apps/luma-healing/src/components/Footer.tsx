import React from 'react';
import { CONTACT_CONFIG } from '../config/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luma-cosmic text-luma-lavender-300/80 py-12 pb-24 sm:pb-12 border-t border-luma-lavender-900/60 text-xs leading-relaxed">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-luma-lavender-900/60">
          <div>
            <div className="font-serif text-lg font-semibold text-white mb-2">
              {CONTACT_CONFIG.brandName}
            </div>
            <p className="text-luma-lavender-300/70 text-xs font-normal">
              {CONTACT_CONFIG.tagline}
            </p>
          </div>

          <div>
            <div className="font-serif text-sm font-semibold text-white mb-2">
              Restorative Offerings
            </div>
            <ul className="space-y-1 text-xs text-luma-lavender-200/80">
              <li>Reiki Healing Sessions</li>
              <li>Distance Reiki</li>
              <li>Energy Balancing</li>
              <li>Guided Relaxation & Meditation</li>
            </ul>
          </div>

          <div>
            <div className="font-serif text-sm font-semibold text-white mb-2">
              Practitioner
            </div>
            <p className="text-xs text-luma-lavender-200/80">Reshma</p>
            <p className="text-xs text-luma-lavender-200/80">{CONTACT_CONFIG.email}</p>
            <p className="text-xs text-luma-lavender-200/80">{CONTACT_CONFIG.location}</p>
          </div>

          <div>
            <div className="font-serif text-sm font-semibold text-white mb-2">
              Gentle Space
            </div>
            <p className="text-xs text-luma-lavender-300/70">
              Dedicated to relaxation, personal reflection, and grounded restorative energy practices.
            </p>
          </div>
        </div>

        {/* Discreet Wellness Safety Disclaimer */}
        <div className="text-[11px] text-luma-lavender-400/70 max-w-4xl">
          <p className="mb-1 font-semibold text-luma-lavender-300/90">Wellness Disclaimer:</p>
          <p>{CONTACT_CONFIG.disclaimer}</p>
          <p className="mt-4 text-luma-lavender-500">
            © {new Date().getFullYear()} {CONTACT_CONFIG.brandName}. All rights reserved. Prototype edition.
          </p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';

export const DemoBanner: React.FC = () => {
  return (
    <aside
      aria-label="Prototype announcement"
      className="bg-[#eae3ed] text-[#44364b] border-b border-[#ddcfdf] py-2 px-4 text-center text-xs tracking-wide font-medium"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="font-semibold uppercase tracking-wider text-[10px] bg-[#d5c2db] px-2 py-0.5 rounded-full text-[#342244] border border-[#be9ec8]/50">
          Design Preview
        </span>
        <span className="text-luma-lavender-900">
          Luma V2 Journey-First concept study. Content, imagery, pricing, and live booking channels remain pending Reshma's verification.
        </span>
      </div>
    </aside>
  );
};

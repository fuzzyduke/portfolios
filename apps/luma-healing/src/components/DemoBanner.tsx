import React from 'react';

export const DemoBanner: React.FC = () => {
  return (
    <aside
      aria-label="Prototype announcement"
      className="bg-[#eae3ed] text-[#604e67] border-b border-[#ddcfdf] py-2 px-4 text-center text-xs tracking-wide font-medium"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="font-semibold uppercase tracking-wider text-[10px] bg-[#dfd2e3] px-2 py-0.5 rounded-full text-[#4a3a52]">
          Design Preview
        </span>
        <span>
          Luma V2 Journey-First concept study. Content, imagery, pricing, and live booking channels remain pending Reshma's verification.
        </span>
      </div>
    </aside>
  );
};

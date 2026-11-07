import React from 'react';
import type { EnquiryContext } from '../utils/whatsapp';

interface FinalCTAProps {
  onConnect: (ctx: EnquiryContext) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onConnect }) => {
  return (
    <section
      id="contact"
      aria-label="Final Invitation"
      className="py-24 sm:py-32 bg-[radial-gradient(circle_at_50%_100%,#7e628b_0%,#644d72_65%,#533c61_100%)] text-white text-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-[11px] font-sans font-bold uppercase tracking-[0.24em] text-[#eedef6] block mb-4">
          The next step is yours
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
          You don't need all the answers to begin a conversation.
        </h2>

        <p className="text-sm sm:text-base text-[#fbf5fd] max-w-xl mx-auto leading-relaxed font-sans mb-10">
          Curious about Reshma's approach or wondering whether a session is right for you? Start with a gentle question, entirely at your own pace.
        </p>

        <button
          type="button"
          onClick={() => onConnect('dialog')}
          className="inline-flex items-center justify-center gap-3 bg-[#fffefa] hover:bg-white text-[#523b5e] font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#644d72]"
        >
          <span>Talk to Reshma</span>
          <span aria-hidden="true" className="text-base">↗</span>
        </button>
      </div>
    </section>
  );
};

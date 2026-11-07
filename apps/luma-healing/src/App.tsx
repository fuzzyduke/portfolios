import { DemoBanner } from './components/DemoBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelfReflection } from './components/SelfReflection';
import { AboutReshma } from './components/AboutReshma';
import { Services } from './components/Services';
import { WhatToExpect } from './components/WhatToExpect';
import { Reflections } from './components/Reflections';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { useWhatsAppAction } from './hooks/useWhatsAppAction';

export function App() {
  const { triggerWhatsApp, modalContext, closeModal } = useWhatsAppAction();

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#373342] font-sans antialiased selection:bg-luma-lavender-200 selection:text-luma-lavender-900">
      {/* Top Prototype Context Banner */}
      <DemoBanner />

      {/* Navigation Header */}
      <Header onConnect={triggerWhatsApp} />

      {/* Main Journey-First Content */}
      <main id="main-content">
        {/* 1. Hero: Empathetic, Visitor-Centric Hook */}
        <Hero />

        {/* 2. Self-Reflection: Interactive Pause & Inquiry */}
        <SelfReflection />

        {/* 3. Meet Reshma: Human Guide & Authentic Story Placeholder */}
        <AboutReshma />

        {/* 4. Sessions: Verified Offerings (Reiki, Akashic Records) */}
        <Services onSelectService={triggerWhatsApp} />

        {/* 5. What To Expect: Gentle Step-by-Step Experience Guide */}
        <WhatToExpect />

        {/* 6. Reflections: Instagram-Grounded Introspective Invitations */}
        <Reflections />

        {/* 7. Final Invitation / Conversational CTA */}
        <FinalCTA onConnect={triggerWhatsApp} />
      </main>

      {/* Footer & Grounded Wellness Disclaimer */}
      <Footer />

      {/* Persistent Mobile Action Bar */}
      <StickyMobileCTA onConnect={triggerWhatsApp} />

      {/* Contextual Prototype Dialog */}
      <WhatsAppModal
        isOpen={modalContext !== null}
        onClose={closeModal}
        context={modalContext || 'general'}
      />
    </div>
  );
}

export default App;

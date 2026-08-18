import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsLuma } from './components/WhatIsLuma';
import { Services } from './components/Services';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { SessionExperience } from './components/SessionExperience';
import { AboutReshma } from './components/AboutReshma';
import { HowItWorks } from './components/HowItWorks';
import { ContactSection } from './components/ContactSection';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { Footer } from './components/Footer';
import { WhatsAppModal, useWhatsAppAction } from './components/WhatsAppModal';

export function App() {
  const { triggerWhatsApp, modalContext, closeModal } = useWhatsAppAction();

  return (
    <div className="min-h-screen bg-luma-cream-100 text-luma-lavender-900 font-sans antialiased selection:bg-luma-lavender-200 selection:text-luma-lavender-900">
      <Header onConnect={triggerWhatsApp} />
      <main>
        <Hero onConnect={triggerWhatsApp} />
        <WhatIsLuma />
        <Services onSelectService={triggerWhatsApp} />
        <WhoIsThisFor onAction={triggerWhatsApp} />
        <SessionExperience />
        <AboutReshma onConnect={triggerWhatsApp} />
        <HowItWorks onAction={triggerWhatsApp} />
        <ContactSection onConnect={triggerWhatsApp} />
      </main>
      <Footer />
      <StickyMobileCTA onConnect={triggerWhatsApp} />

      <WhatsAppModal
        isOpen={modalContext !== null}
        onClose={closeModal}
        context={modalContext || 'general'}
      />
    </div>
  );
}

export default App;

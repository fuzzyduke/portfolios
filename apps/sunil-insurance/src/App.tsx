import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CustomerType } from './components/CustomerType';
import { HealthSection } from './components/HealthSection';
import { MotorSection } from './components/MotorSection';
import { WhyWorkWithSunil } from './components/WhyWorkWithSunil';
import { HowItWorks } from './components/HowItWorks';
import { BusinessCTA } from './components/BusinessCTA';
import { ContactSection } from './components/ContactSection';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { Footer } from './components/Footer';
import { WhatsAppModal, useWhatsAppAction } from './components/WhatsAppModal';

export function App() {
  const { triggerWhatsApp, modalContext, closeModal } = useWhatsAppAction();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-brand-100 selection:text-brand-900">
      <Header onTalkToSunil={triggerWhatsApp} />
      <main>
        <Hero onTalkToSunil={triggerWhatsApp} />
        <CustomerType onSelectJourney={triggerWhatsApp} />
        <HealthSection onAction={triggerWhatsApp} />
        <MotorSection onAction={triggerWhatsApp} />
        <WhyWorkWithSunil />
        <HowItWorks onAction={triggerWhatsApp} />
        <BusinessCTA onAction={triggerWhatsApp} />
        <ContactSection onAction={triggerWhatsApp} />
      </main>
      <Footer />
      <StickyMobileCTA onAction={triggerWhatsApp} />

      <WhatsAppModal
        isOpen={modalContext !== null}
        onClose={closeModal}
        context={modalContext || 'general'}
      />
    </div>
  );
}

export default App;

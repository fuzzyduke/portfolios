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

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-brand-100 selection:text-brand-900">
      <Header />
      <main>
        <Hero />
        <CustomerType />
        <HealthSection />
        <MotorSection />
        <WhyWorkWithSunil />
        <HowItWorks />
        <BusinessCTA />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;

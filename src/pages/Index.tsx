import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { StatsSection } from '@/components/landing/StatsSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { PortfolioSection } from '@/components/landing/PortfolioSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';
import { FloatingButtons } from '@/components/landing/FloatingButtons';
import { PreLoader } from '@/components/PreLoader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Index;

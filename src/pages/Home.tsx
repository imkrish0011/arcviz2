import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { LogoTicker } from '../components/LogoTicker';
import { StatsSection } from '../components/StatsSection';
import { ThreeShiftsBento } from '../components/ThreeShiftsBento';
import { WorkflowShowcase } from '../components/WorkflowShowcase';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { ComparisonTable } from '../components/ComparisonTable';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080c12] text-white selection:bg-[#99a0b0] selection:text-[#09090b]">
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <StatsSection />
        <ThreeShiftsBento />
        <WorkflowShowcase />
        <FeaturesGrid />
        <ComparisonTable />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

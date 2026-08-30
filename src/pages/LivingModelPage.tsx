import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { LivingSystem } from '../components/LivingSystem';
import { InvestigationSystem } from '../components/InvestigationSystem';
import { SimulationSystem } from '../components/SimulationSystem';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export const LivingModelPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#080a08] text-[#f1f2ee] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />
      <main>
        {/* 01. Living Infrastructure Model (Hero & Interactive Layers on Seamless Atmosphere) */}
        <LivingSystem />

        {/* 02. Live Incident Investigation & Code Diff */}
        <InvestigationSystem />

        {/* 03. Pre-Flight Digital Twin Simulation */}
        <SimulationSystem />

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

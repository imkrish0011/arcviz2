import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { WhatIsArchViz } from '../components/WhatIsArchViz';
import { CloudChaosToOneSystem } from '../components/CloudChaosToOneSystem';
import { AskArchVizDemo } from '../components/AskArchVizDemo';
import { UseCasesCapabilities } from '../components/UseCasesCapabilities';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#080a08] text-[#f1f2ee] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />
      <main>
        {/* 01. Hero with Sunset Mountain Landscape Atmosphere */}
        <Hero />

        {/* 02. What is ArchViz? (3-Tier Layer Architecture) */}
        <WhatIsArchViz />

        {/* 03. Cloud Chaos -> One System (Convergence Visual) */}
        <CloudChaosToOneSystem />

        {/* 04. Interactive "Ask ArchViz" Demo */}
        <AskArchVizDemo />

        {/* 05. Enterprise Architecture Modules & Deep-Dive Links */}
        <UseCasesCapabilities />

        {/* 06. Final CTA with Cosmic Atmosphere */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

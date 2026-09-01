import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { EcosystemBar } from '../components/EcosystemBar';
import { LifecycleExplorer } from '../components/LifecycleExplorer';
import { WhatIsArchViz } from '../components/WhatIsArchViz';
import { BuildAndConnect } from '../components/BuildAndConnect';
import { CloudChaosToOneSystem } from '../components/CloudChaosToOneSystem';
import { AskArchVizDemo } from '../components/AskArchVizDemo';
import { AutonomyControl } from '../components/AutonomyControl';
import { ComparisonMatrix } from '../components/ComparisonMatrix';
import { UseCasesCapabilities } from '../components/UseCasesCapabilities';
import { TechnicalFAQ } from '../components/TechnicalFAQ';
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
        {/* 01. Hero with Sunset Mountain Landscape Atmosphere & Live Topology Loop */}
        <Hero />

        {/* 02. Multi-Cloud Ecosystem Bar & Proof Metrics */}
        <EcosystemBar />

        {/* 03. Interactive 4-Stage Full-Lifecycle Explorer (Design -> Simulate -> Provision -> 24/7 Monitor) */}
        <LifecycleExplorer />

        {/* 04. What is ArchViz? (3-Tier Layer Stack Architecture) */}
        <WhatIsArchViz />

        {/* 05. Two Entry Points (Build Greenfield vs. Connect Brownfield Fleet) */}
        <BuildAndConnect />

        {/* 06. Cloud Chaos -> One System (Disparate Silos to Living Graph) */}
        <CloudChaosToOneSystem />

        {/* 07. Interactive "Ask ArchViz" Natural Language Reasoning Demo */}
        <AskArchVizDemo />

        {/* 08. Configurable Progressive Autonomy Spectrum (L0 to L5 with OPA Guardrails) */}
        <AutonomyControl />

        {/* 09. Traditional Fragmented Tooling vs. ArcViz Cloud OS Comparison Matrix */}
        <ComparisonMatrix />

        {/* 10. Enterprise Architecture Modules & Deep-Dive Links */}
        <UseCasesCapabilities />

        {/* 11. Enterprise Technical FAQ (Interactive Accordion) */}
        <TechnicalFAQ />

        {/* 12. Final CTA with Cosmic Atmosphere & Zero-Agent Guarantee */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { WhatIsArchViz } from '../components/WhatIsArchViz';
import { CloudChaosToOneSystem } from '../components/CloudChaosToOneSystem';
import { ExistingInfrastructureFirst } from '../components/ExistingInfrastructureFirst';
import { AskArchVizDemo } from '../components/AskArchVizDemo';
import { LivingSystem } from '../components/LivingSystem';
import { UseCasesCapabilities } from '../components/UseCasesCapabilities';
import { InvestigationSystem } from '../components/InvestigationSystem';
import { SimulationSystem } from '../components/SimulationSystem';
import { AgentWorkforce } from '../components/AgentWorkforce';
import { HowArchVizActs } from '../components/HowArchVizActs';
import { AutonomyControl } from '../components/AutonomyControl';
import { AutonomousLoop } from '../components/AutonomousLoop';
import { OnboardingJourney } from '../components/OnboardingJourney';
import { MemoryLineage } from '../components/MemoryLineage';
import { TrustAndSecurity } from '../components/TrustAndSecurity';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080a08] text-[#f1f2ee] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />
      <main>
        {/* 01. Hero with Sunset Landscape Atmosphere */}
        <Hero />

        {/* 02. What is ArchViz? (3-Tier Layer Architecture) */}
        <WhatIsArchViz />

        {/* 03. Cloud Chaos -> One System (Convergence Visual) */}
        <CloudChaosToOneSystem />

        {/* 04. Existing Infrastructure First (Zero Code Rewrites) */}
        <ExistingInfrastructureFirst />

        {/* 05. Interactive "Ask ArchViz" Demo */}
        <AskArchVizDemo />

        {/* 06. Living System Model (6 Core Relationship Layers) */}
        <LivingSystem />

        {/* 07. What ArchViz Helps With (6 Core Capabilities) */}
        <UseCasesCapabilities />

        {/* 08. Incident Investigation Topology */}
        <InvestigationSystem />

        {/* 09. Pre-Flight Digital Twin Simulation */}
        <SimulationSystem />

        {/* 10. 5-Domain Specialized Agent Workforce */}
        <AgentWorkforce />

        {/* 11. How ArchViz Acts (No Unrestricted Cloud Access) */}
        <HowArchVizActs />

        {/* 12. 6-Stage Progressive Autonomy Spectrum (L0 to L5) */}
        <AutonomyControl />

        {/* 13. Signature 8-Step Operational Loop (SEE -> LEARN) */}
        <AutonomousLoop />

        {/* 14. What Happens After You Connect (Onboarding Journey) */}
        <OnboardingJourney />

        {/* 15. 5-Layer Persistent Operational Memory */}
        <MemoryLineage />

        {/* 16. Enterprise Trust & Security Matrix */}
        <TrustAndSecurity />

        {/* 17. Final CTA with Cosmic Atmosphere */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

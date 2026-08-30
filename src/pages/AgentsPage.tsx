import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { AgentWorkforce } from '../components/AgentWorkforce';
import { HowArchVizActs } from '../components/HowArchVizActs';
import { AutonomyControl } from '../components/AutonomyControl';
import { AutonomousLoop } from '../components/AutonomousLoop';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export const AgentsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#080a08] text-[#f1f2ee] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />
      <main>
        {/* 01. 5-Domain Specialized Agent Workforce (Hero & Interactive Mesh on Seamless Atmosphere) */}
        <AgentWorkforce />

        {/* 02. How ArchViz Acts (Deterministic Safety Boundaries) */}
        <HowArchVizActs />

        {/* 03. 6-Stage Autonomy Spectrum (L0 to L5) */}
        <AutonomyControl />

        {/* 04. Signature ArchViz Operational Loop (SEE -> LEARN) */}
        <AutonomousLoop />

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

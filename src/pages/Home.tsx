import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { BuildAndConnect } from '../components/BuildAndConnect';
import { LivingSystem } from '../components/LivingSystem';
import { InvestigationSystem } from '../components/InvestigationSystem';
import { SimulationSystem } from '../components/SimulationSystem';
import { AgentWorkforce } from '../components/AgentWorkforce';
import { AutonomyControl } from '../components/AutonomyControl';
import { AutonomousLoop } from '../components/AutonomousLoop';
import { MemoryLineage } from '../components/MemoryLineage';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080a08] text-[#f1f2ee] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BuildAndConnect />
        <LivingSystem />
        <InvestigationSystem />
        <SimulationSystem />
        <AgentWorkforce />
        <AutonomyControl />
        <AutonomousLoop />
        <MemoryLineage />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

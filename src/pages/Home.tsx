import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { FragmentedCloud } from '../components/FragmentedCloud';
import { LivingInfrastructure } from '../components/LivingInfrastructure';
import { InvestigationShowcase } from '../components/InvestigationShowcase';
import { SimulationLoop } from '../components/SimulationLoop';
import { ControlledActions } from '../components/ControlledActions';
import { AgentSystem } from '../components/AgentSystem';
import { SecurityGovernance } from '../components/SecurityGovernance';
import { MemorySystem } from '../components/MemorySystem';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08090a] text-[#ededed] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FragmentedCloud />
        <LivingInfrastructure />
        <InvestigationShowcase />
        <SimulationLoop />
        <ControlledActions />
        <AgentSystem />
        <SecurityGovernance />
        <MemorySystem />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { LivingSystem } from '../components/LivingSystem';
import { InvestigationSystem } from '../components/InvestigationSystem';
import { SimulationSystem } from '../components/SimulationSystem';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const LivingModelPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#080a08] text-[#f1f2ee] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />
      <main className="pt-28">
        {/* Page Hero Header */}
        <section className="py-20 md:py-28 bg-[#080a08] relative overflow-hidden font-mono text-xs border-b border-white/[0.06]">
          <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />
          <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
            <ScrollReveal direction="up" delay={50} distance="30px">
              <div className="max-w-3xl font-sans">
                <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                  Deep-Dive System Model
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#f1f2ee] leading-[1.0] mb-6">
                  Living System Model <br />
                  <span className="text-[#858a85]">& Digital Twin Sandbox.</span>
                </h1>
                <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-2xl font-sans">
                  Explore how ArchViz continuously models multi-cloud services, dependencies, network boundaries, IAM execution roles, runtime metrics, and simulated digital twin states.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 01. Living Infrastructure Model (6 Relationship Layers) */}
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

import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { AgentWorkforce } from '../components/AgentWorkforce';
import { HowArchVizActs } from '../components/HowArchVizActs';
import { AutonomyControl } from '../components/AutonomyControl';
import { AutonomousLoop } from '../components/AutonomousLoop';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const AgentsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#080a08] text-[#f1f2ee] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />
      <main className="pt-24">
        {/* Page Hero Header with Atmospheric Dark Background */}
        <section className="py-24 md:py-36 bg-[#080a08] relative overflow-hidden font-mono text-xs border-b border-white/[0.06]">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-30 filter contrast-125 brightness-90">
            <img
              src="/assets/images/agents-mesh-bg.jpg"
              alt="Neural agent mesh background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080a08] via-[#080a08]/80 to-[#080a08]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#080a08_90%)]" />
          </div>

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

          <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
            <ScrollReveal direction="up" delay={50} distance="30px">
              <div className="max-w-3xl font-sans">
                <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                  Parallel Intelligence & Control
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#f1f2ee] leading-[1.0] mb-6">
                  Specialized Agent Workforce <br />
                  <span className="text-[#858a85]">& Autonomy Governance.</span>
                </h1>
                <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-2xl font-sans">
                  Discover how 5 specialized domain agents (Security, DevOps, SRE, FinOps, Database) collaborate on a shared graph under deterministic OPA policy guardrails.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 01. 5-Domain Specialized Agent Workforce */}
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

import React from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const SimulationSystem: React.FC = () => {
  return (
    <section className="bg-[#080a08] py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="text-[#38bdf8] font-mono text-xs uppercase tracking-widest mb-4">
              Digital Twin
            </p>
            <h2 className="text-[#f1f2ee] text-3xl md:text-4xl font-sans tracking-tight mb-6">
              Test every change before it hits production.
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 space-y-6">
            <ScrollReveal delay={100}>
              <p className="text-[#858a85] text-lg font-sans leading-relaxed">
                By maintaining a continuous living model of your architecture, ArcViz enables a high-fidelity digital twin of your production environment. You can simulate deployments, test scaling events, and validate security policies without ever touching live infrastructure.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-[#858a85] text-lg font-sans leading-relaxed">
                Evaluate network constraints, predict performance impacts, and ensure compliance with zero blast radius. Changes are scored against your Service Level Objectives before they are ever merged.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300} className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-[#0d100d]/80 border border-white/[0.06] rounded-xl p-6">
              <h3 className="text-[#f1f2ee] font-sans font-medium mb-6 border-b border-white/[0.06] pb-4">
                Simulation Results
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[#505551] font-mono text-xs uppercase tracking-wider mb-2">Before</p>
                  <div className="flex justify-between items-center bg-[#080a08] border border-white/[0.06] p-3 rounded-lg">
                    <span className="text-[#858a85] font-sans text-sm">Latency</span>
                    <span className="text-[#f1f2ee] font-sans text-sm">42ms</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#080a08] border border-white/[0.06] p-3 rounded-lg mt-2">
                    <span className="text-[#858a85] font-sans text-sm">Error rate</span>
                    <span className="text-[#f1f2ee] font-sans text-sm">0.1%</span>
                  </div>
                </div>

                <div>
                  <p className="text-[#505551] font-mono text-xs uppercase tracking-wider mb-2">After (simulated)</p>
                  <div className="flex justify-between items-center bg-[#080a08] border border-white/[0.06] p-3 rounded-lg">
                    <span className="text-[#858a85] font-sans text-sm">Latency</span>
                    <span className="text-[#38bdf8] font-sans text-sm font-medium">38ms</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#080a08] border border-white/[0.06] p-3 rounded-lg mt-2">
                    <span className="text-[#858a85] font-sans text-sm">Error rate</span>
                    <span className="text-[#38bdf8] font-sans text-sm font-medium">0.08%</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#38bdf8]" />
                  <span className="text-[#f1f2ee] font-sans text-sm">All SLO constraints satisfied</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

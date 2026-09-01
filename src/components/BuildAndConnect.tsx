import React from 'react';
import { Layers, Link } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const BuildAndConnect: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#080a08]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
              Onboarding
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#f1f2ee] mb-6">
              Two ways to start.
            </h2>
            <p className="text-base text-[#858a85] leading-relaxed">
              Whether you are architecting a new microservice or bringing order to an existing fleet, ArcViz adapts to your workflow.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-white/[0.06] bg-[#0d100d]/80 p-8 rounded-xl flex flex-col">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.08] mb-6">
                <Layers className="w-6 h-6 text-[#858a85]" />
              </div>
              <h3 className="text-xl font-medium text-[#f1f2ee] mb-3">Start Fresh</h3>
              <p className="text-[#858a85] text-sm leading-relaxed">
                Design your infrastructure visually on a blank canvas. ArcViz compiles your design into production-ready IaC.
              </p>
            </div>
            
            <div className="border border-white/[0.06] bg-[#0d100d]/80 p-8 rounded-xl flex flex-col">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.08] mb-6">
                <Link className="w-6 h-6 text-[#38bdf8]" />
              </div>
              <h3 className="text-xl font-medium text-[#f1f2ee] mb-3">Connect Existing</h3>
              <p className="text-[#858a85] text-sm leading-relaxed">
                Connect your existing AWS, Azure, or GCP accounts with a read-only IAM role. Discovery takes 2 minutes.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

import React from 'react';
import { Database, Network, Shield, Cpu, AlertTriangle, Layers } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const LivingSystem: React.FC = () => {
  return (
    <section className="bg-[#080a08] pt-32 pb-24 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="text-[#38bdf8] font-mono text-xs uppercase tracking-widest mb-4">
              Living Infrastructure Model
            </p>
            <h1 className="text-[#f1f2ee] text-4xl md:text-5xl font-sans tracking-tight mb-6">
              Your infrastructure, as a living system.
            </h1>
            <p className="text-[#858a85] text-lg font-sans leading-relaxed">
              Experience your architecture not as static configurations, but as an active, breathing organism. Real-time connections, live telemetry, and instant relationship mapping across your entire cloud estate.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal delay={100}>
            <div className="bg-[#0d100d]/80 border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.1] transition-colors duration-300">
              <Database className="w-6 h-6 text-[#38bdf8] mb-4" />
              <h3 className="text-[#f1f2ee] text-lg font-sans font-medium mb-2">Services</h3>
              <p className="text-[#858a85] font-sans text-sm leading-relaxed">
                Every container, function, and VM mapped as interconnected nodes
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-[#0d100d]/80 border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.1] transition-colors duration-300">
              <Layers className="w-6 h-6 text-[#38bdf8] mb-4" />
              <h3 className="text-[#f1f2ee] text-lg font-sans font-medium mb-2">Dependencies</h3>
              <p className="text-[#858a85] font-sans text-sm leading-relaxed">
                Upstream and downstream service relationships traced automatically
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-[#0d100d]/80 border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.1] transition-colors duration-300">
              <Network className="w-6 h-6 text-[#38bdf8] mb-4" />
              <h3 className="text-[#f1f2ee] text-lg font-sans font-medium mb-2">Network</h3>
              <p className="text-[#858a85] font-sans text-sm leading-relaxed">
                VPCs, subnets, security groups, and routing across all clouds
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="bg-[#0d100d]/80 border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.1] transition-colors duration-300">
              <Shield className="w-6 h-6 text-[#38bdf8] mb-4" />
              <h3 className="text-[#f1f2ee] text-lg font-sans font-medium mb-2">IAM</h3>
              <p className="text-[#858a85] font-sans text-sm leading-relaxed">
                Roles, policies, and permission boundaries visualized as a graph
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="bg-[#0d100d]/80 border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.1] transition-colors duration-300">
              <Cpu className="w-6 h-6 text-[#38bdf8] mb-4" />
              <h3 className="text-[#f1f2ee] text-lg font-sans font-medium mb-2">Runtime</h3>
              <p className="text-[#858a85] font-sans text-sm leading-relaxed">
                CPU, memory, latency, and error rates correlated to each node
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="bg-[#0d100d]/80 border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.1] transition-colors duration-300">
              <AlertTriangle className="w-6 h-6 text-[#38bdf8] mb-4" />
              <h3 className="text-[#f1f2ee] text-lg font-sans font-medium mb-2">Incidents</h3>
              <p className="text-[#858a85] font-sans text-sm leading-relaxed">
                Historical incidents linked to the infrastructure that caused them
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

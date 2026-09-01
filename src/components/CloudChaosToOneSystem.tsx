import React, { useState } from 'react';
import { GitBranch, Activity, ShieldAlert, DollarSign, FileText, Network, Sparkles, CheckCircle2 } from 'lucide-react';
import { AwsIcon, AzureIcon, GcpIcon } from './icons/ArchVizIcons';
import { ScrollReveal } from './ui/ScrollReveal';

export const CloudChaosToOneSystem: React.FC = () => {
  const [hoveredSource, setHoveredSource] = useState<string | null>(null);

  const sources = [
    { id: 'aws', name: 'AWS Cloud', icon: <AwsIcon className="w-4 h-4 text-[#f1f2ee]" />, category: 'Infrastructure', count: '142 resources' },
    { id: 'azure', name: 'Azure Fleet', icon: <AzureIcon className="w-4 h-4 text-[#f1f2ee]" />, category: 'Infrastructure', count: '48 resources' },
    { id: 'gcp', name: 'Google Cloud', icon: <GcpIcon className="w-4 h-4 text-[#f1f2ee]" />, category: 'Infrastructure', count: '24 resources' },
    { id: 'git', name: 'Git Repositories', icon: <GitBranch className="w-4 h-4 text-[#38bdf8]" />, category: 'Code & Commits', count: '12 active PRs' },
    { id: 'metrics', name: 'APM Metrics', icon: <Activity className="w-4 h-4 text-[#10b981]" />, category: 'Telemetry', count: '4.8k req/s' },
    { id: 'logs', name: 'Distributed Logs', icon: <FileText className="w-4 h-4 text-[#a855f7]" />, category: 'Spans & Traces', count: '1.2M logs/hr' },
    { id: 'security', name: 'Security & IAM', icon: <ShieldAlert className="w-4 h-4 text-[#ef4444]" />, category: 'Compliance', count: '14 OPA rules' },
    { id: 'cost', name: 'Billing & FinOps', icon: <DollarSign className="w-4 h-4 text-[#f59e0b]" />, category: 'FinOps', count: '$1,370/mo spend' },
  ];

  return (
    <section id="cloud-chaos" className="py-16 md:py-24 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              Unification Paradigm
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              Cloud Chaos <br />
              <span className="text-[#858a85]">→ One living system.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl font-sans">
              Modern clouds are fragmented across dozens of dashboards, consoles, git repositories, and metrics tools. ArchViz ingests these disparate streams into a continuous, relational system model.
            </p>
          </div>
        </ScrollReveal>

        {/* Convergence Visual Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Fragmented Cloud Chaos Sources (Slide from Left) */}
          <div className="lg:col-span-5 space-y-3">
            <ScrollReveal direction="left" delay={150} distance="50px">
              <div className="text-[10px] text-[#505551] uppercase pb-2 border-b border-white/[0.06] flex items-center justify-between">
                <span>Fragmented Operational Silos</span>
                <span className="text-[#ef4444]">Disconnected Context</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {sources.map((src) => (
                  <div
                    key={src.id}
                    onMouseEnter={() => setHoveredSource(src.id)}
                    onMouseLeave={() => setHoveredSource(null)}
                    className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                      hoveredSource === src.id
                        ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.15)] scale-[1.02]'
                        : 'border-white/[0.06] bg-[#0d100d]/80 text-[#858a85] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        {src.icon}
                        <span className="font-semibold text-xs text-[#f1f2ee]">{src.name}</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-[#505551] flex items-center justify-between">
                      <span>{src.category}</span>
                      <span className="text-[#38bdf8]">{src.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Middle: Convergence Flow Stream */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-4">
            <ScrollReveal direction="zoom" delay={200} distance="30px">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/15 border border-[#38bdf8]/30 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  <Sparkles className="w-5 h-5 text-[#38bdf8] animate-pulse" />
                </div>
                <span className="text-[10px] text-[#38bdf8] font-semibold uppercase tracking-wider">
                  Real-Time Synthesis
                </span>
                <div className="hidden lg:block w-24 h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent my-1" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Unified Living System Model (Slide from Right) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={250} distance="50px">
              <div className="p-7 sm:p-8 rounded-2xl border border-[#10b981]/35 bg-[#0d100d]/95 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.15)] space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2 text-[#10b981]">
                    <Network className="w-4 h-4" />
                    <span className="font-semibold text-xs tracking-wider uppercase">ONE UNIFIED SYSTEM MODEL</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] font-semibold">
                    Living Graph
                  </span>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <h3 className="text-xl font-medium text-[#f1f2ee]">
                    Connected Context Across Every Cloud Boundary
                  </h3>
                  <p className="text-[#858a85] leading-relaxed">
                    When an engineer asks a question or an anomaly strikes, ArchViz doesn’t check five different dashboards. It traverses a single graph where code commits, network routes, database locks, and billing are mutually correlated.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-mono">
                  <div className="p-3 rounded-xl bg-[#080a08]/90 border border-white/[0.04]">
                    <span className="text-[#505551] block text-[9px] uppercase">Cross-Cloud Linking</span>
                    <span className="text-[#10b981] font-semibold">AWS • Azure • GCP</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#080a08]/90 border border-white/[0.04]">
                    <span className="text-[#505551] block text-[9px] uppercase">Reasoning Speed</span>
                    <span className="text-[#38bdf8] font-semibold">Instant Graph Hops</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#505551]">
                  <span className="flex items-center gap-1.5 text-[#10b981]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Correlated Graph
                  </span>
                  <span>Zero Manual Triage</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

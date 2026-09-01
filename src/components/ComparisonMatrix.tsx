import React from 'react';
import { Check, X, ShieldCheck, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const ComparisonMatrix: React.FC = () => {
  const rows = [
    {
      feature: 'Multi-Cloud Visibility',
      traditional: '6+ disjointed dashboards (CloudWatch, Datadog, AWS/Azure/GCP Consoles)',
      archviz: 'One unified, queryable living graph mapping all dependencies in real time',
      winner: 'archviz'
    },
    {
      feature: 'Pre-Deployment Testing',
      traditional: 'Manual staging rollout and crossing fingers in production',
      archviz: 'Pre-flight digital twin sandbox simulating blast radius and failure modes',
      winner: 'archviz'
    },
    {
      feature: 'Incident Root-Cause Analysis',
      traditional: '45+ minutes manually correlating APM spans, logs, and Git commits',
      archviz: '< 30 seconds automated DAG traversal down to the exact commit and DB lock',
      winner: 'archviz'
    },
    {
      feature: 'Remediation & Rollbacks',
      traditional: 'Static markdown runbooks that are outdated and error-prone',
      archviz: 'Executable procedural memory with automated PR synthesis and twin validation',
      winner: 'archviz'
    },
    {
      feature: 'Host Agent Overhead',
      traditional: 'Invasive daemonsets, sidecars, and eBPF probes consuming node CPU/memory',
      archviz: 'Zero host agents — connects in 2 minutes via read-only cloud-native IAM',
      winner: 'archviz'
    },
    {
      feature: 'AI Safety & Autonomy',
      traditional: 'Unbounded scripts or hallucinated LLM chat outputs with no guardrails',
      archviz: 'Configurable L0–L5 spectrum with strict OPA policy enforcement & dual-key signoff',
      winner: 'archviz'
    }
  ];

  return (
    <section id="comparison" className="py-20 md:py-28 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Subtle Coordinate Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10 space-y-14">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              Architectural Paradigm
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              Why an operating system, <br />
              <span className="text-[#858a85]">not another monitoring dashboard.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-2xl font-sans font-normal">
              Point tools show isolated charts after systems break. ArcViz unifies architecture design, pre-flight simulation, and live self-healing operations into a closed-loop control system.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Table Grid */}
        <ScrollReveal direction="up" delay={120} distance="40px">
          <div className="rounded-2xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 border-b border-white/[0.08] bg-white/[0.02] items-center text-xs">
              <div className="md:col-span-4 text-[#505551] uppercase font-semibold">
                Operational Dimension
              </div>
              <div className="md:col-span-4 text-[#858a85] font-medium hidden md:block">
                Traditional Fragmented Toolchain
              </div>
              <div className="md:col-span-4 text-[#38bdf8] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ArcViz AI-Native Cloud OS</span>
              </div>
            </div>

            {/* Table Body Rows */}
            <div className="divide-y divide-white/[0.06]">
              {rows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 items-start gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  {/* Dimension Name */}
                  <div className="md:col-span-4">
                    <span className="text-sm font-semibold text-[#f1f2ee] font-sans block mb-1">
                      {row.feature}
                    </span>
                    <span className="text-[10px] text-[#505551] font-mono block">
                      Evaluation Metric
                    </span>
                  </div>

                  {/* Traditional Stack */}
                  <div className="md:col-span-4 space-y-1">
                    <div className="flex items-start gap-2 text-xs text-[#858a85] font-sans">
                      <X className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{row.traditional}</span>
                    </div>
                  </div>

                  {/* ArcViz Cloud OS */}
                  <div className="md:col-span-4 space-y-1">
                    <div className="flex items-start gap-2 text-xs text-[#f1f2ee] font-sans">
                      <Check className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{row.archviz}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="p-5 sm:p-6 bg-[#080a08]/80 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#858a85]">
              <div className="flex items-center gap-2 text-[#10b981]">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Host Agents • 100% Read-Only IAM Discovery</span>
              </div>
              <span className="text-[#38bdf8]">
                Deterministic Closed-Loop Autonomy
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

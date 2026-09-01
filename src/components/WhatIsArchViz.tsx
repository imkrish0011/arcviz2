import React, { useState } from 'react';
import { Bot, Cpu, Network, ShieldCheck, ArrowUp, Zap, Database, Terminal } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const WhatIsArchViz: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'agents' | 'intelligence' | 'infra'>('intelligence');

  return (
    <section id="what-is-archviz" className="py-16 md:py-24 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              Architecture Stack
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              What is ArchViz? <br />
              <span className="text-[#858a85]">The intelligence layer above your cloud.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl font-sans">
              ArchViz is not a replacement cloud and not a literal desktop OS. It sits above your existing multi-cloud accounts to build a continuous, living system model that powers specialized AI agents.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Tier Layer Stack Visual Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Interactive 3-Tier Layer Architecture */}
          <div className="lg:col-span-7 space-y-4">
            <ScrollReveal direction="left" delay={150} distance="50px">
              {/* Tier 03 (Top): Specialized AI Agents */}
              <div 
                onClick={() => setActiveTier('agents')}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                  activeTier === 'agents'
                    ? 'border-[#38bdf8] bg-[#38bdf8]/15 shadow-[0_0_35px_rgba(56,189,248,0.2)] scale-[1.01]'
                    : 'border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/30 flex-shrink-0">
                      <Bot className="w-5 h-5 text-[#38bdf8]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#38bdf8] uppercase tracking-wider block font-semibold">Tier 03 / Operations</span>
                      <h3 className="text-base font-semibold text-[#f1f2ee] font-sans">Specialized AI Agent Workforce</h3>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded bg-[#38bdf8]/15 text-[#38bdf8] font-semibold self-start sm:self-auto">
                    5 Domain Agents
                  </span>
                </div>
                <p className="text-xs text-[#858a85] font-sans leading-relaxed mb-3">
                  Security, DevOps, Reliability, FinOps, and Database agents operating concurrently on a shared, unified graph model.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.04] text-[10px] text-[#505551]">
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04]">Parallel Reasoning</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04]">IaC Patch Drafting</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04]">OPA Bound Execution</span>
                </div>
              </div>

              {/* Connecting Flow Arrow Up */}
              <div className="flex justify-center my-1.5">
                <div className="flex items-center gap-2 text-[10px] text-[#505551] px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                  <ArrowUp className="w-3 h-3 text-[#38bdf8]" />
                  <span>Continuous graph synchronization & reasoning loop</span>
                </div>
              </div>

              {/* Tier 02 (Middle): ArchViz Intelligence Layer */}
              <div 
                onClick={() => setActiveTier('intelligence')}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                  activeTier === 'intelligence'
                    ? 'border-[#10b981] bg-[#10b981]/15 shadow-[0_0_35px_rgba(16,185,129,0.2)] scale-[1.01]'
                    : 'border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30 flex-shrink-0">
                      <Network className="w-5 h-5 text-[#10b981]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#10b981] uppercase tracking-wider block font-semibold">Tier 02 / Core Layer</span>
                      <h3 className="text-base font-semibold text-[#f1f2ee] font-sans">ArchViz Living System Model</h3>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] font-semibold self-start sm:self-auto">
                    Unified Graph Engine
                  </span>
                </div>
                <p className="text-xs text-[#858a85] font-sans leading-relaxed mb-3">
                  Unifies multi-cloud VPCs, Kubernetes clusters, telemetry, IAM policies, and historical incidents into a queryable digital twin.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.04] text-[10px] text-[#505551]">
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04]">Bi-Directional Graph</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04]">Temporal Snapshotting</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04]">Digital Twin Sandbox</span>
                </div>
              </div>

              {/* Connecting Flow Arrow Up */}
              <div className="flex justify-center my-1.5">
                <div className="flex items-center gap-2 text-[10px] text-[#505551] px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                  <ArrowUp className="w-3 h-3 text-[#10b981]" />
                  <span>Read-only cross-account IAM discovery (0 host agents)</span>
                </div>
              </div>

              {/* Tier 01 (Bottom): Existing Cloud Infrastructure */}
              <div 
                onClick={() => setActiveTier('infra')}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                  activeTier === 'infra'
                    ? 'border-[#a855f7] bg-[#a855f7]/15 shadow-[0_0_35px_rgba(168,85,247,0.2)] scale-[1.01]'
                    : 'border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#a855f7]/15 border border-[#a855f7]/30 flex-shrink-0">
                      <Cpu className="w-5 h-5 text-[#a855f7]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#a855f7] uppercase tracking-wider block font-semibold">Tier 01 / Foundation</span>
                      <h3 className="text-base font-semibold text-[#f1f2ee] font-sans">Existing Cloud Infrastructure</h3>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded bg-[#a855f7]/15 text-[#a855f7] font-semibold self-start sm:self-auto">
                    Zero Migration Needed
                  </span>
                </div>
                <p className="text-xs text-[#858a85] font-sans leading-relaxed mb-3">
                  Your current AWS, Azure, GCP accounts, Kubernetes clusters, databases, and CI/CD pipelines remain untouched and un-migrated.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.04] text-[10px] text-[#505551]">
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04]">AWS VPC & ECS</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04]">Azure VNet & AKS</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04]">GCP Network & GKE</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04]">Terraform IaC</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Selected Layer Deep-Dive HUD Panel */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={250} distance="50px">
              <div className="p-7 sm:p-8 rounded-2xl border border-white/[0.12] bg-[#0d100d]/95 backdrop-blur-xl flex flex-col justify-between shadow-2xl h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                    <span className="text-[10px] text-[#505551] uppercase tracking-wider">Architecture HUD Detail</span>
                    <span className="text-[#38bdf8] font-semibold px-2.5 py-0.5 rounded bg-[#38bdf8]/10 text-[11px]">
                      {activeTier === 'agents' ? 'Layer 03: Agents' : activeTier === 'intelligence' ? 'Layer 02: Living Graph' : 'Layer 01: Multi-Cloud'}
                    </span>
                  </div>

                  {activeTier === 'agents' && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-medium text-[#f1f2ee] font-sans">
                        Five Specialized AI Agents Operating in Parallel
                      </h4>
                      <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                        Rather than a single generic chat model, ArchViz deploys specialized domain agents (Security, DevOps, Reliability, FinOps, Database) that inspect telemetry, trace code diffs, and simulate fixes collaboratively.
                      </p>

                      <div className="p-4 rounded-xl bg-[#080a08]/90 border border-white/[0.06] space-y-2 text-[11px]">
                        <div className="text-[#38bdf8] font-semibold flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5" /> Parallel Execution Characteristics:
                        </div>
                        <ul className="space-y-1.5 text-[#858a85]">
                          <li>• Concurrent sub-agent dispatch across multi-cloud domains</li>
                          <li>• Automated pull request synthesis with pre-tested fixes</li>
                          <li>• Strict deterministic OPA policy boundary enforcement</li>
                        </ul>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#050605] border border-white/[0.06] text-[10px] space-y-1 font-mono">
                        <div className="text-[#505551] flex items-center gap-1">
                          <Terminal className="w-3 h-3 text-[#38bdf8]" />
                          <span>Telemetry Delegation Trace</span>
                        </div>
                        <p className="text-[#858a85]">
                          [AgentMesh:DISPATCH] reliability(ecs.prod), db(aurora.primary), sec(iam.role)
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTier === 'intelligence' && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-medium text-[#f1f2ee] font-sans">
                        The Living Infrastructure Graph Engine
                      </h4>
                      <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                        The intelligence core maps every VPC, subnet, container task, relational database, security group, and IAM policy into a unified multi-cloud graph. It understands how a change in one service cascades across boundaries.
                      </p>

                      <div className="p-4 rounded-xl bg-[#080a08]/90 border border-white/[0.06] space-y-2 text-[11px]">
                        <div className="text-[#10b981] font-semibold flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5" /> Graph Engine Core Properties:
                        </div>
                        <ul className="space-y-1.5 text-[#858a85]">
                          <li>• Bi-directional graph linking metrics, logs, and code diffs</li>
                          <li>• Temporal snapshotting for instant point-in-time diffs</li>
                          <li>• Real-time digital twin state simulation</li>
                        </ul>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#050605] border border-white/[0.06] text-[10px] space-y-1 font-mono">
                        <div className="text-[#505551] flex items-center gap-1">
                          <Terminal className="w-3 h-3 text-[#10b981]" />
                          <span>Graph Topology Query Syntax</span>
                        </div>
                        <p className="text-[#858a85]">
                          {'GRAPH.MATCH(service: "checkout")-[:DEPENDS_ON]->(db: "aurora")'}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTier === 'infra' && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-medium text-[#f1f2ee] font-sans">
                        Zero Infrastructure Migration or Code Rewrites
                      </h4>
                      <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                        You do not need to redeploy or rearchitect your systems. Connect through standard cloud-native read-only IAM roles in under 2 minutes with zero host agent installation.
                      </p>

                      <div className="p-4 rounded-xl bg-[#080a08]/90 border border-white/[0.06] space-y-2 text-[11px]">
                        <div className="text-[#a855f7] font-semibold flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5" /> Enterprise Multi-Cloud Compatibility:
                        </div>
                        <ul className="space-y-1.5 text-[#858a85]">
                          <li>• AWS (EC2, ECS, EKS, Lambda, RDS, VPC, IAM)</li>
                          <li>• Azure (Container Apps, AKS, SQL Database, VNet)</li>
                          <li>• Google Cloud (GKE, Cloud Run, Cloud SQL, VPC)</li>
                        </ul>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#050605] border border-white/[0.06] text-[10px] space-y-1 font-mono">
                        <div className="text-[#505551] flex items-center gap-1">
                          <Terminal className="w-3 h-3 text-[#a855f7]" />
                          <span>Read-Only IAM Policy Scope</span>
                        </div>
                        <p className="text-[#858a85]">
                          Statement: [ Effect: "Allow", Action: ["*Describe*", "*Get*", "*List*"] ]
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#505551]">
                  <span>Click any tier on the left to inspect</span>
                  <span className="text-[#10b981] flex items-center gap-1 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" /> Read-Only Discovery
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

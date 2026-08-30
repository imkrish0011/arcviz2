import React, { useState } from 'react';
import { Bot, Cpu, Network, ShieldCheck, ArrowUp } from 'lucide-react';
import { AwsIcon, AzureIcon, GcpIcon } from './icons/ArchVizIcons';
import { ScrollReveal } from './ui/ScrollReveal';

export const WhatIsArchViz: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'agents' | 'intelligence' | 'infra'>('intelligence');

  return (
    <section id="what-is-archviz" className="py-32 md:py-44 border-t border-white/[0.06] bg-[#070907] relative overflow-hidden font-mono text-xs">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              01 / Architecture Architecture
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              What is ArchViz? <br />
              <span className="text-[#858a85]">The intelligence layer above your cloud.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl font-sans">
              ArchViz is not a replacement cloud and not a literal desktop OS. It is an AI-native intelligence and control layer that connects to your existing AWS, Azure, and GCP infrastructure to build a continuous, living system model.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Tier Layer Stack Visual Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Interactive 3-Tier Visual Diagram (Slide from Left) */}
          <div className="lg:col-span-7 space-y-4">
            <ScrollReveal direction="left" delay={150} distance="50px">
              {/* Tier 3 (Top): Specialized AI Agents */}
              <div 
                onClick={() => setActiveTier('agents')}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                  activeTier === 'agents'
                    ? 'border-[#38bdf8] bg-[#38bdf8]/15 shadow-[0_0_30px_rgba(56,189,248,0.2)] scale-[1.01]'
                    : 'border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/30">
                      <Bot className="w-5 h-5 text-[#38bdf8]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#38bdf8] uppercase tracking-wider block font-semibold">Tier 03 / Operations</span>
                      <h3 className="text-base font-semibold text-[#f1f2ee] font-sans">Specialized AI Agent Workforce</h3>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#38bdf8]/15 text-[#38bdf8] font-semibold">
                    Reasoning & Execution
                  </span>
                </div>
                <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                  Security, DevOps, Reliability, FinOps, and Database agents operating autonomously on a shared, unified graph model.
                </p>
              </div>

              {/* Connecting Flow Arrow Up */}
              <div className="flex justify-center my-1">
                <div className="flex items-center gap-2 text-[10px] text-[#505551] px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.04]">
                  <ArrowUp className="w-3 h-3 text-[#38bdf8]" />
                  <span>Continuous graph synchronization & reasoning</span>
                </div>
              </div>

              {/* Tier 2 (Middle): ArchViz Intelligence Layer */}
              <div 
                onClick={() => setActiveTier('intelligence')}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                  activeTier === 'intelligence'
                    ? 'border-[#10b981] bg-[#10b981]/15 shadow-[0_0_30px_rgba(16,185,129,0.2)] scale-[1.01]'
                    : 'border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#10b981]/15 border border-[#10b981]/30">
                      <Network className="w-5 h-5 text-[#10b981]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#10b981] uppercase tracking-wider block font-semibold">Tier 02 / Core Layer</span>
                      <h3 className="text-base font-semibold text-[#f1f2ee] font-sans">ArchViz Living System Model</h3>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] font-semibold">
                    Unified Graph Engine
                  </span>
                </div>
                <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                  Unifies multi-cloud VPCs, Kubernetes clusters, telemetry, IAM policies, and historical incidents into a queryable digital twin.
                </p>
              </div>

              {/* Connecting Flow Arrow Up */}
              <div className="flex justify-center my-1">
                <div className="flex items-center gap-2 text-[10px] text-[#505551] px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.04]">
                  <ArrowUp className="w-3 h-3 text-[#10b981]" />
                  <span>Read-only cross-account IAM discovery (0 host agents)</span>
                </div>
              </div>

              {/* Tier 1 (Bottom): Existing Cloud Infrastructure */}
              <div 
                onClick={() => setActiveTier('infra')}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                  activeTier === 'infra'
                    ? 'border-[#a855f7] bg-[#a855f7]/15 shadow-[0_0_30px_rgba(168,85,247,0.2)] scale-[1.01]'
                    : 'border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#a855f7]/15 border border-[#a855f7]/30">
                      <Cpu className="w-5 h-5 text-[#a855f7]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#a855f7] uppercase tracking-wider block font-semibold">Tier 01 / Foundation</span>
                      <h3 className="text-base font-semibold text-[#f1f2ee] font-sans">Existing Cloud Infrastructure</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AwsIcon className="w-4 h-4 text-[#f1f2ee]" />
                    <AzureIcon className="w-4 h-4 text-[#f1f2ee]" />
                    <GcpIcon className="w-4 h-4 text-[#f1f2ee]" />
                  </div>
                </div>
                <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                  Your current AWS, Azure, GCP accounts, Kubernetes clusters, databases, and CI/CD pipelines remain untouched and un-migrated.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Selected Layer Deep Dive (Slide from Right) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={250} distance="50px">
              <div className="p-8 rounded-2xl border border-white/[0.12] bg-[#0d100d]/95 backdrop-blur-xl flex flex-col justify-between shadow-2xl h-full min-h-[460px]">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                    <span className="text-[10px] text-[#505551] uppercase tracking-wider">Architecture Layer Detail</span>
                    <span className="text-[#38bdf8] font-semibold px-2 py-0.5 rounded bg-[#38bdf8]/10">
                      {activeTier === 'agents' ? 'Operations' : activeTier === 'intelligence' ? 'Unified Graph' : 'Multi-Cloud'}
                    </span>
                  </div>

                  {activeTier === 'agents' && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-medium text-[#f1f2ee] font-sans">
                        Specialized AI Agents Working in Parallel
                      </h4>
                      <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                        Rather than a single generic chat model, ArchViz deploys specialized domain agents (Security, DevOps, Reliability, FinOps, Database) that inspect telemetry, trace code diffs, and simulate fixes collaboratively.
                      </p>
                      <div className="p-4 rounded-xl bg-[#080a08]/90 border border-white/[0.06] space-y-2 text-[11px]">
                        <div className="text-[#38bdf8] font-semibold">Key Capabilities:</div>
                        <ul className="space-y-1.5 text-[#858a85]">
                          <li>• Parallel root cause investigation in seconds</li>
                          <li>• Pre-flight Terraform patch drafting & testing</li>
                          <li>• Bounded autonomous execution under OPA guardrails</li>
                        </ul>
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
                        <div className="text-[#10b981] font-semibold">Core Properties:</div>
                        <ul className="space-y-1.5 text-[#858a85]">
                          <li>• Bi-directional graph linking metrics, logs & code</li>
                          <li>• Temporal snapshotting for instant historical diffs</li>
                          <li>• Real-time digital twin state simulation</li>
                        </ul>
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
                        <div className="text-[#a855f7] font-semibold">Native Compatibility:</div>
                        <ul className="space-y-1.5 text-[#858a85]">
                          <li>• AWS (EC2, ECS, EKS, Lambda, RDS, VPC, IAM)</li>
                          <li>• Azure (Container Apps, AKS, SQL, VNet)</li>
                          <li>• GCP (GKE, Cloud Run, Cloud SQL, VPC)</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#505551]">
                  <span>Click tiers on left to inspect</span>
                  <span className="text-[#10b981] flex items-center gap-1">
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

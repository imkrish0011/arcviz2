import React, { useState } from 'react';
import { GitPullRequest, Activity, Search, Database, AlertTriangle, CheckCircle2, Clock, Radar } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const InvestigationSystem: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3);

  const investigationSteps = [
    {
      time: "14:32:10",
      tag: "DEPLOYMENT",
      icon: <GitPullRequest className="w-4 h-4 text-[#38bdf8]" />,
      title: "Deployment detected",
      detail: "Commit #8f31b9d merged to main via PR #429. Task definition v43 rolled to ECS.",
      targetNode: "ecs-checkout",
      statusColor: "text-[#38bdf8]"
    },
    {
      time: "14:32:18",
      tag: "ANOMALY",
      icon: <Activity className="w-4 h-4 text-[#f59e0b]" />,
      title: "Latency anomaly detected",
      detail: "P99 latency spiked from 42ms to 890ms on route POST /api/v1/checkout.",
      targetNode: "alb-ingress",
      statusColor: "text-[#f59e0b]"
    },
    {
      time: "14:32:24",
      tag: "CORRELATION",
      icon: <Search className="w-4 h-4 text-[#38bdf8]" />,
      title: "Dependency correlation found",
      detail: "Traversed DAG: svc-checkout-prod -> aurora-pg-primary connection lock.",
      targetNode: "ecs-checkout",
      statusColor: "text-[#38bdf8]"
    },
    {
      time: "14:32:31",
      tag: "BOTTLENECK",
      icon: <Database className="w-4 h-4 text-[#ef4444]" />,
      title: "Database connection pool saturation identified",
      detail: "Active connection count reached 495 / 500 max limit. Worker threads stalled.",
      targetNode: "rds-aurora",
      statusColor: "text-[#ef4444]"
    },
    {
      time: "14:32:36",
      tag: "ROOT CAUSE",
      icon: <AlertTriangle className="w-4 h-4 text-[#10b981]" />,
      title: "Root cause confidence: 94%",
      detail: "PR #429 introduced unclosed transaction handle in checkout loop without defer db.Close().",
      targetNode: "rds-aurora",
      statusColor: "text-[#10b981]"
    }
  ];

  const currentStep = investigationSteps[activeStepIndex];

  return (
    <section id="investigation" className="py-32 md:py-44 border-t border-white/[0.06] bg-[#080a08] relative overflow-hidden">
      {/* Background Star Trails Celestial Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-20 filter contrast-125">
        <img
          src="/assets/images/star-trails-vortex.jpg"
          alt="Star trails vortex temporal background"
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08] via-[#080a08]/80 to-[#080a08]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
              03 / Bidirectional Incident Investigation
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              Ask what happened. <br />
              <span className="text-[#858a85]">ArchViz finds out why.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl">
              Investigation is bidirectionally linked with your infrastructure topology. Select any chronological incident milestone to illuminate the affected dependency path in real time.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline + Root Cause Synthesis Split with Left/Right Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left: Open Vertical Event Timeline (Slide from Left) */}
          <div className="lg:col-span-6 space-y-3 font-mono text-xs">
            <ScrollReveal direction="left" delay={150} distance="50px">
              <div className="text-[#505551] text-[10px] uppercase pb-3 border-b border-white/[0.08] flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
                  Correlated Event Stream (14:32:10 — 14:32:36 UTC)
                </span>
                <span className="text-[#38bdf8]">5 Milestones</span>
              </div>

              <div className="space-y-3 pt-2">
                {investigationSteps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 cursor-pointer border ${
                      activeStepIndex === idx
                        ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_25px_rgba(56,189,248,0.18)] scale-[1.01]'
                        : 'border-white/[0.06] bg-[#0d100d]/80 text-[#858a85] hover:border-white/20 hover:bg-[#0d100d]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        {step.icon}
                        <span className="font-semibold text-sm text-[#f1f2ee]">{step.title}</span>
                      </div>
                      <span className="text-[10px] text-[#505551] px-2 py-0.5 rounded bg-white/[0.04]">{step.time} UTC</span>
                    </div>
                    <p className="text-xs text-[#858a85] font-sans leading-relaxed mt-1">
                      {step.detail}
                    </p>
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Active Illuminated Path & Evidence Diff (Slide from Right) */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={250} distance="50px">
              <div className="p-8 rounded-xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-xl flex flex-col justify-between font-mono text-xs shadow-2xl h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#38bdf8]/5 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                    <span className="text-[10px] uppercase tracking-wider text-[#505551] flex items-center gap-2">
                      <Radar className="w-4 h-4 text-[#38bdf8] animate-spin-slow" />
                      Illuminated Dependency Path
                    </span>
                    <span className="text-[#38bdf8] font-semibold px-2.5 py-1 rounded bg-[#38bdf8]/10 text-xs">
                      {currentStep.tag}
                    </span>
                  </div>

                  <div className="space-y-5 mb-6">
                    <div>
                      <span className="text-[10px] text-[#505551] block uppercase">Targeted Resource Node</span>
                      <span className="text-lg font-semibold text-[#f1f2ee]">{currentStep.targetNode}</span>
                    </div>

                    <div className="p-5 rounded-lg border border-white/[0.08] bg-[#080a08]/90 text-[11px] leading-relaxed text-[#858a85] space-y-2">
                      <div className="text-[#f1f2ee] font-medium flex items-center justify-between">
                        <span>Correlated Root Evidence:</span>
                        <span className="text-[#10b981] text-[10px]">DAG Traversal Complete</span>
                      </div>
                      <p className="text-xs text-[#f1f2ee] font-sans">
                        {currentStep.detail}
                      </p>
                    </div>

                    {/* Timeline Position Bar */}
                    <div className="p-3 rounded-lg border border-white/[0.04] bg-[#080a08]/60 flex items-center justify-between text-[10px]">
                      <span className="text-[#505551]">Investigation Phase</span>
                      <span className="text-[#38bdf8]">Step {activeStepIndex + 1} of {investigationSteps.length}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  <span className="text-[#505551]">Click any milestone to illuminate DAG path</span>
                  <span className="text-[#10b981] flex items-center gap-1.5 font-medium px-2 py-0.5 rounded bg-[#10b981]/10">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 94% Verified Confidence
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

import React, { useState } from 'react';
import { GitPullRequest, Activity, Search, Database, AlertTriangle, CheckCircle2, Clock, Network } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { AwsIcon } from './icons/ArchVizIcons';

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
      statusColor: "text-[#38bdf8]",
      illuminatedNodes: ['ecs-checkout'],
      rootExplanation: "CI/CD automated trigger applied new container revision v43 across 8 tasks."
    },
    {
      time: "14:32:18",
      tag: "ANOMALY",
      icon: <Activity className="w-4 h-4 text-[#f59e0b]" />,
      title: "Latency anomaly detected",
      detail: "P99 latency spiked from 42ms to 890ms on route POST /api/v1/checkout.",
      targetNode: "alb-ingress",
      statusColor: "text-[#f59e0b]",
      illuminatedNodes: ['alb-ingress', 'ecs-checkout'],
      rootExplanation: "CloudWatch APM span alerts flagged response queue buildup on ingress target group."
    },
    {
      time: "14:32:24",
      tag: "CORRELATION",
      icon: <Search className="w-4 h-4 text-[#38bdf8]" />,
      title: "Dependency correlation found",
      detail: "Traversed graph: svc-checkout-prod -> aurora-pg-primary connection lock.",
      targetNode: "ecs-checkout",
      statusColor: "text-[#38bdf8]",
      illuminatedNodes: ['alb-ingress', 'ecs-checkout', 'rds-aurora'],
      rootExplanation: "Traversed 4 graph hops from ingress ALB to backend PostgreSQL database cluster."
    },
    {
      time: "14:32:31",
      tag: "BOTTLENECK",
      icon: <Database className="w-4 h-4 text-[#ef4444]" />,
      title: "Database connection pool saturation identified",
      detail: "Active connection count reached 495 / 500 max limit. Worker threads stalled.",
      targetNode: "rds-aurora",
      statusColor: "text-[#ef4444]",
      illuminatedNodes: ['ecs-checkout', 'rds-aurora'],
      rootExplanation: "Aurora connection pool exhausted by unclosed client handles waiting for timeout."
    },
    {
      time: "14:32:36",
      tag: "ROOT CAUSE",
      icon: <AlertTriangle className="w-4 h-4 text-[#10b981]" />,
      title: "Root cause confidence: 94%",
      detail: "PR #429 introduced unclosed transaction handle in checkout loop without defer db.Close().",
      targetNode: "rds-aurora",
      statusColor: "text-[#10b981]",
      illuminatedNodes: ['alb-ingress', 'ecs-checkout', 'rds-aurora'],
      rootExplanation: "Verified diff in controller loop: transaction opened per request without release."
    }
  ];

  const currentStep = investigationSteps[activeStepIndex];

  return (
    <section id="investigation" className="py-32 md:py-44 border-t border-white/[0.06] bg-[#080a08] relative overflow-hidden">
      {/* Background Subtle Star Trails Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-15 filter contrast-125">
        <img
          src="/assets/images/star-trails-vortex.jpg"
          alt="Star trails vortex background"
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08] via-[#080a08]/85 to-[#080a08]" />
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
              <span className="text-[#858a85]">ArchViz traverses the graph.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl">
              Investigation is bidirectionally linked with your infrastructure topology. Select any chronological incident milestone to illuminate the affected dependency path in real time.
            </p>
          </div>
        </ScrollReveal>

        {/* Live Timeline + Live Topology Investigation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch font-mono text-xs">
          {/* Left: Interactive Chronological Timeline (Slide from Left) */}
          <div className="lg:col-span-5 space-y-3">
            <ScrollReveal direction="left" delay={150} distance="50px">
              <div className="text-[#505551] text-[10px] uppercase pb-3 border-b border-white/[0.08] flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
                  Correlated Event Stream (14:32:10 — 14:32:36 UTC)
                </span>
                <span className="text-[#38bdf8]">5 Milestones</span>
              </div>

              <div className="space-y-2.5 pt-2">
                {investigationSteps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 cursor-pointer border ${
                      activeStepIndex === idx
                        ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.18)] scale-[1.01]'
                        : 'border-white/[0.06] bg-[#0d100d]/80 text-[#858a85] hover:border-white/20 hover:bg-[#0d100d]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        {step.icon}
                        <span className="font-semibold text-sm text-[#f1f2ee]">{step.title}</span>
                      </div>
                      <span className="text-[10px] text-[#505551] px-2 py-0.5 rounded bg-white/[0.04]">{step.time}</span>
                    </div>
                    <p className="text-xs text-[#858a85] font-sans leading-relaxed mt-1">
                      {step.detail}
                    </p>
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Live Topology Propagation & Root Cause Diagnosis (Slide from Right) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={250} distance="50px">
              <div className="p-6 sm:p-8 rounded-xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-md flex flex-col justify-between shadow-2xl h-full relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                    <span className="text-[10px] uppercase tracking-wider text-[#505551] flex items-center gap-2">
                      <Network className="w-4 h-4 text-[#38bdf8]" />
                      Live Incident Topology Propagation
                    </span>
                    <span className="text-[#38bdf8] font-semibold px-2.5 py-1 rounded bg-[#38bdf8]/10 text-xs">
                      {currentStep.tag}
                    </span>
                  </div>

                  {/* Visual Infrastructure Graph Nodes Showing Illuminated Propagation Path */}
                  <div className="space-y-4 py-3">
                    {/* Ingress ALB Node */}
                    <div className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                      currentStep.illuminatedNodes.includes('alb-ingress')
                        ? 'border-[#f59e0b] bg-[#f59e0b]/10 shadow-[0_0_20px_rgba(245,158,11,0.15)] text-[#f1f2ee]'
                        : 'border-white/[0.06] bg-[#080a08]/80 text-[#858a85]'
                    }`}>
                      <div className="flex items-center gap-3">
                        <AwsIcon className="w-4 h-4" />
                        <div>
                          <div className="font-semibold text-sm text-[#f1f2ee]">alb-public-prod</div>
                          <div className="text-[10px] text-[#505551]">Application Load Balancer • us-east-1</div>
                        </div>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded ${
                        currentStep.illuminatedNodes.includes('alb-ingress') ? 'bg-[#f59e0b]/20 text-[#f59e0b]' : 'text-[#505551]'
                      }`}>
                        {currentStep.illuminatedNodes.includes('alb-ingress') ? 'P99 Spike: 890ms' : 'Normal Ingress'}
                      </span>
                    </div>

                    {/* Downward Connector with Pulse Line */}
                    <div className="flex justify-center my-0.5">
                      <div className={`w-[1px] h-6 ${
                        currentStep.illuminatedNodes.includes('ecs-checkout') ? 'bg-[#ef4444]' : 'bg-white/[0.15]'
                      }`} />
                    </div>

                    {/* ECS Checkout Service Node */}
                    <div className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                      currentStep.illuminatedNodes.includes('ecs-checkout')
                        ? 'border-[#ef4444] bg-[#ef4444]/15 shadow-[0_0_25px_rgba(239,68,68,0.2)] text-[#f1f2ee]'
                        : 'border-white/[0.06] bg-[#080a08]/80 text-[#858a85]'
                    }`}>
                      <div className="flex items-center gap-3">
                        <AwsIcon className="w-4 h-4" />
                        <div>
                          <div className="font-semibold text-sm text-[#f1f2ee]">svc-checkout-prod (ECS Fargate)</div>
                          <div className="text-[10px] text-[#505551]">Commit #8f31b9d • Task Def v43 (8 tasks)</div>
                        </div>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded ${
                        currentStep.illuminatedNodes.includes('ecs-checkout') ? 'bg-[#ef4444]/20 text-[#ef4444] font-medium' : 'text-[#505551]'
                      }`}>
                        {currentStep.illuminatedNodes.includes('ecs-checkout') ? 'Thread Lock' : 'Normal'}
                      </span>
                    </div>

                    {/* Downward Connector with Pulse Line */}
                    <div className="flex justify-center my-0.5">
                      <div className={`w-[1px] h-6 ${
                        currentStep.illuminatedNodes.includes('rds-aurora') ? 'bg-[#ef4444]' : 'bg-white/[0.15]'
                      }`} />
                    </div>

                    {/* Aurora PostgreSQL Database Node */}
                    <div className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                      currentStep.illuminatedNodes.includes('rds-aurora')
                        ? 'border-[#ef4444] bg-[#ef4444]/15 shadow-[0_0_25px_rgba(239,68,68,0.2)] text-[#f1f2ee]'
                        : 'border-white/[0.06] bg-[#080a08]/80 text-[#858a85]'
                    }`}>
                      <div className="flex items-center gap-3">
                        <Database className="w-4 h-4 text-[#38bdf8]" />
                        <div>
                          <div className="font-semibold text-sm text-[#f1f2ee]">aurora-pg-primary</div>
                          <div className="text-[10px] text-[#505551]">PostgreSQL v2 Multi-AZ • us-east-1a</div>
                        </div>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded ${
                        currentStep.illuminatedNodes.includes('rds-aurora') ? 'bg-[#ef4444]/20 text-[#ef4444] font-medium' : 'text-[#505551]'
                      }`}>
                        {currentStep.illuminatedNodes.includes('rds-aurora') ? '495/500 Saturated' : '128/500 Handles'}
                      </span>
                    </div>
                  </div>

                  {/* Correlated Evidence Detail */}
                  <div className="p-4 rounded-lg border border-white/[0.06] bg-[#080a08]/90 text-[11px] text-[#858a85] leading-relaxed mt-4">
                    <span className="text-[#f1f2ee] font-semibold block mb-1">Graph Traversal Diagnostic:</span>
                    {currentStep.rootExplanation}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between text-[11px]">
                  <span className="text-[#505551]">Step {activeStepIndex + 1} of 5</span>
                  <span className="text-[#10b981] flex items-center gap-1.5 font-medium px-2 py-0.5 rounded bg-[#10b981]/10">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 94% Confidence Root Cause
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

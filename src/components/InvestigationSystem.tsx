import React, { useState } from 'react';
import { GitPullRequest, Activity, Search, Database, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const InvestigationSystem: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3);

  const investigationSteps = [
    {
      time: "14:32:10",
      tag: "DEPLOYMENT",
      icon: <GitPullRequest className="w-3.5 h-3.5 text-[#38bdf8]" />,
      title: "Deployment detected",
      detail: "Commit #8f31b9d merged to main via PR #429. Task definition v43 rolled to ECS.",
      targetNode: "ecs-checkout",
      statusColor: "text-[#38bdf8]"
    },
    {
      time: "14:32:18",
      tag: "ANOMALY",
      icon: <Activity className="w-3.5 h-3.5 text-[#f59e0b]" />,
      title: "Latency anomaly detected",
      detail: "P99 latency spiked from 42ms to 890ms on route POST /api/v1/checkout.",
      targetNode: "alb-ingress",
      statusColor: "text-[#f59e0b]"
    },
    {
      time: "14:32:24",
      tag: "CORRELATION",
      icon: <Search className="w-3.5 h-3.5 text-[#38bdf8]" />,
      title: "Dependency correlation found",
      detail: "Traversed DAG: svc-checkout-prod -> aurora-pg-primary connection lock.",
      targetNode: "ecs-checkout",
      statusColor: "text-[#38bdf8]"
    },
    {
      time: "14:32:31",
      tag: "BOTTLENECK",
      icon: <Database className="w-3.5 h-3.5 text-[#ef4444]" />,
      title: "Database connection pool saturation identified",
      detail: "Active connection count reached 495 / 500 max limit. Worker threads stalled.",
      targetNode: "rds-aurora",
      statusColor: "text-[#ef4444]"
    },
    {
      time: "14:32:36",
      tag: "ROOT CAUSE",
      icon: <AlertTriangle className="w-3.5 h-3.5 text-[#10b981]" />,
      title: "Root cause confidence: 94%",
      detail: "PR #429 introduced unclosed transaction handle in checkout loop without defer db.Close().",
      targetNode: "rds-aurora",
      statusColor: "text-[#10b981]"
    }
  ];

  const currentStep = investigationSteps[activeStepIndex];

  return (
    <section id="investigation" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
            03 / Bidirectional Investigation
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            Ask what happened. <br />
            <span className="text-[#858a85]">ArchViz finds out why.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Investigation is bidirectionally linked with your infrastructure topology. Select any chronological incident milestone to illuminate the affected dependency path in real time.
          </p>
        </div>

        {/* Bidirectional Timeline + Graph Canvas */}
        <div className="p-8 sm:p-14 rounded-lg border border-white/[0.07] bg-[#0d100d]/60 backdrop-blur-sm">
          {/* Query Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.06] gap-4">
            <div className="font-mono text-xs text-[#f2f2ee]">
              <span className="text-[#505551] mr-2">INVESTIGATION:</span>
              <span>"Why did checkout latency spike after the 14:32 deployment?"</span>
            </div>
            <span className="text-[11px] font-mono text-[#858a85]">
              5 correlated milestones • Automated DAG traversal
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Interactive Timeline (6 Cols) */}
            <div className="lg:col-span-6 space-y-3 font-mono text-xs">
              {investigationSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full p-4 rounded text-left transition-all duration-200 cursor-pointer border ${
                    activeStepIndex === idx
                      ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                      : 'border-white/[0.06] bg-[#080a08]/80 text-[#858a85] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      {step.icon}
                      <span className="font-semibold text-sm text-[#f2f2ee]">{step.title}</span>
                    </div>
                    <span className="text-[10px] text-[#505551]">{step.time} UTC</span>
                  </div>
                  <p className="text-xs text-[#858a85] font-sans leading-relaxed mt-1">
                    {step.detail}
                  </p>
                </button>
              ))}
            </div>

            {/* Right: Active Illuminated Topology Node Path (6 Cols) */}
            <div className="lg:col-span-6 p-6 rounded border border-white/[0.08] bg-[#080a08] flex flex-col justify-between font-mono text-xs min-h-[340px]">
              <div>
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/[0.06]">
                  <span className="text-[10px] uppercase text-[#505551]">Illuminated Path</span>
                  <span className="text-[#38bdf8]">{currentStep.tag}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[10px] text-[#505551] block uppercase">Targeted Resource</span>
                    <span className="text-sm font-semibold text-[#f2f2ee]">{currentStep.targetNode}</span>
                  </div>

                  <div className="p-3.5 rounded border border-white/[0.06] bg-white/[0.02] text-[11px] leading-relaxed text-[#858a85]">
                    <span className="text-[#f2f2ee] font-medium block mb-1">Correlated Evidence:</span>
                    {currentStep.detail}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                <span className="text-[#505551]">Click any milestone to inspect DAG lineage</span>
                <span className="text-[#10b981] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 94% Confidence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

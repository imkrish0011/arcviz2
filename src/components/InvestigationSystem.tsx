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
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
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

        {/* Open Bidirectional Timeline + Graph Layout (No heavy outer box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Open Vertical Event Timeline (6 Cols) */}
          <div className="lg:col-span-6 space-y-3 font-mono text-xs">
            <div className="text-[#505551] text-[10px] uppercase pb-2 border-b border-white/[0.06]">
              Correlated Event Stream (14:32:10 — 14:32:36 UTC)
            </div>

            {investigationSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`w-full p-4 rounded text-left transition-all duration-200 cursor-pointer border ${
                  activeStepIndex === idx
                    ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.1)]'
                    : 'border-white/[0.06] bg-[#0d100d]/80 text-[#858a85] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    {step.icon}
                    <span className="font-semibold text-sm text-[#f1f2ee]">{step.title}</span>
                  </div>
                  <span className="text-[10px] text-[#505551]">{step.time} UTC</span>
                </div>
                <p className="text-xs text-[#858a85] font-sans leading-relaxed mt-1">
                  {step.detail}
                </p>
              </button>
            ))}
          </div>

          {/* Right: Active Illuminated Path & Evidence Diff (6 Cols) */}
          <div className="lg:col-span-6 p-8 rounded-lg border border-white/[0.08] bg-[#0d100d]/90 flex flex-col justify-between font-mono text-xs shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/[0.06]">
                <span className="text-[10px] uppercase text-[#505551]">Illuminated Dependency Path</span>
                <span className="text-[#38bdf8] font-semibold">{currentStep.tag}</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[10px] text-[#505551] block uppercase">Targeted Resource Node</span>
                  <span className="text-base font-semibold text-[#f1f2ee]">{currentStep.targetNode}</span>
                </div>

                <div className="p-4 rounded border border-white/[0.06] bg-[#080a08] text-[11px] leading-relaxed text-[#858a85]">
                  <span className="text-[#f1f2ee] font-medium block mb-1">Correlated Root Evidence:</span>
                  {currentStep.detail}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
              <span className="text-[#505551]">Click any milestone to illuminate DAG path</span>
              <span className="text-[#10b981] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 94% Verified Confidence
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

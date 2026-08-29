import React from 'react';

import { CheckCircle2, AlertTriangle, GitPullRequest, Database, Activity, Search } from 'lucide-react';

export const InvestigationShowcase: React.FC = () => {
  const timelineEvents = [
    {
      time: "14:32:10",
      type: "DEPLOYMENT",
      icon: <GitPullRequest className="w-3.5 h-3.5 text-[#38bdf8]" />,
      title: "Deployment detected",
      detail: "Commit #8f31b9d merged to main via PR #429. Task definition v43 rolled to ECS.",
      status: "info"
    },
    {
      time: "14:32:18",
      type: "ANOMALY",
      icon: <Activity className="w-3.5 h-3.5 text-[#f59e0b]" />,
      title: "Latency anomaly detected",
      detail: "P99 latency spiked from 42ms to 890ms on route POST /api/v1/checkout.",
      status: "warning"
    },
    {
      time: "14:32:24",
      type: "CORRELATION",
      icon: <Search className="w-3.5 h-3.5 text-[#38bdf8]" />,
      title: "Dependency correlation found",
      detail: "Traversed DAG: svc-checkout-prod -> aurora-pg-primary connection lock.",
      status: "info"
    },
    {
      time: "14:32:31",
      type: "BOTTLENECK",
      icon: <Database className="w-3.5 h-3.5 text-[#ef4444]" />,
      title: "Database connection pool saturation identified",
      detail: "Active connection count reached 495 / 500 max limit. Worker threads stalled.",
      status: "incident"
    },
    {
      time: "14:32:36",
      type: "ROOT CAUSE",
      icon: <AlertTriangle className="w-3.5 h-3.5 text-[#10b981]" />,
      title: "Root cause confidence: 94%",
      detail: "PR #429 introduced unclosed transaction handle in checkout loop without defer db.Close().",
      status: "healthy"
    }
  ];

  return (
    <section id="investigation" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a86] uppercase tracking-wider block mb-4">
            03 / Root Cause Investigation
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            Ask what happened. <br />
            <span className="text-[#858a86]">ArchViz finds out why.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Instead of manually clicking through 20 tabs of logs, CloudWatch dashboards, and pull requests, ask in natural language. ArchViz traverses topology, telemetry, and change history to assemble an evidence-backed incident timeline.
          </p>
        </div>

        {/* Investigation Timeline UI (Spacious engineering timeline) */}
        <div className="p-8 sm:p-14 rounded-lg border border-white/[0.06] bg-[#0d100d]/60 backdrop-blur-sm">
          {/* Query Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-10 border-b border-white/[0.06] gap-4">
            <div className="font-mono text-sm text-[#f2f2ee]">
              <span className="text-[#505551] mr-2">QUERY:</span>
              <span>"Why did checkout latency increase after the 14:32 deployment?"</span>
            </div>
            <span className="text-[11px] font-mono text-[#858a86] self-start sm:self-auto">
              Synthesized in 1.2s across 4 data planes
            </span>
          </div>

          {/* Timeline Sequence */}
          <div className="space-y-6 relative">
            {/* Connecting Vertical Line */}
            <div className="hidden sm:block absolute top-3 bottom-3 left-[95px] w-[1px] bg-white/[0.06]" />

            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 relative z-10">
                {/* Timestamp */}
                <div className="font-mono text-xs text-[#858a86] w-20 flex-shrink-0 pt-1">
                  {evt.time} UTC
                </div>

                {/* Event Card */}
                <div className="flex-grow p-4 sm:p-5 rounded border border-white/[0.06] bg-[#080a08]/80 font-mono text-xs w-full">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      {evt.icon}
                      <span className="font-semibold text-sm text-[#f2f2ee]">{evt.title}</span>
                    </div>
                    <span className="text-[10px] uppercase text-[#505551]">{evt.type}</span>
                  </div>
                  <p className="text-xs text-[#858a86] font-sans leading-relaxed mt-1">
                    {evt.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Root Cause Conclusion Strip */}
          <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#10b981]">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Remediation simulated: Task definition rollback to v42 restores pool allocation</span>
            </div>
            <span className="text-[#505551]">Zero LLM hallucinations • Evidence-verified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

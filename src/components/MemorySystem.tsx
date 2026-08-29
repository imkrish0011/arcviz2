import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const MemorySystem: React.FC = () => {
  const [activeMemory, setActiveMemory] = useState<number>(2);

  const memoryLayers = [
    {
      name: "State Memory",
      tag: "Topology & Config",
      summary: "Tracks how topology, subnets, routing tables, and parameters changed across months and years.",
      example: "Stored snapshot of vpc-08a9f before v2 migration with rollback map."
    },
    {
      name: "Event Memory",
      tag: "Temporal Lineage",
      summary: "Correlates every git commit, CI/CD artifact, and cloud scaling event with its exact impact on metrics.",
      example: "Indexed commit #8f31b9d causing +400ms DB connection latency."
    },
    {
      name: "Incident Memory",
      tag: "Root-Cause Corpus",
      summary: "Stores complete post-mortem graphs, telemetry traces, and verified resolution paths.",
      example: "Recognized recurring redis thread pool lock from July 14 outage and suggested instant mitigation."
    },
    {
      name: "Procedural Memory",
      tag: "Validated Runbooks",
      summary: "Remembers tested, safe remediation steps, parameter rollbacks, and blue/green switch procedures.",
      example: "Autonomous task rollback procedure executed in 1.4s with 0 errors."
    },
    {
      name: "Policy Memory",
      tag: "Governance & Rules",
      summary: "Keeps history of security exceptions, compliance audits, and architectural guardrail enforcement.",
      example: "Enforced SOC2 encryption rule across 14 new S3 storage buckets automatically."
    }
  ];

  return (
    <section id="memory" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a86] uppercase tracking-wider block mb-4">
            08 / Operational Memory System
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            Every incident makes <br />
            <span className="text-[#888d96]">the system smarter.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Stateless chatbots start from zero every session. ArchViz maintains five persistent memory layers so your infrastructure accumulates operational intelligence with every deployment and resolution.
          </p>
        </div>

        {/* Connected Operational Knowledge Architecture */}
        <div className="p-8 sm:p-12 rounded-lg border border-white/[0.06] bg-[#0d100d]/60 backdrop-blur-sm">
          {/* 5 Layer Line Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pb-8 mb-8 border-b border-white/[0.06] text-xs font-mono">
            {memoryLayers.map((layer, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMemory(idx)}
                className={`p-3 rounded text-left transition-colors cursor-pointer border ${
                  activeMemory === idx
                    ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                    : 'border-transparent text-[#858a86] hover:text-[#f2f2ee]'
                }`}
              >
                <span className="text-[10px] text-[#505551] block mb-1">0{idx + 1}</span>
                <span className="font-semibold block mb-0.5">{layer.name}</span>
                <span className="text-[10px] text-[#38bdf8]">{layer.tag}</span>
              </button>
            ))}
          </div>

          {/* Active Layer Example Citation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs">
            <div>
              <span className="text-[#38bdf8] uppercase text-[10px] block mb-1">
                Memory Layer: {memoryLayers[activeMemory].name}
              </span>
              <p className="text-sm font-sans text-[#f2f2ee] max-w-xl leading-relaxed">
                "{memoryLayers[activeMemory].example}"
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#10b981] flex-shrink-0 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Persisted to Knowledge Graph</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const MemoryLineage: React.FC = () => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(2);

  const memoryLayers = [
    {
      name: "State Memory",
      type: "Topology & Parameters",
      desc: "Stores full historical snapshots of VPCs, subnets, routing tables, and infrastructure parameters across months and years.",
      citation: "Retrieved snapshot of vpc-08a9f before v2 migration with zero-downtime rollback lineage."
    },
    {
      name: "Event Memory",
      type: "Temporal Commit Lineage",
      desc: "Correlates every git commit, CI/CD artifact, and cloud auto-scaling event with its exact downstream metric effect.",
      citation: "Indexed commit #8f31b9d causing +400ms database connection latency."
    },
    {
      name: "Incident Memory",
      type: "Post-Mortem Corpus",
      desc: "Maintains complete post-mortem DAGs, correlated telemetry traces, and verified root-cause resolutions.",
      citation: "Recognized recurring Redis thread starvation pattern from July 14 incident and suggested instant mitigation."
    },
    {
      name: "Procedural Memory",
      type: "Validated Runbooks",
      desc: "Preserves tested, safe remediation workflows, parameter rollbacks, and blue/green traffic shifts.",
      citation: "Autonomous container rollback procedure executed in 1.4s with zero errors."
    },
    {
      name: "Policy Memory",
      type: "Governance & Exceptions",
      desc: "Maintains a history of security exceptions, compliance audits, and organizational guardrail enforcement.",
      citation: "Enforced SOC2 encryption standard across 14 new storage buckets automatically."
    }
  ];

  const currentLayer = memoryLayers[selectedLayerIndex];

  return (
    <section id="memory" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
            08 / Persistent Operational Memory
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            Every incident makes <br />
            <span className="text-[#858a85]">the system smarter.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Stateless chatbots start from zero every session. ArchViz maintains five persistent operational memory layers so your infrastructure accumulates intelligence with every deployment and resolution.
          </p>
        </div>

        {/* Connected Operational Knowledge Architecture */}
        <div className="p-8 sm:p-14 rounded-lg border border-white/[0.07] bg-[#0d100d]/60 backdrop-blur-sm">
          {/* Memory Layers Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pb-8 mb-8 border-b border-white/[0.06] font-mono text-xs">
            {memoryLayers.map((layer, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedLayerIndex(idx)}
                className={`p-3 rounded text-left transition-colors cursor-pointer border ${
                  selectedLayerIndex === idx
                    ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                    : 'border-transparent text-[#858a85] hover:text-[#f2f2ee]'
                }`}
              >
                <span className="text-[10px] text-[#505551] block mb-1">0{idx + 1}</span>
                <span className="font-semibold block mb-0.5">{layer.name}</span>
                <span className="text-[10px] text-[#38bdf8]">{layer.type}</span>
              </button>
            ))}
          </div>

          {/* Active Memory Operational Context */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs">
            <div>
              <span className="text-[#38bdf8] uppercase text-[10px] block mb-1">
                Memory Layer: {currentLayer.name} ({currentLayer.type})
              </span>
              <p className="text-sm font-sans text-[#f2f2ee] max-w-xl leading-relaxed mb-3">
                {currentLayer.desc}
              </p>
              <div className="p-3 rounded border border-white/[0.06] bg-[#080a08] text-[11px] text-[#858a85]">
                <span className="text-[#505551] uppercase text-[9px] block mb-0.5">Indexed Citation:</span>
                "{currentLayer.citation}"
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#10b981] flex-shrink-0 text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>Persisted to Knowledge Graph</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Database, 
  Clock, 
  AlertCircle, 
  FileCode, 
  ShieldCheck, 
  
  CheckCircle2
} from 'lucide-react';

export const MemorySystem: React.FC = () => {
  const [activeMemory, setActiveMemory] = useState<number>(2);

  const memoryLayers = [
    {
      name: "State Memory",
      tag: "Topology & Config",
      icon: <Database className="w-4 h-4 text-[#0ea5e9]" />,
      summary: "Tracks how topology, subnets, routing tables, and parameters changed across months and years.",
      example: "Stored snapshot of vpc-08a9f before v2 migration with rollback map."
    },
    {
      name: "Event Memory",
      tag: "Temporal Lineage",
      icon: <Clock className="w-4 h-4 text-[#0ea5e9]" />,
      summary: "Correlates every git commit, CI/CD artifact, and cloud scaling event with its exact impact on metrics.",
      example: "Indexed commit #8f31b9d causing +400ms DB connection latency."
    },
    {
      name: "Incident Memory",
      tag: "Root-Cause Corpus",
      icon: <AlertCircle className="w-4 h-4 text-[#ef4444]" />,
      summary: "Stores complete post-mortem graphs, telemetry traces, and verified resolution paths.",
      example: "Recognized recurring redis thread pool lock from July 14 outage and suggested instant mitigation."
    },
    {
      name: "Procedural Memory",
      tag: "Validated Runbooks",
      icon: <FileCode className="w-4 h-4 text-[#10b981]" />,
      summary: "Remembers tested, safe remediation steps, parameter rollbacks, and blue/green switch procedures.",
      example: "Autonomous task rollback procedure executed in 1.4s with 0 errors."
    },
    {
      name: "Policy Memory",
      tag: "Governance & Rules",
      icon: <ShieldCheck className="w-4 h-4 text-[#0ea5e9]" />,
      summary: "Keeps history of security exceptions, compliance audits, and architectural guardrail enforcement.",
      example: "Enforced SOC2 encryption rule across 14 new S3 storage buckets automatically."
    }
  ];

  return (
    <section id="memory" className="py-24 md:py-36 border-t border-[#1e2229] bg-[#08090a]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono text-[#0ea5e9] tracking-wider uppercase block mb-3">
            08 / Operational Memory System
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#ededed] leading-tight mb-6">
            Every incident makes <br />
            <span className="text-[#888d96]">the system smarter.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Stateless chatbots start from zero every session. ArchViz maintains five persistent memory layers so your infrastructure accumulates operational intelligence with every deployment and resolution.
          </p>
        </div>

        {/* 5 Memory Layers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8">
          {memoryLayers.map((layer, idx) => (
            <button
              key={idx}
              onClick={() => setActiveMemory(idx)}
              className={`p-5 rounded text-left transition-all border font-mono flex flex-col justify-between ${
                activeMemory === idx
                  ? 'bg-[#0e1013] border-[#0ea5e9] text-[#ededed] shadow-lg'
                  : 'bg-[#0a0b10] border-[#1e2229] text-[#888d96] hover:border-[#2e3440] hover:text-[#ededed]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-7 h-7 rounded bg-[#12151a] border border-[#1e2229] flex items-center justify-center">
                    {layer.icon}
                  </div>
                  <span className="text-[10px] text-[#5e636e]">0{idx + 1}</span>
                </div>
                <h4 className="text-xs font-bold text-[#ededed] mb-1">{layer.name}</h4>
                <span className="text-[10px] text-[#0ea5e9] block mb-2">{layer.tag}</span>
              </div>
              <p className="text-[11px] font-sans text-[#888d96] leading-relaxed mt-2">{layer.summary}</p>
            </button>
          ))}
        </div>

        {/* Selected Layer Operational Example */}
        <div className="p-6 md:p-8 rounded bg-[#0e1013] border border-[#1e2229] shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1e2229] text-xs font-mono">
            <span className="text-[#ededed]">MEMORY CORPUS ENTRY: {memoryLayers[activeMemory].name.toUpperCase()}</span>
            <span className="text-[#10b981] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Indexed in graph
            </span>
          </div>

          <div className="p-4 rounded bg-[#08090a] border border-[#1e2229] font-mono text-xs text-[#ededed]">
            <span className="text-[#5e636e] block text-[10px] uppercase mb-1">Context Citation:</span>
            <p className="text-sm font-sans leading-relaxed text-[#ededed]">
              "{memoryLayers[activeMemory].example}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

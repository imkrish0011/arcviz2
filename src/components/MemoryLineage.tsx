import React, { useState } from 'react';
import { Database, CheckCircle2, History, GitCommit, ShieldCheck, Sparkles } from 'lucide-react';

interface MemoryQuery {
  id: string;
  query: string;
  matchedLayer: string;
  similarity: string;
  retrievedIncident: string;
  date: string;
  rootCause: string;
  testedRunbook: string;
}

export const MemoryLineage: React.FC = () => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(2); // Incident Memory default
  const [selectedQueryId, setSelectedQueryId] = useState<string>('query-1');

  const memoryLayers = [
    {
      name: "State Memory",
      type: "Topology & Parameters",
      icon: <Database className="w-4 h-4 text-[#38bdf8]" />,
      desc: "Stores full historical snapshots of VPCs, subnets, routing tables, and infrastructure parameters across months and years.",
      count: "2,410 Snapshots",
      citation: "Retrieved snapshot of vpc-08a9f before v2 migration with zero-downtime rollback lineage."
    },
    {
      name: "Event Memory",
      type: "Temporal Commit Lineage",
      icon: <GitCommit className="w-4 h-4 text-[#10b981]" />,
      desc: "Correlates every git commit, CI/CD artifact, and cloud auto-scaling event with its exact downstream metric effect.",
      count: "18,920 Correlated Commits",
      citation: "Indexed commit #8f31b9d causing +400ms database connection latency."
    },
    {
      name: "Incident Memory",
      type: "Post-Mortem Corpus",
      icon: <History className="w-4 h-4 text-[#ef4444]" />,
      desc: "Maintains complete post-mortem DAGs, correlated telemetry traces, and verified root-cause resolutions.",
      count: "142 Indexed Outages",
      citation: "Recognized recurring Redis thread starvation pattern from July 14 incident and suggested instant mitigation."
    },
    {
      name: "Procedural Memory",
      type: "Validated Runbooks",
      icon: <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />,
      desc: "Preserves tested, safe remediation workflows, parameter rollbacks, and blue/green traffic shifts.",
      count: "38 Validated Runbooks",
      citation: "Autonomous container rollback procedure executed in 1.4s with zero errors."
    },
    {
      name: "Policy Memory",
      type: "Governance & Exceptions",
      icon: <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />,
      desc: "Maintains a history of security exceptions, compliance audits, and organizational guardrail enforcement.",
      count: "94 Policy Guardrails",
      citation: "Enforced SOC2 encryption standard across 14 new storage buckets automatically."
    }
  ];

  const queries: MemoryQuery[] = [
    {
      id: 'query-1',
      query: "Has this Aurora pool saturation occurred before?",
      matchedLayer: "Incident Memory + Procedural Runbooks",
      similarity: "98.4%",
      retrievedIncident: "INC-2024-0714: Aurora Connection Starvation",
      date: "July 14, 2024 (Resolved in 2.1m)",
      rootCause: "Unclosed sql.DB handle in /checkout controller loop under 4k req/s load.",
      testedRunbook: "Apply Task Definition Rollback to v42 + Set Aurora max_connections buffer."
    },
    {
      id: 'query-2',
      query: "What caused the last CloudFront 502 spike in eu-west-1?",
      matchedLayer: "Event Memory + State Snapshots",
      similarity: "96.1%",
      retrievedIncident: "INC-2024-0802: Edge Ingress TLS Handshake Timeout",
      date: "August 02, 2024 (Resolved in 1.4m)",
      rootCause: "ACM certificate expiration on secondary origin target alb-eu-west-1.",
      testedRunbook: "Autonomous ACM cert auto-renewal & ALB target group health re-probe."
    },
    {
      id: 'query-3',
      query: "What are the verified rollback steps for service 'checkout'?",
      matchedLayer: "Procedural Memory",
      similarity: "100.0%",
      retrievedIncident: "RUNBOOK-08: Zero-Downtime ECS Rolling Rollback",
      date: "Validated across 12 deployments",
      rootCause: "Automated blue/green ECS task definition rollback with 0 connection drops.",
      testedRunbook: "1. Update ECS task def -> 2. Probe 8 new tasks -> 3. Drain old v43 containers."
    }
  ];

  const currentLayer = memoryLayers[selectedLayerIndex];
  const activeQuery = queries.find(q => q.id === selectedQueryId) || queries[0];

  return (
    <section id="memory" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20 md:mb-28">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
            08 / Persistent Operational Memory
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            Every incident makes <br />
            <span className="text-[#858a85]">the system smarter.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Stateless chatbots start from zero every session. ArchViz maintains five persistent operational memory layers so your infrastructure accumulates organizational intelligence with every deployment and resolution.
          </p>
        </div>

        {/* Multi-Dimensional Memory Architecture Canvas */}
        <div className="rounded-lg border border-white/[0.07] bg-[#0d100d]/80 backdrop-blur-md p-6 sm:p-12 space-y-10">
          {/* Top 5 Memory Layer Tabs */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/[0.06] gap-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#f2f2ee]">
                <Database className="w-4 h-4 text-[#38bdf8]" />
                <span className="font-semibold uppercase tracking-wider">Five Persistent Operational Memory Layers</span>
              </div>
              <span className="text-[11px] font-mono text-[#858a85]">
                Selected: <span className="text-[#38bdf8] font-medium">{currentLayer.name}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-mono text-xs">
              {memoryLayers.map((layer, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`p-4 rounded text-left transition-all duration-200 cursor-pointer border relative ${
                    selectedLayerIndex === idx
                      ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee] shadow-[0_0_20px_rgba(56,189,248,0.12)]'
                      : 'border-white/[0.06] bg-[#080a08]/80 text-[#858a85] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-[#505551]">0{idx + 1}</span>
                    {layer.icon}
                  </div>
                  <span className="font-semibold text-sm block text-[#f2f2ee] mb-0.5">{layer.name}</span>
                  <span className="text-[10px] text-[#38bdf8] block mb-1">{layer.type}</span>
                  <span className="text-[9px] text-[#505551] block">{layer.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Memory Retrieval Console */}
          <div className="p-6 sm:p-8 rounded border border-white/[0.06] bg-[#080a08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/[0.06] gap-4">
              <div>
                <span className="text-[10px] font-mono text-[#505551] uppercase block">Query Operational Knowledge Graph</span>
                <span className="text-sm font-mono text-[#f2f2ee] font-medium">Select Operational Query:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {queries.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQueryId(q.id)}
                    className={`px-3 py-1.5 rounded font-mono text-xs transition-colors cursor-pointer border ${
                      selectedQueryId === q.id
                        ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f2f2ee]'
                        : 'border-white/[0.06] bg-white/[0.02] text-[#858a85] hover:text-[#f2f2ee]'
                    }`}
                  >
                    "{q.query.slice(0, 32)}..."
                  </button>
                ))}
              </div>
            </div>

            {/* Query Retrieval Synthesis View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-mono text-xs">
              {/* Query & Matched Historical Outage (6 Cols) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded border border-white/[0.04] bg-white/[0.01] space-y-2">
                  <span className="text-[#505551] text-[10px] uppercase block">Natural Language Prompt</span>
                  <div className="text-sm text-[#f2f2ee] font-medium italic">"{activeQuery.query}"</div>
                </div>

                <div className="p-4 rounded border border-white/[0.04] bg-[#050605] space-y-2 text-[11px]">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                    <span className="text-[#38bdf8] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Matched Historical Incident
                    </span>
                    <span className="text-[#10b981] font-semibold">{activeQuery.similarity} Similarity</span>
                  </div>

                  <div>
                    <span className="text-[#f2f2ee] font-semibold block">{activeQuery.retrievedIncident}</span>
                    <span className="text-[10px] text-[#505551]">{activeQuery.date}</span>
                  </div>

                  <p className="text-[#858a85] leading-relaxed pt-1">
                    <strong className="text-[#f2f2ee]">Historical Root Cause:</strong> {activeQuery.rootCause}
                  </p>
                </div>
              </div>

              {/* Instant Verified Resolution Runbook (6 Cols) */}
              <div className="lg:col-span-6 p-6 rounded border border-white/[0.06] bg-[#050605] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.04]">
                    <span className="text-[10px] text-[#505551] uppercase">Retrieved Remediation Runbook</span>
                    <span className="text-[#10b981] text-[10px]">Verified Resolution</span>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-[#f2f2ee]">
                      Automated Remediation Procedure:
                    </div>
                    <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                      {activeQuery.testedRunbook}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-[#505551]">
                  <span className="flex items-center gap-1.5 text-[#10b981]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Retrieved in 1.1s from Knowledge Graph
                  </span>
                  <span>100% Replayable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

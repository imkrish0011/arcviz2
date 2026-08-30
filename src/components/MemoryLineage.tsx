import React, { useState } from 'react';
import { Database, CheckCircle2, History, GitCommit, ShieldCheck, Sparkles, BrainCircuit, Search } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

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
    <section id="memory" className="py-32 md:py-44 border-t border-white/[0.06] bg-[#080a08] relative overflow-hidden">
      {/* Background Dark Purple Neon Wave Substrate */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-20 filter saturate-150 brightness-90">
        <img
          src="/assets/images/neon-purple-ribbon.jpg"
          alt="Neural memory wave background"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08] via-[#080a08]/85 to-[#080a08]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
              08 / Persistent Operational Memory
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              Every incident makes <br />
              <span className="text-[#858a85]">the system smarter.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl">
              Stateless chatbots start from zero every session. ArchViz maintains five persistent operational memory layers so your infrastructure accumulates organizational intelligence with every deployment and resolution.
            </p>
          </div>
        </ScrollReveal>

        {/* Multi-Dimensional Memory Architecture */}
        <div className="space-y-10">
          {/* Top 5 Memory Layer Tabs */}
          <ScrollReveal direction="up" delay={120} distance="30px">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/[0.08] gap-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#f1f2ee]">
                  <BrainCircuit className="w-4 h-4 text-[#a855f7]" />
                  <span className="font-semibold uppercase tracking-wider">Five Persistent Operational Memory Layers</span>
                </div>
                <span className="text-[11px] text-[#858a85]">
                  Active Substrate: <span className="text-[#a855f7] font-medium">{currentLayer.name}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-mono text-xs">
                {memoryLayers.map((layer, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedLayerIndex(idx)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 cursor-pointer border ${
                      selectedLayerIndex === idx
                        ? 'border-[#a855f7] bg-[#a855f7]/15 text-[#f1f2ee] shadow-[0_0_25px_rgba(168,85,247,0.2)] scale-[1.02]'
                        : 'border-white/[0.06] bg-[#0d100d]/80 text-[#858a85] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-[#505551]">0{idx + 1}</span>
                      {layer.icon}
                    </div>
                    <span className="font-semibold text-sm block text-[#f1f2ee] mb-0.5">{layer.name}</span>
                    <span className="text-[10px] text-[#a855f7] block mb-1">{layer.type}</span>
                    <span className="text-[9px] text-[#505551] block">{layer.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Interactive Memory Retrieval Console with Left/Right Side-Entrance */}
          <div className="space-y-6">
            <ScrollReveal direction="up" delay={200} distance="30px">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/[0.06] gap-4 font-mono text-xs">
                <span className="text-[#f1f2ee] font-medium flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-[#38bdf8]" />
                  Select Semantic Infrastructure Query:
                </span>

                <div className="flex flex-wrap gap-2">
                  {queries.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => setSelectedQueryId(q.id)}
                      className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer border ${
                        selectedQueryId === q.id
                          ? 'border-[#38bdf8] bg-[#38bdf8]/20 text-[#f1f2ee] font-medium shadow-sm'
                          : 'border-white/[0.06] bg-[#0d100d]/80 text-[#858a85] hover:text-[#f1f2ee]'
                      }`}
                    >
                      "{q.query.slice(0, 32)}..."
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Query Retrieval Synthesis Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-mono text-xs">
              {/* Query & Matched Historical Outage (Slide from Left) */}
              <div className="lg:col-span-6 space-y-4">
                <ScrollReveal direction="left" delay={260} distance="50px">
                  <div className="p-5 rounded-xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-md space-y-2 shadow-lg">
                    <span className="text-[#505551] text-[10px] uppercase block">Natural Language Incident Query</span>
                    <div className="text-sm sm:text-base text-[#f1f2ee] font-medium italic">"{activeQuery.query}"</div>
                  </div>

                  <div className="p-5 rounded-xl border border-white/[0.08] bg-[#050605] space-y-3 text-[11px] shadow-lg mt-4">
                    <div className="flex items-center justify-between pb-2 mb-1 border-b border-white/[0.04]">
                      <span className="text-[#a855f7] flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5" /> Matched Historical Incident
                      </span>
                      <span className="text-[#10b981] font-semibold px-2 py-0.5 rounded bg-[#10b981]/10">{activeQuery.similarity} Similarity</span>
                    </div>

                    <div>
                      <span className="text-[#f1f2ee] font-semibold text-sm block">{activeQuery.retrievedIncident}</span>
                      <span className="text-[10px] text-[#505551]">{activeQuery.date}</span>
                    </div>

                    <p className="text-[#858a85] leading-relaxed pt-1">
                      <strong className="text-[#f1f2ee]">Historical Root Cause:</strong> {activeQuery.rootCause}
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Instant Verified Resolution Runbook (Slide from Right) */}
              <div className="lg:col-span-6">
                <ScrollReveal direction="right" delay={260} distance="50px">
                  <div className="p-8 rounded-xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-xl flex flex-col justify-between shadow-2xl h-full relative overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                        <span className="text-[10px] text-[#505551] uppercase tracking-wider">Retrieved Remediation Runbook</span>
                        <span className="text-[#10b981] text-[10px] px-2 py-0.5 rounded bg-[#10b981]/10 font-semibold">Verified Resolution</span>
                      </div>

                      <div className="space-y-4">
                        <div className="text-base font-semibold text-[#f1f2ee]">
                          Automated Remediation Procedure:
                        </div>
                        <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                          {activeQuery.testedRunbook}
                        </p>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#505551]">
                      <span className="flex items-center gap-1.5 text-[#10b981]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Retrieved in 1.1s from Knowledge Graph
                      </span>
                      <span className="text-[#a855f7]">100% Replayable</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Database, CheckCircle2, History, GitCommit, ShieldCheck, Sparkles, Network, Search } from 'lucide-react';
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
      type: "Topology Snapshots",
      icon: <Database className="w-4 h-4 text-[#38bdf8]" />,
      desc: "Preserves temporal snapshots of multi-cloud VPCs, subnets, routing tables, and infrastructure parameters across months and years.",
      count: "2,410 Snapshots",
      citation: "Historical topology diff for VPC vpc-08a9f retrieved before v2 migration with zero-downtime rollback lineage."
    },
    {
      name: "Event Memory",
      type: "Commit & Metric Lineage",
      icon: <GitCommit className="w-4 h-4 text-[#10b981]" />,
      desc: "Correlates every git commit, CI/CD artifact, and auto-scaling event with its exact downstream metric effect in the graph.",
      count: "18,920 Commits",
      citation: "Correlated commit #8f31b9d with +400ms database connection latency spike."
    },
    {
      name: "Incident Memory",
      type: "Post-Mortem Graphs",
      icon: <History className="w-4 h-4 text-[#ef4444]" />,
      desc: "Maintains complete post-mortem incident graphs, correlated telemetry traces, and verified root-cause resolutions.",
      count: "142 Incident Graphs",
      citation: "Recognized recurring connection starvation pattern from July 14 incident and retrieved validated mitigation."
    },
    {
      name: "Procedural Memory",
      type: "Validated Runbooks",
      icon: <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />,
      desc: "Preserves tested, deterministic remediation workflows, parameter rollbacks, and blue/green traffic shifts.",
      count: "38 Runbooks",
      citation: "Autonomous container rollback procedure executed with zero client disconnects."
    },
    {
      name: "Policy Memory",
      type: "Governance & Exceptions",
      icon: <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />,
      desc: "Maintains an immutable ledger of security exceptions, compliance audits, and organizational guardrail enforcement.",
      count: "94 Policy Rules",
      citation: "Enforced SOC2 encryption standard across multi-cloud storage buckets automatically."
    }
  ];

  const queries: MemoryQuery[] = [
    {
      id: 'query-1',
      query: "Has this Aurora pool saturation occurred before?",
      matchedLayer: "Incident Memory + Procedural Runbooks",
      similarity: "98.4%",
      retrievedIncident: "INC-2024-0714: Aurora Connection Starvation",
      date: "July 14, 2024 (Resolved via Rollback)",
      rootCause: "Unclosed sql.DB handle in /checkout controller loop under 4k req/s load.",
      testedRunbook: "Apply Task Definition Rollback to v42 + Set Aurora max_connections buffer."
    },
    {
      id: 'query-2',
      query: "What caused the last CloudFront 502 spike in eu-west-1?",
      matchedLayer: "Event Memory + State Snapshots",
      similarity: "96.1%",
      retrievedIncident: "INC-2024-0802: Edge Ingress TLS Handshake Timeout",
      date: "August 02, 2024 (Resolved via ACM Renewal)",
      rootCause: "ACM certificate expiration on secondary origin target alb-eu-west-1.",
      testedRunbook: "ACM certificate auto-renewal & ALB target group health re-probe."
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
    <section id="memory" className="pt-24 pb-20 md:pt-32 md:pb-28 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Seamless Top Atmospheric Background Layer - Extends smoothly down */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-70 filter contrast-125 brightness-110 saturate-125">
        <img
          src="/assets/images/memory-lineage-bg.jpg"
          alt="Cosmic memory lineage background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08]/50 via-[#080a08]/85 to-[#080a08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#080a08_90%)]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Page Hero Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-20 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
              Persistent Operational Memory
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#f1f2ee] leading-[1.0] mb-6">
              Every incident makes <br />
              <span className="text-[#858a85]">the system smarter.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-2xl font-sans">
              Stateless tools start from zero every session. ArchViz maintains five persistent operational memory layers so your infrastructure accumulates organizational intelligence with every deployment and resolution.
            </p>
          </div>
        </ScrollReveal>

        {/* Multi-Dimensional Memory Architecture */}
        <div className="space-y-10">
          {/* Top 5 Memory Layer Tabs */}
          <ScrollReveal direction="up" delay={120} distance="30px">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/[0.08] gap-2">
                <div className="flex items-center gap-2 text-[#f1f2ee]">
                  <Network className="w-4 h-4 text-[#a855f7]" />
                  <span className="font-semibold uppercase tracking-wider">Five Persistent Operational Memory Layers</span>
                </div>
                <span className="text-[11px] text-[#858a85]">
                  Selected Layer: <span className="text-[#a855f7] font-medium">{currentLayer.name}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {memoryLayers.map((layer, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedLayerIndex(idx)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 cursor-pointer border ${
                      selectedLayerIndex === idx
                        ? 'border-[#a855f7] bg-[#a855f7]/15 text-[#f1f2ee] shadow-[0_0_20px_rgba(168,85,247,0.2)] scale-[1.02]'
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

          {/* Interactive Memory Retrieval Console */}
          <div className="space-y-6">
            <ScrollReveal direction="up" delay={200} distance="30px">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/[0.06] gap-4">
                <span className="text-[#f1f2ee] font-medium flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-[#38bdf8]" />
                  Select Natural Language Infrastructure Query:
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Query & Matched Historical Outage (Slide from Left) */}
              <div className="lg:col-span-6 space-y-4">
                <ScrollReveal direction="left" delay={260} distance="50px">
                  <div className="p-5 rounded-xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-md space-y-2 shadow-lg">
                    <span className="text-[#505551] text-[10px] uppercase block">Natural Language Query</span>
                    <div className="text-sm sm:text-base text-[#f1f2ee] font-medium italic">"{activeQuery.query}"</div>
                  </div>

                  <div className="p-5 rounded-xl border border-white/[0.08] bg-[#050605] space-y-3 text-[11px] shadow-lg mt-4">
                    <div className="flex items-center justify-between pb-2 mb-1 border-b border-white/[0.04]">
                      <span className="text-[#a855f7] flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5" /> Correlated Historical Incident
                      </span>
                      <span className="text-[#10b981] font-semibold px-2 py-0.5 rounded bg-[#10b981]/10">{activeQuery.similarity} Graph Match</span>
                    </div>

                    <div>
                      <span className="text-[#f1f2ee] font-semibold text-sm block">{activeQuery.retrievedIncident}</span>
                      <span className="text-[10px] text-[#505551]">{activeQuery.date}</span>
                    </div>

                    <p className="text-[#858a85] leading-relaxed pt-1">
                      <strong className="text-[#f1f2ee]">Root Cause Evidence:</strong> {activeQuery.rootCause}
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Instant Verified Resolution Runbook (Slide from Right) */}
              <div className="lg:col-span-6">
                <ScrollReveal direction="right" delay={260} distance="50px">
                  <div className="p-8 rounded-xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-md flex flex-col justify-between shadow-2xl h-full relative overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                        <span className="text-[10px] text-[#505551] uppercase tracking-wider">Retrieved Remediation Procedure</span>
                        <span className="text-[#10b981] text-[10px] px-2 py-0.5 rounded bg-[#10b981]/10 font-semibold">Graph-Verified</span>
                      </div>

                      <div className="space-y-4">
                        <div className="text-base font-semibold text-[#f1f2ee]">
                          Deterministic Remediation Runbook:
                        </div>
                        <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                          {activeQuery.testedRunbook}
                        </p>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#505551]">
                      <span className="flex items-center gap-1.5 text-[#10b981]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Retrieved from Persistent Memory
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

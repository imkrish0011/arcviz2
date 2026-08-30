import React, { useState, useEffect } from 'react';
import { Search, Sparkles, CheckCircle2, ArrowRight, Play, FileCode2 } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

interface QueryPreset {
  id: string;
  query: string;
  category: string;
  steps: { name: string; detail: string; status: 'done' | 'active' | 'pending' }[];
  evidence: {
    title: string;
    rootCause: string;
    correlatedResource: string;
    diffSnippet: string;
    simulatedImpact: string;
    recommendation: string;
  };
}

export const AskArchVizDemo: React.FC = () => {
  const [activeQueryId, setActiveQueryId] = useState<string>('latency');
  const [pipelineStage, setPipelineStage] = useState<number>(5); // 0 to 5 (all done by default)
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const presets: QueryPreset[] = [
    {
      id: 'latency',
      query: "Why is my API latency increasing on /checkout?",
      category: "Performance Anomaly",
      steps: [
        { name: "Understand", detail: "Parsed intent: diagnose P99 latency spike on endpoint POST /api/v1/checkout.", status: 'done' },
        { name: "Investigate", detail: "Scanned APM spans across ALB Ingress -> ECS Fargate -> Aurora PostgreSQL.", status: 'done' },
        { name: "Trace", detail: "Traversed 4 graph hops. Discovered thread lock on PostgreSQL connection acquisition.", status: 'done' },
        { name: "Find Cause", detail: "Commit #8f31b9d in PR #429 omitted db.Close() in request handler loop.", status: 'done' },
        { name: "Recommend", detail: "Drafted Task Definition rollback to v42 + code patch adding defer tx.Rollback().", status: 'done' },
        { name: "Simulate", detail: "Pre-flight digital twin confirms 0 downtime and 75% connection pool release.", status: 'done' }
      ],
      evidence: {
        title: "P99 Latency Spike: Root Cause Isolated",
        rootCause: "Database connection pool exhaustion caused by unclosed transaction handles in controller.",
        correlatedResource: "aws_ecs_service.svc_checkout_prod -> aws_rds_cluster.aurora_pg_primary",
        diffSnippet: `- tx, err := db.BeginTx(ctx, nil) // Missing defer tx.Rollback()
+ tx, err := db.BeginTx(ctx, nil)
+ defer tx.Rollback()`,
        simulatedImpact: "Latency drops from 890ms to 38.2ms • 375 connection handles freed immediately.",
        recommendation: "Apply dual-key signoff for Task Definition v42 rollback. Zero client disconnects."
      }
    },
    {
      id: 'security',
      query: "Which database instances have public ingress rules?",
      category: "Security Audit",
      steps: [
        { name: "Understand", detail: "Parsed intent: audit security group ingress rules across all RDS/Aurora clusters.", status: 'done' },
        { name: "Investigate", detail: "Evaluated 14 database clusters across AWS us-east-1, Azure East US, and GCP.", status: 'done' },
        { name: "Trace", detail: "Identified 1 unmanaged security group with CIDR 0.0.0.0/0 on port 5432.", status: 'done' },
        { name: "Find Cause", detail: "Manual AWS console modification on sg-081f9a outside of Terraform state.", status: 'done' },
        { name: "Recommend", detail: "Drafted remediation Terraform patch revoking public ingress CIDR rule.", status: 'done' },
        { name: "Simulate", detail: "Validated zero internal client connections originate from external IPs.", status: 'done' }
      ],
      evidence: {
        title: "Public Database Exposure Detected",
        rootCause: "Manual console change added 0.0.0.0/0 to port 5432 on staging database security group.",
        correlatedResource: "aws_security_group.sg_staging_db (VPC vpc-08a9f)",
        diffSnippet: `- ingress { from_port = 5432, to_port = 5432, cidr_blocks = ["0.0.0.0/0"] }
+ ingress { from_port = 5432, to_port = 5432, cidr_blocks = ["10.0.0.0/16"] }`,
        simulatedImpact: "Removes public vulnerability with zero downtime to internal staging workers.",
        recommendation: "Apply OPA compliance rule rule.disallow_public_database_ports."
      }
    },
    {
      id: 'blast-radius',
      query: "What is the blast radius of upgrading Aurora to PostgreSQL 16?",
      category: "Infrastructure Planning",
      steps: [
        { name: "Understand", detail: "Parsed intent: evaluate downstream dependencies for major DB engine upgrade.", status: 'done' },
        { name: "Investigate", detail: "Mapped all dependent ECS services, Azure Container Apps, and Lambda functions.", status: 'done' },
        { name: "Trace", detail: "Discovered 6 dependent microservices, 2 read replicas, and 1 analytical ETL pipeline.", status: 'done' },
        { name: "Find Cause", detail: "1 legacy service (svc-billing-v1) relies on deprecated pg_catalog query syntax.", status: 'done' },
        { name: "Recommend", detail: "Patch svc-billing-v1 query syntax prior to initiating Aurora blue/green upgrade.", status: 'done' },
        { name: "Simulate", detail: "Blue/green digital twin cutover simulated with 1.2s DNS switchover window.", status: 'done' }
      ],
      evidence: {
        title: "Major Version Upgrade Impact Analysis",
        rootCause: "5 services 100% compatible; 1 service requires query syntax update before cutover.",
        correlatedResource: "aws_rds_cluster.aurora_pg_primary (6 dependent microservices)",
        diffSnippet: `// Impact: 6 Services Mapped
- svc-billing-v1: Syntax Warning (pg_stat_activity column change)
+ svc-checkout, svc-auth, svc-orders: 100% Compatible`,
        simulatedImpact: "Blue/Green deployment verified with 0 dropped client transactions during cutover.",
        recommendation: "Execute pre-flight patch on svc-billing-v1 then trigger Aurora blue/green switch."
      }
    }
  ];

  const currentPreset = presets.find(p => p.id === activeQueryId) || presets[0];

  const runSimulatedQuery = (id: string) => {
    setActiveQueryId(id);
    setPipelineStage(0);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;
    if (pipelineStage < 5) {
      const timer = setTimeout(() => {
        setPipelineStage(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [pipelineStage, isRunning]);

  return (
    <section id="ask-archviz" className="py-24 md:py-36 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Background Cosmic Atmosphere - High Visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-75 filter contrast-125 brightness-110 saturate-125">
        <img
          src="/assets/images/cosmic-nebula.jpg"
          alt="Cosmic background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090c09]/70 via-[#090c09]/50 to-[#090c09]" />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-14 md:mb-20 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              04 / Natural Language Reasoning
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              Ask ArchViz anything. <br />
              <span className="text-[#858a85]">Get graph-verified answers.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl font-sans">
              Interact with your cloud through natural language. ArchViz doesn’t generate generic text—it executes an automated reasoning pipeline that queries the living graph and returns evidence-backed resolutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Query Input & Preset Selector */}
        <div className="space-y-8">
          <ScrollReveal direction="up" delay={100} distance="30px">
            <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-xl shadow-2xl space-y-4">
              {/* Simulated Command Bar */}
              <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-[#080a08]/90 border border-white/[0.08] shadow-inner">
                <Search className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <input
                  type="text"
                  readOnly
                  value={currentPreset.query}
                  className="bg-transparent text-sm sm:text-base text-[#f1f2ee] w-full focus:outline-none font-sans font-medium"
                />
                <button
                  onClick={() => runSimulatedQuery(activeQueryId)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-semibold transition-all cursor-pointer shadow-md flex-shrink-0"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isRunning ? "Reasoning..." : "Execute"}</span>
                </button>
              </div>

              {/* Preset Selector Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                <span className="text-[#505551] uppercase text-[10px] mr-1">Sample Prompts:</span>
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => runSimulatedQuery(preset.id)}
                    className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                      activeQueryId === preset.id
                        ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] font-semibold'
                        : 'border-white/[0.06] bg-white/[0.02] text-[#858a85] hover:text-[#f1f2ee]'
                    }`}
                  >
                    "{preset.query}"
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 6-Stage Reasoning Pipeline & Evidence Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: 6-Stage Animated Execution Pipeline (Slide from Left) */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={180} distance="50px">
                <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-xl flex flex-col justify-between shadow-2xl h-full space-y-3">
                  <div className="text-[10px] text-[#505551] uppercase pb-2 border-b border-white/[0.06] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                      Reasoning Pipeline Execution
                    </span>
                    <span className={isRunning ? 'text-[#38bdf8] animate-pulse' : 'text-[#10b981]'}>
                      {isRunning ? `Step ${pipelineStage + 1} of 6` : '6/6 Verified'}
                    </span>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    {currentPreset.steps.map((step, idx) => (
                      <div
                        key={step.name}
                        className={`p-3 rounded-xl border transition-all duration-300 ${
                          idx <= pipelineStage
                            ? 'border-[#38bdf8]/40 bg-[#38bdf8]/10 text-[#f1f2ee]'
                            : 'border-white/[0.04] bg-[#080a08]/60 text-[#505551]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-xs text-[#38bdf8]">0{idx + 1}. {step.name}</span>
                          <span className={`text-[9px] px-1.5 py-0.2 rounded ${
                            idx <= pipelineStage ? 'bg-[#10b981]/20 text-[#10b981]' : 'text-[#505551]'
                          }`}>
                            {idx <= pipelineStage ? 'Complete' : 'Queued'}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#858a85] font-sans leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/[0.04] text-[10px] text-[#505551] flex items-center justify-between">
                    <span>Deterministic pipeline</span>
                    <span className="text-[#38bdf8]">0 Hallucination</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Realistic Evidence-Style Answer Card (Slide from Right) */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" delay={260} distance="50px">
                <div className="p-7 sm:p-8 rounded-2xl border border-white/[0.12] bg-[#0d100d]/95 backdrop-blur-xl flex flex-col justify-between shadow-2xl h-full space-y-5 relative">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                      <span className="text-[10px] text-[#505551] uppercase tracking-wider">Synthesized Evidence Card</span>
                      <span className="text-[#10b981] font-semibold px-2.5 py-1 rounded bg-[#10b981]/15 text-[11px] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Graph-Verified Resolution
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[#f1f2ee] font-sans mb-1">
                          {currentPreset.evidence.title}
                        </h3>
                        <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                          <strong className="text-[#f1f2ee]">Root Cause:</strong> {currentPreset.evidence.rootCause}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#080a08]/90 border border-white/[0.06] text-[11px] space-y-1">
                        <span className="text-[10px] text-[#505551] uppercase block">Correlated Topology Nodes:</span>
                        <code className="text-[#38bdf8] font-mono">{currentPreset.evidence.correlatedResource}</code>
                      </div>

                      <div className="p-4 rounded-xl bg-[#050605] border border-white/[0.08] text-[11px] space-y-2 shadow-inner">
                        <div className="flex items-center justify-between text-[10px] text-[#505551] pb-1 border-b border-white/[0.04]">
                          <span className="flex items-center gap-1 text-[#38bdf8]">
                            <FileCode2 className="w-3 h-3" /> Correlated Diff / Fix
                          </span>
                          <span>Terraform / Controller Diff</span>
                        </div>
                        <pre className="text-[#858a85] font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap text-[10px]">
                          {currentPreset.evidence.diffSnippet}
                        </pre>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#10b981]/10 border border-[#10b981]/25 text-[11px] space-y-1">
                        <span className="text-[10px] text-[#10b981] uppercase font-semibold block">Pre-Flight Simulation Assertion:</span>
                        <p className="text-xs text-[#f1f2ee] font-sans leading-relaxed">
                          {currentPreset.evidence.simulatedImpact}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#858a85]">
                    <span>Action: {currentPreset.evidence.recommendation}</span>
                    <span className="text-[#38bdf8] font-semibold flex items-center gap-1">
                      Ready to Apply <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

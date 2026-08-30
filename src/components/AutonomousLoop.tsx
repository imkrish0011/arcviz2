import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Eye, 
  Search, 
  MessageSquare,
  Sliders, 
  KeyRound, 
  Cpu, 
  LineChart, 
  Database,
  FileCheck2
} from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

interface LoopPhase {
  id: number;
  name: string;
  short: string;
  icon: React.ReactNode;
  title: string;
  summary: string;
  telemetry: string;
  auditLedger: string;
}

export const AutonomousLoop: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoRunning, setIsAutoRunning] = useState<boolean>(false);

  const phases: LoopPhase[] = [
    {
      id: 0,
      name: "See",
      short: "01 SEE",
      icon: <Eye className="w-4 h-4 text-[#38bdf8]" />,
      title: "Continuous Multi-Cloud Discovery & Telemetry Stream",
      summary: "Ingests live resources, routing tables, and metrics across AWS, Azure, and GCP via read-only IAM in real time.",
      telemetry: "Ingested: 214 multi-cloud nodes • CloudWatch p99 stream live",
      auditLedger: `14:32:18.102 | INGEST: Ingested 1,420 distributed APM spans across VPC vpc-08a9f.
14:32:18.145 | ALERT: CloudWatch alarm 'alb-p99-latency-high' flagged on route /checkout.
14:32:18.190 | EVENT: Real-time discovery snapshot synchronized with active topology.`
    },
    {
      id: 1,
      name: "Understand",
      short: "02 UNDERSTAND",
      icon: <Search className="w-4 h-4 text-[#38bdf8]" />,
      title: "Living System Graph Correlation",
      summary: "Connects the latency alert to the exact upstream ALB route and downstream ECS container task group in the graph.",
      telemetry: "Graph Depth: 4 hops • Correlated Route: /api/v1/checkout",
      auditLedger: `14:32:19.010 | GRAPH_TRAVERSE: alb-public-prod -> svc-checkout-prod -> aurora-pg-primary.
14:32:19.450 | CONTEXT_LINK: Linked commit #8f31b9d in PR #429 to active task definition v43.
14:32:19.820 | METRIC_MAP: P99 latency rise directly correlated with container worker saturation.`
    },
    {
      id: 2,
      name: "Explain",
      short: "03 EXPLAIN",
      icon: <MessageSquare className="w-4 h-4 text-[#38bdf8]" />,
      title: "Evidence-Backed Incident Diagnostic",
      summary: "Sub-agents synthesize natural language diagnosis: Aurora connection pool saturated at 495/500 handles due to unclosed transaction loop.",
      telemetry: "Diagnosis: Aurora DB connection pool starvation (94% confidence)",
      auditLedger: `14:32:20.310 | AGENT[reliability]: 8 ECS container workers stalled on DB connection leases.
14:32:20.450 | AGENT[database]: Aurora PostgreSQL active handles at 495/500 (99.0%).
14:32:20.720 | REASONING: Code diff reveals missing defer db.Close() in payment controller.`
    },
    {
      id: 3,
      name: "Simulate",
      short: "04 SIMULATE",
      icon: <Sliders className="w-4 h-4 text-[#38bdf8]" />,
      title: "Pre-Flight Digital Twin Blast Radius Check",
      summary: "Evaluates task definition rollback to v42 in simulated twin. Asserts 0 dropped connections and 75% connection pool release.",
      telemetry: "Simulation: 0 breaking schema changes • +375 DB handles freed",
      auditLedger: `14:32:22.100 | TWIN_INIT: Instantiated digital twin topology for VPC vpc-08a9f.
14:32:22.340 | DIFF_EVAL: Simulated rolling update 'svc-checkout:43' -> 'svc-checkout:42'.
14:32:22.580 | ASSERT_PASS: 0 breaking changes • Projected latency drops from 890ms to 38ms.`
    },
    {
      id: 4,
      name: "Decide",
      short: "05 DECIDE",
      icon: <KeyRound className="w-4 h-4 text-[#f59e0b]" />,
      title: "Deterministic OPA Policy & Dual-Key Authorization",
      summary: "Evaluated against organizational OPA guardrails and signed off by on-call engineer via WebAuthn hardware token.",
      telemetry: "Policy: OPA rule.prod.zero_downtime_rolling_update • Dual-Key Signed",
      auditLedger: `14:32:23.010 | OPA_EVAL: Validated payload against 14 enterprise policy rules -> PASS.
14:32:24.210 | AUTH_PROMPT: Production tier-1 action prompted engineer sign-off.
14:32:25.850 | HARDWARE_SIGN: WebAuthn signature verified (SRE Lead: alex@company.com).`
    },
    {
      id: 5,
      name: "Act",
      short: "06 ACT",
      icon: <Cpu className="w-4 h-4 text-[#38bdf8]" />,
      title: "Scoped Ephemeral STS Execution",
      summary: "Minted temporary 15-minute IAM credentials to perform rolling task definition update to ECS cluster with zero downtime.",
      telemetry: "Target: aws_ecs_service.checkout_prod • 8 tasks rolled to v42",
      auditLedger: `14:32:26.010 | STS_MINT: Generated 15-minute scoped execution token for ECS update.
14:32:26.440 | APPLY: aws_ecs_update_service(cluster="prod", service="checkout", task_def="v42")
14:32:27.420 | DRAIN: 8 old v43 tasks safely drained. Ephemeral credentials revoked.`
    },
    {
      id: 6,
      name: "Verify",
      short: "07 VERIFY",
      icon: <LineChart className="w-4 h-4 text-[#10b981]" />,
      title: "Post-Flight SLO & Health Assertion",
      summary: "Validated live telemetry: P99 latency normalized to 38.2ms and Aurora connection pool stabilized at 24% capacity.",
      telemetry: "Post-Flight P99: 38.2ms (SLO Restored) • Pool: 120/500 Handles",
      auditLedger: `14:32:28.020 | PROBE_CHECK: 8/8 target group health probes reporting HTTP 200 OK.
14:32:28.840 | METRIC_ASSERT: P99 latency stabilized at 38.2ms (well under 50ms budget).
14:32:29.110 | DB_ASSERT: Aurora active handles fell from 495 -> 120 / 500.`
    },
    {
      id: 7,
      name: "Learn",
      short: "08 LEARN",
      icon: <Database className="w-4 h-4 text-[#a855f7]" />,
      title: "Persistent Operational Memory Indexing",
      summary: "Incident graph, root cause commit, and tested remediation procedure indexed to Operational Memory for instant future retrieval.",
      telemetry: "Indexed: Incident Graph #INC-0842 • 100% Replayable Runbook",
      auditLedger: `14:32:30.050 | POST_MORTEM: Auto-generated post-mortem topology and root cause diff.
14:32:30.410 | MEMORY_APPEND: Appended tested rollback runbook to persistent knowledge graph.
14:32:30.680 | LOOP_COMPLETE: 8-stage autonomous operational loop completed successfully.`
    }
  ];

  useEffect(() => {
    if (!isAutoRunning) return;
    const timer = setTimeout(() => {
      setActiveStep((prev) => {
        if (prev >= phases.length - 1) {
          setIsAutoRunning(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2600);
    return () => clearTimeout(timer);
  }, [activeStep, isAutoRunning, phases.length]);

  const currentPhase = phases[activeStep];

  const handleRunCycle = () => {
    setActiveStep(0);
    setIsAutoRunning(true);
  };

  return (
    <section id="autonomous-loop" className="py-16 md:py-24 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-14 md:mb-20 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              08 / Signature ArchViz Loop
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              The continuous <br />
              <span className="text-[#858a85]">ArchViz operational loop.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl font-sans">
              SEE → UNDERSTAND → EXPLAIN → SIMULATE → DECIDE → ACT → VERIFY → LEARN. A closed-loop control system that continuously improves your cloud infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* Closed-Loop Execution Engine */}
        <div className="space-y-10">
          {/* Header Controls Bar with Reveal */}
          <ScrollReveal direction="up" delay={100} distance="30px">
            <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#0d100d]/85 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-xs text-[#f1f2ee] uppercase tracking-wider font-semibold">
                  Continuous 8-Phase Operational Cycle
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleRunCycle}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-semibold transition-all cursor-pointer shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Signature Loop</span>
                </button>

                <button
                  onClick={() => { setIsAutoRunning(false); setActiveStep(0); }}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#858a85] hover:text-[#f1f2ee] border border-white/[0.08] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* 8-Stage Connected Pipeline Trace Bar */}
          <ScrollReveal direction="up" delay={180} distance="30px">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {phases.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => { setIsAutoRunning(false); setActiveStep(phase.id); }}
                  className={`p-3.5 rounded-xl text-left transition-all duration-300 cursor-pointer border relative ${
                    activeStep === phase.id
                      ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.2)] scale-[1.03]'
                      : activeStep > phase.id
                        ? 'border-white/[0.08] bg-[#0d100d]/80 text-[#10b981]'
                        : 'border-white/[0.04] bg-[#0d100d]/60 text-[#858a85] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-[#505551]">0{phase.id + 1}</span>
                    {phase.icon}
                  </div>
                  <span className="font-semibold text-xs block text-[#f1f2ee]">{phase.name}</span>
                  <span className={`text-[9px] block mt-1 ${
                    activeStep === phase.id ? 'text-[#38bdf8] font-semibold' : activeStep > phase.id ? 'text-[#10b981]' : 'text-[#505551]'
                  }`}>
                    {activeStep === phase.id ? 'Active' : activeStep > phase.id ? 'Passed' : 'Pending'}
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Detailed Active Phase Deep-Dive View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Phase Title, Summary & Telemetry (Slide from Left) */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" delay={260} distance="50px">
                <div className="p-8 rounded-2xl border border-white/[0.12] bg-[#0d100d]/95 backdrop-blur-xl flex flex-col justify-between shadow-2xl h-full space-y-4">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.06]">
                      <span className="text-[10px] text-[#505551] uppercase tracking-wider">Phase {currentPhase.id + 1} of 8</span>
                      <span className="text-[#38bdf8] font-semibold px-2 py-0.5 rounded bg-[#38bdf8]/10 text-xs">{currentPhase.short}</span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <h3 className="text-xl font-medium text-[#f1f2ee] font-sans">
                        {currentPhase.title}
                      </h3>
                      <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                        {currentPhase.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.06] bg-[#080a08]/90 text-[11px] text-[#10b981] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>{currentPhase.telemetry}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Cryptographic Audit Ledger (Slide from Right) */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right" delay={260} distance="50px">
                <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.12] bg-[#050605] flex flex-col justify-between shadow-2xl h-full">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.04]">
                      <div className="flex items-center gap-2 text-[#505551] text-[10px]">
                        <FileCheck2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span>IMMUTABLE AUDIT LEDGER TRACE</span>
                      </div>
                      <span className="text-[10px] text-[#10b981] px-2 py-0.5 rounded bg-[#10b981]/10 font-semibold">Hardware Signed</span>
                    </div>

                    <pre className="text-[#858a85] text-[11px] font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
                      {currentPhase.auditLedger}
                    </pre>
                  </div>

                  <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-[#505551]">
                    <span className="flex items-center gap-1.5 text-[#10b981]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Replayable Operational Record
                    </span>
                    <span>100% Deterministic</span>
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

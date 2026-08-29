import React, { useState, useEffect } from 'react';
import { 
  Play, 
   
  RotateCcw, 
  CheckCircle2, 
  Activity, 
  Search, 
  Sliders, 
  ShieldCheck, 
  KeyRound, 
  Cpu, 
  LineChart, 
  Database,
  Terminal
} from 'lucide-react';

interface LoopPhase {
  id: number;
  name: string;
  short: string;
  icon: React.ReactNode;
  title: string;
  summary: string;
  telemetry: string;
  outputLog: string;
}

export const AutonomousLoop: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoRunning, setIsAutoRunning] = useState<boolean>(false);

  const phases: LoopPhase[] = [
    {
      id: 0,
      name: "Detect",
      short: "01 DETECT",
      icon: <Activity className="w-4 h-4 text-[#ef4444]" />,
      title: "Real-Time Telemetry Anomaly Detected",
      summary: "CloudWatch metric stream flagged a 20x latency spike on route POST /checkout. Target group error budget depleted by 4.2%.",
      telemetry: "Metric: p99_latency > 800ms (Threshold: 50ms) • Status: Triggered",
      outputLog: `[14:32:18.102] ALERT: CloudWatch alarm 'alb-p99-latency-high' in ALARM state.
[14:32:18.145] INGEST: Ingested 1,420 spans from Datadog APM mesh.
[14:32:18.190] EVENT: Dispatching operational investigation trigger to ArchViz OS.`
    },
    {
      id: 1,
      name: "Investigate",
      short: "02 INVESTIGATE",
      icon: <Search className="w-4 h-4 text-[#38bdf8]" />,
      title: "Parallel Sub-Agent Graph Traversal",
      summary: "Reliability and Database agents traversed the dependency DAG, isolating connection pool exhaustion on Aurora PostgreSQL primary.",
      telemetry: "DAG Depth: 4 hops • Correlated Nodes: svc-checkout -> aurora-pg",
      outputLog: `[14:32:20.310] SUB_AGENT[reliability]: Scanning ECS Fargate task thread pool...
[14:32:20.450] SUB_AGENT[database]: Aurora connection count at 495/500 (99.0%).
[14:32:20.720] CORRELATION: Commit #8f31b9d introduced unclosed DB handle in transaction loop.`
    },
    {
      id: 2,
      name: "Simulate",
      short: "03 SIMULATE",
      icon: <Sliders className="w-4 h-4 text-[#38bdf8]" />,
      title: "Pre-Flight Digital Twin Blast Radius Check",
      summary: "Evaluated task definition rollback to v42 in simulated twin. Projected 0 dropped connections and 75% connection release.",
      telemetry: "Simulated Blast Radius: 0 breaking changes • +375 DB handles freed",
      outputLog: `[14:32:22.100] TWIN_INIT: Instantiating digital twin model for VPC vpc-08a9f.
[14:32:22.340] DIFF_PLAN: Task definition 'svc-checkout:43' -> 'svc-checkout:42'.
[14:32:22.580] BLAST_EVAL: Downstream dependencies validated. 0 breaking API changes.`
    },
    {
      id: 3,
      name: "Policy Check",
      short: "04 POLICY",
      icon: <ShieldCheck className="w-4 h-4 text-[#10b981]" />,
      title: "Open Policy Agent (OPA) Guardrail Evaluation",
      summary: "Action verified against organizational compliance rules. Evaluated zero-downtime rolling update constraints.",
      telemetry: "OPA Rule: rule.prod.zero_downtime_rolling_update • Result: ALLOWED",
      outputLog: `[14:32:23.010] OPA_EVAL: Evaluating input payload against 14 enterprise policies.
[14:32:23.080] RULE_PASS: 'require_immutable_tags' -> PASS.
[14:32:23.120] RULE_PASS: 'tier1_service_rollback_bounds' -> PASS (Dual-Key required).`
    },
    {
      id: 4,
      name: "Approve",
      short: "05 APPROVE",
      icon: <KeyRound className="w-4 h-4 text-[#f59e0b]" />,
      title: "Dual-Key Production Authorization Verified",
      summary: "Action payload cryptographically signed by on-call engineer via WebAuthn hardware token.",
      telemetry: "Authorizer: alex@company.com (SRE Lead) • WebAuthn Verified",
      outputLog: `[14:32:24.210] AUTH_PROMPT: Production tier-1 action triggered human approval webhook.
[14:32:25.850] SIGN_OFF: WebAuthn signature verified (key_id: 88f2-a0b4).
[14:32:25.890] STS_INIT: Minting 15-minute scoped ephemeral IAM credentials.`
    },
    {
      id: 5,
      name: "Execute",
      short: "06 EXECUTE",
      icon: <Cpu className="w-4 h-4 text-[#38bdf8]" />,
      title: "Scoped Ephemeral STS Execution",
      summary: "Applied zero-downtime task definition update to ECS cluster. New healthy tasks spun up before draining old tasks.",
      telemetry: "Target: aws_ecs_service.checkout_prod • Execution Time: 1.4s",
      outputLog: `[14:32:26.110] APPLY: aws_ecs_update_service(cluster="prod-main", service="checkout", task_def="v42")
[14:32:26.940] ROLLING: 8 new v42 tasks reached HEALTHY status on target group.
[14:32:27.420] DRAIN: 8 v43 tasks safely drained. Ephemeral credentials revoked.`
    },
    {
      id: 6,
      name: "Verify",
      short: "07 VERIFY",
      icon: <LineChart className="w-4 h-4 text-[#10b981]" />,
      title: "Post-Flight SLO & Health Assertion",
      summary: "Validated continuous telemetry streams: p99 latency returned to 38.2ms and Aurora connection pool stabilized at 24%.",
      telemetry: "Post-Flight p99: 38.2ms (Restored) • Target Group: 100% Healthy",
      outputLog: `[14:32:28.020] HEALTH_CHECK: Polling 8 target group health probes... 8/8 OK.
[14:32:28.840] METRIC_ASSERT: p99 latency stabilized at 38.2ms (within SLO).
[14:32:29.110] DB_ASSERT: Aurora active handles fell from 495 -> 120 / 500.`
    },
    {
      id: 7,
      name: "Learn",
      short: "08 LEARN",
      icon: <Database className="w-4 h-4 text-[#10b981]" />,
      title: "Persistent Operational Memory Indexed",
      summary: "Incident DAG, root cause commit, and tested remediation procedure indexed to Operational Memory for instant future retrieval.",
      telemetry: "Indexed To: Incident Memory & Procedural Runbooks • 100% Replayable",
      outputLog: `[14:32:30.050] POST_MORTEM: Auto-generated post-mortem DAG and incident summary.
[14:32:30.410] MEMORY_APPEND: Appended remediation lineage to persistent knowledge graph.
[14:32:30.680] CYCLE_COMPLETE: Closed-loop autonomous cycle completed in 12.5s.`
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
    }, 2800);
    return () => clearTimeout(timer);
  }, [activeStep, isAutoRunning, phases.length]);

  const currentPhase = phases[activeStep];

  const handleRunCycle = () => {
    setActiveStep(0);
    setIsAutoRunning(true);
  };

  return (
    <section id="autonomous-loop" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20 md:mb-28">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
            07 / Closed-Loop Autonomy
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            Autonomous operations <br />
            <span className="text-[#858a85]">in a closed loop.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            ArchViz connects autonomous detection, diagnosis, pre-flight simulation, execution, and verification into one continuous, deterministic control loop.
          </p>
        </div>

        {/* Closed-Loop Execution Interactive Engine */}
        <div className="rounded-lg border border-white/[0.07] bg-[#0d100d]/80 backdrop-blur-md p-6 sm:p-12 space-y-10">
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.06] gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-xs font-mono text-[#f2f2ee] uppercase tracking-wider font-semibold">
                Autonomous Execution Pipeline Trace
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              <button
                onClick={handleRunCycle}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Run Full Cycle</span>
              </button>

              <button
                onClick={() => { setIsAutoRunning(false); setActiveStep(0); }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-[#858a85] hover:text-[#f2f2ee] border border-white/[0.08] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* 8-Stage Connected Pipeline Trace */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 font-mono text-xs">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => { setIsAutoRunning(false); setActiveStep(phase.id); }}
                className={`p-3.5 rounded text-left transition-all duration-200 cursor-pointer border relative ${
                  activeStep === phase.id
                    ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f2f2ee] shadow-[0_0_20px_rgba(56,189,248,0.15)]'
                    : activeStep > phase.id
                      ? 'border-white/[0.08] bg-[#080a08] text-[#10b981]'
                      : 'border-white/[0.04] bg-[#080a08]/80 text-[#858a85] hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] text-[#505551]">0{phase.id + 1}</span>
                  {phase.icon}
                </div>
                <span className="font-semibold text-xs block text-[#f2f2ee]">{phase.name}</span>
                <span className={`text-[9px] block mt-1 ${
                  activeStep === phase.id ? 'text-[#38bdf8]' : activeStep > phase.id ? 'text-[#10b981]' : 'text-[#505551]'
                }`}>
                  {activeStep === phase.id ? 'Active' : activeStep > phase.id ? 'Passed' : 'Pending'}
                </span>
              </button>
            ))}
          </div>

          {/* Detailed Active Phase Deep-Dive View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-mono text-xs">
            {/* Left: Phase Title, Summary & Telemetry (6 Cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded border border-white/[0.06] bg-[#080a08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.04]">
                  <span className="text-[10px] text-[#505551] uppercase">Phase {currentPhase.id + 1} of 8</span>
                  <span className="text-[#38bdf8] font-semibold">{currentPhase.short}</span>
                </div>

                <div className="space-y-3 mb-6">
                  <h3 className="text-base sm:text-lg font-medium text-[#f2f2ee] font-sans">
                    {currentPhase.title}
                  </h3>
                  <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                    {currentPhase.summary}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded border border-white/[0.06] bg-white/[0.02] text-[11px] text-[#10b981]">
                {currentPhase.telemetry}
              </div>
            </div>

            {/* Right: Live Execution Log Terminal (6 Cols) */}
            <div className="lg:col-span-6 p-6 rounded border border-white/[0.06] bg-[#050605] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.04]">
                  <div className="flex items-center gap-2 text-[#505551] text-[10px]">
                    <Terminal className="w-3 h-3 text-[#38bdf8]" />
                    <span>ARCHVIZ OS EXECUTION LOG</span>
                  </div>
                  <span className="text-[10px] text-[#10b981]">Live Trace</span>
                </div>

                <pre className="text-[#858a85] text-[11px] font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {currentPhase.outputLog}
                </pre>
              </div>

              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-[#505551]">
                <span className="flex items-center gap-1.5 text-[#10b981]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Cryptographic Audit Ledger
                </span>
                <span>Deterministic Control</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

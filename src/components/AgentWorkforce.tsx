import React, { useState } from 'react';
import { ShieldCheck, Activity, DollarSign, Database, Play, CheckCircle2, Network, Terminal } from 'lucide-react';
import { ArchVizLogo } from './icons/ArchVizIcons';
import { ScrollReveal } from './ui/ScrollReveal';

export const AgentWorkforce: React.FC = () => {
  const [isDelegating, setIsDelegating] = useState<boolean>(false);
  const [activeAgentId, setActiveAgentId] = useState<string>('db');

  const agents = [
    {
      id: "devops",
      name: "DevOps Agent",
      icon: <Network className="w-4 h-4 text-[#38bdf8]" />,
      targetResource: "github.actions.deploy_pipeline",
      domain: "CI/CD & IaC Patches",
      task: "Correlating container image digest, git commit SHAs, and Terraform plan changes across environments",
      finding: "PR #429 applied commit #8f31b9d without triggering schema breaking changes • Synthesized clean rollback plan",
      metric: "Rollout: v43 -> v42 Ready",
      status: "Verified",
      color: "#38bdf8",
      thoughtLog: `[14:32:20.250] Sub-Agent 'DevOps' inspecting GitHub Actions deployment workflow.
[14:32:20.390] Verified container image digest sha256:48b0a9 against staging registry.
[14:32:20.550] Synthesized zero-downtime rollback task definition patch for ECS.`
    },
    {
      id: "sre",
      name: "Reliability Agent",
      icon: <Activity className="w-4 h-4 text-[#10b981]" />,
      targetResource: "ecs.svc_checkout_prod",
      domain: "Container Thread Pools",
      task: "Auditing worker thread latency, CPU saturation, and connection timeouts across 8 ECS Fargate tasks",
      finding: "Identified 8 stalled container workers blocked on database connection acquisition in controller loop",
      metric: "Thread Queue: 142 waiting",
      status: "Verified",
      color: "#10b981",
      thoughtLog: `[14:32:20.102] Sub-Agent 'Reliability' dispatched to ECS cluster 'prod-main'.
[14:32:20.210] Task inspect: 8/8 containers responsive, but HTTP handler pool at 100% saturation.
[14:32:20.350] Correlated thread lock with Aurora database connection wait times.`
    },
    {
      id: "db",
      name: "Database Agent",
      icon: <Database className="w-4 h-4 text-[#38bdf8]" />,
      targetResource: "rds.aurora_pg_primary",
      domain: "Connection Pool & Locks",
      task: "Analyzing connection pool starvation, transaction lifetimes, table lock contention, and wait queues",
      finding: "Aurora pool saturated at 495/500 max limit due to unclosed client handle in transaction loop",
      metric: "Active Handles: 495 / 500",
      status: "Verified",
      color: "#38bdf8",
      thoughtLog: `[14:32:20.400] Sub-Agent 'Database' querying Aurora pg_stat_activity view.
[14:32:20.520] Found 375 idle-in-transaction connections opened by svc-checkout container IP 10.0.12.44.
[14:32:20.680] Root cause isolated: Missing defer db.Close() in PR #429 controller.`
    },
    {
      id: "sec",
      name: "Security & IAM Agent",
      icon: <ShieldCheck className="w-4 h-4 text-[#a855f7]" />,
      targetResource: "iam.role.ecs_execution",
      domain: "Permissions & Drift",
      task: "Checking IAM execution roles, security group ingress rules, and organizational OPA boundary compliance",
      finding: "Zero unauthorized security group drift • Ephemeral STS execution credentials verified for rollback",
      metric: "Drift: 0 Security Violations",
      status: "Verified",
      color: "#a855f7",
      thoughtLog: `[14:32:20.750] Sub-Agent 'Security' validating least-privilege IAM policy.
[14:32:20.890] Confirmed: No unauthorized port 5432 ingress changes detected.
[14:32:21.010] Ephemeral STS token scope validated for task rollback action.`
    },
    {
      id: "finops",
      name: "FinOps Agent",
      icon: <DollarSign className="w-4 h-4 text-[#f59e0b]" />,
      targetResource: "aws_billing.us_east_1",
      domain: "Cost & Overprovisioning",
      task: "Evaluating compute scaling buffers and database instance sizes to prevent unnecessary idle spend",
      finding: "Proposed rollback releases over-provisioned memory buffers, saving $60/month on Fargate compute",
      metric: "Savings: -$60/mo Delta",
      status: "Verified",
      color: "#f59e0b",
      thoughtLog: `[14:32:21.120] Sub-Agent 'FinOps' evaluating ECS Fargate memory reservation.
[14:32:21.240] Rolling back to v42 stabilizes memory at 512MB per task.
[14:32:21.390] Net compute savings estimated at $60.00/mo with zero performance impact.`
    }
  ];

  const triggerDelegation = () => {
    setIsDelegating(true);
    setTimeout(() => {
      setIsDelegating(false);
    }, 2500);
  };

  const selectedAgent = agents.find(a => a.id === activeAgentId) || agents[1];

  return (
    <section id="agents" className="py-32 md:py-44 border-t border-white/[0.06] bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Background Subtle Agent Mesh Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-20 filter saturate-150">
        <img
          src="/assets/images/neon-purple-ribbon.jpg"
          alt="Agent mesh neural atmosphere"
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08] via-[#080a08]/85 to-[#080a08]" />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-14 md:mb-20 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              05 / Parallel Agent Workforce
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              One orchestrator. <br />
              <span className="text-[#858a85]">A dynamic agent mesh.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl font-sans">
              When operational triggers occur, the primary orchestrator dynamically dispatches specialized sub-agents across cloud domains to investigate, diagnose, and simulate concurrently.
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Visual Agent Mesh Network */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Active Agent Network Mesh Diagram (Slide from Left) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={150} distance="50px">
              <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-xl flex flex-col justify-between shadow-2xl h-full relative">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] text-[10px] text-[#505551] uppercase">
                    <span className="flex items-center gap-2">
                      <Network className="w-3.5 h-3.5 text-[#38bdf8]" />
                      Active Agent Delegation Mesh
                    </span>
                    <span className={isDelegating ? 'text-[#38bdf8] animate-pulse font-semibold' : 'text-[#10b981]'}>
                      {isDelegating ? '⚡ Delegating Concurrently...' : '5 Active Domain Agents'}
                    </span>
                  </div>

                  {/* Primary Orchestrator Hub */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-xl border border-[#38bdf8]/40 bg-[#38bdf8]/15 text-center max-w-md w-full shadow-[0_0_30px_rgba(56,189,248,0.15)] relative">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <ArchVizLogo size={19} />
                        <span className="font-semibold text-sm text-[#f1f2ee]">ARCHVIZ PRIMARY ORCHESTRATOR</span>
                      </div>
                      <span className="text-[10px] text-[#858a85]">
                        Incident Trigger: "Investigate checkout latency spike after deployment #8f31b9d"
                      </span>
                    </div>
                  </div>

                  {/* Radiating Connector Lines */}
                  <div className="flex justify-center mb-4">
                    <div className="w-full max-w-lg h-[1.5px] bg-gradient-to-r from-transparent via-white/[0.2] to-transparent relative">
                      <div className="absolute top-0 left-4 w-[1.5px] h-6 bg-white/[0.2]" />
                      <div className="absolute top-0 left-1/4 w-[1.5px] h-6 bg-white/[0.2]" />
                      <div className="absolute top-0 left-1/2 w-[1.5px] h-6 bg-white/[0.2]" />
                      <div className="absolute top-0 left-3/4 w-[1.5px] h-6 bg-white/[0.2]" />
                      <div className="absolute top-0 right-4 w-[1.5px] h-6 bg-white/[0.2]" />
                    </div>
                  </div>

                  {/* 5 Specialized Domain Agents in Mesh Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {agents.map((agent) => (
                      <button
                        key={agent.id}
                        onClick={() => setActiveAgentId(agent.id)}
                        className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                          activeAgentId === agent.id
                            ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.2)] scale-[1.02]'
                            : 'border-white/[0.06] bg-[#080a08]/80 text-[#858a85] hover:border-white/20 hover:text-[#f1f2ee]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 font-semibold text-xs text-[#f1f2ee]">
                            {agent.icon}
                            <span>{agent.name}</span>
                          </div>
                          <span className="text-[9px] text-[#10b981] px-1.5 py-0.2 rounded bg-[#10b981]/15 font-medium">
                            {agent.status}
                          </span>
                        </div>
                        <div className="text-[10px] text-[#505551] block">{agent.domain}</div>
                        <div className="text-[10px] text-[#38bdf8] mt-1 font-semibold">{agent.metric}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className="text-[#505551]">Select any sub-agent to view live telemetry logs</span>
                  <button
                    onClick={triggerDelegation}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium transition-all cursor-pointer shadow-md"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{isDelegating ? "Executing Mesh..." : "Simulate Parallel Run"}</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Delegated Agent Task & Finding Detail (Slide from Right) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={250} distance="50px">
              <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.12] bg-[#0d100d]/95 backdrop-blur-xl flex flex-col justify-between shadow-2xl h-full">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                    <span className="text-[10px] text-[#505551] uppercase tracking-wider">Sub-Agent Detail Inspector</span>
                    <span className="text-[#10b981] flex items-center gap-1 text-[11px] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Parallel Finding Verified
                    </span>
                  </div>

                  <div className="space-y-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 text-base font-semibold text-[#f1f2ee] mb-1">
                        {selectedAgent.icon}
                        <span>{selectedAgent.name}</span>
                      </div>
                      <span className="text-[11px] text-[#38bdf8] font-mono">{selectedAgent.targetResource}</span>
                    </div>

                    <div className="p-4 rounded-xl border border-white/[0.06] bg-[#080a08]/90 space-y-1">
                      <span className="text-[10px] text-[#505551] uppercase block">Assigned Investigation Scope:</span>
                      <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                        {selectedAgent.task}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-[#38bdf8]/25 bg-[#38bdf8]/10 space-y-1">
                      <span className="text-[10px] text-[#38bdf8] uppercase font-semibold block">Synthesized Finding:</span>
                      <p className="text-xs text-[#f1f2ee] font-sans leading-relaxed">
                        {selectedAgent.finding}
                      </p>
                    </div>

                    {/* Agent Execution Log Snippet */}
                    <div className="p-3.5 rounded-xl border border-white/[0.06] bg-[#050605] text-[10px] font-mono leading-relaxed space-y-1">
                      <div className="flex items-center gap-1 text-[#505551] pb-1 border-b border-white/[0.04]">
                        <Terminal className="w-3 h-3 text-[#38bdf8]" />
                        <span>Execution Reasoning Trace</span>
                      </div>
                      <pre className="text-[#858a85] whitespace-pre-wrap pt-1 font-mono">
                        {selectedAgent.thoughtLog}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#505551]">
                  <span>Domain: {selectedAgent.domain}</span>
                  <span className="text-[#10b981]">Concurrently Executed</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

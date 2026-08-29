import React, { useState } from 'react';
import { ShieldCheck, Sliders, FileCode2 } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  env: 'Production' | 'Staging' | 'Development';
  action: string;
  resource: string;
  risk: 'High' | 'Medium' | 'Low';
  decisionByLevel: Record<number, {
    outcome: 'BLOCKED' | 'REQUIRES_APPROVAL' | 'DRAFT_PR' | 'AUTO_EXECUTED';
    label: string;
    detail: string;
  }>;
  opaRule: string;
}

export const AutonomyControl: React.FC = () => {
  const [levelIndex, setLevelIndex] = useState<number>(3); // Level 4 (Approve) default
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('prod-db');

  const levels = [
    {
      level: 1,
      name: "Observe",
      iam: "Read-Only IAM",
      badge: "Discovery Only",
      desc: "Continuous discovery of resources, VPC routing, and telemetry with zero write permissions."
    },
    {
      level: 2,
      name: "Explain",
      iam: "Zero Write Access",
      badge: "Knowledge Query",
      desc: "Answers architectural and incident questions with graph-verified citations."
    },
    {
      level: 3,
      name: "Recommend",
      iam: "PR Draft Only",
      badge: "IaC Generation",
      desc: "Generates tested Terraform/OpenTofu patches and pull requests for human review."
    },
    {
      level: 4,
      name: "Approve",
      iam: "Human-in-the-Loop",
      badge: "Dual-Key Signoff",
      desc: "Applies scoped infrastructure actions only after explicit engineer authorization."
    },
    {
      level: 5,
      name: "Execute",
      iam: "Scoped OPA Rules",
      badge: "Autonomous Fix",
      desc: "Executes pre-authorized runbooks for bounded non-breaking anomalies in approved tiers."
    }
  ];

  const scenarios: Scenario[] = [
    {
      id: 'prod-db',
      name: 'Production DB Parameter Tuning',
      env: 'Production',
      action: 'Modify max_connections & worker memory',
      resource: 'rds.aurora_postgres_v2.production',
      risk: 'High',
      opaRule: 'rule.prod.database.tier1_requires_dual_key',
      decisionByLevel: {
        0: { outcome: 'BLOCKED', label: 'Read-Only Mode', detail: 'Write action blocked by read-only IAM policy.' },
        1: { outcome: 'BLOCKED', label: 'Explanation Only', detail: 'Generated explanation with 0 infrastructure modification.' },
        2: { outcome: 'DRAFT_PR', label: 'PR #452 Created', detail: 'Terraform patch drafted on branch fix/db-pool-tuning for review.' },
        3: { outcome: 'REQUIRES_APPROVAL', label: 'Awaiting Dual-Key', detail: 'Digital twin simulated (0 downtime). Awaiting engineer sign-off.' },
        4: { outcome: 'REQUIRES_APPROVAL', label: 'Awaiting Dual-Key', detail: 'Production OPA policy prevents autonomous apply without dual-key.' }
      }
    },
    {
      id: 'staging-restart',
      name: 'Staging Unhealthy Task Auto-Healing',
      env: 'Staging',
      action: 'Restart 2 crashed worker containers',
      resource: 'ecs.svc_checkout.staging',
      risk: 'Low',
      opaRule: 'rule.staging.auto_restart_on_crash',
      decisionByLevel: {
        0: { outcome: 'BLOCKED', label: 'Read-Only Mode', detail: 'Crash detected. Action blocked by read-only mode.' },
        1: { outcome: 'BLOCKED', label: 'Crash Diagnostic', detail: 'Diagnostic report generated with container exit code 137.' },
        2: { outcome: 'DRAFT_PR', label: 'PR #453 Created', detail: 'Drafted task definition update with increased memory limit.' },
        3: { outcome: 'REQUIRES_APPROVAL', label: 'Approval Prompted', detail: 'Simulated 0 traffic loss. Click to authorize restart.' },
        4: { outcome: 'AUTO_EXECUTED', label: 'Auto-Remediated in 1.2s', detail: 'Pre-authorized OPA rule applied via ephemeral STS token. Service healthy.' }
      }
    },
    {
      id: 'security-drift',
      name: 'Security Group Ingress Drift',
      env: 'Production',
      action: 'Revoke unauthorized 0.0.0.0/0 port 5432 rule',
      resource: 'aws_security_group.db_ingress',
      risk: 'High',
      opaRule: 'rule.compliance.disallow_public_database_ports',
      decisionByLevel: {
        0: { outcome: 'BLOCKED', label: 'Vulnerability Flagged', detail: 'Flagged CVE exposure in living security graph.' },
        1: { outcome: 'BLOCKED', label: 'Exposure Diagnostic', detail: 'Identified manual console change not tracked in Terraform.' },
        2: { outcome: 'DRAFT_PR', label: 'Remediation PR #454', detail: 'Terraform drift fix PR opened with OPA compliance check.' },
        3: { outcome: 'REQUIRES_APPROVAL', label: 'Remediation Ready', detail: 'Remediation blast radius verified. Awaiting security engineer click.' },
        4: { outcome: 'AUTO_EXECUTED', label: 'Auto-Isolated in 0.8s', detail: 'Critical compliance violation remediated immediately by policy.' }
      }
    }
  ];

  const currentLevel = levels[levelIndex];
  const activeScenario = scenarios.find(s => s.id === selectedScenarioId) || scenarios[0];
  const currentDecision = activeScenario.decisionByLevel[levelIndex];

  return (
    <section id="control" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20 md:mb-28">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
            06 / Progressive Autonomy & Policy
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            AI can act. <br />
            <span className="text-[#858a85]">You decide how much.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            ArchViz operates on a continuous, granular autonomy spectrum. You establish deterministic Open Policy Agent (OPA) guardrails so AI never executes beyond your team's authorized boundaries.
          </p>
        </div>

        {/* Interactive Autonomy Control Console */}
        <div className="rounded-lg border border-white/[0.07] bg-[#0d100d]/80 backdrop-blur-md p-6 sm:p-12 space-y-10">
          {/* Top Spectrum Slider & Tier Bar */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/[0.06] gap-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#f2f2ee]">
                <Sliders className="w-4 h-4 text-[#38bdf8]" />
                <span className="font-semibold uppercase tracking-wider">Continuous Autonomy Spectrum</span>
              </div>
              <span className="text-[11px] font-mono text-[#858a85]">
                Active Level: <span className="text-[#38bdf8] font-medium">Level {currentLevel.level} ({currentLevel.name})</span>
              </span>
            </div>

            {/* 5-Stage Interactive Slider Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-mono text-xs">
              {levels.map((lvl, idx) => (
                <button
                  key={idx}
                  onClick={() => setLevelIndex(idx)}
                  className={`p-4 rounded text-left transition-all duration-200 cursor-pointer border relative ${
                    levelIndex === idx
                      ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee] shadow-[0_0_20px_rgba(56,189,248,0.12)]'
                      : 'border-white/[0.06] bg-[#080a08]/80 text-[#858a85] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-[#505551] uppercase">Level 0{lvl.level}</span>
                    <span className={`text-[9px] px-1.5 py-0.2 rounded font-sans ${
                      levelIndex === idx ? 'bg-[#38bdf8]/20 text-[#38bdf8]' : 'text-[#505551]'
                    }`}>
                      {lvl.badge}
                    </span>
                  </div>
                  <span className="font-semibold text-sm block text-[#f2f2ee] mb-1">{lvl.name}</span>
                  <span className="text-[10px] text-[#38bdf8]">{lvl.iam}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Real-Time Scenario Evaluation Matrix */}
          <div className="p-6 sm:p-8 rounded border border-white/[0.06] bg-[#080a08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/[0.06] gap-4">
              <div>
                <span className="text-[10px] font-mono text-[#505551] uppercase block">Test Live Scenario Against Policy</span>
                <span className="text-sm font-mono text-[#f2f2ee] font-medium">Select Operational Event:</span>
              </div>

              {/* Scenario Selector Pills */}
              <div className="flex flex-wrap gap-2">
                {scenarios.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedScenarioId(sc.id)}
                    className={`px-3 py-1.5 rounded font-mono text-xs transition-colors cursor-pointer border ${
                      selectedScenarioId === sc.id
                        ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f2f2ee]'
                        : 'border-white/[0.06] bg-white/[0.02] text-[#858a85] hover:text-[#f2f2ee]'
                    }`}
                  >
                    {sc.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Scenario Evaluation Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-mono text-xs">
              {/* Scenario Details & OPA Code (6 Cols) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded border border-white/[0.04] bg-white/[0.01] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#505551] text-[10px] uppercase">Target Resource</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded ${
                      activeScenario.risk === 'High' ? 'bg-[#ef4444]/10 text-[#ef4444]' : 'bg-[#10b981]/10 text-[#10b981]'
                    }`}>
                      {activeScenario.risk} Risk • {activeScenario.env}
                    </span>
                  </div>
                  <div className="text-sm text-[#f2f2ee] font-semibold">{activeScenario.resource}</div>
                  <div className="text-xs text-[#858a85]">{activeScenario.action}</div>
                </div>

                <div className="p-4 rounded border border-white/[0.04] bg-[#050605] text-[11px] space-y-1">
                  <div className="text-[#505551] text-[10px] flex items-center justify-between pb-1 mb-1 border-b border-white/[0.04]">
                    <span className="flex items-center gap-1.5">
                      <FileCode2 className="w-3 h-3 text-[#38bdf8]" />
                      <span>Evaluated Policy Rule</span>
                    </span>
                    <span className="text-[#38bdf8]">{activeScenario.opaRule}</span>
                  </div>
                  <pre className="text-[#858a85] leading-relaxed overflow-x-auto pt-1">
{`# Open Policy Agent (OPA) Guardrail Check
default allow = false
allow if {
  input.environment == "${activeScenario.env.toLowerCase()}"
  input.autonomy_level >= ${levelIndex + 1}
  not input.touches_production_data
}`}
                  </pre>
                </div>
              </div>

              {/* Policy Decision & Action Outcome (6 Cols) */}
              <div className="lg:col-span-6 p-6 rounded border border-white/[0.06] bg-[#050605] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.04]">
                    <span className="text-[10px] text-[#505551] uppercase">ArchViz Policy Decision</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      currentDecision.outcome === 'AUTO_EXECUTED'
                        ? 'bg-[#10b981]/15 text-[#10b981]'
                        : currentDecision.outcome === 'REQUIRES_APPROVAL'
                          ? 'bg-[#38bdf8]/15 text-[#38bdf8]'
                          : currentDecision.outcome === 'DRAFT_PR'
                            ? 'bg-[#f59e0b]/15 text-[#f59e0b]'
                            : 'bg-white/[0.05] text-[#858a85]'
                    }`}>
                      {currentDecision.outcome.replace('_', ' ')}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="text-base font-semibold text-[#f2f2ee]">
                      {currentDecision.label}
                    </div>
                    <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                      {currentDecision.detail}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-[#505551]">
                  <span className="flex items-center gap-1.5 text-[#10b981]">
                    <ShieldCheck className="w-3.5 h-3.5" /> Deterministic OPA Verification
                  </span>
                  <span>Zero Unbounded Execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

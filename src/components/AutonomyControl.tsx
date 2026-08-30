import React, { useState } from 'react';
import { ShieldCheck, Sliders, FileCode2, Lock, Eye, MessageSquare, FileText, CheckSquare, Zap } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

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
  const [levelIndex, setLevelIndex] = useState<number>(3); // Level 4 (APPROVE) default
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('prod-db');

  const levels = [
    {
      level: 1,
      name: "OBSERVE",
      icon: <Eye className="w-4 h-4 text-[#858a85]" />,
      iam: "Read-Only IAM",
      badge: "Discovery",
      desc: "Continuous discovery of multi-cloud resources, VPC routing, and telemetry with zero write permissions."
    },
    {
      level: 2,
      name: "EXPLAIN",
      icon: <MessageSquare className="w-4 h-4 text-[#38bdf8]" />,
      iam: "Zero Write Access",
      badge: "Reasoning",
      desc: "Answers architectural and incident questions with graph-verified citations and topological traces."
    },
    {
      level: 3,
      name: "RECOMMEND",
      icon: <FileText className="w-4 h-4 text-[#a855f7]" />,
      iam: "PR Draft Only",
      badge: "IaC Patches",
      desc: "Generates tested Terraform/OpenTofu patches and pull requests for human engineer review."
    },
    {
      level: 4,
      name: "APPROVE",
      icon: <CheckSquare className="w-4 h-4 text-[#f59e0b]" />,
      iam: "Dual-Key Signoff",
      badge: "Human-in-Loop",
      desc: "Applies scoped infrastructure actions only after explicit engineer authorization via hardware token."
    },
    {
      level: 5,
      name: "EXECUTE",
      icon: <Zap className="w-4 h-4 text-[#10b981]" />,
      iam: "Scoped OPA Rules",
      badge: "Autonomous",
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
        1: { outcome: 'BLOCKED', label: 'Explanation Only', detail: 'Generated explanation with zero infrastructure modification.' },
        2: { outcome: 'DRAFT_PR', label: 'PR #452 Created', detail: 'Terraform patch drafted on branch fix/db-pool-tuning for review.' },
        3: { outcome: 'REQUIRES_APPROVAL', label: 'Awaiting Dual-Key Signoff', detail: 'Digital twin simulated (0 downtime). Awaiting engineer sign-off.' },
        4: { outcome: 'REQUIRES_APPROVAL', label: 'Awaiting Dual-Key Signoff', detail: 'Production OPA policy prevents autonomous apply without dual-key.' }
      }
    },
    {
      id: 'staging-restart',
      name: 'Staging Unhealthy Task Healing',
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
        4: { outcome: 'AUTO_EXECUTED', label: 'Auto-Remediated via Ephemeral STS', detail: 'Pre-authorized OPA rule applied via ephemeral STS token. Service healthy.' }
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
        0: { outcome: 'BLOCKED', label: 'Vulnerability Flagged', detail: 'Flagged exposure in living security graph.' },
        1: { outcome: 'BLOCKED', label: 'Exposure Diagnostic', detail: 'Identified manual console change not tracked in Terraform.' },
        2: { outcome: 'DRAFT_PR', label: 'Remediation PR #454', detail: 'Terraform drift fix PR opened with OPA compliance check.' },
        3: { outcome: 'REQUIRES_APPROVAL', label: 'Remediation Ready', detail: 'Remediation blast radius verified. Awaiting security engineer click.' },
        4: { outcome: 'AUTO_EXECUTED', label: 'Auto-Isolated by Policy', detail: 'Critical compliance violation remediated immediately by policy.' }
      }
    }
  ];

  const currentLevel = levels[levelIndex];
  const activeScenario = scenarios.find(s => s.id === selectedScenarioId) || scenarios[0];
  const currentDecision = activeScenario.decisionByLevel[levelIndex];

  return (
    <section id="control" className="py-32 md:py-44 border-t border-white/[0.06] bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              06 / Progressive Autonomy Spectrum
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              AI can act. <br />
              <span className="text-[#858a85]">You decide how much.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl">
              ArchViz operates on a continuous, granular autonomy spectrum. You establish deterministic Open Policy Agent (OPA) guardrails so AI never executes beyond your team's authorized boundaries.
            </p>
          </div>
        </ScrollReveal>

        {/* Autonomy Spectrum & Live Policy Matrix */}
        <div className="space-y-10">
          {/* Top Spectrum Line */}
          <ScrollReveal direction="up" delay={120} distance="30px">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/[0.08] gap-2">
                <div className="flex items-center gap-2 text-[#f1f2ee]">
                  <Sliders className="w-4 h-4 text-[#38bdf8]" />
                  <span className="font-semibold uppercase tracking-wider">Five-Stage Progressive Autonomy Spectrum</span>
                </div>
                <span className="text-[11px] text-[#858a85]">
                  Active Boundary: <span className="text-[#38bdf8] font-medium">Stage {currentLevel.level} ({currentLevel.name})</span>
                </span>
              </div>

              {/* 5-Stage Interactive Spectrum Bar: OBSERVE -> EXPLAIN -> RECOMMEND -> APPROVE -> EXECUTE */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {levels.map((lvl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLevelIndex(idx)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 cursor-pointer border ${
                      levelIndex === idx
                        ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.18)] scale-[1.02]'
                        : 'border-white/[0.06] bg-[#0d100d]/80 text-[#858a85] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-[#505551] uppercase">0{lvl.level}</span>
                      {lvl.icon}
                    </div>
                    <span className="font-semibold text-sm block text-[#f1f2ee] mb-1">{lvl.name}</span>
                    <span className="text-[10px] text-[#38bdf8] block">{lvl.iam}</span>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Real-Time Scenario Evaluation Grid with Side-Entrance */}
          <div className="space-y-6">
            <ScrollReveal direction="up" delay={200} distance="30px">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/[0.06] gap-4">
                <span className="text-[#f1f2ee] font-medium">Evaluate Operational Scenario:</span>

                {/* Scenario Selector Pills */}
                <div className="flex flex-wrap gap-2">
                  {scenarios.map((sc) => (
                    <button
                      key={sc.id}
                      onClick={() => setSelectedScenarioId(sc.id)}
                      className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer border ${
                        selectedScenarioId === sc.id
                          ? 'border-[#38bdf8] bg-[#38bdf8]/20 text-[#f1f2ee] font-medium'
                          : 'border-white/[0.06] bg-[#0d100d]/80 text-[#858a85] hover:text-[#f1f2ee]'
                      }`}
                    >
                      {sc.name}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Scenario Evaluation Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Scenario Details & OPA Code (Slide from Left) */}
              <div className="lg:col-span-6 space-y-4">
                <ScrollReveal direction="left" delay={280} distance="50px">
                  <div className="p-5 rounded-xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-md space-y-2 shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-[#505551] text-[10px] uppercase">Target Resource</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                        activeScenario.risk === 'High' ? 'bg-[#ef4444]/15 text-[#ef4444]' : 'bg-[#10b981]/15 text-[#10b981]'
                      }`}>
                        {activeScenario.risk} Risk • {activeScenario.env}
                      </span>
                    </div>
                    <div className="text-sm text-[#f1f2ee] font-semibold">{activeScenario.resource}</div>
                    <div className="text-xs text-[#858a85]">{activeScenario.action}</div>
                  </div>

                  <div className="p-5 rounded-xl border border-white/[0.08] bg-[#050605] text-[11px] space-y-1 shadow-lg mt-4">
                    <div className="text-[#505551] text-[10px] flex items-center justify-between pb-2 mb-2 border-b border-white/[0.04]">
                      <span className="flex items-center gap-1.5">
                        <FileCode2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span>Evaluated OPA Policy Guardrail</span>
                      </span>
                      <span className="text-[#38bdf8]">{activeScenario.opaRule}</span>
                    </div>
                    <pre className="text-[#858a85] leading-relaxed overflow-x-auto pt-1 font-mono">
{`# Open Policy Agent (OPA) Guardrail Check
default allow = false
allow if {
  input.environment == "${activeScenario.env.toLowerCase()}"
  input.autonomy_level >= ${levelIndex + 1}
  not input.touches_production_data
}`}
                    </pre>
                  </div>
                </ScrollReveal>
              </div>

              {/* Policy Decision & Action Outcome (Slide from Right) */}
              <div className="lg:col-span-6">
                <ScrollReveal direction="right" delay={280} distance="50px">
                  <div className="p-8 rounded-xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-md flex flex-col justify-between h-full shadow-2xl relative overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                        <span className="text-[10px] text-[#505551] uppercase tracking-wider">Policy Engine Decision</span>
                        <span className={`px-2.5 py-1 rounded text-[10px] font-semibold ${
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
                        <div className="text-xl font-semibold text-[#f1f2ee]">
                          {currentDecision.label}
                        </div>
                        <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                          {currentDecision.detail}
                        </p>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#505551]">
                      <span className="flex items-center gap-1.5 text-[#10b981]">
                        <ShieldCheck className="w-3.5 h-3.5" /> Deterministic OPA Verification
                      </span>
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Zero Unbounded Execution
                      </span>
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

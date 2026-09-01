import React, { useState } from 'react';
import { 
  Box, 
  Cpu, 
  Sliders, 
  ArrowRight, 
  CheckCircle2, 
  FileCode2, 
  Activity, 
  Sparkles
} from 'lucide-react';
import { AwsIcon, TerraformIcon, KubernetesIcon } from './icons/ArchVizIcons';
import { ScrollReveal } from './ui/ScrollReveal';

export type LifecycleStageId = 'design' | 'simulate' | 'provision' | 'monitor';

interface StageData {
  id: LifecycleStageId;
  stepNum: string;
  phaseLabel: string;
  title: string;
  headline: string;
  description: string;
  highlights: string[];
  metricsBadge: { label: string; value: string; color: string };
  codeSnippet: {
    language: string;
    filename: string;
    content: string;
  };
  visualType: string;
}

export const LifecycleExplorer: React.FC = () => {
  const [activeStage, setActiveStage] = useState<LifecycleStageId>('design');
  const [activeCodeTab, setActiveCodeTab] = useState<'preview' | 'code'>('preview');

  const stages: Record<LifecycleStageId, StageData> = {
    design: {
      id: 'design',
      stepNum: '01',
      phaseLabel: 'DAY 0: ARCHITECTURE COMPOSITION',
      title: 'Visual Multi-Cloud Design Canvas',
      headline: 'Design complex cloud systems spatially. Or declare with natural language.',
      description: 'Compose VPCs, container task definitions, relational clusters, and routing tables on an infinite spatial canvas. ArcViz infers dependencies, cross-region latency constraints, and security groups in real time.',
      highlights: [
        'Multi-cloud cross-account topology synthesis (AWS + Azure + GCP)',
        'Automatic VPC peering & routing table calculation',
        'Spatial dependency inference with instant constraint warnings'
      ],
      metricsBadge: { label: 'Topology Synthesis', value: '100% Deterministic', color: '#38bdf8' },
      codeSnippet: {
        language: 'yaml',
        filename: 'architecture-spec.arcviz.yaml',
        content: `version: "2.0"
topology:
  vpc:
    name: "vpc-production-east"
    cidr: "10.100.0.0/16"
    subnets:
      - { name: "public-ingress", cidr: "10.100.1.0/24", az: "us-east-1a" }
      - { name: "private-compute", cidr: "10.100.10.0/24", az: "us-east-1a" }
      - { name: "isolated-data", cidr: "10.100.20.0/24", az: "us-east-1b" }
  services:
    - name: "svc-checkout-prod"
      tier: "compute.ecs-fargate"
      min_tasks: 4
      max_tasks: 32
      ingress: "alb.public-ingress"
      database: "aurora.pg-cluster"
  policies:
    - "opa.rule.disallow_public_database"
    - "opa.rule.enforce_kms_encryption"`
      },
      visualType: 'canvas'
    },
    simulate: {
      id: 'simulate',
      stepNum: '02',
      phaseLabel: 'DAY 0: PRE-FLIGHT DIGITAL TWIN',
      title: 'Pre-Flight Digital Twin Blast Radius Sandbox',
      headline: 'Test every change in a live replica before touching production.',
      description: 'Never deploy to production and "hope for the best". ArcViz clones your infrastructure topology into an ephemeral digital twin, running traffic burst simulations, DB pool saturation tests, and failover scenarios with 0 cloud cost and 0 downtime.',
      highlights: [
        'Predictive blast radius estimation across all downstream services',
        'Simulated failover & network partition stress testing',
        'Instant cost impact calculation before executing deployments'
      ],
      metricsBadge: { label: 'Simulated Invariants', value: '18/18 Passed (0 Risk)', color: '#10b981' },
      codeSnippet: {
        language: 'typescript',
        filename: 'digital-twin-assertion.ts',
        content: `// Pre-Flight Simulation Assertions
const simulation = await digitalTwin.simulateChange({
  targetService: "svc-checkout-prod",
  action: "UPGRADE_AURORA_PG_16",
  trafficLoad: "8,500 req/s (Peak Holiday Simulation)",
});

assert(simulation.downstreamErrors === 0, "No client dropped requests");
assert(simulation.maxLatencyMs < 45.0, "Latency P99 within SLO budget");
assert(simulation.dbConnectionHeadroom > 0.40, "40% pool capacity maintained");
assert(simulation.costDeltaMonthly === "+$42.00", "Within FinOps threshold");

console.log("✓ Pre-flight digital twin passed with ZERO blast radius.");`
      },
      visualType: 'simulation'
    },
    provision: {
      id: 'provision',
      stepNum: '03',
      phaseLabel: 'DAY 1: PROVISION & DEPLOY',
      title: 'Automated Multi-Cloud IaC Compilation',
      headline: 'Compiles directly to verified Terraform, OpenTofu & Kubernetes manifests.',
      description: 'Zero proprietary lock-in. ArcViz synthesizes production-grade, human-readable Terraform HCL and Helm manifests with embedded Open Policy Agent (OPA) guardrails and automated CI/CD pull requests.',
      highlights: [
        'Pure HCL & OpenTofu generation (100% compatible with existing CI/CD)',
        'Strict Open Policy Agent (OPA) compliance verification',
        'Scoped ephemeral STS credential deployment'
      ],
      metricsBadge: { label: 'Policy Verification', value: '14/14 OPA Rego Pass', color: '#a855f7' },
      codeSnippet: {
        language: 'hcl',
        filename: 'main.tf (Auto-Synthesized)',
        content: `module "checkout_service" {
  source  = "terraform-aws-modules/ecs/aws//modules/service"
  version = "~> 5.9.0"

  name        = "svc-checkout-prod"
  cluster_arn = aws_ecs_cluster.production.arn

  cpu    = 1024
  memory = 2048

  subnet_ids = module.vpc.private_subnets
  security_groups = [
    aws_security_group.svc_checkout.id
  ]

  # Enforced via ArcViz OPA Guardrail #204
  enable_execute_command = true
  deployment_circuit_breaker = {
    enable   = true
    rollback = true
  }
}`
      },
      visualType: 'iac'
    },
    monitor: {
      id: 'monitor',
      stepNum: '04',
      phaseLabel: 'DAY 2: 24/7 AUTONOMOUS OPERATIONS',
      title: '24/7 Live Monitoring, Investigation & Self-Healing',
      headline: 'Continuous living graph that detects, isolates, and repairs anomalies in seconds.',
      description: 'Your cloud changes constantly. ArcViz runs 24/7 live telemetry correlation, traverses the dependency graph during incidents to isolate root causes down to individual code commits, and safely executes tested rollback runbooks.',
      highlights: [
        'Correlated multi-cloud topology graph synced in real time',
        'Automated DAG root-cause traversal across metrics, logs, and Git diffs',
        'Configurable L0–L5 autonomy with human-in-the-loop dual-key signoff'
      ],
      metricsBadge: { label: 'Incident MTTR', value: '< 30s Root-Cause Traversal', color: '#10b981' },
      codeSnippet: {
        language: 'json',
        filename: 'incident-telemetry-trace.json',
        content: `{
  "incident_id": "INC-0842",
  "trigger": "CloudWatch: p99_latency > 500ms on route /checkout",
  "root_cause_analysis": {
    "culprit_node": "aws_rds_cluster.aurora_pg_primary",
    "culprit_commit": "8f31b9d in PR #429",
    "cause": "Unclosed database transaction handle in payment controller",
    "recommended_action": "Rollback Task Definition to v42",
    "simulated_impact": "P99 latency drops from 890ms to 38.2ms • 375 handles freed"
  },
  "guardrail_status": "Awaiting SRE Dual-Key Signoff (L3 Autonomy)",
  "execution_token": "sts:session:ephemeral:15m"
}`
      },
      visualType: 'monitoring'
    }
  };

  const current = stages[activeStage];

  return (
    <section id="lifecycle" className="py-20 md:py-32 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Subtle Coordinate Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10 space-y-16">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              Full-Lifecycle Cloud Operating System
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              From first design step <br />
              <span className="text-[#858a85]">to 24/7 live self-healing operations.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-2xl font-sans font-normal">
              ArcViz connects the entire engineering lifecycle into one unified system. Design visually, simulate blast radius with zero risk, compile production IaC, and operate with autonomous intelligence.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Interactive Lifecycle Stepper Tabs */}
        <ScrollReveal direction="up" delay={100} distance="30px">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {(Object.keys(stages) as LifecycleStageId[]).map((stageId) => {
              const item = stages[stageId];
              const isActive = activeStage === stageId;

              return (
                <button
                  key={stageId}
                  onClick={() => setActiveStage(stageId)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer border relative flex flex-col justify-between ${
                    isActive
                      ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_30px_rgba(56,189,248,0.2)] scale-[1.02]'
                      : 'border-white/[0.07] bg-[#0d100d]/80 text-[#858a85] hover:border-white/20 hover:text-[#f1f2ee]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                        isActive ? 'bg-[#38bdf8]/20 text-[#38bdf8]' : 'bg-white/[0.04] text-[#505551]'
                      }`}>
                        STAGE {item.stepNum}
                      </span>
                      {stageId === 'design' && <Box className={`w-4 h-4 ${isActive ? 'text-[#38bdf8]' : 'text-[#505551]'}`} />}
                      {stageId === 'simulate' && <Sliders className={`w-4 h-4 ${isActive ? 'text-[#10b981]' : 'text-[#505551]'}`} />}
                      {stageId === 'provision' && <Cpu className={`w-4 h-4 ${isActive ? 'text-[#a855f7]' : 'text-[#505551]'}`} />}
                      {stageId === 'monitor' && <Activity className={`w-4 h-4 ${isActive ? 'text-[#38bdf8]' : 'text-[#505551]'}`} />}
                    </div>

                    <span className="text-[10px] uppercase font-mono block text-[#505551] mb-1">
                      {item.phaseLabel.split(':')[0]}
                    </span>
                    <h3 className="text-base font-semibold text-[#f1f2ee] font-sans leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px]">
                    <span className={isActive ? 'text-[#38bdf8] font-medium' : 'text-[#505551]'}>
                      {isActive ? 'Active Stage' : 'Click to inspect'}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-[#38bdf8] translate-x-1' : 'text-[#505551]'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Selected Stage Interactive Explorer Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Narrative Deep Dive & Key Architectural Features */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <ScrollReveal direction="left" delay={150} distance="40px">
              <div className="p-7 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-xl shadow-2xl space-y-6 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <span className="text-[10px] text-[#505551] uppercase tracking-wider font-mono">
                      {current.phaseLabel}
                    </span>
                    <span 
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded font-semibold"
                      style={{ backgroundColor: `${current.metricsBadge.color}15`, color: current.metricsBadge.color }}
                    >
                      {current.metricsBadge.value}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium text-[#f1f2ee] font-sans leading-tight">
                    {current.headline}
                  </h3>

                  <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                    {current.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-[10px] font-mono text-[#505551] uppercase tracking-wider block">
                      Core Operational Capabilities:
                    </span>
                    {current.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#f1f2ee] font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#858a85]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>AI-Native Automation</span>
                  </span>
                  <span className="text-[#38bdf8] font-medium">0 Manual Friction</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Interactive Visual Simulation & Real Code Sandbox */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={200} distance="40px">
              <div className="p-7 sm:p-8 rounded-2xl border border-white/[0.12] bg-[#0d100d]/95 backdrop-blur-xl shadow-2xl flex flex-col justify-between h-full space-y-5">
                {/* Header Switcher: Interactive Preview vs Raw Spec Code */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveCodeTab('preview')}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        activeCodeTab === 'preview'
                          ? 'bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/40 font-semibold'
                          : 'text-[#858a85] hover:text-[#f1f2ee]'
                      }`}
                    >
                      Interactive UI Preview
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('code')}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeCodeTab === 'code'
                          ? 'bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/40 font-semibold'
                          : 'text-[#858a85] hover:text-[#f1f2ee]'
                      }`}
                    >
                      <FileCode2 className="w-3.5 h-3.5" />
                      <span>{current.codeSnippet.filename}</span>
                    </button>
                  </div>

                  <span className="text-[10px] font-mono text-[#505551] uppercase hidden sm:inline-block">
                    Live Operational State
                  </span>
                </div>

                {/* Main Interactive Visual / Code Display Area */}
                {activeCodeTab === 'preview' ? (
                  <div className="space-y-4">
                    {/* STAGE 01: VISUAL DESIGN CANVAS */}
                    {activeStage === 'design' && (
                      <div className="p-5 rounded-xl border border-white/[0.08] bg-[#080a08] space-y-4">
                        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/[0.04]">
                          <span className="flex items-center gap-2 text-[#38bdf8] font-medium">
                            <Box className="w-3.5 h-3.5" /> Spatial Topology Composer
                          </span>
                          <span className="text-[#10b981]">Auto-Routing Active</span>
                        </div>

                        {/* Interactive Topology Mockup */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="p-3.5 rounded-lg border border-[#38bdf8]/30 bg-[#38bdf8]/10 text-center space-y-1">
                            <AwsIcon className="w-4 h-4 mx-auto text-[#f1f2ee]" />
                            <span className="text-xs font-semibold text-[#f1f2ee] block">ALB Ingress</span>
                            <span className="text-[9px] text-[#858a85] font-mono">us-east-1a • Public</span>
                          </div>

                          <div className="p-3.5 rounded-lg border border-[#10b981]/30 bg-[#10b981]/10 text-center space-y-1">
                            <KubernetesIcon className="w-4 h-4 mx-auto text-[#f1f2ee]" />
                            <span className="text-xs font-semibold text-[#f1f2ee] block">ECS / EKS Compute</span>
                            <span className="text-[9px] text-[#858a85] font-mono">8 Fargate Tasks</span>
                          </div>

                          <div className="p-3.5 rounded-lg border border-[#a855f7]/30 bg-[#a855f7]/10 text-center space-y-1">
                            <TerraformIcon className="w-4 h-4 mx-auto text-[#f1f2ee]" />
                            <span className="text-xs font-semibold text-[#f1f2ee] block">Aurora PG v2</span>
                            <span className="text-[9px] text-[#858a85] font-mono">Multi-AZ Isolated</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-[#0d100d] border border-white/[0.04] text-[11px] flex items-center justify-between text-[#858a85]">
                          <span>Inferred Cross-Tier Latency: <strong>0.8ms</strong></span>
                          <span className="text-[#38bdf8]">Topology Validated</span>
                        </div>
                      </div>
                    )}

                    {/* STAGE 02: PRE-FLIGHT DIGITAL TWIN */}
                    {activeStage === 'simulate' && (
                      <div className="p-5 rounded-xl border border-[#10b981]/30 bg-[#080a08] space-y-4">
                        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/[0.04]">
                          <span className="flex items-center gap-2 text-[#10b981] font-medium">
                            <Sliders className="w-3.5 h-3.5" /> Ephemeral Digital Twin Sandbox
                          </span>
                          <span className="text-[#10b981] font-mono">Blast Radius: 0.00%</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="p-3.5 rounded-lg bg-[#0d100d] border border-white/[0.06] space-y-1">
                            <span className="text-[10px] text-[#505551] uppercase block">Traffic Peak Simulation</span>
                            <span className="text-sm font-semibold text-[#f1f2ee] block">8,500 req/sec</span>
                            <span className="text-[10px] text-[#10b981]">0 Dropped Requests</span>
                          </div>

                          <div className="p-3.5 rounded-lg bg-[#0d100d] border border-white/[0.06] space-y-1">
                            <span className="text-[10px] text-[#505551] uppercase block">Projected Latency P99</span>
                            <span className="text-sm font-semibold text-[#38bdf8] block">38.2 ms</span>
                            <span className="text-[10px] text-[#38bdf8]">Within 50ms SLO</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-[#10b981]/10 border border-[#10b981]/25 text-[11px] text-[#f1f2ee] font-sans flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                          <span>Pre-flight simulation proves 0 schema incompatibility before applying to live cloud.</span>
                        </div>
                      </div>
                    )}

                    {/* STAGE 03: PROVISION & DEPLOY */}
                    {activeStage === 'provision' && (
                      <div className="p-5 rounded-xl border border-[#a855f7]/30 bg-[#080a08] space-y-4">
                        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/[0.04]">
                          <span className="flex items-center gap-2 text-[#a855f7] font-medium">
                            <Cpu className="w-3.5 h-3.5" /> Terraform & OPA Execution Engine
                          </span>
                          <span className="text-[#38bdf8] font-mono">Ephemeral STS Session</span>
                        </div>

                        <div className="p-3.5 rounded-lg bg-[#0d100d] border border-white/[0.06] space-y-2 text-[11px]">
                          <div className="flex items-center justify-between text-[#858a85]">
                            <span>1. Synthesize Terraform HCL</span>
                            <span className="text-[#10b981]">✓ Generated (12 resources)</span>
                          </div>
                          <div className="flex items-center justify-between text-[#858a85]">
                            <span>2. Evaluate OPA Security Policies</span>
                            <span className="text-[#10b981]">✓ 14/14 Policies Passed</span>
                          </div>
                          <div className="flex items-center justify-between text-[#858a85]">
                            <span>3. Scoped Ephemeral STS Apply</span>
                            <span className="text-[#38bdf8]">✓ 15m Token Revoked on Complete</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-[#0d100d] border border-white/[0.04] text-[11px] flex items-center justify-between text-[#858a85]">
                          <span>Supported Clouds: <strong>AWS • Azure • GCP</strong></span>
                          <span className="text-[#a855f7]">100% Native HCL</span>
                        </div>
                      </div>
                    )}

                    {/* STAGE 04: 24/7 LIVE MONITORING */}
                    {activeStage === 'monitor' && (
                      <div className="p-5 rounded-xl border border-[#38bdf8]/30 bg-[#080a08] space-y-4">
                        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/[0.04]">
                          <span className="flex items-center gap-2 text-[#38bdf8] font-medium">
                            <Activity className="w-3.5 h-3.5 text-[#10b981] animate-pulse" /> 24/7 Correlated Living Graph
                          </span>
                          <span className="text-[#10b981] font-mono">0 Host Agents</span>
                        </div>

                        <div className="p-3.5 rounded-lg bg-[#0d100d] border border-white/[0.06] space-y-2 text-[11px]">
                          <div className="flex items-center justify-between text-[#f1f2ee]">
                            <span className="font-semibold text-xs">Incident Traversal: Anomaly on /checkout</span>
                            <span className="text-[#10b981] px-2 py-0.5 rounded bg-[#10b981]/15 text-[10px]">Root Cause Found</span>
                          </div>
                          <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                            Traversed 4 graph hops. Correlated commit #8f31b9d with Aurora connection pool lock.
                          </p>
                        </div>

                        <div className="p-3 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/25 text-[11px] text-[#f1f2ee] font-sans flex items-center justify-between">
                          <span>Action: Task Definition Rollback Simulated (0 Downtime)</span>
                          <span className="text-[#38bdf8] font-semibold">Dual-Key Ready</span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Raw Code Viewer */
                  <div className="p-4 rounded-xl bg-[#050605] border border-white/[0.08] shadow-inner font-mono text-[11px] leading-relaxed overflow-x-auto max-h-72">
                    <pre className="text-[#858a85] whitespace-pre-wrap">
                      {current.codeSnippet.content}
                    </pre>
                  </div>
                )}

                {/* Bottom Footer Status Bar */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#505551]">
                  <span>Step {current.stepNum} of 04</span>
                  <span className="text-[#38bdf8] flex items-center gap-1 font-medium">
                    Continuous Closed-Loop OS <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Database, Layers, Play, Pause, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AwsIcon, AzureIcon } from '../icons/ArchVizIcons';

export type LoopStage = 
  | 'healthy'
  | 'deployment'
  | 'anomaly'
  | 'investigation'
  | 'root_cause'
  | 'simulation'
  | 'approval'
  | 'executing'
  | 'verified';

export const HeroLiveLoop: React.FC = () => {
  const [stage, setStage] = useState<LoopStage>('healthy');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [selectedNode, setSelectedNode] = useState<string>('ecs-checkout');

  const stageSequence: LoopStage[] = [
    'healthy',
    'deployment',
    'anomaly',
    'investigation',
    'root_cause',
    'simulation',
    'approval',
    'executing',
    'verified'
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timings: Record<LoopStage, number> = {
      healthy: 4200,
      deployment: 3200,
      anomaly: 3200,
      investigation: 3200,
      root_cause: 3800,
      simulation: 3800,
      approval: 3500,
      executing: 2800,
      verified: 3800
    };

    const timer = setTimeout(() => {
      setStage((current) => {
        const nextIndex = (stageSequence.indexOf(current) + 1) % stageSequence.length;
        return stageSequence[nextIndex];
      });
    }, timings[stage]);

    return () => clearTimeout(timer);
  }, [stage, isPlaying]);

  const advanceStage = () => {
    const nextIndex = (stageSequence.indexOf(stage) + 1) % stageSequence.length;
    setStage(stageSequence[nextIndex]);
  };

  const isAnomaly = stage === 'anomaly' || stage === 'investigation' || stage === 'root_cause';
  const isSimulating = stage === 'simulation';

  return (
    <div className="relative w-full select-none font-mono text-xs">
      {/* Real-Time Operational Topology Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-white/[0.08] text-xs">
        <div className="flex items-center gap-3">
          <span className={`w-2.5 h-2.5 rounded-full ${
            isAnomaly ? 'bg-[#ef4444] animate-ping' : isSimulating ? 'bg-[#38bdf8] animate-pulse' : 'bg-[#10b981]'
          }`} />
          <div className="flex items-center gap-2">
            <span className="text-[#f1f2ee] uppercase tracking-wider font-semibold text-[11px]">
              {stage === 'healthy' && "SYSTEM HEALTHY • MULTI-CLOUD TOPOLOGY SYNCHRONIZED"}
              {stage === 'deployment' && "EVENT: COMMIT #8F31B9D DEPLOYED TO SVC-CHECKOUT"}
              {stage === 'anomaly' && "TELEMETRY ANOMALY: LATENCY SPIKE DETECTED (890MS)"}
              {stage === 'investigation' && "AI INVESTIGATION: PARALLEL DAG TRAVERSAL IN PROGRESS"}
              {stage === 'root_cause' && "ROOT CAUSE ISOLATED: AURORA DB CONNECTION EXHAUSTION"}
              {stage === 'simulation' && "DIGITAL TWIN: SIMULATING ROLLBACK TO TASK DEF V42"}
              {stage === 'approval' && "POLICY GUARDRAIL: AWAITING DUAL-KEY AUTHORIZATION"}
              {stage === 'executing' && "EPHEMERAL STS SESSION APPLYING TASK DEFINITION ROLLBACK"}
              {stage === 'verified' && "POST-FLIGHT VERIFIED: LATENCY NORMALIZED TO 38MS (SLO RESTORED)"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-[#858a85]">
          <div className="hidden md:flex items-center gap-4">
            <span>P99 Latency: <strong className={isAnomaly ? 'text-[#ef4444]' : 'text-[#10b981]'}>
              {isAnomaly ? '890 ms' : stage === 'verified' ? '38.2 ms' : '42.1 ms'}
            </strong></span>
            <span>Aurora Handles: <strong className={isAnomaly ? 'text-[#ef4444]' : 'text-[#f1f2ee]'}>
              {isAnomaly ? '495/500 (99%)' : '128/500'}
            </strong></span>
            <span>Policy: <strong className="text-[#10b981]">OPA Validated</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-[#f1f2ee] border border-white/[0.08] transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3 h-3 text-[#38bdf8]" /> : <Play className="w-3 h-3 text-[#10b981]" />}
              <span>{isPlaying ? 'Live' : 'Paused'}</span>
            </button>
            <button
              onClick={advanceStage}
              className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-[#858a85] hover:text-[#f1f2ee] border border-white/[0.08] transition-colors cursor-pointer"
            >
              Next Step →
            </button>
          </div>
        </div>
      </div>

      {/* Large Visual Multi-Cloud Infrastructure Topology Canvas */}
      <div className="relative py-8 flex flex-col items-center justify-center min-h-[440px]">
        {/* Tier 1: Global Edge Ingress (AWS CloudFront + Route53) */}
        <div 
          onClick={() => setSelectedNode('edge-router')}
          className={`cursor-pointer px-5 py-2.5 rounded-lg transition-all duration-300 ${
            selectedNode === 'edge-router'
              ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.15)]'
              : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <AwsIcon className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span className="text-[#f1f2ee] font-medium">ingress-global-edge</span>
            <span className="text-[10px] text-[#505551]">CloudFront • Route53 (Global)</span>
          </div>
        </div>

        {/* Vertical Flow Connector */}
        <div className="w-[1px] h-6 bg-gradient-to-b from-white/[0.2] to-[#38bdf8]/60 relative my-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] absolute top-1/2 -left-[2px] animate-pulse" />
        </div>

        {/* Tier 2: Application Load Balancer */}
        <div 
          onClick={() => setSelectedNode('alb-ingress')}
          className={`cursor-pointer px-5 py-2.5 rounded-lg transition-all duration-300 ${
            selectedNode === 'alb-ingress'
              ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee]'
              : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span className="text-[#f1f2ee] font-medium">alb-public-prod</span>
            <span className="text-[10px] text-[#505551]">AWS ALB Ingress (us-east-1)</span>
          </div>
        </div>

        {/* Branch Lines to Multi-Cloud Compute Tier */}
        <div className="w-80 sm:w-[480px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.2] to-transparent relative my-1">
          <div className="absolute top-0 left-12 w-[1px] h-6 bg-white/[0.15]" />
          <div className="absolute top-0 right-12 w-[1px] h-6 bg-white/[0.15]" />
        </div>

        {/* Tier 3: Multi-Cloud Microservices (AWS ECS & Azure Container Apps) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl pt-2">
          {/* AWS ECS Service */}
          <div 
            onClick={() => setSelectedNode('ecs-checkout')}
            className={`cursor-pointer p-4 rounded-xl transition-all duration-300 relative ${
              isAnomaly
                ? 'border border-[#ef4444] bg-[#ef4444]/15 shadow-[0_0_30px_rgba(239,68,68,0.25)] text-[#f1f2ee]'
                : selectedNode === 'ecs-checkout'
                  ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee]'
                  : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <AwsIcon className="w-3.5 h-3.5 text-[#f1f2ee]" />
                <span className="font-semibold text-sm text-[#f1f2ee]">svc-checkout-prod</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                isAnomaly ? 'bg-[#ef4444]/20 text-[#ef4444] font-medium' : 'bg-[#38bdf8]/15 text-[#38bdf8]'
              }`}>
                {isAnomaly ? 'Pool Lock' : isSimulating ? 'Morphing...' : '8 tasks'}
              </span>
            </div>
            <div className="text-[11px] text-[#858a85]">
              {stage === 'deployment' ? 'Deploying v43 task def...' : isAnomaly ? 'P99: 890ms (DB Starvation)' : 'ECS Fargate • 42ms'}
            </div>
          </div>

          {/* Azure Container Apps */}
          <div 
            onClick={() => setSelectedNode('ecs-auth')}
            className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
              selectedNode === 'ecs-auth'
                ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee]'
                : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <AzureIcon className="w-3.5 h-3.5 text-[#f1f2ee]" />
                <span className="font-semibold text-sm text-[#f1f2ee]">svc-auth-session</span>
              </div>
              <span className="text-[10px] text-[#10b981] px-1.5 py-0.2 rounded bg-[#10b981]/15">Healthy</span>
            </div>
            <div className="text-[11px] text-[#858a85]">Azure Container Apps • 8ms</div>
          </div>
        </div>

        {/* Branch Lines to Multi-Cloud State Tier */}
        <div className="w-80 sm:w-[480px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.2] to-transparent relative my-1">
          <div className="absolute top-0 left-16 w-[1px] h-6 bg-white/[0.15]" />
          <div className="absolute top-0 right-16 w-[1px] h-6 bg-white/[0.15]" />
        </div>

        {/* Tier 4: Multi-Cloud State Tier (AWS Aurora & GCP Redis) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl pt-2">
          {/* AWS Aurora PostgreSQL */}
          <div 
            onClick={() => setSelectedNode('rds-aurora')}
            className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
              isAnomaly
                ? 'border border-[#ef4444] bg-[#ef4444]/15 shadow-[0_0_30px_rgba(239,68,68,0.25)] text-[#f1f2ee]'
                : selectedNode === 'rds-aurora'
                  ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee]'
                  : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <Database className={`w-3.5 h-3.5 ${isAnomaly ? 'text-[#ef4444]' : 'text-[#38bdf8]'}`} />
                <span className="font-semibold text-sm text-[#f1f2ee]">aurora-pg-primary</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                isAnomaly ? 'bg-[#ef4444]/20 text-[#ef4444]' : 'bg-[#10b981]/15 text-[#10b981]'
              }`}>
                {isAnomaly ? '495/500 Handles' : '128/500 Handles'}
              </span>
            </div>
            <div className="text-[11px] text-[#505551]">AWS Aurora PostgreSQL v2 Multi-AZ</div>
          </div>

          {/* GCP Redis Cache */}
          <div 
            onClick={() => setSelectedNode('redis-cache')}
            className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
              selectedNode === 'redis-cache'
                ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee]'
                : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span className="font-semibold text-sm text-[#f1f2ee]">cache-session-cluster</span>
              </div>
              <span className="text-[10px] text-[#10b981] px-1.5 py-0.2 rounded bg-[#10b981]/15">0.8ms p99</span>
            </div>
            <div className="text-[11px] text-[#505551]">GCP Memorystore Redis (us-central1)</div>
          </div>
        </div>
      </div>

      {/* Real-Time Action & Policy Control Strip */}
      <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        {stage === 'approval' ? (
          <div className="flex items-center gap-3">
            <button
              onClick={advanceStage}
              className="px-4 py-2 rounded-lg bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium text-xs transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Sign Off Dual-Key Production Rollback
            </button>
            <span className="text-[11px] text-[#f59e0b]">Awaiting engineer authorization</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-[#858a85]">
            <span className="text-[#505551] uppercase text-[10px]">Active Reasoning:</span>
            <span className="text-[#f1f2ee]">
              {stage === 'healthy' && "Continuous graph observation across AWS, Azure & GCP • 0 drift"}
              {stage === 'deployment' && "Deployment detected: PR #429 applied task definition update"}
              {stage === 'anomaly' && "Traversing graph: latency spike localized to checkout route"}
              {stage === 'investigation' && "Delegating parallel sub-agents to examine container and DB pool"}
              {stage === 'root_cause' && "Root cause identified: unclosed DB transaction handle in controller"}
              {stage === 'simulation' && "Simulating v42 rollback: zero downtime • 375 DB handles released"}
              {stage === 'executing' && "Scoped ephemeral STS credentials rolling back service..."}
              {stage === 'verified' && "Post-flight check passed: DB pool at 24% • SLO restored"}
            </span>
          </div>
        )}

        <div className="text-[11px] text-[#505551] flex-shrink-0 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
          <span>Unified multi-cloud infrastructure graph</span>
        </div>
      </div>
    </div>
  );
};

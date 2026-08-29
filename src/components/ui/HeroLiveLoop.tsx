import React, { useState, useEffect } from 'react';
import { Database, Layers, HardDrive, Play, Pause, ShieldCheck } from 'lucide-react';

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
    <div className="relative w-full max-w-[1140px] mx-auto select-none">
      {/* Floating Operational Telemetry Bar (Open, No heavy box) */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-white/[0.08] text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className={`w-2 h-2 rounded-full ${
            isAnomaly ? 'bg-[#ef4444] animate-ping' : isSimulating ? 'bg-[#38bdf8] animate-pulse' : 'bg-[#10b981]'
          }`} />
          <span className="text-[#f1f2ee] uppercase tracking-wider font-medium text-[11px]">
            {stage === 'healthy' && "SYSTEM HEALTHY • AWS US-EAST-1"}
            {stage === 'deployment' && "EVENT: COMMIT #8F31B9D MERGED TO MAIN"}
            {stage === 'anomaly' && "ANOMALY: LATENCY SPIKE (890MS ON /CHECKOUT)"}
            {stage === 'investigation' && "ARCHVIZ AGENT: DELEGATING PARALLEL SUB-AGENTS"}
            {stage === 'root_cause' && "ROOT CAUSE: AURORA CONNECTION POOL SATURATION"}
            {stage === 'simulation' && "DIGITAL TWIN: SIMULATING ROLLBACK TO V42"}
            {stage === 'approval' && "OPA GUARDRAIL: AWAITING DUAL-KEY SIGN-OFF"}
            {stage === 'executing' && "STS ASSUMED ROLE APPLYING SCOPED UPDATE"}
            {stage === 'verified' && "VERIFIED: LATENCY NORMALIZED TO 38MS"}
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-[#858a85]">
          <div className="hidden sm:flex items-center gap-4">
            <span>P99: <strong className={isAnomaly ? 'text-[#ef4444]' : 'text-[#10b981]'}>
              {isAnomaly ? '890.4 ms' : stage === 'verified' ? '38.2 ms' : '42.1 ms'}
            </strong></span>
            <span>Pool: <strong className={isAnomaly ? 'text-[#ef4444]' : 'text-[#f1f2ee]'}>
              {isAnomaly ? '495/500 (99%)' : '128/500'}
            </strong></span>
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
              className="px-2 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-[#858a85] hover:text-[#f1f2ee] border border-white/[0.08] transition-colors cursor-pointer"
            >
              Step →
            </button>
          </div>
        </div>
      </div>

      {/* Open Spatial Topology Canvas (Free of box-in-a-box framing) */}
      <div className="relative py-8 flex flex-col items-center justify-center min-h-[460px]">
        {/* Level 1: Edge Router */}
        <div 
          onClick={() => setSelectedNode('api-gateway')}
          className={`cursor-pointer px-4 py-2 rounded transition-all duration-300 font-mono text-xs ${
            selectedNode === 'api-gateway'
              ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee]'
              : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span className="text-[#f1f2ee]">api.production.internal</span>
            <span className="text-[10px] text-[#505551]">Route53 / CloudFront</span>
          </div>
        </div>

        {/* Vertical Line with Pulse */}
        <div className="w-[1px] h-6 bg-white/[0.12] relative my-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] absolute top-1/2 -left-[2px] animate-pulse" />
        </div>

        {/* Level 2: ALB Ingress */}
        <div 
          onClick={() => setSelectedNode('alb-ingress')}
          className={`cursor-pointer px-4 py-2 rounded transition-all duration-300 font-mono text-xs ${
            selectedNode === 'alb-ingress'
              ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee]'
              : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span className="text-[#f1f2ee]">alb-edge-v2</span>
            <span className="text-[10px] text-[#505551]">AWS ALB (us-east-1)</span>
          </div>
        </div>

        {/* Branch Lines */}
        <div className="w-80 h-[1px] bg-white/[0.12] relative my-1">
          <div className="absolute top-0 left-8 w-[1px] h-6 bg-white/[0.12]" />
          <div className="absolute top-0 right-8 w-[1px] h-6 bg-white/[0.12]" />
        </div>

        {/* Level 3: Compute Tier */}
        <div className="grid grid-cols-2 gap-8 w-full max-w-lg pt-4">
          <div 
            onClick={() => setSelectedNode('ecs-checkout')}
            className={`cursor-pointer p-4 rounded transition-all duration-300 font-mono text-xs relative ${
              isAnomaly
                ? 'border border-[#ef4444] bg-[#ef4444]/15 shadow-[0_0_30px_rgba(239,68,68,0.2)] text-[#f1f2ee]'
                : selectedNode === 'ecs-checkout'
                  ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee]'
                  : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-sm text-[#f1f2ee]">svc-checkout</span>
              <span className={`text-[10px] ${isAnomaly ? 'text-[#ef4444] font-medium' : 'text-[#38bdf8]'}`}>
                {isAnomaly ? 'Queue Lock' : '8 tasks'}
              </span>
            </div>
            <div className="text-[10px] text-[#858a85]">
              {stage === 'deployment' ? 'Deploying v43...' : isAnomaly ? 'p99 890ms (Blocked)' : 'ECS Fargate • 42ms'}
            </div>
          </div>

          <div 
            onClick={() => setSelectedNode('ecs-auth')}
            className={`cursor-pointer p-4 rounded transition-all duration-300 font-mono text-xs ${
              selectedNode === 'ecs-auth'
                ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee]'
                : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-sm text-[#f1f2ee]">svc-auth</span>
              <span className="text-[10px] text-[#10b981]">4 instances</span>
            </div>
            <div className="text-[10px] text-[#858a85]">Azure Container Apps • 8ms</div>
          </div>
        </div>

        {/* Branch Lines */}
        <div className="w-80 h-[1px] bg-white/[0.12] relative my-1">
          <div className="absolute top-0 left-6 w-[1px] h-6 bg-white/[0.12]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-white/[0.12]" />
          <div className="absolute top-0 right-6 w-[1px] h-6 bg-white/[0.12]" />
        </div>

        {/* Level 4: State Tier */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-xl pt-4">
          <div 
            onClick={() => setSelectedNode('rds-aurora')}
            className={`cursor-pointer p-3.5 rounded transition-all duration-300 font-mono text-xs ${
              isAnomaly
                ? 'border border-[#ef4444] bg-[#ef4444]/15 shadow-[0_0_30px_rgba(239,68,68,0.2)] text-[#f1f2ee]'
                : selectedNode === 'rds-aurora'
                  ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee]'
                  : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <Database className={`w-3.5 h-3.5 ${isAnomaly ? 'text-[#ef4444]' : 'text-[#38bdf8]'}`} />
              <span className="text-[12px] text-[#f1f2ee] font-medium">aurora-pg</span>
            </div>
            <div className="text-[10px] text-[#505551]">
              {isAnomaly ? '495/500 conn (Lock)' : 'Aurora v2 Multi-AZ'}
            </div>
          </div>

          <div 
            onClick={() => setSelectedNode('redis-cache')}
            className={`cursor-pointer p-3.5 rounded transition-all duration-300 font-mono text-xs ${
              selectedNode === 'redis-cache'
                ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee]'
                : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span className="text-[12px] text-[#f1f2ee] font-medium">cache-redis</span>
            </div>
            <div className="text-[10px] text-[#505551]">GCP Memorystore</div>
          </div>

          <div 
            onClick={() => setSelectedNode('s3-assets')}
            className={`cursor-pointer p-3.5 rounded transition-all duration-300 font-mono text-xs ${
              selectedNode === 's3-assets'
                ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f1f2ee]'
                : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a85]'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <HardDrive className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span className="text-[12px] text-[#f1f2ee] font-medium">s3-receipts</span>
            </div>
            <div className="text-[10px] text-[#505551]">KMS Encrypted</div>
          </div>
        </div>
      </div>

      {/* Floating Action Strip (No outer container) */}
      <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
        {stage === 'approval' ? (
          <div className="flex items-center gap-3">
            <button
              onClick={advanceStage}
              className="px-4 py-2 rounded bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Approve Production Rollback Now
            </button>
            <span className="text-[11px] text-[#f59e0b]">Awaiting dual-key authorization</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-[#858a85]">
            <span className="text-[#505551] uppercase text-[10px]">Active OS Context:</span>
            <span className="text-[#f1f2ee]">
              {stage === 'healthy' && "Continuous telemetry observation • 0 drift"}
              {stage === 'deployment' && "PR #429 applied: updating container task definition"}
              {stage === 'anomaly' && "Traversing dependency graph to locate bottleneck"}
              {stage === 'investigation' && "Delegating parallel tasks to Reliability & Database sub-agents"}
              {stage === 'root_cause' && "Identified unclosed DB handle in checkout controller loop"}
              {stage === 'simulation' && "Simulating v42 rollback: 0 downtime • +375 DB handles freed"}
              {stage === 'executing' && "STS assumed role applying task rollback..."}
              {stage === 'verified' && "Post-flight check passed: DB pool at 24% • SLO restored"}
            </span>
          </div>
        )}

        <div className="text-[11px] text-[#505551] flex-shrink-0">
          Autonomous Infrastructure Loop
        </div>
      </div>
    </div>
  );
};

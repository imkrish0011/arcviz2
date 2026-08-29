import React, { useState } from 'react';
import { 
  Database, 
  Layers, 
  HardDrive, 
  
  
  
} from 'lucide-react';

interface NodeData {
  id: string;
  name: string;
  type: string;
  category: 'compute' | 'database' | 'networking' | 'storage' | 'cache';
  status: 'healthy' | 'warning' | 'incident' | 'info';
  region: string;
  metrics: {
    cpu?: string;
    memory?: string;
    latency?: string;
    rps?: string;
    connections?: string;
  };
  recentEvent: string;
  lastCommit?: string;
  cost: string;
}

export const TopologyGraph: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('ecs-checkout');

  const nodes: NodeData[] = [
    {
      id: 'api-gateway',
      name: 'api.production.internal',
      type: 'Amazon CloudFront',
      category: 'networking',
      status: 'healthy',
      region: 'global',
      metrics: { rps: '4.8k req/s', latency: '12ms' },
      recentEvent: 'WAF rules synced via OPA policy',
      cost: '$142/mo'
    },
    {
      id: 'alb-ingress',
      name: 'alb-edge-v2',
      type: 'Application Load Balancer',
      category: 'networking',
      status: 'healthy',
      region: 'us-east-1',
      metrics: { rps: '4.8k req/s', latency: '18ms' },
      recentEvent: 'SSL certificate active',
      cost: '$28/mo'
    },
    {
      id: 'ecs-checkout',
      name: 'svc-checkout-prod',
      type: 'AWS ECS Fargate (8 tasks)',
      category: 'compute',
      status: 'healthy',
      region: 'us-east-1a/b',
      metrics: { cpu: '34%', memory: '52%', latency: '42ms' },
      recentEvent: 'Autoscaled 6 -> 8 tasks (14:32:10 UTC)',
      lastCommit: 'commit #8f31b9d - Optimize pool',
      cost: '$380/mo'
    },
    {
      id: 'ecs-auth',
      name: 'svc-auth-session',
      type: 'AWS ECS Fargate (4 tasks)',
      category: 'compute',
      status: 'healthy',
      region: 'us-east-1a/b',
      metrics: { cpu: '18%', memory: '29%', latency: '8ms' },
      recentEvent: 'Config mapped: JWT_ROTATION',
      lastCommit: 'commit #2a90df1 - Token verify',
      cost: '$190/mo'
    },
    {
      id: 'rds-aurora',
      name: 'aurora-pg-primary',
      type: 'Amazon Aurora PostgreSQL',
      category: 'database',
      status: 'healthy',
      region: 'us-east-1a (Multi-AZ)',
      metrics: { cpu: '41%', connections: '128 / 500', latency: '2.4ms' },
      recentEvent: 'Automated snapshot verified',
      cost: '$620/mo'
    },
    {
      id: 'redis-cache',
      name: 'cache-session',
      type: 'ElastiCache Redis v7.0',
      category: 'cache',
      status: 'healthy',
      region: 'us-east-1',
      metrics: { memory: '44%', latency: '0.8ms' },
      recentEvent: 'Replication lag < 1ms',
      cost: '$110/mo'
    },
    {
      id: 's3-assets',
      name: 's3-receipts',
      type: 'Amazon S3 (SSE-KMS)',
      category: 'storage',
      status: 'healthy',
      region: 'us-east-1',
      metrics: { rps: '320 req/s' },
      recentEvent: 'Lifecycle policy active',
      cost: '$48/mo'
    }
  ];

  const selectedNode = nodes.find(n => n.id === selectedId) || nodes[2];

  return (
    <div className="relative w-full max-w-[1100px] mx-auto">
      {/* Subtle Top Metadata Bar */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#858a86] mb-4 px-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          <span className="text-[#f2f2ee] uppercase tracking-wider font-medium">Live System Model</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[#505551]">
          <span>142 RESOURCES</span>
          <span>·</span>
          <span>18 SERVICES</span>
          <span>·</span>
          <span>SYNCED 4s AGO</span>
        </div>
      </div>

      {/* Main Spatial Graph Canvas (No heavy box borders) */}
      <div className="relative rounded-lg border border-white/[0.06] bg-[#080a08]/70 backdrop-blur-md p-6 sm:p-10 min-h-[460px] flex flex-col justify-between overflow-hidden shadow-2xl">
        {/* Subtle coordinate dot grid */}
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

        {/* Dynamic Topology Hierarchy */}
        <div className="relative z-10 my-auto flex flex-col items-center gap-6 min-w-[500px] py-4">
          {/* Level 1: Edge Router */}
          <div 
            onClick={() => setSelectedId('api-gateway')}
            className={`cursor-pointer px-4 py-2 rounded transition-all duration-200 ${
              selectedId === 'api-gateway'
                ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a86]'
            }`}
          >
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span className="text-[#f2f2ee] font-medium">api.production.internal</span>
              <span className="text-[10px] text-[#505551]">CloudFront</span>
            </div>
          </div>

          {/* Flow Line */}
          <div className="w-[1px] h-5 bg-white/[0.1] relative">
            <div className="w-1 h-1 rounded-full bg-[#38bdf8] absolute top-1/2 -left-[1.5px]" />
          </div>

          {/* Level 2: ALB Ingress */}
          <div 
            onClick={() => setSelectedId('alb-ingress')}
            className={`cursor-pointer px-4 py-2 rounded transition-all duration-200 ${
              selectedId === 'alb-ingress'
                ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a86]'
            }`}
          >
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span className="text-[#f2f2ee] font-medium">alb-edge-v2</span>
              <span className="text-[10px] text-[#505551]">ALB</span>
            </div>
          </div>

          {/* Branch Line */}
          <div className="w-56 h-[1px] bg-white/[0.1] relative">
            <div className="absolute top-0 left-6 w-[1px] h-5 bg-white/[0.1]" />
            <div className="absolute top-0 right-6 w-[1px] h-5 bg-white/[0.1]" />
          </div>

          {/* Level 3: Compute Tier */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-sm pt-1">
            <div 
              onClick={() => setSelectedId('ecs-checkout')}
              className={`cursor-pointer p-3 rounded transition-all duration-200 ${
                selectedId === 'ecs-checkout'
                  ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                  : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a86]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-medium text-[#f2f2ee]">svc-checkout</span>
                <span className="text-[10px] font-mono text-[#38bdf8]">8 tasks</span>
              </div>
              <div className="text-[10px] font-mono text-[#858a86]">ECS Fargate • 42ms</div>
            </div>

            <div 
              onClick={() => setSelectedId('ecs-auth')}
              className={`cursor-pointer p-3 rounded transition-all duration-200 ${
                selectedId === 'ecs-auth'
                  ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                  : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a86]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-medium text-[#f2f2ee]">svc-auth</span>
                <span className="text-[10px] font-mono text-[#858a86]">4 tasks</span>
              </div>
              <div className="text-[10px] font-mono text-[#858a86]">ECS Fargate • 8ms</div>
            </div>
          </div>

          {/* Data Tier Branch Line */}
          <div className="w-64 h-[1px] bg-white/[0.1] relative">
            <div className="absolute top-0 left-4 w-[1px] h-5 bg-white/[0.1]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-5 bg-white/[0.1]" />
            <div className="absolute top-0 right-4 w-[1px] h-5 bg-white/[0.1]" />
          </div>

          {/* Level 4: State Tier (Aurora, Redis, S3) */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-md pt-1">
            <div 
              onClick={() => setSelectedId('rds-aurora')}
              className={`cursor-pointer p-2.5 rounded transition-all duration-200 ${
                selectedId === 'rds-aurora'
                  ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                  : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a86]'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <Database className="w-3 h-3 text-[#38bdf8]" />
                <span className="font-mono text-[11px] text-[#f2f2ee]">aurora-pg</span>
              </div>
              <div className="text-[9px] font-mono text-[#505551]">Aurora v2</div>
            </div>

            <div 
              onClick={() => setSelectedId('redis-cache')}
              className={`cursor-pointer p-2.5 rounded transition-all duration-200 ${
                selectedId === 'redis-cache'
                  ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                  : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a86]'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <Layers className="w-3 h-3 text-[#38bdf8]" />
                <span className="font-mono text-[11px] text-[#f2f2ee]">cache-redis</span>
              </div>
              <div className="text-[9px] font-mono text-[#505551]">Redis 7.0</div>
            </div>

            <div 
              onClick={() => setSelectedId('s3-assets')}
              className={`cursor-pointer p-2.5 rounded transition-all duration-200 ${
                selectedId === 's3-assets'
                  ? 'border border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                  : 'border border-white/[0.08] bg-[#0d100d]/90 hover:border-white/20 text-[#858a86]'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <HardDrive className="w-3 h-3 text-[#38bdf8]" />
                <span className="font-mono text-[11px] text-[#f2f2ee]">s3-receipts</span>
              </div>
              <div className="text-[9px] font-mono text-[#505551]">KMS Encrypted</div>
            </div>
          </div>
        </div>

        {/* Selected Node Telemetry Strip (Bottom subtle floating bar) */}
        <div className="relative z-10 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[#505551] uppercase text-[10px]">Active Node:</span>
            <span className="text-[#f2f2ee] font-medium">{selectedNode.name}</span>
            <span className="text-[#858a86] text-[11px]">({selectedNode.type})</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            {selectedNode.metrics.latency && (
              <span className="text-[#858a86]">
                Latency: <strong className="text-[#10b981] font-normal">{selectedNode.metrics.latency}</strong>
              </span>
            )}
            {selectedNode.metrics.cpu && (
              <span className="text-[#858a86]">
                CPU: <strong className="text-[#f2f2ee] font-normal">{selectedNode.metrics.cpu}</strong>
              </span>
            )}
            <span className="text-[#858a86] hidden sm:inline">
              Cost: <strong className="text-[#f2f2ee] font-normal">{selectedNode.cost}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

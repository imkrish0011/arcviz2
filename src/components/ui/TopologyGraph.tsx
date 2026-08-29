import React, { useState } from 'react';
import { SystemBadge } from './SystemBadge';
import { 
  Database, 
  Layers, 
  HardDrive, 
  ShieldCheck, 
  GitCommit, 
  Clock
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
  const [activeFilter, setActiveFilter] = useState<'all' | 'compute' | 'database' | 'network'>('all');

  const nodes: NodeData[] = [
    {
      id: 'api-gateway',
      name: 'api.production.internal',
      type: 'Amazon CloudFront / Route53',
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
      recentEvent: 'SSL certificate renewed automatically',
      cost: '$28/mo'
    },
    {
      id: 'ecs-checkout',
      name: 'svc-checkout-prod',
      type: 'AWS ECS Fargate (8 tasks)',
      category: 'compute',
      status: 'healthy',
      region: 'us-east-1a / 1b',
      metrics: { cpu: '34%', memory: '52%', latency: '42ms' },
      recentEvent: 'Autoscaled from 6 to 8 tasks (14:32:10 UTC)',
      lastCommit: 'commit #8f31b9d - Optimize connection pool',
      cost: '$380/mo'
    },
    {
      id: 'ecs-auth',
      name: 'svc-auth-session',
      type: 'AWS ECS Fargate (4 tasks)',
      category: 'compute',
      status: 'healthy',
      region: 'us-east-1a / 1b',
      metrics: { cpu: '18%', memory: '29%', latency: '8ms' },
      recentEvent: 'Config mapped: JWT_ROTATION_V2',
      lastCommit: 'commit #2a90df1 - Token verify update',
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
      recentEvent: 'Automated snapshot taken (14:00:00 UTC)',
      cost: '$620/mo'
    },
    {
      id: 'redis-cache',
      name: 'cache-session-cluster',
      type: 'ElastiCache Redis v7.0',
      category: 'cache',
      status: 'healthy',
      region: 'us-east-1',
      metrics: { memory: '44%', latency: '0.8ms' },
      recentEvent: 'Cluster replication lag < 1ms',
      cost: '$110/mo'
    },
    {
      id: 's3-assets',
      name: 's3-checkout-receipts',
      type: 'Amazon S3 Bucket (SSE-KMS)',
      category: 'storage',
      status: 'healthy',
      region: 'us-east-1',
      metrics: { rps: '320 req/s' },
      recentEvent: 'Lifecycle policy active: 90d Glacier transition',
      cost: '$48/mo'
    }
  ];

  const selectedNode = nodes.find(n => n.id === selectedId) || nodes[2];

  return (
    <div className="w-full rounded-lg border border-[#1e2229] bg-[#0d0f14] overflow-hidden shadow-2xl">
      {/* Top Console Bar */}
      <div className="px-4 py-2.5 bg-[#0a0b10] border-b border-[#1e2229] flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="font-mono text-[#ededed] font-medium">LIVE MODEL</span>
          </div>
          <span className="text-[#3a3e48]">|</span>
          <span className="font-mono text-[#888d96]">aws://account-8392109482/us-east-1</span>
        </div>

        {/* Telemetry Summary Badges */}
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-[#12151a] border border-[#1e2229] font-mono text-[11px] text-[#888d96]">
            <strong className="text-[#ededed] font-medium">142</strong> resources
          </span>
          <span className="px-2 py-0.5 rounded bg-[#12151a] border border-[#1e2229] font-mono text-[11px] text-[#888d96]">
            <strong className="text-[#ededed] font-medium">18</strong> services
          </span>
          <span className="px-2 py-0.5 rounded bg-[#12151a] border border-[#1e2229] font-mono text-[11px] text-[#888d96]">
            <strong className="text-[#0ea5e9] font-medium">3</strong> recent changes
          </span>
          <SystemBadge status="healthy" label="Sync 4s ago" />
        </div>
      </div>

      {/* Main Canvas & Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Canvas Area (Col 1-8) */}
        <div className="lg:col-span-8 p-6 bg-grid-pattern relative flex flex-col justify-between overflow-x-auto">
          {/* Top Canvas Action Bar */}
          <div className="flex items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-1.5 p-1 rounded bg-[#08090a] border border-[#1e2229]">
              {(['all', 'compute', 'database', 'network'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono capitalize transition-colors ${
                    activeFilter === filter
                      ? 'bg-[#181b22] text-[#ededed] font-medium border border-[#2e3440]'
                      : 'text-[#888d96] hover:text-[#ededed]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#888d96] font-mono">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              Topology synchronized
            </div>
          </div>

          {/* Interactive Topology Graph Diagram */}
          <div className="relative my-auto py-6 flex flex-col items-center gap-8 min-w-[540px]">
            {/* Level 1: Edge Router */}
            <div 
              onClick={() => setSelectedId('api-gateway')}
              className={`cursor-pointer px-4 py-2.5 rounded border transition-all ${
                selectedId === 'api-gateway'
                  ? 'border-[#0ea5e9] bg-[#0ea5e9]/10 shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                  : 'border-[#1e2229] bg-[#0e1013] hover:border-[#2e3440]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                <span className="font-mono text-xs text-[#ededed] font-medium">api.production.internal</span>
                <span className="text-[10px] font-mono text-[#888d96] bg-[#181b22] px-1.5 py-0.5 rounded">CloudFront</span>
              </div>
            </div>

            {/* Connecting Vertical Line */}
            <div className="w-[1px] h-6 bg-[#1e2229] relative">
              <div className="w-1 h-1 rounded-full bg-[#0ea5e9] absolute top-1/2 -left-[1.5px]" />
            </div>

            {/* Level 2: ALB */}
            <div 
              onClick={() => setSelectedId('alb-ingress')}
              className={`cursor-pointer px-4 py-2.5 rounded border transition-all ${
                selectedId === 'alb-ingress'
                  ? 'border-[#0ea5e9] bg-[#0ea5e9]/10 shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                  : 'border-[#1e2229] bg-[#0e1013] hover:border-[#2e3440]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                <span className="font-mono text-xs text-[#ededed] font-medium">alb-edge-v2</span>
                <span className="text-[10px] font-mono text-[#888d96] bg-[#181b22] px-1.5 py-0.5 rounded">ALB</span>
              </div>
            </div>

            {/* Connecting Branch Line */}
            <div className="w-64 h-[1px] bg-[#1e2229] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-[#1e2229]" />
              <div className="absolute top-0 left-8 w-[1px] h-6 bg-[#1e2229]" />
              <div className="absolute top-0 right-8 w-[1px] h-6 bg-[#1e2229]" />
            </div>

            {/* Level 3: Compute Tier */}
            <div className="grid grid-cols-2 gap-8 w-full max-w-md pt-2">
              <div 
                onClick={() => setSelectedId('ecs-checkout')}
                className={`cursor-pointer p-3 rounded border transition-all ${
                  selectedId === 'ecs-checkout'
                    ? 'border-[#0ea5e9] bg-[#0ea5e9]/10 shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                    : 'border-[#1e2229] bg-[#0e1013] hover:border-[#2e3440]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span className="font-mono text-xs font-semibold text-[#ededed]">svc-checkout</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#0ea5e9]">8 tasks</span>
                </div>
                <div className="text-[11px] font-mono text-[#888d96]">ECS Fargate • p99 42ms</div>
              </div>

              <div 
                onClick={() => setSelectedId('ecs-auth')}
                className={`cursor-pointer p-3 rounded border transition-all ${
                  selectedId === 'ecs-auth'
                    ? 'border-[#0ea5e9] bg-[#0ea5e9]/10 shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                    : 'border-[#1e2229] bg-[#0e1013] hover:border-[#2e3440]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span className="font-mono text-xs font-semibold text-[#ededed]">svc-auth</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#888d96]">4 tasks</span>
                </div>
                <div className="text-[11px] font-mono text-[#888d96]">ECS Fargate • p99 8ms</div>
              </div>
            </div>

            {/* Connecting Vertical to DB & Storage */}
            <div className="w-72 h-[1px] bg-[#1e2229] relative">
              <div className="absolute top-0 left-6 w-[1px] h-6 bg-[#1e2229]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-[#1e2229]" />
              <div className="absolute top-0 right-6 w-[1px] h-6 bg-[#1e2229]" />
            </div>

            {/* Level 4: State Tier (RDS, Redis, S3) */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-lg pt-2">
              <div 
                onClick={() => setSelectedId('rds-aurora')}
                className={`cursor-pointer p-2.5 rounded border transition-all ${
                  selectedId === 'rds-aurora'
                    ? 'border-[#0ea5e9] bg-[#0ea5e9]/10 shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                    : 'border-[#1e2229] bg-[#0e1013] hover:border-[#2e3440]'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Database className="w-3.5 h-3.5 text-[#0ea5e9]" />
                  <span className="font-mono text-[11px] font-medium text-[#ededed]">aurora-pg</span>
                </div>
                <div className="text-[10px] font-mono text-[#888d96]">Aurora v2 Multi-AZ</div>
              </div>

              <div 
                onClick={() => setSelectedId('redis-cache')}
                className={`cursor-pointer p-2.5 rounded border transition-all ${
                  selectedId === 'redis-cache'
                    ? 'border-[#0ea5e9] bg-[#0ea5e9]/10 shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                    : 'border-[#1e2229] bg-[#0e1013] hover:border-[#2e3440]'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Layers className="w-3.5 h-3.5 text-[#0ea5e9]" />
                  <span className="font-mono text-[11px] font-medium text-[#ededed]">cache-redis</span>
                </div>
                <div className="text-[10px] font-mono text-[#888d96]">Redis Cluster 7.0</div>
              </div>

              <div 
                onClick={() => setSelectedId('s3-assets')}
                className={`cursor-pointer p-2.5 rounded border transition-all ${
                  selectedId === 's3-assets'
                    ? 'border-[#0ea5e9] bg-[#0ea5e9]/10 shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                    : 'border-[#1e2229] bg-[#0e1013] hover:border-[#2e3440]'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <HardDrive className="w-3.5 h-3.5 text-[#0ea5e9]" />
                  <span className="font-mono text-[11px] font-medium text-[#ededed]">s3-receipts</span>
                </div>
                <div className="text-[10px] font-mono text-[#888d96]">KMS Encrypted</div>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-[#5e636e] pt-4">
            Click any topology node to inspect living runtime parameters and telemetry history.
          </div>
        </div>

        {/* Node Telemetry Inspector Sidebar (Col 9-12) */}
        <div className="lg:col-span-4 bg-[#0a0b10] border-t lg:border-t-0 lg:border-l border-[#1e2229] p-5 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1e2229]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#5e636e]">Resource Inspector</span>
                <h4 className="text-sm font-mono font-bold text-[#ededed] truncate mt-0.5">{selectedNode.name}</h4>
              </div>
              <SystemBadge status={selectedNode.status} />
            </div>

            {/* Meta Attributes */}
            <div className="space-y-3 mb-6">
              <div>
                <span className="text-[10px] font-mono text-[#5e636e] uppercase">Type</span>
                <p className="text-xs font-mono text-[#ededed]">{selectedNode.type}</p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#5e636e] uppercase">Region / Availability</span>
                <p className="text-xs font-mono text-[#ededed]">{selectedNode.region}</p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#5e636e] uppercase">Monthly Cost</span>
                <p className="text-xs font-mono text-[#ededed]">{selectedNode.cost}</p>
              </div>
            </div>

            {/* Real-time Telemetry Metrics */}
            <div className="mb-6">
              <span className="text-[10px] font-mono text-[#5e636e] uppercase block mb-2">Live Signals</span>
              <div className="grid grid-cols-2 gap-2">
                {selectedNode.metrics.cpu && (
                  <div className="p-2 rounded bg-[#0e1013] border border-[#1e2229]">
                    <span className="text-[10px] font-mono text-[#888d96] block">CPU Util</span>
                    <span className="text-xs font-mono font-bold text-[#ededed]">{selectedNode.metrics.cpu}</span>
                  </div>
                )}
                {selectedNode.metrics.memory && (
                  <div className="p-2 rounded bg-[#0e1013] border border-[#1e2229]">
                    <span className="text-[10px] font-mono text-[#888d96] block">Memory</span>
                    <span className="text-xs font-mono font-bold text-[#ededed]">{selectedNode.metrics.memory}</span>
                  </div>
                )}
                {selectedNode.metrics.latency && (
                  <div className="p-2 rounded bg-[#0e1013] border border-[#1e2229]">
                    <span className="text-[10px] font-mono text-[#888d96] block">p99 Latency</span>
                    <span className="text-xs font-mono font-bold text-[#10b981]">{selectedNode.metrics.latency}</span>
                  </div>
                )}
                {selectedNode.metrics.rps && (
                  <div className="p-2 rounded bg-[#0e1013] border border-[#1e2229]">
                    <span className="text-[10px] font-mono text-[#888d96] block">Throughput</span>
                    <span className="text-xs font-mono font-bold text-[#ededed]">{selectedNode.metrics.rps}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Operational History / Audit */}
            <div>
              <span className="text-[10px] font-mono text-[#5e636e] uppercase block mb-2">Operational Event Log</span>
              <div className="p-2.5 rounded bg-[#0e1013] border border-[#1e2229] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#888d96]">
                  <Clock className="w-3 h-3 text-[#5e636e]" />
                  <span>{selectedNode.recentEvent}</span>
                </div>
                {selectedNode.lastCommit && (
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#0ea5e9]">
                    <GitCommit className="w-3 h-3 text-[#0ea5e9]" />
                    <span>{selectedNode.lastCommit}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1e2229] mt-4 flex items-center justify-between text-xs font-mono">
            <span className="text-[#5e636e]">Policy: OPA-strict-v2</span>
            <span className="text-[#10b981] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Enforced
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

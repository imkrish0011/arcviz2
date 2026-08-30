import React, { useState } from 'react';
import { Database, Layers, Network, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

interface InteractiveNode {
  id: string;
  name: string;
  provider: 'AWS' | 'Azure' | 'GCP';
  type: string;
  region: string;
  dependencies: string[];
  metrics: { latency: string; throughput: string; cpu: string };
  recentEvent: string;
  cost: string;
}

export const LivingSystem: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('ecs-checkout');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const nodes: InteractiveNode[] = [
    {
      id: 'edge-router',
      name: 'ingress-global-edge',
      provider: 'AWS',
      type: 'CloudFront CDN / Route53',
      region: 'Global',
      dependencies: ['alb-ingress'],
      metrics: { latency: '12ms', throughput: '4.8k req/s', cpu: '14%' },
      recentEvent: 'WAF rules synced via OPA policy',
      cost: '$142/mo'
    },
    {
      id: 'alb-ingress',
      name: 'alb-public-prod',
      provider: 'AWS',
      type: 'Application Load Balancer',
      region: 'us-east-1',
      dependencies: ['edge-router', 'ecs-checkout', 'ecs-auth'],
      metrics: { latency: '18ms', throughput: '4.8k req/s', cpu: '22%' },
      recentEvent: 'SSL certificate active',
      cost: '$28/mo'
    },
    {
      id: 'ecs-checkout',
      name: 'svc-checkout-prod',
      provider: 'AWS',
      type: 'ECS Fargate (8 tasks)',
      region: 'us-east-1a/b',
      dependencies: ['alb-ingress', 'rds-aurora', 'redis-cache'],
      metrics: { latency: '42ms', throughput: '2.1k req/s', cpu: '34%' },
      recentEvent: 'Autoscaled 6 -> 8 tasks (14:32:10 UTC)',
      cost: '$380/mo'
    },
    {
      id: 'ecs-auth',
      name: 'svc-auth-session',
      provider: 'Azure',
      type: 'Azure Container Apps (4 instances)',
      region: 'eastus',
      dependencies: ['alb-ingress', 'redis-cache'],
      metrics: { latency: '8ms', throughput: '2.7k req/s', cpu: '18%' },
      recentEvent: 'JWT key rotation verified',
      cost: '$190/mo'
    },
    {
      id: 'rds-aurora',
      name: 'aurora-pg-primary',
      provider: 'AWS',
      type: 'Aurora PostgreSQL v2 Multi-AZ',
      region: 'us-east-1a',
      dependencies: ['ecs-checkout'],
      metrics: { latency: '2.4ms', throughput: '128 conn', cpu: '41%' },
      recentEvent: 'Automated snapshot verified',
      cost: '$620/mo'
    },
    {
      id: 'redis-cache',
      name: 'cache-session-cluster',
      provider: 'GCP',
      type: 'Google Cloud Memorystore Redis',
      region: 'us-central1',
      dependencies: ['ecs-checkout', 'ecs-auth'],
      metrics: { latency: '0.8ms', throughput: '12k ops/s', cpu: '26%' },
      recentEvent: 'Replication lag < 1ms',
      cost: '$110/mo'
    }
  ];

  const activeNode = nodes.find(n => n.id === selectedNodeId) || nodes[2];

  const isNodeDimmed = (nodeId: string) => {
    if (!hoveredNodeId) return false;
    if (nodeId === hoveredNodeId) return false;
    const hoveredNode = nodes.find(n => n.id === hoveredNodeId);
    if (!hoveredNode) return false;
    return !hoveredNode.dependencies.includes(nodeId);
  };

  return (
    <section id="living-system" className="py-32 md:py-44 border-t border-white/[0.06] bg-[#090c09] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#38bdf8]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              02 / Living Infrastructure Model
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              Your infrastructure isn't a diagram. <br />
              <span className="text-[#858a85]">It's a living system.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#858a85] leading-relaxed max-w-xl">
              Hover over any resource to trace dependency flow across multi-cloud networks. Click to inspect live telemetry, configuration parameters, and recent operational events.
            </p>
          </div>
        </ScrollReveal>

        {/* Spatial Topology Display with Side Reveals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Spatial Graph Display (Left Side-Entrance) */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="left" delay={150} distance="50px">
              <div className="p-6 sm:p-8 rounded-xl border border-white/[0.08] bg-[#0d100d]/60 backdrop-blur-xl flex flex-col items-center gap-5 select-none shadow-2xl relative">
                {/* Level 1: Edge CDN */}
                <div 
                  onMouseEnter={() => setHoveredNodeId('edge-router')}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => setSelectedNodeId('edge-router')}
                  className={`cursor-pointer px-5 py-3 rounded-lg transition-all duration-300 font-mono text-xs ${
                    isNodeDimmed('edge-router') ? 'opacity-25' : 'opacity-100'
                  } ${
                    selectedNodeId === 'edge-router'
                      ? 'border border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.2)] scale-105'
                      : 'border border-white/[0.08] bg-[#080a08]/90 hover:border-white/25 text-[#858a85]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                    <span className="text-[#f1f2ee] font-medium">ingress-global-edge</span>
                    <span className="text-[10px] text-[#505551]">AWS CloudFront</span>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="w-[1px] h-6 bg-gradient-to-b from-white/[0.2] to-[#38bdf8]/60 relative my-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] absolute top-1/2 -left-[2px] animate-pulse" />
                </div>

                {/* Level 2: ALB Ingress */}
                <div 
                  onMouseEnter={() => setHoveredNodeId('alb-ingress')}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => setSelectedNodeId('alb-ingress')}
                  className={`cursor-pointer px-5 py-3 rounded-lg transition-all duration-300 font-mono text-xs ${
                    isNodeDimmed('alb-ingress') ? 'opacity-25' : 'opacity-100'
                  } ${
                    selectedNodeId === 'alb-ingress'
                      ? 'border border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.2)] scale-105'
                      : 'border border-white/[0.08] bg-[#080a08]/90 hover:border-white/25 text-[#858a85]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                    <span className="text-[#f1f2ee] font-medium">alb-public-prod</span>
                    <span className="text-[10px] text-[#505551]">AWS ALB Ingress</span>
                  </div>
                </div>

                {/* Branch Lines */}
                <div className="w-72 sm:w-96 h-[1px] bg-gradient-to-r from-transparent via-white/[0.2] to-transparent relative my-0.5">
                  <div className="absolute top-0 left-10 w-[1px] h-6 bg-white/[0.15]" />
                  <div className="absolute top-0 right-10 w-[1px] h-6 bg-white/[0.15]" />
                </div>

                {/* Level 3: Multi-Cloud Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full max-w-xl pt-2">
                  <div 
                    onMouseEnter={() => setHoveredNodeId('ecs-checkout')}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setSelectedNodeId('ecs-checkout')}
                    className={`cursor-pointer p-4 rounded-lg transition-all duration-300 font-mono text-xs ${
                      isNodeDimmed('ecs-checkout') ? 'opacity-25' : 'opacity-100'
                    } ${
                      selectedNodeId === 'ecs-checkout'
                        ? 'border border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_25px_rgba(56,189,248,0.2)] scale-[1.02]'
                        : 'border border-white/[0.08] bg-[#080a08]/90 hover:border-white/25 text-[#858a85]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-sm text-[#f1f2ee]">svc-checkout</span>
                      <span className="text-[10px] text-[#38bdf8] px-1.5 py-0.2 rounded bg-[#38bdf8]/10">AWS ECS</span>
                    </div>
                    <div className="text-[11px] text-[#858a85]">8 tasks • 42ms p99</div>
                  </div>

                  <div 
                    onMouseEnter={() => setHoveredNodeId('ecs-auth')}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setSelectedNodeId('ecs-auth')}
                    className={`cursor-pointer p-4 rounded-lg transition-all duration-300 font-mono text-xs ${
                      isNodeDimmed('ecs-auth') ? 'opacity-25' : 'opacity-100'
                    } ${
                      selectedNodeId === 'ecs-auth'
                        ? 'border border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_25px_rgba(56,189,248,0.2)] scale-[1.02]'
                        : 'border border-white/[0.08] bg-[#080a08]/90 hover:border-white/25 text-[#858a85]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-sm text-[#f1f2ee]">svc-auth</span>
                      <span className="text-[10px] text-[#38bdf8] px-1.5 py-0.2 rounded bg-[#38bdf8]/10">Azure Apps</span>
                    </div>
                    <div className="text-[11px] text-[#858a85]">4 instances • 8ms p99</div>
                  </div>
                </div>

                {/* Branch Lines */}
                <div className="w-72 sm:w-96 h-[1px] bg-gradient-to-r from-transparent via-white/[0.2] to-transparent relative my-0.5">
                  <div className="absolute top-0 left-12 w-[1px] h-6 bg-white/[0.15]" />
                  <div className="absolute top-0 right-12 w-[1px] h-6 bg-white/[0.15]" />
                </div>

                {/* Level 4: State Tier (Aurora & GCP Redis) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full max-w-xl pt-2">
                  <div 
                    onMouseEnter={() => setHoveredNodeId('rds-aurora')}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setSelectedNodeId('rds-aurora')}
                    className={`cursor-pointer p-4 rounded-lg transition-all duration-300 font-mono text-xs ${
                      isNodeDimmed('rds-aurora') ? 'opacity-25' : 'opacity-100'
                    } ${
                      selectedNodeId === 'rds-aurora'
                        ? 'border border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_25px_rgba(56,189,248,0.2)] scale-[1.02]'
                        : 'border border-white/[0.08] bg-[#080a08]/90 hover:border-white/25 text-[#858a85]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Database className="w-4 h-4 text-[#38bdf8]" />
                      <span className="text-[#f1f2ee] font-semibold text-xs">aurora-pg</span>
                    </div>
                    <div className="text-[10px] text-[#505551]">AWS PostgreSQL v2 Multi-AZ</div>
                  </div>

                  <div 
                    onMouseEnter={() => setHoveredNodeId('redis-cache')}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setSelectedNodeId('redis-cache')}
                    className={`cursor-pointer p-4 rounded-lg transition-all duration-300 font-mono text-xs ${
                      isNodeDimmed('redis-cache') ? 'opacity-25' : 'opacity-100'
                    } ${
                      selectedNodeId === 'redis-cache'
                        ? 'border border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_25px_rgba(56,189,248,0.2)] scale-[1.02]'
                        : 'border border-white/[0.08] bg-[#080a08]/90 hover:border-white/25 text-[#858a85]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Layers className="w-4 h-4 text-[#38bdf8]" />
                      <span className="text-[#f1f2ee] font-semibold text-xs">cache-session</span>
                    </div>
                    <div className="text-[10px] text-[#505551]">GCP Memorystore Redis</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Floating Contextual Inspector (Right Side-Entrance) */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="right" delay={250} distance="50px">
              <div className="p-6 sm:p-8 rounded-xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-xl font-mono text-xs flex flex-col justify-between min-h-[380px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8]/5 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.08]">
                    <span className="text-[10px] uppercase tracking-wider text-[#505551] flex items-center gap-1.5">
                      <Network className="w-3.5 h-3.5 text-[#38bdf8]" />
                      Live Node Inspector
                    </span>
                    <span className="text-[#10b981] flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded bg-[#10b981]/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" /> Active Telemetry
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[10px] text-[#505551] block uppercase">Resource Handle</span>
                      <span className="text-base sm:text-lg font-semibold text-[#f1f2ee]">{activeNode.name}</span>
                      <span className="text-[11px] text-[#38bdf8] block mt-0.5">{activeNode.type}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-[11px] pt-1">
                      <div className="p-2.5 rounded bg-[#080a08]/80 border border-white/[0.04]">
                        <span className="text-[#505551] block text-[10px] uppercase">Cloud Provider</span>
                        <span className="text-[#f1f2ee] font-medium">{activeNode.provider}</span>
                      </div>
                      <div className="p-2.5 rounded bg-[#080a08]/80 border border-white/[0.04]">
                        <span className="text-[#505551] block text-[10px] uppercase">Region Tier</span>
                        <span className="text-[#f1f2ee] font-medium">{activeNode.region}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06] text-[11px]">
                      <div className="p-2 rounded bg-[#080a08]/60 text-center">
                        <span className="text-[#505551] block text-[9px]">LATENCY</span>
                        <span className="text-[#10b981] font-semibold">{activeNode.metrics.latency}</span>
                      </div>
                      <div className="p-2 rounded bg-[#080a08]/60 text-center">
                        <span className="text-[#505551] block text-[9px]">LOAD</span>
                        <span className="text-[#38bdf8] font-semibold">{activeNode.metrics.throughput}</span>
                      </div>
                      <div className="p-2 rounded bg-[#080a08]/60 text-center">
                        <span className="text-[#505551] block text-[9px]">MONTHLY</span>
                        <span className="text-[#f1f2ee] font-semibold">{activeNode.cost}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] text-[11px] text-[#858a85] flex items-center justify-between">
                  <span>Event: {activeNode.recentEvent}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

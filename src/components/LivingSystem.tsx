import React, { useState } from 'react';
import { Database, Layers, Network, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { AwsIcon, AzureIcon } from './icons/ArchVizIcons';
import { ScrollReveal } from './ui/ScrollReveal';

interface InteractiveNode {
  id: string;
  name: string;
  provider: 'AWS' | 'Azure' | 'GCP';
  type: string;
  region: string;
  arn: string;
  iamRole: string;
  dependencies: string[];
  metrics: { latency: string; throughput: string; cpu: string; memory: string };
  recentEvent: string;
  cost: string;
  driftStatus: 'Clean' | 'Drift Detected';
}

export const LivingSystem: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('ecs-checkout');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [filterProvider, setFilterProvider] = useState<'ALL' | 'AWS' | 'Azure' | 'GCP'>('ALL');
  const [activeLayer, setActiveLayer] = useState<'services' | 'dependencies' | 'network' | 'iam' | 'runtime' | 'incidents'>('dependencies');
  const [activeInspectorTab, setActiveInspectorTab] = useState<'telemetry' | 'iam' | 'drift'>('telemetry');

  const relationshipLayers = [
    { id: 'services', label: '01. Services', desc: 'Compute & container instances' },
    { id: 'dependencies', label: '02. Dependencies', desc: 'Upstream/downstream graph hops' },
    { id: 'network', label: '03. Network', desc: 'VPC CIDRs, ALBs & edge routing' },
    { id: 'iam', label: '04. IAM & Auth', desc: 'Least-privilege execution roles' },
    { id: 'runtime', label: '05. Runtime', desc: 'P99 latency, CPU & pool handles' },
    { id: 'incidents', label: '06. Incidents', desc: 'Correlated alarms & post-mortems' },
  ] as const;

  const nodes: InteractiveNode[] = [
    {
      id: 'edge-router',
      name: 'ingress-global-edge',
      provider: 'AWS',
      type: 'CloudFront CDN / Route53',
      region: 'Global Edge (240 PoPs)',
      arn: 'arn:aws:cloudfront::849102:distribution/E28V90K94',
      iamRole: 'CloudFront-Edge-ReadWrite-Role',
      dependencies: ['alb-ingress'],
      metrics: { latency: '12ms', throughput: '4.8k req/s', cpu: '14%', memory: '28%' },
      recentEvent: 'WAF rules synced via OPA policy (0 block anomalies)',
      cost: '$142/mo',
      driftStatus: 'Clean'
    },
    {
      id: 'alb-ingress',
      name: 'alb-public-prod',
      provider: 'AWS',
      type: 'Application Load Balancer',
      region: 'us-east-1',
      arn: 'arn:aws:elasticloadbalancing:us-east-1:app/prod-alb/48f0b',
      iamRole: 'ALB-Ingress-Controller-Role',
      dependencies: ['edge-router', 'ecs-checkout', 'ecs-auth'],
      metrics: { latency: '18ms', throughput: '4.8k req/s', cpu: '22%', memory: '38%' },
      recentEvent: 'ACM TLS certificate active • 8 targets healthy',
      cost: '$28/mo',
      driftStatus: 'Clean'
    },
    {
      id: 'ecs-checkout',
      name: 'svc-checkout-prod',
      provider: 'AWS',
      type: 'ECS Fargate (8 tasks)',
      region: 'us-east-1a/b',
      arn: 'arn:aws:ecs:us-east-1:849102:service/prod/svc-checkout',
      iamRole: 'ECS-TaskExecutionRole-ProdCheckout',
      dependencies: ['alb-ingress', 'rds-aurora', 'redis-cache'],
      metrics: { latency: '42ms', throughput: '2.1k req/s', cpu: '34%', memory: '62%' },
      recentEvent: 'Autoscaled 6 -> 8 tasks on CPU trigger',
      cost: '$380/mo',
      driftStatus: 'Clean'
    },
    {
      id: 'ecs-auth',
      name: 'svc-auth-session',
      provider: 'Azure',
      type: 'Azure Container Apps (4 instances)',
      region: 'eastus',
      arn: '/subscriptions/9a01-b4f/resourceGroups/prod/providers/auth-app',
      iamRole: 'AzureManagedIdentity-AuthSession',
      dependencies: ['alb-ingress', 'redis-cache'],
      metrics: { latency: '8ms', throughput: '2.7k req/s', cpu: '18%', memory: '44%' },
      recentEvent: 'JWT signing key rotation verified in Azure KeyVault',
      cost: '$190/mo',
      driftStatus: 'Clean'
    },
    {
      id: 'rds-aurora',
      name: 'aurora-pg-primary',
      provider: 'AWS',
      type: 'Aurora PostgreSQL v2 Multi-AZ',
      region: 'us-east-1a',
      arn: 'arn:aws:rds:us-east-1:849102:cluster:aurora-pg-primary',
      iamRole: 'RDS-EnhancedMonitoring-Role',
      dependencies: ['ecs-checkout'],
      metrics: { latency: '2.4ms', throughput: '128 conn', cpu: '41%', memory: '58%' },
      recentEvent: 'Automated snapshot verified (0 replication lag)',
      cost: '$620/mo',
      driftStatus: 'Clean'
    },
    {
      id: 'redis-cache',
      name: 'cache-session-cluster',
      provider: 'GCP',
      type: 'Google Cloud Memorystore Redis',
      region: 'us-central1',
      arn: 'projects/archviz-prod/locations/us-central1/instances/redis-session',
      iamRole: 'gcp-sa-memorystore-client',
      dependencies: ['ecs-checkout', 'ecs-auth'],
      metrics: { latency: '0.8ms', throughput: '12k ops/s', cpu: '26%', memory: '34%' },
      recentEvent: 'Multi-AZ replication lag < 1ms',
      cost: '$110/mo',
      driftStatus: 'Clean'
    }
  ];

  const activeNode = nodes.find(n => n.id === selectedNodeId) || nodes[2];

  const isNodeDimmed = (nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return false;
    if (filterProvider !== 'ALL' && node.provider !== filterProvider) return true;
    if (!hoveredNodeId) return false;
    if (nodeId === hoveredNodeId) return false;
    const hoveredNode = nodes.find(n => n.id === hoveredNodeId);
    if (!hoveredNode) return false;
    return !hoveredNode.dependencies.includes(nodeId);
  };

  const isNodeConnected = (nodeId: string) => {
    if (nodeId === selectedNodeId) return true;
    return activeNode.dependencies.includes(nodeId);
  };

  return (
    <section id="living-system" className="py-24 md:py-36 bg-[#080a08] relative overflow-hidden">
      {/* Background Living Model Network Atmosphere - High Visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-75 filter contrast-125 brightness-110 saturate-125">
        <img
          src="/assets/images/living-model-bg.jpg"
          alt="Living model network background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08]/70 via-[#080a08]/50 to-[#080a08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#080a08_85%)]" />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-14 md:mb-20">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              02 / Living Infrastructure Model
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              Your infrastructure isn't a diagram. <br />
              <span className="text-[#858a85]">It's a living system.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#858a85] leading-relaxed max-w-xl">
              Hover over any resource to trace real-time dependency flow across AWS, Azure, and GCP. Click to inspect live telemetry, configuration drift, and IAM policy permissions.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Relationship Layers Lens Bar */}
        <ScrollReveal direction="up" delay={100} distance="30px">
          <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#0d100d]/85 backdrop-blur-md mb-8 font-mono text-xs shadow-lg space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-[#10b981]" />
                <span className="text-xs text-[#f1f2ee] font-semibold uppercase tracking-wider">
                  Six Core Relationship Layers
                </span>
              </div>
              <span className="text-[11px] text-[#858a85]">
                Active Focus: <strong className="text-[#38bdf8]">{relationshipLayers.find(l => l.id === activeLayer)?.desc}</strong>
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {relationshipLayers.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    activeLayer === layer.id
                      ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_15px_rgba(56,189,248,0.2)] font-semibold'
                      : 'border-white/[0.06] bg-[#080a08]/80 text-[#858a85] hover:text-[#f1f2ee]'
                  }`}
                >
                  <span className="text-xs block text-[#f1f2ee]">{layer.label}</span>
                  <span className="text-[9px] text-[#505551] block truncate mt-0.5">{layer.desc}</span>
                </button>
              ))}
            </div>

            {/* Provider Filter Sub-Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.04] text-[11px]">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#505551] uppercase">Filter Provider:</span>
                {(['ALL', 'AWS', 'Azure', 'GCP'] as const).map((prov) => (
                  <button
                    key={prov}
                    onClick={() => setFilterProvider(prov)}
                    className={`px-2.5 py-0.5 rounded transition-all cursor-pointer ${
                      filterProvider === prov
                        ? 'bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/40 font-semibold'
                        : 'bg-white/[0.02] text-[#858a85] border border-white/[0.04] hover:text-[#f1f2ee]'
                    }`}
                  >
                    {prov === 'ALL' ? 'All Providers (6)' : prov}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[#10b981]">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                <span>6/6 Nodes Synced</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Spatial Topology Display & Contextual Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Spatial Graph Display (Left Side) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={150} distance="50px">
              <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-xl flex flex-col items-center gap-5 select-none shadow-2xl relative min-h-[560px] justify-between">
                
                {/* Visual Cloud Cluster Markers */}
                <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#505551] border-b border-white/[0.06] pb-3">
                  <div className="flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>SPATIAL TOPOLOGY CANVAS</span>
                  </div>
                  <span>MULTI-TIER DIRECTED GRAPH</span>
                </div>

                {/* Level 1: Global Edge (AWS CloudFront) */}
                <div 
                  onMouseEnter={() => setHoveredNodeId('edge-router')}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => setSelectedNodeId('edge-router')}
                  className={`cursor-pointer px-6 py-3.5 rounded-xl transition-all duration-300 font-mono text-xs w-full max-w-sm ${
                    isNodeDimmed('edge-router') ? 'opacity-20 scale-95' : 'opacity-100'
                  } ${
                    selectedNodeId === 'edge-router'
                      ? 'border-2 border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_25px_rgba(56,189,248,0.25)] scale-[1.02]'
                      : 'border border-white/[0.08] bg-[#080a08]/90 hover:border-white/25 text-[#858a85]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <AwsIcon className="w-4 h-4 text-[#38bdf8]" />
                      <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                      <span className="text-[#f1f2ee] font-semibold text-xs">ingress-global-edge</span>
                    </div>
                    <span className="text-[10px] text-[#38bdf8] px-1.5 py-0.5 rounded bg-[#38bdf8]/10">Edge</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#505551] mt-1.5 pt-1.5 border-t border-white/[0.04]">
                    <span>CloudFront • Route53</span>
                    <span className="text-[#10b981]">12ms P99</span>
                  </div>
                </div>

                {/* Vertical Signal Flow */}
                <div className="w-[1.5px] h-7 bg-gradient-to-b from-[#38bdf8]/80 to-[#10b981]/80 relative my-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#38bdf8] absolute top-1/2 -left-[3px] animate-pulse" />
                </div>

                {/* Level 2: Ingress Application Load Balancer */}
                <div 
                  onMouseEnter={() => setHoveredNodeId('alb-ingress')}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => setSelectedNodeId('alb-ingress')}
                  className={`cursor-pointer px-6 py-3.5 rounded-xl transition-all duration-300 font-mono text-xs w-full max-w-sm ${
                    isNodeDimmed('alb-ingress') ? 'opacity-20 scale-95' : 'opacity-100'
                  } ${
                    selectedNodeId === 'alb-ingress'
                      ? 'border-2 border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_25px_rgba(56,189,248,0.25)] scale-[1.02]'
                      : 'border border-white/[0.08] bg-[#080a08]/90 hover:border-white/25 text-[#858a85]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <AwsIcon className="w-4 h-4 text-[#f1f2ee]" />
                      <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                      <span className="text-[#f1f2ee] font-semibold text-xs">alb-public-prod</span>
                    </div>
                    <span className="text-[10px] text-[#10b981] px-1.5 py-0.5 rounded bg-[#10b981]/10">ALB</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#505551] mt-1.5 pt-1.5 border-t border-white/[0.04]">
                    <span>us-east-1 • 4.8k req/s</span>
                    <span className="text-[#10b981]">18ms P99</span>
                  </div>
                </div>

                {/* Multi-Cloud Branch Connectors */}
                <div className="w-full max-w-lg h-[1.5px] bg-gradient-to-r from-transparent via-white/[0.2] to-transparent relative my-0.5">
                  <div className="absolute top-0 left-12 w-[1.5px] h-7 bg-white/[0.2]" />
                  <div className="absolute top-0 right-12 w-[1.5px] h-7 bg-white/[0.2]" />
                </div>

                {/* Level 3: Microservices (AWS ECS & Azure Container Apps) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-1">
                  {/* AWS ECS Checkout */}
                  <div 
                    onMouseEnter={() => setHoveredNodeId('ecs-checkout')}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setSelectedNodeId('ecs-checkout')}
                    className={`cursor-pointer p-4 rounded-xl transition-all duration-300 font-mono text-xs ${
                      isNodeDimmed('ecs-checkout') ? 'opacity-20 scale-95' : 'opacity-100'
                    } ${
                      selectedNodeId === 'ecs-checkout'
                        ? 'border-2 border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_25px_rgba(56,189,248,0.25)] scale-[1.02]'
                        : isNodeConnected('ecs-checkout')
                          ? 'border border-white/20 bg-[#080a08]/90 text-[#f1f2ee]'
                          : 'border border-white/[0.08] bg-[#080a08]/80 text-[#858a85]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <AwsIcon className="w-4 h-4 text-[#f1f2ee]" />
                        <span className="font-semibold text-xs text-[#f1f2ee]">svc-checkout</span>
                      </div>
                      <span className="text-[10px] text-[#38bdf8] px-1.5 py-0.5 rounded bg-[#38bdf8]/10">AWS Fargate</span>
                    </div>
                    <div className="text-[11px] text-[#858a85] flex items-center justify-between">
                      <span>8 tasks • 34% CPU</span>
                      <span className="text-[#10b981]">42ms</span>
                    </div>
                  </div>

                  {/* Azure Container Apps Auth */}
                  <div 
                    onMouseEnter={() => setHoveredNodeId('ecs-auth')}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setSelectedNodeId('ecs-auth')}
                    className={`cursor-pointer p-4 rounded-xl transition-all duration-300 font-mono text-xs ${
                      isNodeDimmed('ecs-auth') ? 'opacity-20 scale-95' : 'opacity-100'
                    } ${
                      selectedNodeId === 'ecs-auth'
                        ? 'border-2 border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_25px_rgba(56,189,248,0.25)] scale-[1.02]'
                        : isNodeConnected('ecs-auth')
                          ? 'border border-white/20 bg-[#080a08]/90 text-[#f1f2ee]'
                          : 'border border-white/[0.08] bg-[#080a08]/80 text-[#858a85]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <AzureIcon className="w-4 h-4 text-[#f1f2ee]" />
                        <span className="font-semibold text-xs text-[#f1f2ee]">svc-auth</span>
                      </div>
                      <span className="text-[10px] text-[#10b981] px-1.5 py-0.5 rounded bg-[#10b981]/10">Azure Apps</span>
                    </div>
                    <div className="text-[11px] text-[#858a85] flex items-center justify-between">
                      <span>4 instances • 18% CPU</span>
                      <span className="text-[#10b981]">8ms</span>
                    </div>
                  </div>
                </div>

                {/* Branch Lines */}
                <div className="w-full max-w-lg h-[1.5px] bg-gradient-to-r from-transparent via-white/[0.2] to-transparent relative my-0.5">
                  <div className="absolute top-0 left-16 w-[1.5px] h-7 bg-white/[0.2]" />
                  <div className="absolute top-0 right-16 w-[1.5px] h-7 bg-white/[0.2]" />
                </div>

                {/* Level 4: State Tier (AWS Aurora & GCP Redis) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-1">
                  {/* AWS Aurora PostgreSQL */}
                  <div 
                    onMouseEnter={() => setHoveredNodeId('rds-aurora')}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setSelectedNodeId('rds-aurora')}
                    className={`cursor-pointer p-4 rounded-xl transition-all duration-300 font-mono text-xs ${
                      isNodeDimmed('rds-aurora') ? 'opacity-20 scale-95' : 'opacity-100'
                    } ${
                      selectedNodeId === 'rds-aurora'
                        ? 'border-2 border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_25px_rgba(56,189,248,0.25)] scale-[1.02]'
                        : isNodeConnected('rds-aurora')
                          ? 'border border-white/20 bg-[#080a08]/90 text-[#f1f2ee]'
                          : 'border border-white/[0.08] bg-[#080a08]/80 text-[#858a85]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-[#38bdf8]" />
                        <span className="font-semibold text-xs text-[#f1f2ee]">aurora-pg</span>
                      </div>
                      <span className="text-[10px] text-[#38bdf8] px-1.5 py-0.5 rounded bg-[#38bdf8]/10">AWS RDS</span>
                    </div>
                    <div className="text-[11px] text-[#858a85] flex items-center justify-between">
                      <span>128 handles • Multi-AZ</span>
                      <span className="text-[#10b981]">2.4ms</span>
                    </div>
                  </div>

                  {/* GCP Redis Cache */}
                  <div 
                    onMouseEnter={() => setHoveredNodeId('redis-cache')}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setSelectedNodeId('redis-cache')}
                    className={`cursor-pointer p-4 rounded-xl transition-all duration-300 font-mono text-xs ${
                      isNodeDimmed('redis-cache') ? 'opacity-20 scale-95' : 'opacity-100'
                    } ${
                      selectedNodeId === 'redis-cache'
                        ? 'border-2 border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_25px_rgba(56,189,248,0.25)] scale-[1.02]'
                        : isNodeConnected('redis-cache')
                          ? 'border border-white/20 bg-[#080a08]/90 text-[#f1f2ee]'
                          : 'border border-white/[0.08] bg-[#080a08]/80 text-[#858a85]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#38bdf8]" />
                        <span className="font-semibold text-xs text-[#f1f2ee]">cache-session</span>
                      </div>
                      <span className="text-[10px] text-[#10b981] px-1.5 py-0.5 rounded bg-[#10b981]/10">GCP Redis</span>
                    </div>
                    <div className="text-[11px] text-[#858a85] flex items-center justify-between">
                      <span>12k ops/s • us-central1</span>
                      <span className="text-[#10b981]">0.8ms</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Guide */}
                <div className="pt-2 text-[10px] text-[#505551] flex items-center justify-between w-full border-t border-white/[0.04]">
                  <span>Connected nodes auto-highlight on click</span>
                  <span className="text-[#38bdf8]">6 Nodes Live</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* High-End Technical Node Inspector (Right Side) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={250} distance="50px">
              <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.12] bg-[#0d100d]/95 backdrop-blur-xl font-mono text-xs flex flex-col justify-between shadow-2xl relative overflow-hidden h-full">
                <div>
                  {/* Inspector Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.08]">
                    <span className="text-[10px] uppercase tracking-wider text-[#505551] flex items-center gap-1.5">
                      <Network className="w-3.5 h-3.5 text-[#38bdf8]" />
                      Resource Telemetry Inspector
                    </span>
                    <span className="text-[#10b981] flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded bg-[#10b981]/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" /> Synced
                    </span>
                  </div>

                  {/* Inspector Sub-Tabs */}
                  <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/[0.06] text-[11px]">
                    <button
                      onClick={() => setActiveInspectorTab('telemetry')}
                      className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                        activeInspectorTab === 'telemetry'
                          ? 'bg-[#38bdf8]/20 text-[#38bdf8] font-semibold'
                          : 'text-[#858a85] hover:text-[#f1f2ee]'
                      }`}
                    >
                      Metrics & SLO
                    </button>
                    <button
                      onClick={() => setActiveInspectorTab('iam')}
                      className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                        activeInspectorTab === 'iam'
                          ? 'bg-[#38bdf8]/20 text-[#38bdf8] font-semibold'
                          : 'text-[#858a85] hover:text-[#f1f2ee]'
                      }`}
                    >
                      IAM & Scope
                    </button>
                    <button
                      onClick={() => setActiveInspectorTab('drift')}
                      className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                        activeInspectorTab === 'drift'
                          ? 'bg-[#38bdf8]/20 text-[#38bdf8] font-semibold'
                          : 'text-[#858a85] hover:text-[#f1f2ee]'
                      }`}
                    >
                      Config Drift
                    </button>
                  </div>

                  {/* Resource Identifier Card */}
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-xl border border-white/[0.06] bg-[#080a08]/90">
                      <span className="text-[10px] text-[#505551] block uppercase">Selected Resource</span>
                      <span className="text-base sm:text-lg font-bold text-[#f1f2ee] block mt-0.5">{activeNode.name}</span>
                      <span className="text-[11px] text-[#38bdf8] block mt-0.5">{activeNode.type}</span>
                    </div>

                    {/* Tab Content */}
                    {activeInspectorTab === 'telemetry' && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2.5 text-[11px]">
                          <div className="p-3 rounded-lg bg-[#080a08]/80 border border-white/[0.04]">
                            <span className="text-[#505551] block text-[9px] uppercase">P99 LATENCY</span>
                            <span className="text-sm font-semibold text-[#10b981] mt-0.5 block">{activeNode.metrics.latency}</span>
                            <span className="text-[9px] text-[#505551]">SLO: &lt; 50ms</span>
                          </div>
                          <div className="p-3 rounded-lg bg-[#080a08]/80 border border-white/[0.04]">
                            <span className="text-[#505551] block text-[9px] uppercase">THROUGHPUT</span>
                            <span className="text-sm font-semibold text-[#38bdf8] mt-0.5 block">{activeNode.metrics.throughput}</span>
                            <span className="text-[9px] text-[#505551]">Active handles</span>
                          </div>
                          <div className="p-3 rounded-lg bg-[#080a08]/80 border border-white/[0.04]">
                            <span className="text-[#505551] block text-[9px] uppercase">CPU UTILIZATION</span>
                            <span className="text-sm font-semibold text-[#f1f2ee] mt-0.5 block">{activeNode.metrics.cpu}</span>
                            <span className="text-[9px] text-[#10b981]">Healthy load</span>
                          </div>
                          <div className="p-3 rounded-lg bg-[#080a08]/80 border border-white/[0.04]">
                            <span className="text-[#505551] block text-[9px] uppercase">MONTHLY COST</span>
                            <span className="text-sm font-semibold text-[#f1f2ee] mt-0.5 block">{activeNode.cost}</span>
                            <span className="text-[9px] text-[#505551]">Allocated spend</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeInspectorTab === 'iam' && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-lg bg-[#080a08]/90 border border-white/[0.06] space-y-1.5">
                          <span className="text-[10px] text-[#505551] uppercase block">Resource ARN</span>
                          <code className="text-[11px] text-[#38bdf8] break-all block leading-tight font-mono">{activeNode.arn}</code>
                        </div>
                        <div className="p-3.5 rounded-lg bg-[#080a08]/90 border border-white/[0.06] space-y-1.5">
                          <span className="text-[10px] text-[#505551] uppercase block">Assigned IAM Role</span>
                          <span className="text-[11px] text-[#f1f2ee] font-medium block">{activeNode.iamRole}</span>
                          <span className="text-[10px] text-[#10b981] flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> Least-privilege compliant
                          </span>
                        </div>
                      </div>
                    )}

                    {activeInspectorTab === 'drift' && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-lg bg-[#080a08]/90 border border-white/[0.06] space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-[#505551] uppercase">IaC State Reconciliation</span>
                            <span className="text-[10px] text-[#10b981] font-semibold px-2 py-0.5 rounded bg-[#10b981]/15">
                              0 Differences
                            </span>
                          </div>
                          <p className="text-[11px] text-[#858a85] leading-relaxed">
                            Live runtime state matches Terraform remote state in <code className="text-[#38bdf8]">s3://archviz-tfstate</code> with 100% fidelity.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] text-[11px] text-[#858a85] flex items-center justify-between">
                  <span className="truncate max-w-[280px]">Event: {activeNode.recentEvent}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#38bdf8] flex-shrink-0" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

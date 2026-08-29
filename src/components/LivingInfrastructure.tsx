import React, { useState } from 'react';
import { SystemBadge } from './ui/SystemBadge';


export const LivingInfrastructure: React.FC = () => {
  const [activeDimension, setActiveDimension] = useState<'topology' | 'drift' | 'telemetry' | 'history'>('topology');

  const dimensions = [
    {
      id: 'topology',
      name: 'Dynamic Topology',
      label: 'Dependencies & Lineage',
      desc: 'Discovers ingress paths, service meshes, VPC peerings, and multi-tier data flows in real time without manual YAML diagrams.'
    },
    {
      id: 'drift',
      name: 'Configuration Drift',
      label: 'IaC vs Runtime State',
      desc: 'Detects out-of-band AWS console modifications, uncommitted security group rules, and mismatched Terraform states instantly.'
    },
    {
      id: 'telemetry',
      name: 'Correlated Signals',
      label: 'Runtime Metrics & Alerts',
      desc: 'Maps latency anomalies, CPU spikes, and error budgets directly onto the exact service nodes and dependencies causing them.'
    },
    {
      id: 'history',
      name: 'Temporal History',
      label: 'Time-Travel State Model',
      desc: 'Rewind to inspect what your infrastructure topology, configuration parameters, and traffic flows looked like at any exact second in time.'
    }
  ];

  return (
    <section id="living-system" className="py-24 md:py-36 border-t border-[#1e2229] bg-[#08090a]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono text-[#0ea5e9] tracking-wider uppercase block mb-3">
            02 / Living Infrastructure Model
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#ededed] leading-tight mb-6">
            Not a diagram. <br />
            <span className="text-[#888d96]">A living system.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Static architecture drawings go out of date the moment they are exported. ArchViz builds a continuous graph that evolves with every deployment, scaling event, and configuration update.
          </p>
        </div>

        {/* 4 Dimension Switcher & Interactive Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Selector List (4 Cols) */}
          <div className="lg:col-span-4 space-y-2">
            {dimensions.map((dim) => (
              <button
                key={dim.id}
                onClick={() => setActiveDimension(dim.id as any)}
                className={`w-full text-left p-4 rounded border transition-all text-xs font-mono ${
                  activeDimension === dim.id
                    ? 'bg-[#0e1013] border-[#0ea5e9] text-[#ededed]'
                    : 'bg-transparent border-[#1e2229] text-[#888d96] hover:text-[#ededed] hover:border-[#2e3440]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm">{dim.name}</span>
                  <span className="text-[10px] text-[#5e636e] uppercase">{dim.label}</span>
                </div>
                <p className="text-xs text-[#888d96] font-sans font-normal leading-relaxed mt-2">
                  {dim.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Right: Technical State Viewer (8 Cols) */}
          <div className="lg:col-span-8 p-6 md:p-8 rounded bg-[#0e1013] border border-[#1e2229] shadow-xl">
            {activeDimension === 'topology' && (
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1e2229] text-xs font-mono">
                  <span className="text-[#ededed]">VIEW: TOPOLOGY GRAPH LAYER</span>
                  <SystemBadge status="healthy" label="Real-time DAG" />
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded bg-[#08090a] border border-[#1e2229] flex items-center justify-between">
                    <div>
                      <span className="text-[#0ea5e9]">CloudFront (Edge CDN)</span>
                      <p className="text-[#888d96] text-[11px]">{"Route53 dns_record: api.prod -> d2a983.cloudfront.net"}</p>
                    </div>
                    <span className="text-[#10b981]">0.00% drop</span>
                  </div>
                  <div className="p-3.5 rounded bg-[#08090a] border border-[#1e2229] flex items-center justify-between">
                    <div>
                      <span className="text-[#0ea5e9]">Application Load Balancer</span>
                      <p className="text-[#888d96] text-[11px]">{"Forward rules: /api/v1/checkout -> target_group.checkout_svc"}</p>
                    </div>
                    <span className="text-[#10b981]">Healthy (8/8 targets)</span>
                  </div>
                  <div className="p-3.5 rounded bg-[#08090a] border border-[#1e2229] flex items-center justify-between">
                    <div>
                      <span className="text-[#0ea5e9]">ECS Task Cluster (Checkout)</span>
                      <p className="text-[#888d96] text-[11px]">VPC: vpc-08a9f (10.0.0.0/16) • Subnets: us-east-1a, us-east-1b</p>
                    </div>
                    <span className="text-[#10b981]">Active (Desired: 8)</span>
                  </div>
                  <div className="p-3.5 rounded bg-[#08090a] border border-[#1e2229] flex items-center justify-between">
                    <div>
                      <span className="text-[#0ea5e9]">Aurora PostgreSQL & ElastiCache</span>
                      <p className="text-[#888d96] text-[11px]">Storage: encrypted • Security group: sg-db-internal-access</p>
                    </div>
                    <span className="text-[#10b981]">In-sync</span>
                  </div>
                </div>
              </div>
            )}

            {activeDimension === 'drift' && (
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1e2229] text-xs font-mono">
                  <span className="text-[#ededed]">VIEW: CONTINUOUS DRIFT ENGINE</span>
                  <SystemBadge status="warning" label="1 Drift Detected" />
                </div>
                <div className="p-4 rounded bg-[#08090a] border border-[#f59e0b]/30 mb-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#f59e0b] mb-2 font-medium">
                    <span>SECURITY GROUP MODIFICATION DRIFT</span>
                    <span>sg-09df1a0 (DB Ingress)</span>
                  </div>
                  <p className="text-[#888d96] text-xs leading-relaxed mb-3 font-sans">
                    Manual rule added in AWS Console opening port <code className="text-[#ededed]">5432</code> to <code className="text-[#ededed]">198.51.100.4/32</code> without Terraform record.
                  </p>
                  <div className="p-2.5 rounded bg-[#12151a] border border-[#1e2229] text-[11px] text-[#ededed]">
                    <span className="text-[#5e636e] block">RECOMMENDED REMEDIATION:</span>
                    <span>Reconcile IaC repository or generate rollback plan via OPA guardrail policy.</span>
                  </div>
                </div>
              </div>
            )}

            {activeDimension === 'telemetry' && (
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1e2229] text-xs font-mono">
                  <span className="text-[#ededed]">VIEW: TOPOLOGY-CORRELATED TELEMETRY</span>
                  <SystemBadge status="healthy" label="Signals Ingesting" />
                </div>
                <div className="grid grid-cols-2 gap-4 font-mono text-xs mb-4">
                  <div className="p-4 rounded bg-[#08090a] border border-[#1e2229]">
                    <span className="text-[#888d96] text-[11px] block mb-1">TOTAL REQUEST RATE</span>
                    <span className="text-xl font-bold text-[#ededed]">4,820 req/s</span>
                    <span className="text-[10px] text-[#10b981] block mt-1">+4.2% vs previous hour</span>
                  </div>
                  <div className="p-4 rounded bg-[#08090a] border border-[#1e2229]">
                    <span className="text-[#888d96] text-[11px] block mb-1">P99 SERVICE LATENCY</span>
                    <span className="text-xl font-bold text-[#ededed]">42.1 ms</span>
                    <span className="text-[10px] text-[#10b981] block mt-1">Within SLO target (100ms)</span>
                  </div>
                </div>
              </div>
            )}

            {activeDimension === 'history' && (
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1e2229] text-xs font-mono">
                  <span className="text-[#ededed]">VIEW: TEMPORAL EVENT REPLAY</span>
                  <SystemBadge status="info" label="History Indexed" />
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded bg-[#08090a] border border-[#1e2229] flex items-center justify-between">
                    <div>
                      <span className="text-[#ededed] font-medium">{"14:32:10 UTC — Task autoscaling triggered"}</span>
                      <p className="text-[#888d96] text-[11px]">{"ECS cluster svc-checkout scaled 6 -> 8 tasks"}</p>
                    </div>
                    <span className="text-[#5e636e]">28m ago</span>
                  </div>
                  <div className="p-3 rounded bg-[#08090a] border border-[#1e2229] flex items-center justify-between">
                    <div>
                      <span className="text-[#ededed] font-medium">14:15:00 UTC — Deploy git commit #8f31b9d</span>
                      <p className="text-[#888d96] text-[11px]">Merged via PR #429 (Pipeline pass)</p>
                    </div>
                    <span className="text-[#5e636e]">45m ago</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

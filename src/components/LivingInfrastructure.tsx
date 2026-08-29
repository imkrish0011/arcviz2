import React, { useState } from 'react';
import { SystemBadge } from './ui/SystemBadge';

export const LivingInfrastructure: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'topology' | 'drift' | 'telemetry' | 'history'>('topology');

  return (
    <section id="living-system" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a86] uppercase tracking-wider block mb-4">
            02 / Living Infrastructure Model
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            Not a diagram. <br />
            <span className="text-[#858a86]">A living system.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Static diagrams rot the minute they are drawn. ArchViz maintains a continuous, queryable graph that evolves with every scaling event, security finding, and configuration change.
          </p>
        </div>

        {/* Dimension Selector Tabs (Clean, minimal line style) */}
        <div className="flex flex-wrap items-center gap-6 pb-4 mb-10 border-b border-white/[0.06] text-xs font-mono">
          {[
            { id: 'topology', label: 'Dynamic Topology' },
            { id: 'drift', label: 'Configuration Drift' },
            { id: 'telemetry', label: 'Correlated Telemetry' },
            { id: 'history', label: 'Temporal History' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-2 transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'text-[#f2f2ee] border-b border-[#38bdf8] font-medium'
                  : 'text-[#858a86] hover:text-[#f2f2ee]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Spacious Visualization Display */}
        <div className="p-8 sm:p-12 rounded-lg border border-white/[0.06] bg-[#0d100d]/60 backdrop-blur-sm min-h-[380px] flex flex-col justify-between">
          {activeTab === 'topology' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#858a86]">
                <span>LAYER: DIRECTED ACYCLIC GRAPH (DAG)</span>
                <SystemBadge status="healthy" label="Continuous Discovery" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded border border-white/[0.06] bg-[#080a08]">
                  <span className="text-[#505551] text-[10px] block uppercase mb-1">Edge Ingress</span>
                  <p className="text-[#f2f2ee]">{"Route53 -> CloudFront (d2a983.cloudfront.net) -> ALB"}</p>
                  <span className="text-[10px] text-[#10b981] mt-2 block">100% healthy target groups</span>
                </div>
                <div className="p-4 rounded border border-white/[0.06] bg-[#080a08]">
                  <span className="text-[#505551] text-[10px] block uppercase mb-1">Compute & Data Tier</span>
                  <p className="text-[#f2f2ee]">{"ECS Fargate (8 tasks) -> Aurora PostgreSQL v2 Multi-AZ"}</p>
                  <span className="text-[10px] text-[#38bdf8] mt-2 block">ElastiCache Redis session mesh</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'drift' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#858a86]">
                <span>LAYER: RUNTIME DRIFT ENGINE</span>
                <SystemBadge status="warning" label="1 Drift Flagged" />
              </div>
              <div className="p-5 rounded border border-white/[0.06] bg-[#080a08] font-mono text-xs">
                <div className="text-[#f59e0b] mb-1 font-medium">AWS Security Group Out-of-Band Change</div>
                <p className="text-[#858a86] font-sans text-sm leading-relaxed mb-3">
                  Port 5432 was manually exposed to external IP in AWS Console without corresponding Terraform commit.
                </p>
                <div className="text-[11px] text-[#505551]">
                  Policy Action: Remediation pull request generated with OPA validation.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'telemetry' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#858a86]">
                <span>LAYER: TOPOLOGY-CORRELATED SIGNALS</span>
                <SystemBadge status="healthy" label="Telemetry Live" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-5 rounded border border-white/[0.06] bg-[#080a08]">
                  <span className="text-[#505551] text-[10px] block uppercase mb-1">P99 Service Latency</span>
                  <span className="text-2xl font-normal text-[#f2f2ee]">42.1 ms</span>
                  <span className="text-[10px] text-[#10b981] block mt-1">Within production SLO</span>
                </div>
                <div className="p-5 rounded border border-white/[0.06] bg-[#080a08]">
                  <span className="text-[#505551] text-[10px] block uppercase mb-1">Throughput Capacity</span>
                  <span className="text-2xl font-normal text-[#f2f2ee]">4,820 req/s</span>
                  <span className="text-[10px] text-[#858a86] block mt-1">Auto-scaling healthy</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#858a86]">
                <span>LAYER: TEMPORAL STATE REPLAY</span>
                <SystemBadge status="info" label="100% Replayable" />
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded border border-white/[0.06] bg-[#080a08] flex items-center justify-between">
                  <div>
                    <span className="text-[#f2f2ee]">{"14:32:10 UTC — Task autoscaling triggered (6 -> 8 tasks)"}</span>
                    <p className="text-[11px] text-[#505551]">{"Triggered by CloudWatch CPU threshold > 70%"}</p>
                  </div>
                  <span className="text-[#505551]">28m ago</span>
                </div>
                <div className="p-3.5 rounded border border-white/[0.06] bg-[#080a08] flex items-center justify-between">
                  <div>
                    <span className="text-[#f2f2ee]">14:15:00 UTC — Deploy commit #8f31b9d via PR #429</span>
                    <p className="text-[11px] text-[#505551]">Merged by alex@company.com</p>
                  </div>
                  <span className="text-[#505551]">45m ago</span>
                </div>
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between text-[11px] font-mono text-[#505551]">
            <span>Topology nodes updated in real-time via AWS EventBridge</span>
            <span>Zero manual documentation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

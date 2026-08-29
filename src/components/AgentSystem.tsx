import React, { useState } from 'react';
import { ShieldCheck, Activity, DollarSign, Database, GitBranch } from 'lucide-react';

export const AgentSystem: React.FC = () => {
  const [activeLens, setActiveLens] = useState<string>('security');

  const lenses = [
    {
      id: 'security',
      name: 'Security & Posture',
      icon: <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />,
      summary: 'Continuous vulnerability auditing, IAM least-privilege, and network exposure checks.',
      signal: 'Flagged 1 open ingress port on database subnet'
    },
    {
      id: 'sre',
      name: 'Reliability & SRE',
      icon: <Activity className="w-4 h-4 text-[#10b981]" />,
      summary: 'SLO tracking, auto-remediation, and proactive bottleneck detection across services.',
      signal: 'Optimized ECS autoscaling threshold from 80% to 65%'
    },
    {
      id: 'finops',
      name: 'FinOps & Cost',
      icon: <DollarSign className="w-4 h-4 text-[#f59e0b]" />,
      summary: 'Real-time resource right-sizing and idle compute capacity reclamation.',
      signal: 'Identified $420/mo in idle staging compute instances'
    },
    {
      id: 'database',
      name: 'Database & State',
      icon: <Database className="w-4 h-4 text-[#38bdf8]" />,
      summary: 'Connection pool starvation monitoring, slow queries, and snapshot integrity.',
      signal: 'Connection pool alert resolved in svc-checkout-prod'
    },
    {
      id: 'devops',
      name: 'DevOps & IaC',
      icon: <GitBranch className="w-4 h-4 text-[#38bdf8]" />,
      summary: 'Terraform drift detection, PR impact analysis, and state synchronization.',
      signal: '1 IaC drift remediated via PR #432'
    }
  ];

  const current = lenses.find(l => l.id === activeLens) || lenses[0];

  return (
    <section className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a86] uppercase tracking-wider block mb-4">
            06 / Specialized Domain Intelligence
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            One system. <br />
            <span className="text-[#858a86]">Specialized intelligence.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Rather than generic prompt bots, ArchViz runs specialized intelligence engines that continuously evaluate your infrastructure through specific operational lenses — all reading the exact same living knowledge graph.
          </p>
        </div>

        {/* Spatial Shared Model Diagram */}
        <div className="p-8 sm:p-12 rounded-lg border border-white/[0.06] bg-[#0d100d]/60 backdrop-blur-sm">
          {/* Lenses Selector Header */}
          <div className="flex flex-wrap items-center gap-3 pb-8 mb-8 border-b border-white/[0.06] text-xs font-mono">
            {lenses.map((lens) => (
              <button
                key={lens.id}
                onClick={() => setActiveLens(lens.id)}
                className={`px-4 py-2 rounded transition-colors cursor-pointer flex items-center gap-2 border ${
                  activeLens === lens.id
                    ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                    : 'border-transparent text-[#858a86] hover:text-[#f2f2ee]'
                }`}
              >
                {lens.icon}
                <span>{lens.name}</span>
              </button>
            ))}
          </div>

          {/* Lens Output Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs">
            <div>
              <span className="text-[#38bdf8] uppercase text-[10px] block mb-1">
                Domain Lens: {current.name}
              </span>
              <p className="text-sm font-sans text-[#f2f2ee] max-w-xl leading-relaxed">
                {current.summary}
              </p>
            </div>

            <div className="p-3 rounded border border-white/[0.06] bg-[#080a08] flex-shrink-0 text-right">
              <span className="text-[#505551] text-[10px] block uppercase">Live Telemetry Signal</span>
              <span className="text-[#10b981] font-medium">{current.signal}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

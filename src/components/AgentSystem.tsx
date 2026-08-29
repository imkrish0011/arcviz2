import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  DollarSign, 
  Database, 
  GitBranch
} from 'lucide-react';

export const AgentSystem: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<string>('security');

  const agents = [
    {
      id: 'security',
      name: 'Security & Posture',
      icon: <ShieldCheck className="w-4 h-4 text-[#0ea5e9]" />,
      summary: 'Continuous vulnerability, IAM least-privilege, and network exposure auditing.',
      capabilities: [
        'Uncommitted security group ingress detection',
        'IAM policy over-privilege analysis',
        'TLS certificate expiration tracking',
        'Secrets rotation & KMS encryption enforcement'
      ],
      recentSignal: 'Flagged 1 open ingress port on database subnet'
    },
    {
      id: 'sre',
      name: 'Reliability & SRE',
      icon: <Activity className="w-4 h-4 text-[#10b981]" />,
      summary: 'SLO tracking, auto-remediation, and proactive bottleneck detection.',
      capabilities: [
        'Multi-AZ failover readiness verification',
        'Downstream service dependency cascade modeling',
        'Queue backlog & worker saturation alerting',
        'Traffic shedding & rate-limit configuration'
      ],
      recentSignal: 'Optimized ECS autoscaling threshold from 80% to 65%'
    },
    {
      id: 'finops',
      name: 'FinOps & Cost',
      icon: <DollarSign className="w-4 h-4 text-[#f59e0b]" />,
      summary: 'Real-time resource right-sizing and idle capacity reclamation.',
      capabilities: [
        'Unattached EBS volume & snapshot cleanup',
        'NAT Gateway data transfer optimization',
        'Provisioned IOPS vs actual throughput auditing',
        'Savings Plan & Reserved Instance recommendations'
      ],
      recentSignal: 'Identified $420/mo in idle staging compute instances'
    },
    {
      id: 'database',
      name: 'Database & State',
      icon: <Database className="w-4 h-4 text-[#0ea5e9]" />,
      summary: 'Connection pool optimization, replication health, and slow query diagnostics.',
      capabilities: [
        'Active connection pool starvation monitoring',
        'Aurora read replica lag & failover checks',
        'Table scan & missing index recommendations',
        'Automated snapshot & point-in-time recovery verification'
      ],
      recentSignal: 'Connection pool alert resolved in svc-checkout-prod'
    },
    {
      id: 'devops',
      name: 'DevOps & IaC',
      icon: <GitBranch className="w-4 h-4 text-[#0ea5e9]" />,
      summary: 'Terraform drift detection, PR impact analysis, and state synchronization.',
      capabilities: [
        'Terraform state vs live runtime discrepancy checks',
        'Pull request blast-radius visualization',
        'Automated plan generation & safe rollbacks',
        'Service catalog dependency validation'
      ],
      recentSignal: '1 IaC drift remediated via PR #432'
    }
  ];

  const current = agents.find(a => a.id === selectedAgent) || agents[0];

  return (
    <section className="py-24 md:py-36 border-t border-[#1e2229] bg-[#08090a]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono text-[#0ea5e9] tracking-wider uppercase block mb-3">
            06 / Specialized Domain Intelligence
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#ededed] leading-tight mb-6">
            One system. <br />
            <span className="text-[#888d96]">Specialized intelligence.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Rather than generic prompt bots, ArchViz runs specialized intelligence engines that continuously evaluate your infrastructure through specific operational lenses — all grounded in the same living knowledge graph.
          </p>
        </div>

        {/* Interactive Shared Model Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Agents Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-2">
            {agents.map((agent) => (
              <button
                key={agent.id}
                onClick={() => setSelectedAgent(agent.id)}
                className={`w-full text-left p-4 rounded border transition-all ${
                  selectedAgent === agent.id
                    ? 'bg-[#0e1013] border-[#0ea5e9] text-[#ededed]'
                    : 'bg-[#0a0b10] border-[#1e2229] text-[#888d96] hover:text-[#ededed] hover:border-[#2e3440]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    {agent.icon}
                    <span className="font-mono text-xs font-semibold text-[#ededed]">{agent.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#5e636e]">Active</span>
                </div>
                <p className="text-xs text-[#888d96] font-sans leading-relaxed mt-1">
                  {agent.summary}
                </p>
              </button>
            ))}
          </div>

          {/* Right Agent Lens Output Details (7 Cols) */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded bg-[#0e1013] border border-[#1e2229] flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1e2229] text-xs font-mono">
                <span className="text-[#ededed]">AGENT LENS: {current.name.toUpperCase()}</span>
                <span className="text-[#0ea5e9] bg-[#0ea5e9]/10 px-2 py-0.5 rounded border border-[#0ea5e9]/30">Live on Topology</span>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#ededed] mb-2 font-mono">Continuous Capabilities</h4>
                <div className="space-y-2">
                  {current.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="p-2.5 rounded bg-[#08090a] border border-[#1e2229] flex items-center gap-2.5 text-xs text-[#888d96]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1e2229] flex items-center justify-between text-xs font-mono">
              <span className="text-[#5e636e]">Latest Engine Signal:</span>
              <span className="text-[#10b981]">{current.recentSignal}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

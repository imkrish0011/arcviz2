import React, { useState } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  GitPullRequest, 
  DollarSign, 
  Gauge, 
  Layers, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const UseCasesCapabilities: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string>('incident');

  const useCases = [
    {
      id: 'incident',
      icon: <Activity className="w-5 h-5 text-[#ef4444]" />,
      tag: "01 / Investigation",
      title: "Incident Investigation",
      summary: "Trace multi-cloud outages from ingress down to unclosed database handles in seconds.",
      detail: "Instead of jumping between Grafana, Datadog, and AWS CloudWatch, ArchViz traverses the full dependency graph to isolate root cause with code diff correlation.",
      badge: "Root Cause in Seconds",
      color: "#ef4444"
    },
    {
      id: 'security',
      icon: <ShieldCheck className="w-5 h-5 text-[#10b981]" />,
      tag: "02 / Governance",
      title: "Security & Compliance",
      summary: "Continuous IAM audit, unmanaged port detection, and deterministic OPA policy guardrails.",
      detail: "Detect unauthorized security group changes, excessive IAM permissions, and unencrypted volumes before compliance audits flag them.",
      badge: "Least-Privilege Validated",
      color: "#10b981"
    },
    {
      id: 'deployment',
      icon: <GitPullRequest className="w-5 h-5 text-[#38bdf8]" />,
      tag: "03 / Delivery",
      title: "Deployment Debugging",
      summary: "Correlate every git commit and container rollout directly with runtime metric shifts.",
      detail: "Immediately see which commit triggered memory starvation, container restarts, or HTTP 5xx errors across AWS ECS, Kubernetes, and Azure.",
      badge: "Commit-to-Metric Mapping",
      color: "#38bdf8"
    },
    {
      id: 'cost',
      icon: <DollarSign className="w-5 h-5 text-[#f59e0b]" />,
      tag: "04 / FinOps",
      title: "Cost Optimization",
      summary: "Identify idle instances, unattached EBS volumes, and over-provisioned memory buffers.",
      detail: "Continuous analysis of resource utilization curves provides tested rightsizing recommendations that preserve application performance budgets.",
      badge: "Actionable Savings",
      color: "#f59e0b"
    },
    {
      id: 'reliability',
      icon: <Gauge className="w-5 h-5 text-[#a855f7]" />,
      tag: "05 / SRE",
      title: "Reliability & SLOs",
      summary: "Proactive bottleneck detection, connection pool headroom monitoring, and failover validation.",
      detail: "Model peak traffic cascades across load balancers, caching tiers, and read replicas before high-load events cause degraded user experiences.",
      badge: "Zero-Downtime Assurance",
      color: "#a855f7"
    },
    {
      id: 'planning',
      icon: <Layers className="w-5 h-5 text-[#38bdf8]" />,
      tag: "06 / Architecture",
      title: "Infrastructure Planning",
      summary: "Simulate major database upgrades, multi-region failover, and architecture changes on digital twins.",
      detail: "Evaluate blast radius, compatibility constraints, and cost projections before executing complex Terraform refactors or cloud migrations.",
      badge: "Pre-Flight Digital Twin",
      color: "#38bdf8"
    }
  ];

  return (
    <section id="capabilities" className="py-32 md:py-44 border-t border-white/[0.06] bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Background Star Trails Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-15">
        <img
          src="/assets/images/star-trails-vortex.jpg"
          alt="Star trails vortex background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08] via-[#080a08]/85 to-[#080a08]" />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              05 / Enterprise Capabilities
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              What ArchViz helps with. <br />
              <span className="text-[#858a85]">Across the full engineering lifecycle.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl font-sans">
              From fast incident resolution to pre-flight architecture simulation and continuous least-privilege compliance, ArchViz supports every layer of cloud infrastructure operations.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((uc, idx) => (
            <ScrollReveal key={uc.id} direction="up" delay={120 + idx * 60} distance="40px">
              <div
                onClick={() => setActiveCardId(uc.id)}
                className={`p-7 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full group ${
                  activeCardId === uc.id
                    ? 'border-[#38bdf8] bg-[#0d100d]/95 shadow-[0_0_30px_rgba(56,189,248,0.15)] scale-[1.01]'
                    : 'border-white/[0.08] bg-[#0d100d]/80 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-[#505551] uppercase tracking-wider">{uc.tag}</span>
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-white/20 transition-colors">
                      {uc.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-[#f1f2ee] font-sans mb-2">{uc.title}</h3>
                  <p className="text-xs text-[#858a85] font-sans leading-relaxed mb-4">
                    {uc.summary}
                  </p>
                  <p className="text-[11px] text-[#505551] font-sans leading-relaxed">
                    {uc.detail}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/[0.04] flex items-center justify-between text-[11px]">
                  <span className="text-[#38bdf8] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {uc.badge}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#505551] group-hover:text-[#f1f2ee] transition-colors" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

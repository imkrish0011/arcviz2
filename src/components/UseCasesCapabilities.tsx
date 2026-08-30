import React from 'react';
import { Link } from 'react-router-dom';
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
  const useCases = [
    {
      id: 'incident',
      icon: <Activity className="w-5 h-5 text-[#ef4444]" />,
      tag: "Investigation",
      title: "Incident Investigation",
      summary: "Trace multi-cloud outages from ingress down to unclosed database handles in seconds.",
      detail: "Instead of jumping between Grafana, Datadog, and AWS CloudWatch, ArchViz traverses the full dependency graph to isolate root cause.",
      badge: "Explore Living Model",
      link: "/living-model#investigation"
    },
    {
      id: 'security',
      icon: <ShieldCheck className="w-5 h-5 text-[#10b981]" />,
      tag: "Governance",
      title: "Security & Compliance",
      summary: "Continuous IAM audit, unmanaged port detection, and deterministic OPA policy guardrails.",
      detail: "Detect unauthorized security group changes, excessive IAM permissions, and unencrypted volumes before compliance audits flag them.",
      badge: "Explore Security & Trust",
      link: "/security"
    },
    {
      id: 'deployment',
      icon: <GitPullRequest className="w-5 h-5 text-[#38bdf8]" />,
      tag: "Delivery",
      title: "Deployment Debugging",
      summary: "Correlate every git commit and container rollout directly with runtime metric shifts.",
      detail: "Immediately see which commit triggered memory starvation, container restarts, or HTTP 5xx errors across ECS and Kubernetes.",
      badge: "Explore Living Model",
      link: "/living-model"
    },
    {
      id: 'cost',
      icon: <DollarSign className="w-5 h-5 text-[#f59e0b]" />,
      tag: "FinOps",
      title: "Cost Optimization",
      summary: "Identify idle instances, unattached EBS volumes, and over-provisioned memory buffers.",
      detail: "Continuous analysis of resource utilization curves provides tested rightsizing recommendations that preserve application budgets.",
      badge: "Explore Agents",
      link: "/agents"
    },
    {
      id: 'reliability',
      icon: <Gauge className="w-5 h-5 text-[#a855f7]" />,
      tag: "SRE",
      title: "Reliability & SLOs",
      summary: "Proactive bottleneck detection, connection pool headroom monitoring, and failover validation.",
      detail: "Model peak traffic cascades across load balancers, caching tiers, and read replicas before high-load events cause degradation.",
      badge: "Explore Autonomy",
      link: "/agents#control"
    },
    {
      id: 'planning',
      icon: <Layers className="w-5 h-5 text-[#38bdf8]" />,
      tag: "Architecture",
      title: "Infrastructure Planning",
      summary: "Simulate major database upgrades, multi-region failover, and architecture changes on digital twins.",
      detail: "Evaluate blast radius, compatibility constraints, and cost projections before executing complex Terraform refactors.",
      badge: "Explore Digital Twin",
      link: "/living-model#simulation"
    }
  ];

  return (
    <section id="capabilities" className="py-16 md:py-24 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              Enterprise Architecture Modules
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              What ArchViz helps with. <br />
              <span className="text-[#858a85]">Across the full engineering lifecycle.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl font-sans">
              From instant incident isolation and pre-flight digital twin simulation to autonomous agent governance and memory lineage.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Capabilities Cards Grid with Direct Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((uc, idx) => (
            <ScrollReveal key={uc.id} direction="up" delay={120 + idx * 60} distance="40px">
              <Link
                to={uc.link}
                className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0d100d]/80 hover:bg-[#0d100d]/95 hover:border-[#38bdf8]/50 transition-all duration-300 flex flex-col justify-between h-full group shadow-xl hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:scale-[1.01]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-[#505551] uppercase tracking-wider">{uc.tag}</span>
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-[#38bdf8]/30 transition-colors">
                      {uc.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-[#f1f2ee] font-sans mb-2 group-hover:text-[#38bdf8] transition-colors">
                    {uc.title}
                  </h3>
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
                  <ArrowRight className="w-3.5 h-3.5 text-[#505551] group-hover:text-[#38bdf8] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

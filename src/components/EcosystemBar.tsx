import React from 'react';
import { 
  AwsIcon, 
  AzureIcon, 
  GcpIcon, 
  KubernetesIcon, 
  TerraformIcon, 
  OpenTofuIcon, 
  GitHubIcon, 
  DatadogIcon, 
  PrometheusIcon, 
  SlackIcon, 
  OpaIcon 
} from './icons/ArchVizIcons';
import { ShieldCheck, Zap, Activity, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const EcosystemBar: React.FC = () => {
  const integrations = [
    { name: 'Amazon Web Services', icon: <AwsIcon className="w-5 h-5" />, tag: 'Multi-Region' },
    { name: 'Microsoft Azure', icon: <AzureIcon className="w-5 h-5" />, tag: 'Enterprise VNets' },
    { name: 'Google Cloud', icon: <GcpIcon className="w-5 h-5" />, tag: 'GKE & VPC' },
    { name: 'Kubernetes', icon: <KubernetesIcon className="w-5 h-5" />, tag: 'EKS / AKS / GKE' },
    { name: 'Terraform', icon: <TerraformIcon className="w-5 h-5" />, tag: 'State & Modules' },
    { name: 'OpenTofu', icon: <OpenTofuIcon className="w-5 h-5" />, tag: 'Open IaC' },
    { name: 'Datadog', icon: <DatadogIcon className="w-5 h-5" />, tag: 'APM & Logs' },
    { name: 'Prometheus', icon: <PrometheusIcon className="w-5 h-5" />, tag: 'Metrics Stream' },
    { name: 'GitHub', icon: <GitHubIcon className="w-5 h-5" />, tag: 'CI/CD & PRs' },
    { name: 'Slack', icon: <SlackIcon className="w-5 h-5" />, tag: 'Incident Ops' },
    { name: 'Open Policy Agent', icon: <OpaIcon className="w-5 h-5" />, tag: 'OPA Rego' },
  ];

  const metrics = [
    {
      value: '0',
      label: 'Host Agents',
      sub: '100% Read-Only Cloud IAM API discovery',
      icon: <ShieldCheck className="w-4 h-4 text-[#10b981]" />,
    },
    {
      value: '< 2 min',
      label: 'Fleet Connect',
      sub: 'Lightweight cross-account role link',
      icon: <Zap className="w-4 h-4 text-[#38bdf8]" />,
    },
    {
      value: '94%',
      label: 'MTTR Reduction',
      sub: 'Automated DAG root-cause traversal in seconds',
      icon: <Activity className="w-4 h-4 text-[#a855f7]" />,
    },
    {
      value: '0',
      label: 'Blast Radius',
      sub: 'Pre-flight digital twin simulation assertion',
      icon: <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />,
    },
  ];

  return (
    <section className="relative py-14 bg-[#080a08] border-y border-white/[0.06] overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10 space-y-12">
        {/* Top Integration Marquee Ribbon */}
        <ScrollReveal direction="up" delay={50} distance="20px">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#858a85] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                Natively Integrated with Your Existing Multi-Cloud Ecosystem
              </span>
              <span className="hidden sm:inline-flex text-[11px] font-mono text-[#505551]">
                Zero proprietary lock-in
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
              {integrations.slice(0, 6).map((item) => (
                <div
                  key={item.name}
                  className="p-3 rounded-xl border border-white/[0.06] bg-[#0d100d]/70 hover:bg-[#0d100d] hover:border-white/15 transition-all duration-200 flex items-center justify-between group cursor-default"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1 rounded bg-white/[0.03] border border-white/[0.04] group-hover:border-white/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-[#f1f2ee] block leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[9px] font-mono text-[#505551] block">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mt-2.5">
              {integrations.slice(6).map((item) => (
                <div
                  key={item.name}
                  className="p-3 rounded-xl border border-white/[0.06] bg-[#0d100d]/70 hover:bg-[#0d100d] hover:border-white/15 transition-all duration-200 flex items-center justify-between group cursor-default"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1 rounded bg-white/[0.03] border border-white/[0.04] group-hover:border-white/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-[#f1f2ee] block leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[9px] font-mono text-[#505551] block">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Proof Metrics Grid */}
        <ScrollReveal direction="up" delay={150} distance="30px">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-white/[0.07] bg-[#0c0f0c]/90 backdrop-blur-md hover:border-white/20 transition-all duration-300 shadow-lg relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-[#505551] uppercase tracking-wider">
                    {metric.label}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    {metric.icon}
                  </div>
                </div>

                <div className="text-3xl font-semibold text-[#f1f2ee] tracking-tight font-sans mb-1 group-hover:text-[#38bdf8] transition-colors">
                  {metric.value}
                </div>

                <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                  {metric.sub}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, CheckCircle2, Server, KeyRound } from 'lucide-react';
import { AwsIcon, AzureIcon, GcpIcon, TerraformIcon } from './icons/ArchVizIcons';
import { ScrollReveal } from './ui/ScrollReveal';

export const ExistingInfrastructureFirst: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Zero Code Changes",
      desc: "No rewriting Terraform modules, Helm charts, or application Dockerfiles. Your IaC and runtime stay 100% as they are today.",
      icon: <TerraformIcon className="w-4 h-4 text-[#38bdf8]" />
    },
    {
      num: "02",
      title: "Zero Host Agents",
      desc: "No intrusive daemonsets, sidecars, or kernel eBPF probes eating CPU. ArchViz connects via standard cloud-native read-only IAM.",
      icon: <Server className="w-4 h-4 text-[#10b981]" />
    },
    {
      num: "03",
      title: "Two-Minute IAM Link",
      desc: "Deploy a lightweight AWS CloudFormation or Terraform cross-account role with AmazonReadOnlyAccess. Discovery begins immediately.",
      icon: <KeyRound className="w-4 h-4 text-[#f59e0b]" />
    }
  ];

  return (
    <section id="existing-infra-first" className="py-16 md:py-24 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              Zero-Friction Adoption
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              You don’t rebuild your cloud <br />
              <span className="text-[#858a85]">for ArchViz.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl font-sans">
              ArchViz was built for existing brownfield infrastructure. Connect multi-cloud environments in minutes without modifying code, deploying agents, or interrupting production workloads.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Value Proposition Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.num} direction="up" delay={150 + idx * 80} distance="40px">
              <div className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0d100d]/90 backdrop-blur-xl shadow-xl space-y-4 hover:border-white/20 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] text-[#505551] font-semibold">{step.num}</span>
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-white/20 transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#f1f2ee] font-sans mb-2">{step.title}</h3>
                  <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] text-[10px] text-[#10b981] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Production Safe Guarantee
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Ingested Cloud Stack Bar */}
        <ScrollReveal direction="up" delay={350} distance="30px">
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#10b981]" />
              <span className="text-[#f1f2ee] font-medium font-sans">
                Seamless ingestion of AWS VPCs, Azure VNets, GCP Networks, EKS, ECS, and Terraform state
              </span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0 text-[#858a85]">
              <AwsIcon className="w-4 h-4 text-[#f1f2ee]" />
              <AzureIcon className="w-4 h-4 text-[#f1f2ee]" />
              <GcpIcon className="w-4 h-4 text-[#f1f2ee]" />
              <TerraformIcon className="w-4 h-4 text-[#38bdf8]" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

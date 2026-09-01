import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ui/ScrollReveal';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const TechnicalFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "Architecture & Security",
      question: "How does ArcViz discover my cloud without installing host agents?",
      answer: "ArcViz connects via standard cloud-native read-only IAM roles (such as AWS SecurityAudit, Azure Reader, and GCP Viewer) using temporary STS sessions. It queries cloud provider APIs directly to build the bi-directional infrastructure graph. There are zero daemonsets, sidecars, or kernel eBPF probes eating CPU or memory on your EC2 or Kubernetes nodes."
    },
    {
      category: "AI Autonomy & Safety",
      question: "Can AI agents make unauthorized changes to our production workloads?",
      answer: "No. ArcViz operates on a configurable 6-stage progressive autonomy spectrum (L0 Observe to L5 Policy Autonomy). Every proposed action is evaluated against deterministic Open Policy Agent (OPA) Rego rules. In production tiers, actions default to drafting pull requests or requiring cryptographic dual-key human authorization before any ephemeral execution credential is minted."
    },
    {
      category: "IaC & Ecosystem",
      question: "Does ArcViz replace our existing Terraform, OpenTofu, or Helm charts?",
      answer: "No, ArcViz works natively alongside them. ArcViz can ingest your existing state files and synthesize clean, human-readable Terraform HCL, OpenTofu, or Kubernetes manifests. Any visual change or automated remediation is committed as standard git pull requests into your existing GitHub or GitLab CI/CD pipelines."
    },
    {
      category: "Digital Twin & Simulation",
      question: "How does the Pre-Flight Digital Twin test changes without extra cloud costs?",
      answer: "The digital twin constructs a high-fidelity software graph representation of your infrastructure topology in an isolated sandbox. It models traffic bursts, database connection pools, IAM policies, and network partition cascades mathematically without spinning up redundant live compute or storage resources."
    },
    {
      category: "Data Privacy & Compliance",
      question: "Is our telemetry or architecture data used to train public AI models?",
      answer: "Never. Your infrastructure topology, telemetry traces, and code diffs are strictly isolated to your enterprise tenant and encrypted with customer-managed KMS keys. No customer data is ever used for training foundation models. ArcViz is architected for SOC 2 Type II, ISO 27001, and HIPAA compliance."
    },
    {
      category: "Multi-Cloud Coverage",
      question: "Which cloud providers, regions, and compute platforms are supported?",
      answer: "ArcViz provides out-of-the-box multi-cloud support across AWS (including all commercial and GovCloud regions), Microsoft Azure, and Google Cloud. Supported compute engines include AWS ECS/Fargate, EKS, Azure Container Apps, AKS, GCP Cloud Run, and GKE."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10 space-y-14">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              Enterprise Architecture & FAQ
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              Frequently asked <br />
              <span className="text-[#858a85]">technical questions.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-2xl font-sans font-normal">
              Everything Platform, SRE, and Cloud Security engineers ask before connecting ArcViz to their multi-cloud fleets.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Accordion List (8 Cols) */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <ScrollReveal key={idx} direction="up" delay={100 + idx * 50} distance="30px">
                  <div 
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'border-[#38bdf8]/40 bg-[#0d100d]/95 shadow-[0_0_25px_rgba(56,189,248,0.1)]' 
                        : 'border-white/[0.07] bg-[#0d100d]/70 hover:border-white/15'
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div>
                        <span className="text-[10px] text-[#505551] uppercase font-mono block mb-1">
                          {faq.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-medium text-[#f1f2ee] font-sans leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[#858a85] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#38bdf8] border-[#38bdf8]/30' : ''
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-white/[0.04]">
                        <p className="text-xs sm:text-sm text-[#858a85] font-sans leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right: Security & Architecture Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <ScrollReveal direction="right" delay={200} distance="40px">
              <div className="p-7 rounded-2xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-xl shadow-xl space-y-5">
                <div className="flex items-center gap-2.5 text-[#10b981]">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-semibold text-xs uppercase tracking-wider font-mono">
                    Security & Trust Standard
                  </span>
                </div>

                <h4 className="text-lg font-medium text-[#f1f2ee] font-sans leading-snug">
                  Built for zero-trust enterprise compliance.
                </h4>

                <p className="text-xs text-[#858a85] font-sans leading-relaxed">
                  ArcViz is architected with strict least-privilege principles, ephemeral STS credentials, deterministic OPA policy guardrails, and tenant KMS data isolation.
                </p>

                <div className="space-y-2 pt-2 text-[11px] font-mono text-[#505551] border-t border-white/[0.06]">
                  <div className="flex items-center justify-between py-1">
                    <span>IAM Discovery:</span>
                    <strong className="text-[#10b981]">Read-Only</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span>OPA Engine:</span>
                    <strong className="text-[#38bdf8]">Deterministic</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span>Host Daemon:</span>
                    <strong className="text-[#10b981]">0 Agents</strong>
                  </div>
                </div>

                <Link
                  to="/security"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#f1f2ee] border border-white/[0.1] text-xs font-mono font-medium transition-all"
                >
                  <span>Explore Security & Trust Page</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#38bdf8]" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { KeyRound, Search, Network, Eye, MessageSquare, FileText, CheckSquare, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const OnboardingJourney: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps = [
    {
      num: "01",
      name: "Connect Cloud",
      time: "Minute 0–2",
      icon: <KeyRound className="w-4 h-4 text-[#38bdf8]" />,
      title: "Deploy Read-Only Cross-Account IAM",
      desc: "Apply a lightweight CloudFormation stack or Terraform module with AmazonReadOnlyAccess. Zero host agents and zero write credentials.",
      deliverable: "Read-only IAM trust established across AWS, Azure, or GCP"
    },
    {
      num: "02",
      name: "Discover",
      time: "Minute 2–5",
      icon: <Search className="w-4 h-4 text-[#38bdf8]" />,
      title: "Multi-Cloud Resource Inventory",
      desc: "ArchViz queries cloud metadata APIs to enumerate all VPCs, subnets, route tables, container clusters, databases, and IAM policies.",
      deliverable: "100% of cloud resources mapped and inventoried"
    },
    {
      num: "03",
      name: "Build Graph",
      time: "Minute 5–10",
      icon: <Network className="w-4 h-4 text-[#10b981]" />,
      title: "Living System Model Synthesis",
      desc: "Relationships, network flows, and service dependencies are synthesized into an interconnected bi-directional digital twin.",
      deliverable: "First living multi-cloud infrastructure graph generated"
    },
    {
      num: "04",
      name: "Observe",
      time: "Day 1+",
      icon: <Eye className="w-4 h-4 text-[#10b981]" />,
      title: "Real-Time Telemetry & Drift Tracking",
      desc: "CloudWatch, Datadog, APM spans, and git commit streams are continuously bound to graph nodes to detect unmanaged drift.",
      deliverable: "Live telemetry stream and automated drift alarms active"
    },
    {
      num: "05",
      name: "Ask",
      time: "Week 1",
      icon: <MessageSquare className="w-4 h-4 text-[#38bdf8]" />,
      title: "Natural Language Engineering Queries",
      desc: "Engineers query complex multi-cloud questions ('Why is API latency rising?', 'Show public databases') and receive instant evidence cards.",
      deliverable: "Instant root cause isolation and dependency tracing"
    },
    {
      num: "06",
      name: "Recommend",
      time: "Week 2+",
      icon: <FileText className="w-4 h-4 text-[#a855f7]" />,
      title: "Pre-Simulated IaC Patches",
      desc: "Specialized agents draft tested Terraform pull requests for cost rightsizing, IAM least-privilege pruning, and incident fixes.",
      deliverable: "Tested pull requests with pre-flight digital twin assertions"
    },
    {
      num: "07",
      name: "Approve",
      time: "Ongoing",
      icon: <CheckSquare className="w-4 h-4 text-[#f59e0b]" />,
      title: "Dual-Key Controlled Execution",
      desc: "Engineers authorize high-confidence remediations via hardware token, executed via ephemeral 15-minute STS tokens.",
      deliverable: "Zero-downtime controlled production operations"
    }
  ];

  const currentStep = steps[activeStepIndex];

  return (
    <section id="onboarding" className="py-16 md:py-24 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              09 / Customer Journey
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              What happens after <br />
              <span className="text-[#858a85]">you connect your cloud?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl font-sans">
              From two-minute read-only IAM setup to full living graph exploration and policy-controlled remediations, here is the journey.
            </p>
          </div>
        </ScrollReveal>

        {/* 7-Step Horizontal Timeline Bar */}
        <div className="space-y-8">
          <ScrollReveal direction="up" delay={100} distance="30px">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {steps.map((step, idx) => (
                <button
                  key={step.num}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-300 cursor-pointer border ${
                    activeStepIndex === idx
                      ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.2)] scale-[1.02]'
                      : 'border-white/[0.06] bg-[#0d100d]/80 text-[#858a85] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-[#505551]">{step.num}</span>
                    {step.icon}
                  </div>
                  <span className="font-semibold text-xs block text-[#f1f2ee] mb-0.5">{step.name}</span>
                  <span className="text-[10px] text-[#38bdf8] block truncate">{step.time}</span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Active Step Deep-Dive Card */}
          <ScrollReveal direction="up" delay={200} distance="40px">
            <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.12] bg-[#0d100d]/95 backdrop-blur-xl shadow-2xl space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-base font-bold text-[#38bdf8]">Stage {currentStep.num} ({currentStep.time})</span>
                  <span className="text-xl font-semibold text-[#f1f2ee] font-sans">{currentStep.title}</span>
                </div>
                <span className="text-[11px] text-[#10b981] font-semibold px-2.5 py-1 rounded bg-[#10b981]/15 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Production Ready
                </span>
              </div>

              <p className="text-sm text-[#858a85] font-sans leading-relaxed max-w-3xl">
                {currentStep.desc}
              </p>

              <div className="p-4 rounded-xl bg-[#080a08]/90 border border-white/[0.06] text-xs flex items-center justify-between">
                <span className="text-[#505551]">Expected Deliverable:</span>
                <span className="text-[#f1f2ee] font-medium">{currentStep.deliverable}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

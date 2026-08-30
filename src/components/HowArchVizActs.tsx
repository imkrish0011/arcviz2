import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  FileCode2, 
  Cpu, 
  LineChart, 
  Sliders, 
  Search, 
  ArrowRight
} from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const HowArchVizActs: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // Approve default

  const steps = [
    {
      num: "01",
      name: "Understand",
      icon: <Search className="w-4 h-4 text-[#38bdf8]" />,
      title: "Contextual Intent Parsing",
      desc: "ArchViz parses operational triggers or natural language commands into a verified graph query across multi-cloud dependencies.",
      guardrail: "Read-only graph traversal (0 write permissions)"
    },
    {
      num: "02",
      name: "Simulate",
      icon: <Sliders className="w-4 h-4 text-[#38bdf8]" />,
      title: "Pre-Flight Digital Twin Execution",
      desc: "Every proposed action or remediation runs on an isolated digital twin first to calculate blast radius and assert zero downtime.",
      guardrail: "100% simulated sandbox execution"
    },
    {
      num: "03",
      name: "Policy Check",
      icon: <FileCode2 className="w-4 h-4 text-[#10b981]" />,
      title: "Deterministic OPA Validation",
      desc: "Action payload is evaluated against organizational Open Policy Agent rules (e.g. no changes during peak hours, dual-key required).",
      guardrail: "OPA policy pass required before prompting"
    },
    {
      num: "04",
      name: "Approve",
      icon: <KeyRound className="w-4 h-4 text-[#f59e0b]" />,
      title: "Human Dual-Key Authorization",
      desc: "Production modifications require explicit cryptographic signoff from designated engineers via WebAuthn hardware token.",
      guardrail: "Zero autonomous production execution without signoff"
    },
    {
      num: "05",
      name: "Act",
      icon: <Cpu className="w-4 h-4 text-[#38bdf8]" />,
      title: "Scoped Ephemeral STS Execution",
      desc: "A temporary 15-minute IAM STS token is minted strictly scoped to the exact resources defined in the approved plan.",
      guardrail: "Tokens auto-expire immediately after apply"
    },
    {
      num: "06",
      name: "Verify",
      icon: <LineChart className="w-4 h-4 text-[#10b981]" />,
      title: "Post-Flight Telemetry Assertion",
      desc: "ArchViz monitors live metric streams for 10 minutes post-apply. If SLO degrades, it triggers an instant pre-simulated rollback.",
      guardrail: "Automated rollback safety net"
    }
  ];

  return (
    <section id="how-archviz-acts" className="py-16 md:py-24 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-14 md:mb-20 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              06 / Safety & Execution Guardrails
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              How ArchViz acts. <br />
              <span className="text-[#858a85]">With deterministic safety boundaries.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl font-sans">
              ArchViz connects diagnosis, simulation, policy checks, human signoff, and execution into a controlled, auditable pipeline.
            </p>
          </div>
        </ScrollReveal>

        {/* Highlight Banner: "AI does not receive unrestricted cloud access." */}
        <ScrollReveal direction="up" delay={100} distance="30px">
          <div className="p-6 sm:p-7 rounded-2xl border border-[#38bdf8]/30 bg-[#0d100d]/90 backdrop-blur-xl mb-12 shadow-[0_0_40px_rgba(56,189,248,0.1)] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/30 flex-shrink-0">
                <Lock className="w-6 h-6 text-[#38bdf8]" />
              </div>
              <div className="space-y-1">
                <div className="text-base sm:text-lg font-semibold text-[#f1f2ee] font-sans">
                  AI does not receive unrestricted cloud access.
                </div>
                <p className="text-xs text-[#858a85] font-sans max-w-2xl leading-relaxed">
                  ArchViz never holds long-lived root write credentials. Actions are executed through short-lived (15-min) scoped STS tokens only after digital twin verification and human authorization.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#10b981] bg-[#10b981]/10 px-3.5 py-1.5 rounded-lg border border-[#10b981]/25 flex-shrink-0 font-semibold">
              <ShieldCheck className="w-4 h-4" /> 100% Policy-Controlled
            </div>
          </div>
        </ScrollReveal>

        {/* 6-Step Visual Action Flow Pipeline */}
        <div className="space-y-8">
          {/* Step Selector Grid */}
          <ScrollReveal direction="up" delay={180} distance="30px">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {steps.map((step, idx) => (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    activeStep === idx
                      ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.2)] scale-[1.02]'
                      : 'border-white/[0.06] bg-[#0d100d]/80 text-[#858a85] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-[#505551]">{step.num}</span>
                    {step.icon}
                  </div>
                  <span className="font-semibold text-xs text-[#f1f2ee] block">{step.name}</span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Active Step Deep-Dive Card */}
          <ScrollReveal direction="up" delay={260} distance="40px">
            <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.12] bg-[#0d100d]/95 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-base font-bold text-[#38bdf8]">Step {steps[activeStep].num}</span>
                  <span className="text-xl font-semibold text-[#f1f2ee] font-sans">{steps[activeStep].title}</span>
                </div>
                <span className="text-[11px] text-[#10b981] font-semibold px-2.5 py-1 rounded bg-[#10b981]/15 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> {steps[activeStep].guardrail}
                </span>
              </div>

              <p className="text-sm text-[#858a85] font-sans leading-relaxed max-w-3xl">
                {steps[activeStep].desc}
              </p>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#505551]">
                <span>Deterministic Execution Engine</span>
                <span className="text-[#38bdf8] flex items-center gap-1 font-semibold">
                  Hardware-Enforced Security Boundaries <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

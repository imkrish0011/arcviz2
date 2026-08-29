import React from 'react';
import { Lock, FileCheck, History } from 'lucide-react';

export const SecurityGovernance: React.FC = () => {
  const steps = [
    { name: "Intent", desc: "Operational query or trigger" },
    { name: "Plan", desc: "Scoped changes computed against graph" },
    { name: "Policy", desc: "Evaluated against OPA & IAM rules" },
    { name: "Simulation", desc: "Blast-radius tested in digital twin" },
    { name: "Approval", desc: "Dual-key engineer sign-off" },
    { name: "Execution", desc: "Ephemeral STS credentials applied" },
    { name: "Verification", desc: "Post-flight SLO & health checks" },
    { name: "Audit", desc: "Immutable cryptographic log stored" }
  ];

  return (
    <section id="security" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a86] uppercase tracking-wider block mb-4">
            07 / Enterprise Security & Governance
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            AI doesn't get unrestricted <br />
            <span className="text-[#858a86]">access to your cloud.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Enterprise cloud engineering requires absolute auditability and least-privilege isolation. ArchViz enforces deterministic policy checks and human verification at every step of the execution loop.
          </p>
        </div>

        {/* Deterministic Control Path Linear Chain */}
        <div className="p-8 sm:p-12 rounded-lg border border-white/[0.06] bg-[#0d100d]/60 backdrop-blur-sm mb-12">
          <div className="text-xs font-mono text-[#858a86] uppercase mb-6 flex items-center justify-between">
            <span>Deterministic Control Path</span>
            <span className="text-[#10b981]">Zero Unbounded Execution</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 font-mono text-xs">
            {steps.map((s, idx) => (
              <div key={idx} className="p-3 rounded border border-white/[0.06] bg-[#080a08]">
                <span className="text-[10px] text-[#505551] block mb-1">0{idx + 1}</span>
                <span className="font-semibold text-[#f2f2ee] block mb-1">{s.name}</span>
                <p className="text-[10px] font-sans text-[#888d96] leading-tight">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Three Core Governance Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-mono">
          <div className="p-6 rounded border border-white/[0.06] bg-[#0d100d]/40">
            <div className="text-[#38bdf8] mb-2 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5" />
              <span className="font-semibold text-sm text-[#f2f2ee]">Ephemeral IAM Roles</span>
            </div>
            <p className="font-sans text-[#888d96] leading-relaxed">
              No permanent administrator access keys. Actions utilize dynamic STS assumed roles that expire immediately upon task completion.
            </p>
          </div>

          <div className="p-6 rounded border border-white/[0.06] bg-[#0d100d]/40">
            <div className="text-[#38bdf8] mb-2 flex items-center gap-2">
              <FileCheck className="w-3.5 h-3.5" />
              <span className="font-semibold text-sm text-[#f2f2ee]">Open Policy Agent (OPA)</span>
            </div>
            <p className="font-sans text-[#888d96] leading-relaxed">
              Enforce company-specific security boundaries as code. Block changes that touch production databases without multi-party approval.
            </p>
          </div>

          <div className="p-6 rounded border border-white/[0.06] bg-[#0d100d]/40">
            <div className="text-[#38bdf8] mb-2 flex items-center gap-2">
              <History className="w-3.5 h-3.5" />
              <span className="font-semibold text-sm text-[#f2f2ee]">Immutable Audit Memory</span>
            </div>
            <p className="font-sans text-[#888d96] leading-relaxed">
              Every reason, simulated diff, sign-off author, and post-action verification result is immutably indexed for compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

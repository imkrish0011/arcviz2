import React from 'react';
import { 
   
  Lock, 
  FileCheck, 
   
  History, 
  
  
} from 'lucide-react';

export const SecurityGovernance: React.FC = () => {
  const steps = [
    { name: "Intent", desc: "Natural query or detected operational trigger" },
    { name: "Plan", desc: "Scoped changes computed against dependency graph" },
    { name: "Policy", desc: "Evaluated against OPA & organization IAM guardrails" },
    { name: "Simulation", desc: "Blast-radius verified in virtual digital twin" },
    { name: "Approval", desc: "Dual-key human sign-off for tier-1 environments" },
    { name: "Execution", desc: "Short-lived STS token scoped strictly to target" },
    { name: "Verification", desc: "Post-flight SLO & health telemetry validation" },
    { name: "Audit", desc: "Immutable cryptographic log stored in memory" }
  ];

  return (
    <section className="py-24 md:py-36 border-t border-[#1e2229] bg-[#08090a]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono text-[#0ea5e9] tracking-wider uppercase block mb-3">
            07 / Enterprise Security & Governance
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#ededed] leading-tight mb-6">
            AI doesn't get unrestricted <br />
            <span className="text-[#888d96]">access to your cloud.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Enterprise cloud engineering requires absolute auditability and least-privilege isolation. ArchViz enforces deterministic policy checks and human verification at every step of the execution loop.
          </p>
        </div>

        {/* 8-Stage Control Pipeline Visualization */}
        <div className="p-6 md:p-8 rounded-lg bg-[#0e1013] border border-[#1e2229] mb-10 shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1e2229] text-xs font-mono">
            <span className="text-[#ededed]">DETERMINISTIC CONTROL PATH</span>
            <span className="text-[#10b981]">Zero Unbounded Execution</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {steps.map((s, idx) => (
              <div key={idx} className="p-3 rounded bg-[#08090a] border border-[#1e2229] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#5e636e] block mb-1">0{idx + 1}</span>
                  <h4 className="text-xs font-mono font-bold text-[#ededed] mb-1">{s.name}</h4>
                  <p className="text-[11px] font-sans text-[#888d96] leading-tight">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Pillars of Trust */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded bg-[#0e1013] border border-[#1e2229]">
            <div className="w-8 h-8 rounded bg-[#12151a] border border-[#1e2229] flex items-center justify-center text-[#0ea5e9] mb-4">
              <Lock className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-[#ededed] mb-2 font-mono">Short-Lived Ephemeral IAM</h4>
            <p className="text-xs text-[#888d96] leading-relaxed">
              No permanent administrator access keys. Actions use dynamic STS assumed roles that expire immediately upon task completion.
            </p>
          </div>

          <div className="p-6 rounded bg-[#0e1013] border border-[#1e2229]">
            <div className="w-8 h-8 rounded bg-[#12151a] border border-[#1e2229] flex items-center justify-center text-[#0ea5e9] mb-4">
              <FileCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-[#ededed] mb-2 font-mono">Open Policy Agent (OPA)</h4>
            <p className="text-xs text-[#888d96] leading-relaxed">
              Enforce company-specific security boundaries as code. Block changes that touch production databases without multi-party approval.
            </p>
          </div>

          <div className="p-6 rounded bg-[#0e1013] border border-[#1e2229]">
            <div className="w-8 h-8 rounded bg-[#12151a] border border-[#1e2229] flex items-center justify-center text-[#0ea5e9] mb-4">
              <History className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-[#ededed] mb-2 font-mono">Immutable Audit Memory</h4>
            <p className="text-xs text-[#888d96] leading-relaxed">
              Every reason, simulated diff, sign-off author, and post-action verification result is immutably indexed for compliance and audit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

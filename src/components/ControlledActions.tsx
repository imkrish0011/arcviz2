import React, { useState } from 'react';
import {  ShieldCheck } from 'lucide-react';

export const ControlledActions: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(3);

  const levels = [
    {
      name: "Observe",
      perm: "Read-Only IAM",
      desc: "Continuous discovery of topology and telemetry with zero write permissions."
    },
    {
      name: "Explain",
      perm: "Zero Write",
      desc: "Answers architectural questions with topological and telemetry citations."
    },
    {
      name: "Recommend",
      perm: "PR Drafts Only",
      desc: "Generates tested terraform patches and pull requests for engineer review."
    },
    {
      name: "Approve",
      perm: "Human-in-the-Loop",
      desc: "Applies scoped infrastructure actions only after explicit engineer approval."
    },
    {
      name: "Execute",
      perm: "Scoped OPA Rules",
      desc: "Applies pre-approved runbooks for bounded non-breaking anomalies in dev."
    },
    {
      name: "Verify",
      perm: "Post-Flight Checks",
      desc: "Validates system health post-execution and appends complete audit trace."
    }
  ];

  return (
    <section id="control" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a86] uppercase tracking-wider block mb-4">
            05 / Controlled Execution & Trust Model
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            AI can act. <br />
            <span className="text-[#858a86]">You decide how much.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            ArchViz is built with a strict progressive autonomy spectrum. You define granular policy boundaries so that AI never executes any action without your team's authorization.
          </p>
        </div>

        {/* Autonomy Spectrum Flow */}
        <div className="p-8 sm:p-12 rounded-lg border border-white/[0.06] bg-[#0d100d]/60 backdrop-blur-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pb-8 mb-8 border-b border-white/[0.06] text-xs font-mono">
            {levels.map((lvl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedLevel(idx)}
                className={`p-3 rounded text-left transition-colors cursor-pointer border ${
                  selectedLevel === idx
                    ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                    : 'border-transparent text-[#858a86] hover:text-[#f2f2ee]'
                }`}
              >
                <span className="text-[10px] text-[#505551] block mb-1">Level {idx + 1}</span>
                <span className="font-semibold block mb-0.5">{lvl.name}</span>
                <span className="text-[10px] text-[#38bdf8]">{lvl.perm}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
            <div>
              <span className="text-[#38bdf8] uppercase text-[10px] block mb-1">Selected Boundary</span>
              <p className="text-sm font-sans text-[#f2f2ee] max-w-xl leading-relaxed">
                {levels[selectedLevel].desc}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#10b981] flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
              <span>Policy Guardrail Enforced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

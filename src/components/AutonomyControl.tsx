import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export const AutonomyControl: React.FC = () => {
  const [levelIndex, setLevelIndex] = useState<number>(3);

  const levels = [
    {
      name: "Observe",
      tier: "Level 1",
      iam: "Read-Only IAM Role",
      desc: "Continuous discovery of resources, VPCs, and runtime telemetry. Zero write permissions."
    },
    {
      name: "Explain",
      tier: "Level 2",
      iam: "Zero Write Access",
      desc: "Answers architectural and incident questions with citations from the living graph."
    },
    {
      name: "Recommend",
      tier: "Level 3",
      iam: "Pull Request Creation",
      desc: "Generates tested terraform patches and pull requests for engineer review and merge."
    },
    {
      name: "Approve",
      tier: "Level 4",
      iam: "Human-in-the-Loop",
      desc: "Applies scoped infrastructure actions only after explicit two-factor engineer sign-off."
    },
    {
      name: "Execute",
      tier: "Level 5",
      iam: "Scoped OPA Rules",
      desc: "Executes pre-authorized runbooks for bounded non-breaking anomalies in dev and staging."
    }
  ];

  const currentLevel = levels[levelIndex];

  return (
    <section id="control" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
            06 / Progressive Autonomy
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            AI can act. <br />
            <span className="text-[#858a85]">You decide how much.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            ArchViz operates on a continuous autonomy spectrum. You establish deterministic Open Policy Agent (OPA) guardrails so AI never executes beyond your team's authorized boundaries.
          </p>
        </div>

        {/* Continuous Autonomy Spectrum Bar */}
        <div className="p-8 sm:p-14 rounded-lg border border-white/[0.07] bg-[#0d100d]/60 backdrop-blur-sm">
          {/* Spectrum Line Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pb-8 mb-8 border-b border-white/[0.06] font-mono text-xs">
            {levels.map((lvl, idx) => (
              <button
                key={idx}
                onClick={() => setLevelIndex(idx)}
                className={`p-3 rounded text-left transition-all duration-200 cursor-pointer border ${
                  levelIndex === idx
                    ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                    : 'border-transparent text-[#858a85] hover:text-[#f2f2ee]'
                }`}
              >
                <span className="text-[10px] text-[#505551] block mb-1">{lvl.tier}</span>
                <span className="font-semibold block mb-0.5">{lvl.name}</span>
                <span className="text-[10px] text-[#38bdf8]">{lvl.iam}</span>
              </button>
            ))}
          </div>

          {/* Active Level Policy Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs">
            <div>
              <span className="text-[#38bdf8] uppercase text-[10px] block mb-1">
                Autonomy Boundary: {currentLevel.name.toUpperCase()} ({currentLevel.tier})
              </span>
              <p className="text-sm font-sans text-[#f2f2ee] max-w-xl leading-relaxed">
                {currentLevel.desc}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#10b981] flex-shrink-0 text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Policy Guardrail Enforced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

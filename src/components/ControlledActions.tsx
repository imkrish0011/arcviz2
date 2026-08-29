import React, { useState } from 'react';
import { 
  Eye, 
  FileText, 
  Lightbulb, 
  CheckSquare, 
  Play, 
  ShieldCheck,
  Lock,
  
} from 'lucide-react';

export const ControlledActions: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number>(3);

  const tiers = [
    {
      level: "Level 1",
      name: "Observe",
      icon: <Eye className="w-4 h-4 text-[#888d96]" />,
      desc: "Read-only discovery. Maps topology and indexes telemetry continuously without touching configuration.",
      policy: "Read-only IAM role"
    },
    {
      level: "Level 2",
      name: "Explain",
      icon: <FileText className="w-4 h-4 text-[#888d96]" />,
      desc: "Answers complex architectural and incident questions with evidence-backed citations.",
      policy: "Zero write permissions"
    },
    {
      level: "Level 3",
      name: "Recommend",
      icon: <Lightbulb className="w-4 h-4 text-[#0ea5e9]" />,
      desc: "Generates tested remediation plans, terraform patches, and PRs for engineer review.",
      policy: "PR creation only"
    },
    {
      level: "Level 4",
      name: "Approve & Execute",
      icon: <CheckSquare className="w-4 h-4 text-[#0ea5e9]" />,
      desc: "Applies scoped infrastructure actions only after explicit two-factor engineer sign-off.",
      policy: "Human-in-the-loop (Default Prod)"
    },
    {
      level: "Level 5",
      name: "Self-Heal (Guarded)",
      icon: <Play className="w-4 h-4 text-[#10b981]" />,
      desc: "Executes pre-approved runbooks automatically for bounded low-risk anomalies in Dev/Staging.",
      policy: "Scoped OPA guardrails"
    },
    {
      level: "Level 6",
      name: "Verify & Audit",
      icon: <ShieldCheck className="w-4 h-4 text-[#10b981]" />,
      desc: "Validates system health post-execution and appends complete audit trace to memory.",
      policy: "Continuous verification"
    }
  ];

  return (
    <section id="control" className="py-24 md:py-36 border-t border-[#1e2229] bg-[#08090a]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono text-[#0ea5e9] tracking-wider uppercase block mb-3">
            05 / Controlled Execution & Trust Model
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#ededed] leading-tight mb-6">
            AI can act. <br />
            <span className="text-[#888d96]">You control how much.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            ArchViz is built with a strict progressive autonomy framework. You define granular policy boundaries so that AI never executes any action without your team's explicit authorization.
          </p>
        </div>

        {/* 6 Stage Trust Model Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTier(idx)}
              className={`cursor-pointer p-6 rounded border transition-all flex flex-col justify-between ${
                activeTier === idx
                  ? 'bg-[#0e1013] border-[#0ea5e9] shadow-lg'
                  : 'bg-[#0a0b10] border-[#1e2229] hover:border-[#2e3440]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1e2229]">
                  <div className="flex items-center gap-2">
                    {tier.icon}
                    <span className="text-xs font-mono font-medium text-[#ededed]">{tier.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#5e636e]">{tier.level}</span>
                </div>

                <p className="text-xs text-[#888d96] leading-relaxed mb-6 font-sans">
                  {tier.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1e2229] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#5e636e]">Guardrail</span>
                <span className="text-[#0ea5e9]">{tier.policy}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Policy Boundary Callout Box */}
        <div className="p-6 rounded bg-[#0e1013] border border-[#1e2229] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#12151a] border border-[#1e2229] flex items-center justify-center text-[#ededed] flex-shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-[#ededed]">Enterprise Read-Only Connection Available</h4>
              <p className="text-xs text-[#888d96]">Start in pure observability mode with zero IAM write permissions on day one.</p>
            </div>
          </div>
          <span className="text-xs font-mono text-[#10b981] px-3 py-1.5 rounded bg-[#10b981]/10 border border-[#10b981]/25 flex-shrink-0">
            SOC2 & ISO-27001 Compliant
          </span>
        </div>
      </div>
    </section>
  );
};

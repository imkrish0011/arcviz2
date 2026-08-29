import React, { useState } from 'react';


export const SimulationLoop: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const loopSteps = [
    { name: "Propose", desc: "Remediation plan or configuration update proposed by AI or engineer." },
    { name: "Validate", desc: "Static syntax, schema, and cloud provider constraint verification." },
    { name: "Simulate", desc: "Digital twin blast-radius simulation testing downstream traffic impact." },
    { name: "Review", desc: "Evaluates calculated risk score against organization OPA guardrails." },
    { name: "Approve", desc: "Two-factor human sign-off required for tier-1 production environments." },
    { name: "Execute", desc: "Short-lived ephemeral STS credentials apply strictly bounded change." },
    { name: "Verify", desc: "Post-flight SLO, error budget, and health metric validation." }
  ];

  return (
    <section id="simulation" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a86] uppercase tracking-wider block mb-4">
            04 / Pre-Flight Simulation Engine
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            Before it acts, <br />
            <span className="text-[#888d96]">ArchViz models the impact.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            AI should never blind-apply changes to production infrastructure. ArchViz evaluates every proposed action in a simulated digital twin before generating an execution plan.
          </p>
        </div>

        {/* Elegant Horizontal Flow Loop (Not 7 bulky cards) */}
        <div className="p-8 sm:p-12 rounded-lg border border-white/[0.06] bg-[#0d100d]/60 backdrop-blur-sm">
          {/* Horizontal Step Chain */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pb-8 mb-8 border-b border-white/[0.06] text-xs font-mono">
            {loopSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded text-left transition-colors cursor-pointer border ${
                  activeStep === idx
                    ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                    : 'border-transparent text-[#858a86] hover:text-[#f2f2ee]'
                }`}
              >
                <span className="text-[10px] text-[#505551] block mb-1">0{idx + 1}</span>
                <span className="font-semibold">{step.name}</span>
              </button>
            ))}
          </div>

          {/* Active Step Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-mono text-xs">
            <div className="lg:col-span-6 space-y-3">
              <div className="text-[#38bdf8] text-xs uppercase tracking-wider">
                STAGE {activeStep + 1}: {loopSteps[activeStep].name.toUpperCase()}
              </div>
              <p className="text-sm font-sans text-[#f2f2ee] leading-relaxed">
                {loopSteps[activeStep].desc}
              </p>
              <div className="pt-2 text-[11px] text-[#505551]">
                Simulated against digital twin model • Zero live traffic modification
              </div>
            </div>

            <div className="lg:col-span-6 p-4 rounded border border-white/[0.06] bg-[#080a08] text-[#858a86] text-[11px] overflow-x-auto">
              <div className="text-[#505551] pb-2 mb-2 border-b border-white/[0.06] flex items-center justify-between">
                <span>simulated_diff.tfplan</span>
                <span className="text-[#10b981]">0 breaking changes</span>
              </div>
              <pre className="leading-relaxed">
{`~ resource "aws_ecs_service" "checkout_prod" {
    ~ task_definition = "arn:aws:...:task/v43" -> "arn:aws:...:task/v42"
    ~ desired_count   = 8 -> 8 (verified)
  }

# Blast Radius Evaluation:
# -> Dependency 'aurora-pg-primary': +375 handles freed
# -> Dependency 'alb-edge-v2': 200 OK (0 drop)`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

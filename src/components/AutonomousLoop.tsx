import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const AutonomousLoop: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);

  const loopTrace = [
    { name: "Detect", desc: "Operational anomaly or user query identified." },
    { name: "Investigate", desc: "Sub-agents traverse DAG and change history." },
    { name: "Simulate", desc: "Proposed remediation tested in digital twin." },
    { name: "Policy Check", desc: "Evaluated against OPA & organization rules." },
    { name: "Approve", desc: "Dual-key authorization requested if required." },
    { name: "Execute", desc: "Ephemeral STS credentials apply scoped change." },
    { name: "Verify", desc: "Post-flight SLO & health telemetry validated." },
    { name: "Learn", desc: "Outcome immutably indexed into Operational Memory." }
  ];

  return (
    <section id="autonomous-loop" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
            07 / Closed-Loop Autonomy
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            Autonomous operations <br />
            <span className="text-[#858a85]">in a closed loop.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            ArchViz connects autonomous detection, diagnosis, pre-flight simulation, execution, and verification into one continuous, deterministic control loop.
          </p>
        </div>

        {/* 8-Stage Execution Trace Canvas */}
        <div className="p-8 sm:p-14 rounded-lg border border-white/[0.07] bg-[#0d100d]/60 backdrop-blur-sm">
          {/* Horizontal Trace Chain */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pb-8 mb-8 border-b border-white/[0.06] font-mono text-xs">
            {loopTrace.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded text-left transition-colors cursor-pointer border ${
                  activeStep === idx
                    ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#f2f2ee]'
                    : 'border-transparent text-[#858a85] hover:text-[#f2f2ee]'
                }`}
              >
                <span className="text-[10px] text-[#505551] block mb-1">0{idx + 1}</span>
                <span className="font-semibold block">{step.name}</span>
              </button>
            ))}
          </div>

          {/* Active Step Operational Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs">
            <div>
              <span className="text-[#38bdf8] uppercase text-[10px] block mb-1">
                Active Execution Phase: {loopTrace[activeStep].name.toUpperCase()} (Phase {activeStep + 1} of 8)
              </span>
              <p className="text-sm font-sans text-[#f2f2ee] max-w-xl leading-relaxed">
                {loopTrace[activeStep].desc}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#10b981] flex-shrink-0 text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>Deterministic Control Loop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

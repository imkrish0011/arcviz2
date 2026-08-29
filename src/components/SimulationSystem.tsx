import React, { useState } from 'react';
import { Sliders, ShieldCheck } from 'lucide-react';

export const SimulationSystem: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(75);

  const taskCount = Math.round(8 + (sliderPos / 100) * 4); // 8 to 12
  const latency = Math.round(42 - (sliderPos / 100) * 24); // 42ms down to 18ms
  const cost = Math.round(380 + (sliderPos / 100) * 60); // $380 to $440
  const dbConnections = Math.round(495 - (sliderPos / 100) * 375); // 495 down to 120

  return (
    <section id="simulation" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#090c09] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
            04 / Pre-Flight Digital Twin
          </span>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
            Before it acts, <br />
            <span className="text-[#858a85]">ArchViz models the impact.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl">
            Drag the interactive simulation slider to evaluate proposed architectural changes and automated remediations before touching a single line of production infrastructure.
          </p>
        </div>

        {/* Full-Width Morphing Canvas (No outer box framing) */}
        <div className="space-y-10">
          {/* Integrated Scrubber Control */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#f1f2ee]">
              <Sliders className="w-4 h-4 text-[#38bdf8]" />
              <span className="font-semibold uppercase tracking-wider">Simulated State Morph Scrubber</span>
            </div>

            <div className="flex items-center gap-3">
              <span className={sliderPos <= 30 ? 'text-[#f1f2ee] font-medium' : 'text-[#505551]'}>CURRENT STATE</span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="w-48 sm:w-64 h-1 bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#38bdf8]"
                aria-label="Simulation state morph slider"
              />
              <span className={sliderPos >= 70 ? 'text-[#38bdf8] font-medium' : 'text-[#505551]'}>SIMULATED STATE ({sliderPos}%)</span>
            </div>
          </div>

          {/* Morphing Visual Grid with Floating Annotations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-mono text-xs">
            {/* Dynamic Metric Deltas Attached to Infrastructure (6 Cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-[#505551] text-[10px] uppercase pb-2 border-b border-white/[0.04]">
                Simulated Target: svc-checkout-prod
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded border border-white/[0.08] bg-[#0d100d]/80">
                  <span className="text-[#505551] text-[10px] block uppercase">ECS Task Capacity</span>
                  <span className="text-2xl font-normal text-[#f1f2ee] block mt-1">{taskCount} tasks</span>
                  <span className="text-[10px] text-[#38bdf8]">Fargate us-east-1</span>
                </div>

                <div className="p-4 rounded border border-white/[0.08] bg-[#0d100d]/80">
                  <span className="text-[#505551] text-[10px] block uppercase">P99 Service Latency</span>
                  <span className="text-2xl font-normal text-[#10b981] block mt-1">{latency} ms</span>
                  <span className="text-[10px] text-[#10b981]">SLO: Target &lt; 50ms</span>
                </div>

                <div className="p-4 rounded border border-white/[0.08] bg-[#0d100d]/80">
                  <span className="text-[#505551] text-[10px] block uppercase">Aurora Pool Handles</span>
                  <span className="text-2xl font-normal text-[#f1f2ee] block mt-1">{dbConnections} / 500</span>
                  <span className="text-[10px] text-[#10b981]">Pool pressure released</span>
                </div>

                <div className="p-4 rounded border border-white/[0.08] bg-[#0d100d]/80">
                  <span className="text-[#505551] text-[10px] block uppercase">Projected Cost</span>
                  <span className="text-2xl font-normal text-[#f1f2ee] block mt-1">${cost} / mo</span>
                  <span className="text-[10px] text-[#858a85]">Delta: +${cost - 380}/mo</span>
                </div>
              </div>
            </div>

            {/* Blast-Radius & OPA Verification Output (6 Cols) */}
            <div className="lg:col-span-6 p-8 rounded-lg border border-white/[0.08] bg-[#0d100d]/90 flex flex-col justify-between min-h-[260px] shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-xs">
                  <span className="text-[#f1f2ee] uppercase">Blast-Radius Verification</span>
                  <span className="text-[#10b981] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 0 Breaking Changes
                  </span>
                </div>

                <div className="space-y-3 text-[11px] text-[#858a85] leading-relaxed">
                  <div className="p-3 rounded border border-white/[0.04] bg-[#080a08]">
                    <span className="text-[#f1f2ee] font-medium block mb-0.5">Downstream Dependency Impact:</span>
                    <span>No breaking schema changes detected. Aurora connection load falls by 75%.</span>
                  </div>
                  <div className="p-3 rounded border border-white/[0.04] bg-[#080a08]">
                    <span className="text-[#f1f2ee] font-medium block mb-0.5">Open Policy Agent (OPA):</span>
                    <span>PASSED: Policy rule <code className="text-[#38bdf8]">prod-zero-downtime-roll</code> verified.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[11px] text-[#505551]">
                Interactive visual simulation • Digital twin DAG engine
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

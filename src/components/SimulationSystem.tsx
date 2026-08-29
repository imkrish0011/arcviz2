import React, { useState } from 'react';
import { Sliders, ShieldCheck } from 'lucide-react';

export const SimulationSystem: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(75);

  // Computed metrics based on slider position (0 to 100)
  
  const taskCount = Math.round(8 + (sliderPos / 100) * 4); // 8 to 12
  const latency = Math.round(42 - (sliderPos / 100) * 24); // 42ms down to 18ms
  const cost = Math.round(380 + (sliderPos / 100) * 60); // $380 to $440
  const dbConnections = Math.round(495 - (sliderPos / 100) * 375); // 495 down to 120

  return (
    <section id="simulation" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
            04 / Pre-Flight Digital Twin
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            Before it acts, <br />
            <span className="text-[#858a85]">ArchViz models the impact.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Drag the interactive simulation slider to evaluate proposed architectural changes and automated remediations before touching a single line of production infrastructure.
          </p>
        </div>

        {/* Interactive Before / After Morph Canvas */}
        <div className="p-8 sm:p-14 rounded-lg border border-white/[0.07] bg-[#0d100d]/60 backdrop-blur-sm">
          {/* Slider Control Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.06] gap-4">
            <div className="font-mono text-xs text-[#f2f2ee] flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#38bdf8]" />
              <span>SIMULATION DIGITAL TWIN RUNNER</span>
            </div>
            
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className={sliderPos <= 30 ? 'text-[#f2f2ee] font-medium' : 'text-[#505551]'}>CURRENT STATE</span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="w-36 sm:w-48 h-1 bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#38bdf8]"
                aria-label="Simulation state slider"
              />
              <span className={sliderPos >= 70 ? 'text-[#38bdf8] font-medium' : 'text-[#505551]'}>SIMULATED STATE</span>
            </div>
          </div>

          {/* Morphing System Visual Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-mono text-xs">
            {/* Left: Dynamic Metric Delta (6 Cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between text-[#858a85] pb-2 border-b border-white/[0.04]">
                <span>Simulated Target: svc-checkout-prod</span>
                <span className="text-[#38bdf8]">{sliderPos}% Projected Morph</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded border border-white/[0.06] bg-[#080a08]">
                  <span className="text-[#505551] text-[10px] block uppercase">ECS Task Capacity</span>
                  <span className="text-xl font-medium text-[#f2f2ee] block mt-1">{taskCount} tasks</span>
                  <span className="text-[10px] text-[#38bdf8]">Fargate us-east-1</span>
                </div>

                <div className="p-4 rounded border border-white/[0.06] bg-[#080a08]">
                  <span className="text-[#505551] text-[10px] block uppercase">P99 Service Latency</span>
                  <span className="text-xl font-medium text-[#10b981] block mt-1">{latency} ms</span>
                  <span className="text-[10px] text-[#10b981]">SLO: Target &lt; 50ms</span>
                </div>

                <div className="p-4 rounded border border-white/[0.06] bg-[#080a08]">
                  <span className="text-[#505551] text-[10px] block uppercase">Aurora Pool Handles</span>
                  <span className="text-xl font-medium text-[#f2f2ee] block mt-1">{dbConnections} / 500</span>
                  <span className="text-[10px] text-[#10b981]">Connection pool healthy</span>
                </div>

                <div className="p-4 rounded border border-white/[0.06] bg-[#080a08]">
                  <span className="text-[#505551] text-[10px] block uppercase">Projected Cost</span>
                  <span className="text-xl font-medium text-[#f2f2ee] block mt-1">${cost} / mo</span>
                  <span className="text-[10px] text-[#858a85]">Delta: +${cost - 380}/mo</span>
                </div>
              </div>
            </div>

            {/* Right: Blast-Radius & OPA Verification Output (6 Cols) */}
            <div className="lg:col-span-6 p-6 rounded border border-white/[0.08] bg-[#080a08] flex flex-col justify-between min-h-[260px]">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-xs">
                  <span className="text-[#f2f2ee]">BLAST-RADIUS IMPACT ANALYSIS</span>
                  <span className="text-[#10b981] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 0 Breaking Changes
                  </span>
                </div>

                <div className="space-y-2 text-[11px] text-[#858a85] leading-relaxed">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-[#f2f2ee] font-medium block">Downstream Dependency Impact:</span>
                    <span>No breaking schema changes detected. Aurora connection load falls by 75%.</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-[#f2f2ee] font-medium block">Open Policy Agent (OPA):</span>
                    <span>PASSED: Rule <code className="text-[#38bdf8]">prod-zero-downtime-roll</code> verified.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] text-[#505551]">
                Interactive visual simulation • Digital twin DAG engine
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

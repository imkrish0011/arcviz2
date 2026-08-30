import React, { useState } from 'react';
import { Sliders, ShieldCheck, Gauge, TrendingDown, DollarSign, Activity } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const SimulationSystem: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(75);

  const taskCount = Math.round(8 + (sliderPos / 100) * 4); // 8 to 12
  const latency = Math.round(42 - (sliderPos / 100) * 24); // 42ms down to 18ms
  const cost = Math.round(380 + (sliderPos / 100) * 60); // $380 to $440
  const dbConnections = Math.round(495 - (sliderPos / 100) * 375); // 495 down to 120

  return (
    <section id="simulation" className="py-32 md:py-44 border-t border-white/[0.06] bg-[#090c09] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#38bdf8]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
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
        </ScrollReveal>

        {/* Morphing Canvas with Side-Entrance Reveals */}
        <div className="space-y-8">
          {/* Integrated Scrubber Control with Upward Reveal */}
          <ScrollReveal direction="up" delay={120} distance="30px">
            <div className="p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs shadow-xl">
              <div className="flex items-center gap-2.5 text-[#f1f2ee]">
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
                  className="w-44 sm:w-64 h-1.5 bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#38bdf8]"
                  aria-label="Simulation state morph slider"
                />
                <span className={sliderPos >= 70 ? 'text-[#38bdf8] font-medium' : 'text-[#505551]'}>
                  SIMULATED ({sliderPos}%)
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Morphing Visual Grid with Side Reveals */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch font-mono text-xs">
            {/* Dynamic Metric Deltas Attached to Infrastructure (Slide from Left) */}
            <div className="lg:col-span-6 space-y-4">
              <ScrollReveal direction="left" delay={200} distance="50px">
                <div className="text-[#505551] text-[10px] uppercase pb-2 border-b border-white/[0.06] flex items-center justify-between">
                  <span>Simulated Target: svc-checkout-prod</span>
                  <span className="text-[#38bdf8]">Fargate us-east-1</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-md shadow-lg hover:border-white/20 transition-all">
                    <div className="flex items-center justify-between text-[#505551] text-[10px] uppercase mb-1">
                      <span>ECS Task Capacity</span>
                      <Gauge className="w-3.5 h-3.5 text-[#38bdf8]" />
                    </div>
                    <span className="text-2xl font-medium text-[#f1f2ee] block mt-1">{taskCount} tasks</span>
                    <span className="text-[10px] text-[#38bdf8] mt-1 block">Zero task disruption</span>
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-md shadow-lg hover:border-white/20 transition-all">
                    <div className="flex items-center justify-between text-[#505551] text-[10px] uppercase mb-1">
                      <span>P99 Service Latency</span>
                      <TrendingDown className="w-3.5 h-3.5 text-[#10b981]" />
                    </div>
                    <span className="text-2xl font-medium text-[#10b981] block mt-1">{latency} ms</span>
                    <span className="text-[10px] text-[#10b981] mt-1 block">SLO: Target &lt; 50ms</span>
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-md shadow-lg hover:border-white/20 transition-all">
                    <div className="flex items-center justify-between text-[#505551] text-[10px] uppercase mb-1">
                      <span>Aurora Pool Handles</span>
                      <Activity className="w-3.5 h-3.5 text-[#38bdf8]" />
                    </div>
                    <span className="text-2xl font-medium text-[#f1f2ee] block mt-1">{dbConnections} / 500</span>
                    <span className="text-[10px] text-[#10b981] mt-1 block">Pool pressure released</span>
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-md shadow-lg hover:border-white/20 transition-all">
                    <div className="flex items-center justify-between text-[#505551] text-[10px] uppercase mb-1">
                      <span>Projected Cost</span>
                      <DollarSign className="w-3.5 h-3.5 text-[#f59e0b]" />
                    </div>
                    <span className="text-2xl font-medium text-[#f1f2ee] block mt-1">${cost} / mo</span>
                    <span className="text-[10px] text-[#858a85] mt-1 block">Delta: +${cost - 380}/mo</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Blast-Radius & OPA Verification Output (Slide from Right) */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right" delay={280} distance="50px">
                <div className="p-8 rounded-xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-xl flex flex-col justify-between h-full shadow-2xl relative overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08] text-xs">
                      <span className="text-[#f1f2ee] uppercase tracking-wider font-medium">Blast-Radius Verification</span>
                      <span className="text-[#10b981] flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#10b981]/10">
                        <ShieldCheck className="w-4 h-4" /> 0 Breaking Changes
                      </span>
                    </div>

                    <div className="space-y-3.5 text-[11px] text-[#858a85] leading-relaxed">
                      <div className="p-4 rounded-lg border border-white/[0.06] bg-[#080a08]/90">
                        <span className="text-[#f1f2ee] font-medium block mb-1">Downstream Dependency Impact:</span>
                        <span>No breaking schema changes detected. Aurora connection load falls by 75%. Zero dropped ingress packets.</span>
                      </div>
                      <div className="p-4 rounded-lg border border-white/[0.06] bg-[#080a08]/90">
                        <span className="text-[#f1f2ee] font-medium block mb-1">Open Policy Agent (OPA):</span>
                        <span>PASSED: Policy rule <code className="text-[#38bdf8] font-semibold">prod-zero-downtime-roll</code> validated against live DAG.</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-white/[0.08] text-[11px] text-[#505551] flex items-center justify-between">
                    <span>Interactive visual simulation</span>
                    <span className="text-[#38bdf8]">Digital twin DAG engine</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

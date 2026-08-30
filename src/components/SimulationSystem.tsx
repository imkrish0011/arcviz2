import React, { useState } from 'react';
import { Sliders, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { AwsIcon } from './icons/ArchVizIcons';

export const SimulationSystem: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(75);

  const isProposed = sliderPos >= 50;
  const taskVersion = isProposed ? 'v42 (Stable Release)' : 'v43 (Bugged Revision)';
  const latency = Math.round(890 - (sliderPos / 100) * 852); // 890ms down to 38ms
  const cost = Math.round(440 - (sliderPos / 100) * 60); // $440 down to $380
  const dbConnections = Math.round(495 - (sliderPos / 100) * 375); // 495 down to 120
  const bufferPercentage = Math.round(((500 - dbConnections) / 500) * 100);

  return (
    <section id="simulation" className="py-32 md:py-44 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Background Subtle Spatial Architecture Atmosphere - High Visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-65 filter contrast-125 brightness-110 saturate-125">
        <img
          src="/assets/images/geometric-architecture-glow.jpg"
          alt="Spatial digital twin architecture"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08]/70 via-[#080a08]/50 to-[#080a08]" />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-14 md:mb-20 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              04 / Pre-Flight Digital Twin
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              Before it acts, <br />
              <span className="text-[#858a85]">ArchViz morphs the digital twin.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-xl font-sans">
              Drag the interactive state morph scrubber to simulate proposed remediations and architectural adjustments on a live digital twin before touching production cloud resources.
            </p>
          </div>
        </ScrollReveal>

        {/* Morphing Canvas */}
        <div className="space-y-8">
          {/* Integrated Scrubber Control with Presets */}
          <ScrollReveal direction="up" delay={100} distance="30px">
            <div className="p-5 rounded-2xl border border-white/[0.1] bg-[#0d100d]/90 backdrop-blur-xl flex flex-col lg:flex-row lg:items-center justify-between gap-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/30">
                  <Sliders className="w-4 h-4 text-[#38bdf8]" />
                </div>
                <div>
                  <span className="font-semibold uppercase tracking-wider text-xs text-[#f1f2ee] block">Digital Twin State Morph Scrubber</span>
                  <span className="text-[10px] text-[#505551]">Zero-Downtime Rollback Simulation</span>
                </div>
              </div>

              {/* Scrubber & Presets */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 bg-[#080a08]/90 p-2 rounded-xl border border-white/[0.06]">
                  <span className={`text-[10px] font-semibold ${sliderPos <= 25 ? 'text-[#ef4444]' : 'text-[#505551]'}`}>
                    CURRENT (0%)
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="w-40 sm:w-56 h-2 bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#38bdf8]"
                    aria-label="Simulation state morph slider"
                  />
                  <span className={`text-[10px] font-semibold ${sliderPos >= 75 ? 'text-[#10b981]' : 'text-[#505551]'}`}>
                    PROPOSED ({sliderPos}%)
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSliderPos(0)}
                    className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-[10px] text-[#858a85] hover:text-[#f1f2ee] border border-white/[0.06] cursor-pointer"
                  >
                    Current (0%)
                  </button>
                  <button
                    onClick={() => setSliderPos(100)}
                    className="px-2.5 py-1 rounded bg-[#38bdf8]/15 hover:bg-[#38bdf8]/25 text-[10px] text-[#38bdf8] border border-[#38bdf8]/30 font-medium cursor-pointer"
                  >
                    Proposed (100%)
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Morphing Topology + Delta Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left: Morphing Infrastructure Topology Visualization (Slide from Left) */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left" delay={180} distance="50px">
                <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.12] bg-[#0d100d]/95 backdrop-blur-xl flex flex-col justify-between shadow-2xl h-full relative">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.06] text-[10px] text-[#505551] uppercase">
                      <span>Simulated Target: svc-checkout-prod</span>
                      <span className={`font-semibold px-2 py-0.5 rounded ${
                        isProposed ? 'bg-[#10b981]/15 text-[#10b981]' : 'bg-[#ef4444]/15 text-[#ef4444]'
                      }`}>
                        {isProposed ? 'State: Rollback to v42 (Verified)' : 'State: Saturated v43 (Danger)'}
                      </span>
                    </div>

                    {/* Morphing Topology Nodes */}
                    <div className="space-y-4 py-2">
                      {/* Service Node */}
                      <div className={`p-4 rounded-xl border transition-all duration-500 ${
                        isProposed
                          ? 'border-[#38bdf8] bg-[#38bdf8]/15 shadow-[0_0_25px_rgba(56,189,248,0.2)] text-[#f1f2ee]'
                          : 'border-[#ef4444] bg-[#ef4444]/20 shadow-[0_0_25px_rgba(239,68,68,0.2)] text-[#f1f2ee]'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <AwsIcon className="w-4 h-4" />
                            <span className="font-semibold text-xs text-[#f1f2ee]">svc-checkout-prod (AWS ECS)</span>
                          </div>
                          <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                            isProposed ? 'bg-[#10b981]/25 text-[#10b981]' : 'bg-[#ef4444]/25 text-[#ef4444]'
                          }`}>
                            {taskVersion}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#858a85] flex items-center justify-between">
                          <span>Capacity: 8 tasks • Fargate us-east-1</span>
                          <span>Simulated P99: <strong className={isProposed ? 'text-[#10b981]' : 'text-[#ef4444]'}>{latency} ms</strong></span>
                        </div>
                      </div>

                      {/* Morphing Connection Line with Dynamic Color & Stroke */}
                      <div className="flex items-center justify-center my-1">
                        <div className={`w-[2px] h-8 transition-colors duration-500 ${
                          isProposed ? 'bg-[#10b981] shadow-[0_0_10px_#10b981]' : 'bg-[#ef4444] shadow-[0_0_10px_#ef4444]'
                        }`} />
                      </div>

                      {/* Database Node */}
                      <div className={`p-4 rounded-xl border transition-all duration-500 ${
                        isProposed
                          ? 'border-[#10b981] bg-[#10b981]/15 shadow-[0_0_25px_rgba(16,185,129,0.2)] text-[#f1f2ee]'
                          : 'border-[#ef4444] bg-[#ef4444]/20 shadow-[0_0_25px_rgba(239,68,68,0.2)] text-[#f1f2ee]'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Database className={`w-4 h-4 ${isProposed ? 'text-[#10b981]' : 'text-[#ef4444]'}`} />
                            <span className="font-semibold text-xs text-[#f1f2ee]">aurora-pg-primary</span>
                          </div>
                          <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                            isProposed ? 'bg-[#10b981]/25 text-[#10b981]' : 'bg-[#ef4444]/25 text-[#ef4444]'
                          }`}>
                            {dbConnections} / 500 Handles
                          </span>
                        </div>
                        <div className="text-[11px] text-[#858a85] flex items-center justify-between">
                          <span>Pool Pressure: <strong className={isProposed ? 'text-[#10b981]' : 'text-[#ef4444]'}>{Math.round((dbConnections/500)*100)}%</strong></span>
                          <span className={isProposed ? 'text-[#10b981]' : 'text-[#ef4444]'}>
                            {isProposed ? `+${500 - dbConnections} Handles Safe` : '99% Starvation Risk'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#858a85]">
                    <span>Morph State: {sliderPos}% Applied</span>
                    <span className="text-[#10b981] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 0 Client Disconnections
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Dynamic Simulated Metrics & Policy Assertion (Slide from Right) */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal direction="right" delay={260} distance="50px">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0d100d]/85 backdrop-blur-md shadow-lg">
                    <span className="text-[#505551] text-[10px] block uppercase">P99 Latency</span>
                    <span className="text-2xl font-bold text-[#10b981] block mt-1">{latency} ms</span>
                    <span className="text-[10px] text-[#10b981]">SLO: &lt; 50ms Target</span>
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0d100d]/85 backdrop-blur-md shadow-lg">
                    <span className="text-[#505551] text-[10px] block uppercase">DB Safe Buffer</span>
                    <span className="text-2xl font-bold text-[#f1f2ee] block mt-1">{bufferPercentage}%</span>
                    <span className="text-[10px] text-[#10b981]">{500 - dbConnections} Available</span>
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0d100d]/85 backdrop-blur-md shadow-lg">
                    <span className="text-[#505551] text-[10px] block uppercase">Task Capacity</span>
                    <span className="text-2xl font-bold text-[#f1f2ee] block mt-1">8 tasks</span>
                    <span className="text-[10px] text-[#38bdf8]">Fargate us-east-1</span>
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0d100d]/85 backdrop-blur-md shadow-lg">
                    <span className="text-[#505551] text-[10px] block uppercase">Compute Cost</span>
                    <span className="text-2xl font-bold text-[#f1f2ee] block mt-1">${cost}/mo</span>
                    <span className="text-[10px] text-[#858a85]">Delta: -${440 - cost}/mo</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-white/[0.08] bg-[#0d100d]/90 backdrop-blur-md shadow-lg space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                    <span className="text-xs text-[#f1f2ee] uppercase tracking-wider font-semibold">Blast-Radius Policy Evaluation</span>
                    <span className="text-[#10b981] flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-[#10b981]/15">
                      <ShieldCheck className="w-3.5 h-3.5" /> 0 Breaking Changes
                    </span>
                  </div>
                  <p className="text-[11px] text-[#858a85] leading-relaxed">
                    OPA rule <code className="text-[#38bdf8]">prod-zero-downtime-roll</code> validated against digital twin. Downstream schema compatibility and connection drains confirmed.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

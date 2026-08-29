import React, { useState } from 'react';
import { AwsIcon, AzureIcon, GcpIcon, ArchVizLogo } from './icons/ArchVizIcons';


export const BuildAndConnect: React.FC = () => {
  const [activeStream, setActiveStream] = useState<'build' | 'connect'>('build');

  return (
    <section id="build-connect" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
            01 / Unified Entry Points
          </span>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
            Two entry points. <br />
            <span className="text-[#858a85]">One operating system.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#858a85] leading-relaxed max-w-xl">
            Whether you are architecting greenfield systems or bringing years of accumulated multi-cloud infrastructure, ArchViz unifies your entire fleet into a single operating layer.
          </p>
        </div>

        {/* Asymmetric Dual Stream Composition (No heavy outer box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Stream Narrative & Interactive Step Sequence (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Stream Selector Buttons */}
            <div className="flex items-center gap-4 border-b border-white/[0.08] pb-4 font-mono text-xs">
              <button
                onClick={() => setActiveStream('build')}
                className={`pb-2 transition-all cursor-pointer flex items-center gap-2 ${
                  activeStream === 'build'
                    ? 'text-[#f1f2ee] border-b-2 border-[#38bdf8] font-medium'
                    : 'text-[#858a85] hover:text-[#f1f2ee]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                STREAM A: BUILD NEW INFRASTRUCTURE
              </button>

              <button
                onClick={() => setActiveStream('connect')}
                className={`pb-2 transition-all cursor-pointer flex items-center gap-2 ${
                  activeStream === 'connect'
                    ? 'text-[#f1f2ee] border-b-2 border-[#10b981] font-medium'
                    : 'text-[#858a85] hover:text-[#f1f2ee]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                STREAM B: CONNECT EXISTING FLEET
              </button>
            </div>

            {/* Stream Narrative Body */}
            {activeStream === 'build' ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-[#f1f2ee] tracking-tight">
                  Design visually. Simulate. Deploy directly.
                </h3>
                <p className="text-sm text-[#858a85] leading-relaxed">
                  Compose infrastructure visually on an open spatial canvas. ArchViz synthesizes validated Terraform/OpenTofu code, validates OPA policies, runs blast-radius simulations, and provisions directly to AWS, Azure, and GCP.
                </p>

                <div className="space-y-3 font-mono text-xs pt-2">
                  <div className="flex items-center justify-between p-3.5 rounded border border-white/[0.06] bg-[#0d100d]/60">
                    <div className="flex items-center gap-3">
                      <span className="text-[#38bdf8]">01</span>
                      <span className="text-[#f1f2ee]">Visual Architecture Design</span>
                    </div>
                    <span className="text-[10px] text-[#505551]">Spatial Canvas</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 rounded border border-white/[0.06] bg-[#0d100d]/60">
                    <div className="flex items-center gap-3">
                      <span className="text-[#38bdf8]">02</span>
                      <span className="text-[#f1f2ee]">Digital Twin Pre-Flight Simulation</span>
                    </div>
                    <span className="text-[10px] text-[#10b981]">0 Blast Radius</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 rounded border border-white/[0.06] bg-[#0d100d]/60">
                    <div className="flex items-center gap-3">
                      <span className="text-[#38bdf8]">03</span>
                      <span className="text-[#f1f2ee]">Multi-Cloud Deployment</span>
                    </div>
                    <span className="text-[10px] text-[#38bdf8]">AWS • Azure • GCP</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-[#f1f2ee] tracking-tight">
                  Read-only discovery that maps everything in minutes.
                </h3>
                <p className="text-sm text-[#858a85] leading-relaxed">
                  Attach a read-only cross-account IAM role. ArchViz ingests resources, VPC networks, routing tables, and runtime telemetry without deploying intrusive host agents or interrupting live traffic.
                </p>

                <div className="space-y-3 font-mono text-xs pt-2">
                  <div className="flex items-center justify-between p-3.5 rounded border border-white/[0.06] bg-[#0d100d]/60">
                    <div className="flex items-center gap-3">
                      <span className="text-[#10b981]">01</span>
                      <span className="text-[#f1f2ee]">Continuous Resource Discovery</span>
                    </div>
                    <span className="text-[10px] text-[#505551]">Read-only IAM</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 rounded border border-white/[0.06] bg-[#0d100d]/60">
                    <div className="flex items-center gap-3">
                      <span className="text-[#10b981]">02</span>
                      <span className="text-[#f1f2ee]">Living Topology Knowledge Graph</span>
                    </div>
                    <span className="text-[10px] text-[#10b981]">Auto-Synthesized DAG</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 rounded border border-white/[0.06] bg-[#0d100d]/60">
                    <div className="flex items-center gap-3">
                      <span className="text-[#10b981]">03</span>
                      <span className="text-[#f1f2ee]">Autonomous Agent Operation</span>
                    </div>
                    <span className="text-[10px] text-[#38bdf8]">Continuous SRE</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Multi-Cloud Spatial Convergence Flow (6 Cols) */}
          <div className="lg:col-span-6 relative py-6">
            <div className="space-y-4 font-mono text-xs">
              {/* AWS Stream */}
              <div className="p-4 rounded border border-white/[0.08] bg-[#0d100d]/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AwsIcon className="w-5 h-5 text-[#f1f2ee]" />
                  <div>
                    <span className="text-[#f1f2ee] font-medium block">Amazon Web Services</span>
                    <span className="text-[10px] text-[#505551]">us-east-1 • eu-west-1 (142 resources)</span>
                  </div>
                </div>
                <span className="text-[10px] text-[#38bdf8]">Connected</span>
              </div>

              {/* Converging Hairline Connectors */}
              <div className="flex justify-center my-1">
                <div className="w-[1px] h-6 bg-gradient-to-b from-white/[0.1] to-[#38bdf8]/40" />
              </div>

              {/* Central ArchViz Operating System Kernel */}
              <div className="p-5 rounded-lg border border-[#38bdf8]/40 bg-[#38bdf8]/10 text-center shadow-[0_0_30px_rgba(56,189,248,0.1)]">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <ArchVizLogo size={18} />
                  <span className="font-semibold text-sm text-[#f1f2ee]">ARCHVIZ UNIFIED OPERATING KERNEL</span>
                </div>
                <span className="text-[10px] text-[#858a85]">Single living knowledge model across all clouds</span>
              </div>

              {/* Converging Hairline Connectors */}
              <div className="flex justify-center my-1">
                <div className="w-[1px] h-6 bg-gradient-to-t from-white/[0.1] to-[#38bdf8]/40" />
              </div>

              {/* Azure & GCP Streams */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded border border-white/[0.08] bg-[#0d100d]/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <AzureIcon className="w-4 h-4 text-[#f1f2ee]" />
                    <span className="text-[#f1f2ee]">Azure</span>
                  </div>
                  <span className="text-[10px] text-[#10b981]">eastus</span>
                </div>

                <div className="p-3.5 rounded border border-white/[0.08] bg-[#0d100d]/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <GcpIcon className="w-4 h-4 text-[#f1f2ee]" />
                    <span className="text-[#f1f2ee]">GCP</span>
                  </div>
                  <span className="text-[10px] text-[#10b981]">us-central1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

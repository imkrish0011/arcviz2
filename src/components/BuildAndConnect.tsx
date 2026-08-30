import React, { useState } from 'react';
import { AwsIcon, AzureIcon, GcpIcon } from './icons/ArchVizIcons';
import { ScrollReveal } from './ui/ScrollReveal';
import { Box, Compass, Sparkles, Radio, Network } from 'lucide-react';

export const BuildAndConnect: React.FC = () => {
  const [activeStream, setActiveStream] = useState<'build' | 'connect'>('build');
  const [activePoint, setActivePoint] = useState<number>(0);

  return (
    <section id="build-connect" className="py-32 md:py-44 border-t border-white/[0.06] bg-[#080a08] relative overflow-hidden">
      {/* Background Coordinate Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              Unified Entry Points
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
              Two entry points. <br />
              <span className="text-[#858a85]">One unified infrastructure graph.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#858a85] leading-relaxed max-w-xl">
              Whether you are architecting greenfield systems or bringing years of accumulated multi-cloud infrastructure, ArchViz unifies your entire fleet into a single living graph.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Stream Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Stream Narrative & Interactive Step Sequence (Slide from Left) */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="left" delay={150} distance="50px">
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
                <div className="space-y-6 pt-4">
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#f1f2ee] tracking-tight">
                    Design visually. Simulate. Deploy directly.
                  </h3>
                  <p className="text-sm sm:text-base text-[#858a85] leading-relaxed">
                    Compose infrastructure visually on an open spatial canvas. ArchViz synthesizes validated Terraform and OpenTofu code, validates OPA policies, runs blast-radius simulations, and provisions directly to AWS, Azure, and GCP.
                  </p>

                  <div className="space-y-3 font-mono text-xs pt-2">
                    <div 
                      onClick={() => setActivePoint(0)}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-all cursor-pointer ${
                        activePoint === 0 
                          ? 'border-[#38bdf8]/60 bg-[#38bdf8]/10 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.1)]' 
                          : 'border-white/[0.06] bg-[#0d100d]/70 text-[#858a85] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#38bdf8] font-semibold">01</span>
                        <span className="text-[#f1f2ee] font-medium">Visual Architecture Canvas</span>
                      </div>
                      <span className="text-[10px] text-[#38bdf8] px-2 py-0.5 rounded bg-[#38bdf8]/15">Spatial Synthesis</span>
                    </div>

                    <div 
                      onClick={() => setActivePoint(1)}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-all cursor-pointer ${
                        activePoint === 1 
                          ? 'border-[#10b981]/60 bg-[#10b981]/10 text-[#f1f2ee] shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                          : 'border-white/[0.06] bg-[#0d100d]/70 text-[#858a85] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#10b981] font-semibold">02</span>
                        <span className="text-[#f1f2ee] font-medium">Digital Twin Pre-Flight Simulation</span>
                      </div>
                      <span className="text-[10px] text-[#10b981] px-2 py-0.5 rounded bg-[#10b981]/15">0 Blast Radius</span>
                    </div>

                    <div 
                      onClick={() => setActivePoint(2)}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-all cursor-pointer ${
                        activePoint === 2 
                          ? 'border-[#38bdf8]/60 bg-[#38bdf8]/10 text-[#f1f2ee] shadow-[0_0_20px_rgba(56,189,248,0.1)]' 
                          : 'border-white/[0.06] bg-[#0d100d]/70 text-[#858a85] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#38bdf8] font-semibold">03</span>
                        <span className="text-[#f1f2ee] font-medium">Multi-Cloud Deployment Engine</span>
                      </div>
                      <span className="text-[10px] text-[#38bdf8] px-2 py-0.5 rounded bg-[#38bdf8]/15">AWS • Azure • GCP</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 pt-4">
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#f1f2ee] tracking-tight">
                    Read-only discovery that maps everything in minutes.
                  </h3>
                  <p className="text-sm sm:text-base text-[#858a85] leading-relaxed">
                    Attach a read-only cross-account IAM role. ArchViz ingests resources, VPC networks, routing tables, and runtime telemetry without deploying intrusive host agents or interrupting live traffic.
                  </p>

                  <div className="space-y-3 font-mono text-xs pt-2">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-white/[0.06] bg-[#0d100d]/70">
                      <div className="flex items-center gap-3">
                        <span className="text-[#10b981] font-semibold">01</span>
                        <span className="text-[#f1f2ee] font-medium">Continuous Resource Discovery</span>
                      </div>
                      <span className="text-[10px] text-[#505551]">Read-only IAM</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg border border-white/[0.06] bg-[#0d100d]/70">
                      <div className="flex items-center gap-3">
                        <span className="text-[#10b981] font-semibold">02</span>
                        <span className="text-[#f1f2ee] font-medium">Living Topology Knowledge Graph</span>
                      </div>
                      <span className="text-[10px] text-[#10b981]">Auto-Synthesized Graph</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg border border-white/[0.06] bg-[#0d100d]/70">
                      <div className="flex items-center gap-3">
                        <span className="text-[#10b981] font-semibold">03</span>
                        <span className="text-[#f1f2ee] font-medium">Autonomous Agent Operation</span>
                      </div>
                      <span className="text-[10px] text-[#38bdf8]">Continuous SRE</span>
                    </div>
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>

          {/* Right: Multi-Cloud Spatial Convergence Flow (Slide from Right) */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" delay={250} distance="50px">
              <div className="space-y-4 font-mono text-xs">
                {/* 3D Geometric Architectural Canvas Preview Card */}
                <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-[#0d100d] shadow-2xl group">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src="/assets/images/geometric-architecture-glow.jpg"
                      alt="Geometric 3D architectural canvas"
                      className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d100d] via-[#0d100d]/40 to-transparent" />
                    
                    {/* Floating HUD Badges on Image */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-md bg-[#080a08]/85 backdrop-blur-md border border-white/[0.1] text-[10px] text-[#f1f2ee]">
                      <Box className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span>Spatial Canvas: 3D Topology Node Grid</span>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#080a08]/85 backdrop-blur-md border border-white/[0.1] text-[10px] text-[#10b981]">
                      <Radio className="w-3 h-3 animate-ping" />
                      <span>Live Synced</span>
                    </div>

                    {/* Coordinate markers */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-[#858a85]">
                      <span className="flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span>Coordinates: X:142 Y:89 Z:12</span>
                      </span>
                      <span className="text-[#38bdf8] font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Auto-synthesizing IaC
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cloud Provider Ingestion Sources */}
                <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-md flex items-center justify-between shadow-lg hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <AwsIcon className="w-5 h-5 text-[#f1f2ee]" />
                    <div>
                      <span className="text-[#f1f2ee] font-medium block text-xs">Amazon Web Services</span>
                      <span className="text-[10px] text-[#505551]">us-east-1 • eu-west-1 (142 live resources)</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#38bdf8] font-medium px-2 py-0.5 rounded bg-[#38bdf8]/10">Connected</span>
                </div>

                {/* Converging Hairline Connector */}
                <div className="flex justify-center my-0.5">
                  <div className="w-[1px] h-5 bg-gradient-to-b from-white/[0.15] to-[#38bdf8]/60" />
                </div>

                {/* Central Living Infrastructure Graph Convergence Node */}
                <div className="p-5 rounded-xl border border-[#38bdf8]/35 bg-[#0d100d]/90 backdrop-blur-md text-center shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Network className="w-4 h-4 text-[#38bdf8]" />
                    <span className="font-semibold text-sm text-[#f1f2ee]">UNIFIED MULTI-CLOUD INFRASTRUCTURE GRAPH</span>
                  </div>
                  <span className="text-[10px] text-[#858a85]">Continuous bi-directional mapping of VPCs, containers, and data tiers</span>
                </div>

                {/* Converging Hairline Connector */}
                <div className="flex justify-center my-0.5">
                  <div className="w-[1px] h-5 bg-gradient-to-t from-white/[0.15] to-[#38bdf8]/60" />
                </div>

                {/* Azure & GCP Streams */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-md flex items-center justify-between hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <AzureIcon className="w-4 h-4 text-[#f1f2ee]" />
                      <span className="text-[#f1f2ee] text-xs">Azure East US</span>
                    </div>
                    <span className="text-[10px] text-[#10b981] px-1.5 py-0.2 rounded bg-[#10b981]/10">48 nodes</span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-md flex items-center justify-between hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <GcpIcon className="w-4 h-4 text-[#f1f2ee]" />
                      <span className="text-[#f1f2ee] text-xs">GCP Central</span>
                    </div>
                    <span className="text-[10px] text-[#10b981] px-1.5 py-0.2 rounded bg-[#10b981]/10">24 nodes</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { AwsIcon, AzureIcon, GcpIcon } from './icons/ArchVizIcons';
import { CheckCircle2 } from 'lucide-react';

export const BuildAndConnect: React.FC = () => {
  const [activeStream, setActiveStream] = useState<'build' | 'connect'>('build');

  return (
    <section id="build-connect" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
            01 / Unified Lifecycle
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            Two entry points. <br />
            <span className="text-[#858a85]">One operating system.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#858a85] leading-relaxed">
            Whether you are architecting greenfield systems or bringing years of existing multi-cloud infrastructure, ArchViz unifies your entire fleet into a single intelligent operating layer.
          </p>
        </div>

        {/* Dual Stream Convergence Canvas */}
        <div className="p-8 sm:p-14 rounded-lg border border-white/[0.07] bg-[#0d100d]/60 backdrop-blur-sm">
          {/* Stream Selector */}
          <div className="flex items-center gap-6 pb-6 mb-10 border-b border-white/[0.06] text-xs font-mono">
            <button
              onClick={() => setActiveStream('build')}
              className={`pb-2 transition-colors cursor-pointer flex items-center gap-2 ${
                activeStream === 'build'
                  ? 'text-[#f2f2ee] border-b border-[#38bdf8] font-medium'
                  : 'text-[#858a85] hover:text-[#f2f2ee]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              STREAM A: BUILD NEW INFRASTRUCTURE
            </button>

            <button
              onClick={() => setActiveStream('connect')}
              className={`pb-2 transition-colors cursor-pointer flex items-center gap-2 ${
                activeStream === 'connect'
                  ? 'text-[#f2f2ee] border-b border-[#38bdf8] font-medium'
                  : 'text-[#858a85] hover:text-[#f2f2ee]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              STREAM B: CONNECT EXISTING FLEET
            </button>
          </div>

          {/* Stream Visual Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Stream Execution Flow (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              {activeStream === 'build' ? (
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-[#f2f2ee]">
                    Design, validate, and provision directly to cloud.
                  </h3>
                  <p className="text-sm text-[#858a85] font-sans leading-relaxed">
                    Compose infrastructure visually on a spatial canvas. ArchViz synthesizes validated Terraform and OpenTofu code, validates OPA policy guardrails, runs blast-radius simulations, and provisions directly to AWS, Azure, and GCP.
                  </p>

                  <div className="space-y-2 pt-2 font-mono text-xs text-[#858a85]">
                    <div className="flex items-center gap-3 p-3 rounded border border-white/[0.06] bg-[#080a08]">
                      <span className="text-[#38bdf8]">01</span>
                      <span className="text-[#f2f2ee]">Visual Architecture Design</span>
                      <span className="text-[10px] text-[#505551] ml-auto">Spatial Canvas</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded border border-white/[0.06] bg-[#080a08]">
                      <span className="text-[#38bdf8]">02</span>
                      <span className="text-[#f2f2ee]">Pre-Flight Digital Twin Simulation</span>
                      <span className="text-[10px] text-[#505551] ml-auto">Zero-Blast Check</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded border border-white/[0.06] bg-[#080a08]">
                      <span className="text-[#38bdf8]">03</span>
                      <span className="text-[#f2f2ee]">Direct Multi-Cloud Deployment</span>
                      <span className="text-[10px] text-[#10b981] ml-auto">AWS • Azure • GCP</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-[#f2f2ee]">
                    Read-only discovery that maps everything in minutes.
                  </h3>
                  <p className="text-sm text-[#858a85] font-sans leading-relaxed">
                    Attach a read-only cross-account IAM role. ArchViz ingests resources, VPC networks, routing tables, and telemetry without deploying intrusive host agents or interrupting live traffic.
                  </p>

                  <div className="space-y-2 pt-2 font-mono text-xs text-[#858a85]">
                    <div className="flex items-center gap-3 p-3 rounded border border-white/[0.06] bg-[#080a08]">
                      <span className="text-[#10b981]">01</span>
                      <span className="text-[#f2f2ee]">Continuous Resource Discovery</span>
                      <span className="text-[10px] text-[#505551] ml-auto">Read-only IAM</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded border border-white/[0.06] bg-[#080a08]">
                      <span className="text-[#10b981]">02</span>
                      <span className="text-[#f2f2ee]">Living Topology Knowledge Graph</span>
                      <span className="text-[10px] text-[#505551] ml-auto">Auto-generated DAG</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded border border-white/[0.06] bg-[#080a08]">
                      <span className="text-[#10b981]">03</span>
                      <span className="text-[#f2f2ee]">Autonomous Agent Operation</span>
                      <span className="text-[10px] text-[#10b981] ml-auto">SLO • Cost • Drift</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Convergence Kernel Hub (6 Cols) */}
            <div className="lg:col-span-6 p-6 rounded border border-white/[0.08] bg-[#080a08] flex flex-col justify-between min-h-[320px]">
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/[0.06] text-xs font-mono">
                <span className="text-[#f2f2ee]">MULTI-CLOUD OPERATING ENVIRONMENT</span>
                <span className="text-[#10b981] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Unified Kernel
                </span>
              </div>

              {/* Multi-Cloud Ingress Feeds */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded border border-white/[0.06] bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AwsIcon className="w-4 h-4 text-[#f1f2ee]" />
                    <span className="text-[#f1f2ee]">Amazon Web Services</span>
                  </div>
                  <span className="text-[11px] text-[#38bdf8]">Connected (us-east-1, eu-west-1)</span>
                </div>

                <div className="p-3 rounded border border-white/[0.06] bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AzureIcon className="w-4 h-4 text-[#f1f2ee]" />
                    <span className="text-[#f1f2ee]">Microsoft Azure</span>
                  </div>
                  <span className="text-[11px] text-[#38bdf8]">Connected (eastus)</span>
                </div>

                <div className="p-3 rounded border border-white/[0.06] bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <GcpIcon className="w-4 h-4 text-[#f1f2ee]" />
                    <span className="text-[#f1f2ee]">Google Cloud Platform</span>
                  </div>
                  <span className="text-[11px] text-[#38bdf8]">Connected (us-central1)</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#505551]">
                <span>Different clouds • Same operating system</span>
                <span className="text-[#858a85]">Zero vendor lock-in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

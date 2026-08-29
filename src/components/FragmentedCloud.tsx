import React from 'react';
import { 
  AwsIcon, 
  TerraformIcon, 
  GitHubIcon, 
  CloudWatchIcon, 
  PolicyShieldIcon 
} from './icons/ArchVizIcons';
import { CheckCircle2 } from 'lucide-react';

export const FragmentedCloud: React.FC = () => {
  const disconnectedSources = [
    { name: "AWS Console", label: "Infrastructure & IAM", icon: <AwsIcon className="w-3.5 h-3.5" /> },
    { name: "GitHub / GitLab", label: "Commits & Pull Requests", icon: <GitHubIcon className="w-3.5 h-3.5" /> },
    { name: "Terraform / IaC", label: "Declared State Files", icon: <TerraformIcon className="w-3.5 h-3.5" /> },
    { name: "CloudWatch / Logs", label: "Metrics, Traces & Spans", icon: <CloudWatchIcon className="w-3.5 h-3.5" /> },
    { name: "Security & Cost", label: "CVEs & Billing Alerts", icon: <PolicyShieldIcon className="w-3.5 h-3.5" /> }
  ];

  return (
    <section id="problem" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a86] uppercase tracking-wider block mb-4">
            01 / The Fragmentation Problem
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            Your cloud is a system. <br />
            <span className="text-[#858a86]">Your tools aren't.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#858a86] leading-relaxed">
            Engineering teams juggle separate dashboards for metrics, pull requests, state files, security alerts, and logs. When an incident hits, engineers must manually reconstruct the mental model in their heads.
          </p>
        </div>

        {/* Visual Convergence Architecture Diagram */}
        <div className="relative p-8 md:p-14 rounded-lg border border-white/[0.06] bg-[#0d100d]/60 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Disconnected Tool Silos (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono text-[#858a86] uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
                Fragmented Tool Silos (No Shared Context)
              </div>

              {disconnectedSources.map((source, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded border border-white/[0.06] bg-[#080a08]/80 flex items-center justify-between font-mono text-xs text-[#858a86]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#f2f2ee]">
                      {source.icon}
                    </div>
                    <span className="text-[#f2f2ee]">{source.name}</span>
                  </div>
                  <span className="text-[10px] text-[#505551]">{source.label}</span>
                </div>
              ))}
            </div>

            {/* Center: Convergence Vector (2 Cols) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center gap-2 text-[#505551]">
              <div className="w-full h-[1px] bg-gradient-to-r from-white/[0.1] to-[#38bdf8]/40 relative">
                <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] absolute -top-[2px] right-0 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8]/80">Unified</span>
            </div>

            {/* Right: ArchViz Unified Living Model (5 Cols) */}
            <div className="lg:col-span-5 p-6 rounded border border-white/[0.1] bg-[#080a08] flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span className="text-[#f2f2ee] font-medium">ARCHVIZ OS GRAPH</span>
                  </div>
                  <span className="text-[#38bdf8] text-[10px]">Continuous Synthesis</span>
                </div>

                <div className="space-y-2.5 font-mono text-xs text-[#858a86] mb-6">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-[#505551] text-[10px] block uppercase">Topology & Runtime</span>
                    <span className="text-[#f2f2ee]">aws_ecs_service.checkout-prod (8 tasks)</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-[#505551] text-[10px] block uppercase">Commit Lineage</span>
                    <span className="text-[#38bdf8]">#8f31b9d (PR #429) • 14:32:10 UTC</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-[#505551] text-[10px] block uppercase">Correlated Signal</span>
                    <span className="text-[#10b981]">p99 42ms • Aurora connection lock</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#10b981]">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Single correlated operational reality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

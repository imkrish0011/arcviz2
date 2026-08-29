import React from 'react';
import { 
  AwsIcon, 
  TerraformIcon, 
  GitHubIcon, 
  CloudWatchIcon, 
   
  PolicyShieldIcon 
} from './icons/ArchVizIcons';
import {   CheckCircle2, XCircle,   } from 'lucide-react';

export const FragmentedCloud: React.FC = () => {
  const silos = [
    {
      name: "AWS Console",
      sub: "Raw resources & IAM",
      icon: <AwsIcon className="w-4 h-4 text-[#ededed]" />,
      pain: "No dependency context or code history"
    },
    {
      name: "GitHub / GitLab",
      sub: "Commits & Pull Requests",
      icon: <GitHubIcon className="w-4 h-4 text-[#ededed]" />,
      pain: "Disconnected from actual runtime state"
    },
    {
      name: "Terraform / IaC",
      sub: "Declared state files",
      icon: <TerraformIcon className="w-4 h-4 text-[#ededed]" />,
      pain: "Blind to runtime drift & telemetry"
    },
    {
      name: "CloudWatch / Datadog",
      sub: "Metrics, logs, traces",
      icon: <CloudWatchIcon className="w-4 h-4 text-[#ededed]" />,
      pain: "Isolated charts without topology linkage"
    },
    {
      name: "Security & FinOps",
      sub: "Vulnerability & billing alerts",
      icon: <PolicyShieldIcon className="w-4 h-4 text-[#ededed]" />,
      pain: "Alert fatigue without root-cause reasoning"
    }
  ];

  return (
    <section id="problem" className="py-24 md:py-36 border-t border-[#1e2229] bg-[#08090a]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono text-[#0ea5e9] tracking-wider uppercase block mb-3">
            01 / The Fragmentation Problem
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#ededed] leading-tight mb-6">
            Your cloud is a system. <br />
            <span className="text-[#888d96]">Your tools aren't.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Engineering teams juggle separate dashboards for metrics, pull requests, state files, security alerts, and logs. When an incident hits, engineers must manually reconstruct the mental model in their heads.
          </p>
        </div>

        {/* Silos vs Unified Model Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Disconnected Silos (5 Cols) */}
          <div className="lg:col-span-5 p-6 md:p-8 rounded-lg bg-[#0e1013] border border-[#1e2229] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1e2229]">
                <span className="text-xs font-mono font-medium text-[#888d96] uppercase">Fragmented Tool Silos</span>
                <span className="text-[11px] font-mono text-[#ef4444] bg-[#ef4444]/10 px-2 py-0.5 rounded border border-[#ef4444]/20">Disconnected</span>
              </div>

              <div className="space-y-3">
                {silos.map((silo, idx) => (
                  <div key={idx} className="p-3 rounded bg-[#08090a] border border-[#1e2229] flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#12151a] border border-[#1e2229] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {silo.icon}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-medium text-[#ededed]">{silo.name}</span>
                        <span className="text-[10px] font-mono text-[#5e636e]">{silo.sub}</span>
                      </div>
                      <p className="text-[11px] text-[#888d96] mt-0.5">{silo.pain}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1e2229] text-xs font-mono text-[#ef4444] flex items-center gap-2">
              <XCircle className="w-4 h-4 flex-shrink-0" />
              <span>High MTTR, blind spots, constant context switching</span>
            </div>
          </div>

          {/* Right Column: ArchViz Unified OS (7 Cols) */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-lg bg-[#0e1013] border border-[#0ea5e9]/40 flex flex-col justify-between relative shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1e2229]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                  <span className="text-xs font-mono font-medium text-[#ededed] uppercase">ArchViz Unified Knowledge Graph</span>
                </div>
                <span className="text-[11px] font-mono text-[#0ea5e9] bg-[#0ea5e9]/10 px-2 py-0.5 rounded border border-[#0ea5e9]/30">Single Living Model</span>
              </div>

              {/* Visual Unified Node Mapping Box */}
              <div className="p-6 rounded bg-[#08090a] border border-[#1e2229] mb-6">
                <div className="text-xs font-mono text-[#888d96] mb-4">Topology Node: <code className="text-[#ededed]">aws_ecs_service.checkout</code></div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded bg-[#12151a] border border-[#1e2229]">
                    <span className="text-[#5e636e] block text-[10px]">INFRASTRUCTURE</span>
                    <span className="text-[#ededed] font-medium">8 tasks • Fargate us-east-1</span>
                  </div>
                  <div className="p-3 rounded bg-[#12151a] border border-[#1e2229]">
                    <span className="text-[#5e636e] block text-[10px]">GIT COMMIT LINEAGE</span>
                    <span className="text-[#0ea5e9] font-medium">#8f31b9d via PR #429</span>
                  </div>
                  <div className="p-3 rounded bg-[#12151a] border border-[#1e2229]">
                    <span className="text-[#5e636e] block text-[10px]">OBSERVABILITY</span>
                    <span className="text-[#10b981] font-medium">p99 42ms • 0.01% error</span>
                  </div>
                  <div className="p-3 rounded bg-[#12151a] border border-[#1e2229]">
                    <span className="text-[#5e636e] block text-[10px]">SECURITY & COST</span>
                    <span className="text-[#ededed] font-medium">KMS key rotated • $380/mo</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#888d96] leading-relaxed">
                ArchViz correlates infrastructure configuration, runtime metrics, deployment history, security findings, and dependencies into an always-current, queryable knowledge graph.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1e2229] text-xs font-mono text-[#10b981] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Full contextual reasoning across your entire stack in one place</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

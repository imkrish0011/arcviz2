import React, { useState } from 'react';
import { SystemBadge } from './ui/SystemBadge';
import { 
  Search, 
   
  GitPullRequest, 
  Database, 
  Activity, 
   
  AlertTriangle, 
  
  
  
} from 'lucide-react';

export const InvestigationShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rca' | 'evidence' | 'patch'>('rca');

  return (
    <section id="investigation" className="py-24 md:py-36 border-t border-[#1e2229] bg-[#08090a]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono text-[#0ea5e9] tracking-wider uppercase block mb-3">
            03 / AI-Native Root Cause Investigation
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#ededed] leading-tight mb-6">
            Ask what happened. <br />
            <span className="text-[#888d96]">ArchViz finds out why.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            Instead of manually clicking through 20 tabs of logs, CloudWatch dashboards, and GitHub PR diffs, ask in natural language. ArchViz traverses topology, telemetry, and change logs to assemble evidence-backed root cause analyses.
          </p>
        </div>

        {/* Embedded Investigation Workspace Card */}
        <div className="rounded-lg border border-[#1e2229] bg-[#0d0f14] overflow-hidden shadow-2xl">
          {/* Natural Language Investigation Query Bar */}
          <div className="p-4 md:p-5 bg-[#0a0b10] border-b border-[#1e2229] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-grow">
              <div className="w-7 h-7 rounded bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 flex items-center justify-center text-[#0ea5e9] flex-shrink-0">
                <Search className="w-3.5 h-3.5" />
              </div>
              <div className="font-mono text-sm text-[#ededed] flex-grow">
                <span className="text-[#5e636e] mr-2">QUERY:</span>
                <span className="text-[#ededed] font-medium">"Why did checkout latency increase after the 14:32 deployment?"</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <SystemBadge status="incident" label="Incident Investigated" />
              <span className="text-xs font-mono text-[#888d96] bg-[#12151a] px-2 py-1 rounded border border-[#1e2229]">
                RCA duration: 1.2s
              </span>
            </div>
          </div>

          {/* Sub Navigation Bar */}
          <div className="px-5 py-2.5 bg-[#0e1013] border-b border-[#1e2229] flex items-center gap-4 text-xs font-mono">
            <button
              onClick={() => setActiveTab('rca')}
              className={`pb-1 transition-colors ${
                activeTab === 'rca' ? 'text-[#0ea5e9] border-b-2 border-[#0ea5e9] font-medium' : 'text-[#888d96] hover:text-[#ededed]'
              }`}
            >
              1. Root Cause Summary
            </button>
            <button
              onClick={() => setActiveTab('evidence')}
              className={`pb-1 transition-colors ${
                activeTab === 'evidence' ? 'text-[#0ea5e9] border-b-2 border-[#0ea5e9] font-medium' : 'text-[#888d96] hover:text-[#ededed]'
              }`}
            >
              2. Correlated Evidence (4 signals)
            </button>
            <button
              onClick={() => setActiveTab('patch')}
              className={`pb-1 transition-colors ${
                activeTab === 'patch' ? 'text-[#0ea5e9] border-b-2 border-[#0ea5e9] font-medium' : 'text-[#888d96] hover:text-[#ededed]'
              }`}
            >
              3. Proposed Remediation Plan
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 md:p-8 min-h-[360px]">
            {activeTab === 'rca' && (
              <div className="space-y-6">
                <div className="p-4 rounded bg-[#ef4444]/5 border border-[#ef4444]/25">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ef4444] font-medium mb-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>IDENTIFIED ROOT CAUSE</span>
                  </div>
                  <p className="text-sm text-[#ededed] font-sans leading-relaxed">
                    Database connection pool exhaustion on <code className="text-[#0ea5e9] font-mono">aurora-pg-primary</code> caused by unclosed transaction handles introduced in commit <code className="text-[#0ea5e9] font-mono">#8f31b9d</code> (merged in PR #429).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                  <div className="p-4 rounded bg-[#08090a] border border-[#1e2229]">
                    <span className="text-[#888d96] text-[10px] block mb-1 uppercase">AFFECTED SERVICE</span>
                    <span className="text-sm font-bold text-[#ededed]">svc-checkout-prod</span>
                    <span className="text-[#ef4444] text-[11px] block mt-1">{"p99 spiked 42ms -> 890ms"}</span>
                  </div>
                  <div className="p-4 rounded bg-[#08090a] border border-[#1e2229]">
                    <span className="text-[#888d96] text-[10px] block mb-1 uppercase">BOTTLENECK RESOURCE</span>
                    <span className="text-sm font-bold text-[#ededed]">aurora-pg-primary</span>
                    <span className="text-[#f59e0b] text-[11px] block mt-1">Active connections: 495 / 500</span>
                  </div>
                  <div className="p-4 rounded bg-[#08090a] border border-[#1e2229]">
                    <span className="text-[#888d96] text-[10px] block mb-1 uppercase">CONFIDENCE SCORE</span>
                    <span className="text-sm font-bold text-[#10b981]">98.6%</span>
                    <span className="text-[#888d96] text-[11px] block mt-1">Backed by 4 correlated signals</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'evidence' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded bg-[#08090a] border border-[#1e2229] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <GitPullRequest className="w-4 h-4 text-[#0ea5e9]" />
                    <div>
                      <span className="text-[#ededed] font-medium">Deployment PR #429 Merged (14:32 UTC)</span>
                      <p className="text-[#888d96] text-[11px]">Changed checkout_controller.go line 84: added raw DB query without defer db.Close()</p>
                    </div>
                  </div>
                  <span className="text-[#0ea5e9]">Git Signal</span>
                </div>

                <div className="p-3.5 rounded bg-[#08090a] border border-[#1e2229] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="w-4 h-4 text-[#ef4444]" />
                    <div>
                      <span className="text-[#ededed] font-medium">Aurora DB Connection Spike (14:33 UTC)</span>
                      <p className="text-[#888d96] text-[11px]">Active connection count jumped from 120 to 495 in 90 seconds</p>
                    </div>
                  </div>
                  <span className="text-[#ef4444]">Metric Anomaly</span>
                </div>

                <div className="p-3.5 rounded bg-[#08090a] border border-[#1e2229] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-[#f59e0b]" />
                    <div>
                      <span className="text-[#ededed] font-medium">ECS Task Queue Saturation (14:34 UTC)</span>
                      <p className="text-[#888d96] text-[11px]">Tasks stalled waiting on Aurora Postgres connection acquire timeout (5000ms)</p>
                    </div>
                  </div>
                  <span className="text-[#f59e0b]">Trace Signal</span>
                </div>
              </div>
            )}

            {activeTab === 'patch' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded bg-[#08090a] border border-[#1e2229]">
                  <div className="flex items-center justify-between text-[#10b981] mb-2 font-medium">
                    <span>RECOMMENDED REMEDIATION ACTION</span>
                    <span>Policy Mode: Human-in-the-loop</span>
                  </div>
                  <p className="text-sm text-[#ededed] font-sans leading-relaxed mb-4">
                    Rollback ECS service <code className="text-[#0ea5e9] font-mono">svc-checkout-prod</code> to previous verified task definition <code className="text-[#0ea5e9] font-mono">v42 (commit #7b19a02)</code> to restore normal database connection allocation immediately.
                  </p>
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 rounded bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium text-xs transition-colors">
                      Simulate Rollback Blast Radius
                    </button>
                    <button className="px-4 py-2 rounded bg-[#12151a] hover:bg-[#181b22] text-[#ededed] border border-[#1e2229] text-xs transition-colors">
                      Generate Hotfix PR
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

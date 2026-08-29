import React from 'react';
import { ShieldCheck, Activity, DollarSign, Database, CheckCircle2 } from 'lucide-react';
import { ArchVizLogo } from './icons/ArchVizIcons';

export const AgentWorkforce: React.FC = () => {
  

  const subAgents = [
    {
      name: "Reliability Agent",
      icon: <Activity className="w-3.5 h-3.5 text-[#10b981]" />,
      task: "Auditing worker thread latency and error budgets",
      finding: "Identified 8 stalled tasks waiting on DB connection timeout",
      status: "Verified"
    },
    {
      name: "Database Agent",
      icon: <Database className="w-3.5 h-3.5 text-[#38bdf8]" />,
      task: "Analyzing connection pool starvation & active locks",
      finding: "Aurora pool reached 495/500 max limit due to unclosed handle",
      status: "Verified"
    },
    {
      name: "Security Agent",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />,
      task: "Checking IAM role permissions & ingress security drift",
      finding: "0 unauthorized policy changes • OPA rules verified",
      status: "Verified"
    },
    {
      name: "FinOps Agent",
      icon: <DollarSign className="w-3.5 h-3.5 text-[#f59e0b]" />,
      task: "Evaluating cost impact of proposed capacity rollback",
      finding: "Rollback saves $60/mo in over-provisioned compute buffers",
      status: "Verified"
    }
  ];

  return (
    <section id="agents" className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
            05 / Parallel Agent Workforce
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
            One system. <br />
            <span className="text-[#858a85]">An autonomous workforce.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#888d96] leading-relaxed">
            The primary ArchViz orchestrator analyzes incoming operational triggers and creates specialized parallel sub-agents to investigate, diagnose, and resolve issues simultaneously across specific cloud domains.
          </p>
        </div>

        {/* Spatial Orchestrator & Parallel Sub-Agent Canvas */}
        <div className="p-8 sm:p-14 rounded-lg border border-white/[0.07] bg-[#0d100d]/60 backdrop-blur-sm">
          {/* Main Orchestrator Node (Top Central) */}
          <div className="flex flex-col items-center mb-8">
            <div className="p-4 rounded-lg border border-[#38bdf8] bg-[#38bdf8]/10 font-mono text-xs max-w-lg w-full text-center shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-1">
                <ArchVizLogo size={16} />
                <span className="font-semibold text-sm text-[#f2f2ee]">ARCHVIZ PRIMARY ORCHESTRATOR</span>
              </div>
              <p className="text-[11px] text-[#858a85] font-sans">
                Task Received: "Investigate checkout latency spike after deployment #8f31b9d"
              </p>
            </div>

            {/* Downward Delegation Tree Line */}
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#38bdf8] to-white/[0.1] my-2" />
            <div className="w-full max-w-2xl h-[1px] bg-white/[0.1] relative hidden sm:block">
              <div className="absolute top-0 left-0 w-[1px] h-6 bg-white/[0.1]" />
              <div className="absolute top-0 left-1/3 w-[1px] h-6 bg-white/[0.1]" />
              <div className="absolute top-0 left-2/3 w-[1px] h-6 bg-white/[0.1]" />
              <div className="absolute top-0 right-0 w-[1px] h-6 bg-white/[0.1]" />
            </div>
          </div>

          {/* 4 Parallel Sub-Agent Work Streams */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs mb-8">
            {subAgents.map((agent, idx) => (
              <div 
                key={idx}
                className="p-4 rounded border border-white/[0.06] bg-[#080a08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.04]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#f2f2ee]">
                      {agent.icon}
                      <span className="text-[11px]">{agent.name}</span>
                    </div>
                    <span className="text-[9px] text-[#10b981]">Active</span>
                  </div>

                  <span className="text-[10px] text-[#505551] block mb-1">Assigned Task:</span>
                  <p className="text-[11px] font-sans text-[#858a85] leading-tight mb-3">
                    {agent.task}
                  </p>
                </div>

                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-[10px] text-[#f2f2ee]">
                  <span className="text-[#38bdf8] block font-medium">Finding:</span>
                  {agent.finding}
                </div>
              </div>
            ))}
          </div>

          {/* Converged Root Cause Output */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#10b981]">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Parallel findings synthesized: DB pool saturation root cause verified in 1.4s</span>
            </div>
            <span className="text-[#505551]">Zero chatbot loops • Autonomous execution</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Settings, Shield, Database, Activity, DollarSign } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const AgentWorkforce: React.FC = () => {
  return (
    <section className="bg-[#080a08] pt-32 pb-24 md:pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[#38bdf8] font-mono text-xs uppercase tracking-wider block mb-4">
              Agent Architecture
            </span>
            <h1 className="text-[#f1f2ee] text-4xl md:text-5xl font-semibold mb-6">
              Five specialized agents. One unified mission.
            </h1>
            <p className="text-[#858a85] text-lg max-w-2xl">
              Instead of relying on a single generic AI, ArchViz deploys highly specialized, domain-specific agents that work in concert to manage your cloud infrastructure.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* DevOps Agent */}
            <div className="bg-[#080a08] border border-[#505551]/30 p-6 rounded-lg hover:border-[#505551]/60 transition-colors">
              <Settings className="w-8 h-8 text-[#38bdf8] mb-4" />
              <h3 className="text-[#f1f2ee] font-medium mb-2">DevOps Agent</h3>
              <p className="text-[#858a85] text-sm leading-relaxed">
                Monitors deployments, analyzes CI/CD pipelines, and drafts infrastructure-as-code patches.
              </p>
            </div>
            
            {/* Reliability Agent */}
            <div className="bg-[#080a08] border border-[#505551]/30 p-6 rounded-lg hover:border-[#505551]/60 transition-colors">
              <Activity className="w-8 h-8 text-[#38bdf8] mb-4" />
              <h3 className="text-[#f1f2ee] font-medium mb-2">Reliability Agent</h3>
              <p className="text-[#858a85] text-sm leading-relaxed">
                Tracks SLOs, identifies degradation patterns, and recommends scaling adjustments.
              </p>
            </div>

            {/* Database Agent */}
            <div className="bg-[#080a08] border border-[#505551]/30 p-6 rounded-lg hover:border-[#505551]/60 transition-colors">
              <Database className="w-8 h-8 text-[#38bdf8] mb-4" />
              <h3 className="text-[#f1f2ee] font-medium mb-2">Database Agent</h3>
              <p className="text-[#858a85] text-sm leading-relaxed">
                Analyzes query performance, connection pools, and replication health.
              </p>
            </div>

            {/* Security Agent */}
            <div className="bg-[#080a08] border border-[#505551]/30 p-6 rounded-lg hover:border-[#505551]/60 transition-colors">
              <Shield className="w-8 h-8 text-[#38bdf8] mb-4" />
              <h3 className="text-[#f1f2ee] font-medium mb-2">Security Agent</h3>
              <p className="text-[#858a85] text-sm leading-relaxed">
                Audits IAM policies, detects drift from compliance baselines, and flags exposed resources.
              </p>
            </div>

            {/* FinOps Agent */}
            <div className="bg-[#080a08] border border-[#505551]/30 p-6 rounded-lg hover:border-[#505551]/60 transition-colors">
              <DollarSign className="w-8 h-8 text-[#38bdf8] mb-4" />
              <h3 className="text-[#f1f2ee] font-medium mb-2">FinOps Agent</h3>
              <p className="text-[#858a85] text-sm leading-relaxed">
                Identifies idle resources, right-sizing opportunities, and reserved instance savings.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

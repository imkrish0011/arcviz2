import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

export const CloudChaosToOneSystem: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#080a08]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
              Consolidation
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#f1f2ee] mb-6">
              From fragmented tools to one system.
            </h2>
            <p className="text-base text-[#858a85] leading-relaxed">
              Stop context switching between disconnected dashboards to piece together the truth about your infrastructure.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="flex flex-col gap-3 text-sm text-[#505551] font-mono">
              <p>Monitoring in Datadog.</p>
              <p>Logs in CloudWatch.</p>
              <p>Security in GuardDuty.</p>
              <p>Cost in Cost Explorer.</p>
              <p>Incidents in PagerDuty.</p>
              <p>IaC in Terraform.</p>
              <p>Git in GitHub.</p>
            </div>
            
            <div className="pl-6 border-l-2 border-[#38bdf8] flex flex-col justify-center">
              <h3 className="text-xl font-medium text-[#f1f2ee] mb-4">The unified alternative</h3>
              <p className="text-[#858a85] text-base leading-relaxed">
                ArcViz ingests data from your entire toolchain and projects it onto a single, cohesive topology. You get immediate operational context without navigating away from the architectural diagram.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

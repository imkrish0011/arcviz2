import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

export const HowArchVizActs: React.FC = () => {
  const steps = [
    { title: 'Understand', desc: 'Builds context by reading the full infrastructure graph.' },
    { title: 'Investigate', desc: 'Traces anomalies across service boundaries and dependencies.' },
    { title: 'Explain', desc: 'Presents findings in plain language with full evidence chain.' },
    { title: 'Simulate', desc: 'Tests proposed changes in a digital twin sandbox.' },
    { title: 'Act', desc: 'Executes approved changes with scoped, short-lived credentials.' },
    { title: 'Verify', desc: 'Confirms the fix resolved the issue and no regressions occurred.' },
  ];

  return (
    <section className="bg-[#080a08] py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[#38bdf8] font-mono text-xs uppercase tracking-wider block mb-4">
              Safety Model
            </span>
            <h2 className="text-[#f1f2ee] text-3xl md:text-4xl font-semibold mb-6">
              How ArchViz acts on your infrastructure.
            </h2>
            <p className="text-[#858a85] text-lg max-w-2xl">
              Execution is guarded by deterministic safety boundaries. Every action follows a strict protocol of understanding, simulating, and verifying before and after execution.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#505551] flex items-center justify-center text-[#858a85] font-mono text-sm">
                  {idx + 1}
                </div>
                <div className="pt-1">
                  <h3 className="text-[#f1f2ee] font-medium text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#858a85] text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

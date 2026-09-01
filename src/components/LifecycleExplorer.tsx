import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

export const LifecycleExplorer: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Design",
      desc: "Visually architect your infrastructure on a clean canvas, independent of cloud provider idiosyncrasies."
    },
    {
      num: "02",
      title: "Simulate",
      desc: "Run pre-flight checks against security policies, cost models, and dependency constraints before deploying."
    },
    {
      num: "03",
      title: "Provision",
      desc: "Automatically compile designs into production-ready Infrastructure as Code and deploy via your CI/CD pipeline."
    },
    {
      num: "04",
      title: "Monitor",
      desc: "Continuously observe live telemetry overlaid directly on your architectural blueprint for instant context."
    }
  ];

  return (
    <section id="lifecycle" className="py-24 md:py-32 bg-[#080a08]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
              Full Lifecycle
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#f1f2ee] mb-6">
              Design. Simulate. Provision. Monitor.
            </h2>
            <p className="text-base text-[#858a85] leading-relaxed">
              ArcViz unifies every stage of infrastructure delivery into a single continuous loop. From initial whiteboard session to production telemetry, work within one coherent system.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col border-t border-white/[0.08] pt-6">
                <span className="text-[#505551] font-mono text-sm mb-4">{step.num}</span>
                <h3 className="text-lg font-medium text-[#f1f2ee] mb-3">{step.title}</h3>
                <p className="text-sm text-[#858a85] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

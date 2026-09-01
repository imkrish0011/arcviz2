import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

export const OnboardingJourney: React.FC = () => {
  const milestones = [
    {
      title: "Connect",
      description: "Link your cloud accounts with a read-only IAM role. No agents, no sidecars."
    },
    {
      title: "Discover",
      description: "ArchViz maps your entire infrastructure into a living graph within minutes."
    },
    {
      title: "Monitor",
      description: "Continuous observation begins. Anomalies surface automatically."
    },
    {
      title: "Optimize",
      description: "AI agents recommend improvements to reliability, security, and cost."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#080a08]">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-[#38bdf8] font-mono text-xs uppercase tracking-wider mb-4">Getting Started</p>
            <h2 className="text-[#f1f2ee] text-3xl md:text-4xl font-medium mb-6">From connection to insight in minutes.</h2>
            <p className="text-[#858a85] text-lg max-w-2xl">
              A frictionless onboarding experience that respects your time and your security posture.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative border-l border-[#505551]/30 ml-3 md:ml-4">
          {milestones.map((milestone, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="mb-12 last:mb-0 relative pl-8 md:pl-12">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#38bdf8] border-2 border-[#080a08]" />
                <h3 className="text-[#f1f2ee] text-xl font-medium mb-2">{milestone.title}</h3>
                <p className="text-[#858a85]">{milestone.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

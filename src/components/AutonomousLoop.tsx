import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

export const AutonomousLoop: React.FC = () => {
  const phases = [
    { title: 'See', desc: 'Continuous multi-cloud telemetry ingestion.' },
    { title: 'Understand', desc: 'Contextual graph analysis of system state.' },
    { title: 'Explain', desc: 'Human-readable narrative of what\'s happening.' },
    { title: 'Simulate', desc: 'Zero-risk testing in a digital twin.' },
    { title: 'Decide', desc: 'Policy-gated decision with configurable autonomy.' },
    { title: 'Act', desc: 'Scoped execution with ephemeral credentials.' },
    { title: 'Verify', desc: 'Post-action validation against SLO constraints.' },
    { title: 'Learn', desc: 'Outcome stored in persistent memory for future reference.' },
  ];

  return (
    <section className="bg-[#080a08] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[#38bdf8] font-mono text-xs uppercase tracking-wider block mb-4">
              Operational Loop
            </span>
            <h2 className="text-[#f1f2ee] text-3xl md:text-4xl font-semibold mb-6">
              A continuous cycle of observation and action.
            </h2>
            <p className="text-[#858a85] text-lg max-w-2xl">
              ArchViz doesn't just react to alerts. It runs continuously, observing system state, analyzing trends, and acting decisively to keep infrastructure healthy and optimized.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {phases.map((phase, idx) => (
              <div key={idx} className="bg-[#080a08] border border-[#505551]/30 p-5 rounded-lg hover:border-[#505551]/60 transition-colors">
                <h3 className="text-[#f1f2ee] font-medium text-sm mb-2">{phase.title}</h3>
                <p className="text-[#858a85] text-sm leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

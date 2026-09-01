import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

export const AutonomyControl: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#080a08]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
              Governance
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#f1f2ee] mb-6">
              You decide how much autonomy to give.
            </h2>
            <p className="text-base text-[#858a85] leading-relaxed">
              AI shouldn't be a black box executing rogue commands. Dial in the exact level of autonomy you are comfortable with on a per-service or per-environment basis.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-4xl pt-8 pb-12">
            {/* Spectrum Labels */}
            <div className="flex justify-between text-sm font-medium mb-4">
              <div className="text-[#858a85]">Observe</div>
              <div className="text-[#38bdf8]">Recommend</div>
              <div className="text-[#10b981]">Auto-remediate</div>
            </div>

            {/* Gradient Spectrum Bar */}
            <div className="h-3 w-full rounded-full bg-gradient-to-r from-[#505551] via-[#38bdf8] to-[#10b981] mb-12 shadow-sm"></div>

            {/* OPA Guardrails Explanation */}
            <div className="border-t border-white/[0.08] pt-8">
              <h3 className="text-lg font-medium text-[#f1f2ee] mb-3">Powered by Open Policy Agent (OPA)</h3>
              <p className="text-[#858a85] text-sm leading-relaxed max-w-2xl">
                Every action proposed by the system is evaluated against your organization's policy guardrails before execution. Whether it's restricting budget increases, preventing public S3 bucket creation, or mandating manual approval for production database changes, you remain in complete control.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

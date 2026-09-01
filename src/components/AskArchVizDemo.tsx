import React from 'react';
import { Search } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const AskArchVizDemo: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#080a08]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
              Intelligence
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#f1f2ee] mb-6">
              Ask your infrastructure anything.
            </h2>
            <p className="text-base text-[#858a85] leading-relaxed">
              Interact directly with your cloud environment using natural language. ArcViz’s AI agents understand your topology, metrics, and logs to deliver actionable answers.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto">
            {/* Command Bar Mockup */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#505551]" />
              </div>
              <div className="w-full pl-12 pr-4 py-4 bg-[#0d100d] border border-white/[0.08] rounded-xl text-[#f1f2ee] text-base shadow-sm focus:outline-none placeholder-[#505551]">
                Why is checkout service latency increasing?
              </div>
            </div>

            {/* AI Response Card */}
            <div className="bg-[#0d100d]/80 border border-white/[0.06] rounded-xl p-6 md:p-8">
              <p className="text-[#f1f2ee] leading-relaxed">
                Latency increased 3x in the last hour due to a connection pool misconfiguration in the payment service. The recent deployment changed <span className="font-mono text-sm text-[#38bdf8]">max_connections</span> from 100 to 10. Recommended fix: revert the configuration change.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

export const InvestigationSystem: React.FC = () => {
  return (
    <section className="bg-[#080a08] py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="text-[#38bdf8] font-mono text-xs uppercase tracking-widest mb-4">
              Incident Investigation
            </p>
            <h2 className="text-[#f1f2ee] text-3xl md:text-4xl font-sans tracking-tight mb-6">
              From alert to root cause in seconds.
            </h2>
            <p className="text-[#858a85] text-lg font-sans leading-relaxed">
              Stop digging through fragmented logs. ArcViz traces anomalies through your topology graph to pinpoint the exact configuration or code change responsible.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl relative">
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/[0.06]"></div>

          <ScrollReveal delay={100}>
            <div className="relative flex items-start mb-12 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0d100d] border border-white/[0.06] flex items-center justify-center relative z-10 mt-1">
                <span className="text-[#505551] font-mono text-xs">01</span>
              </div>
              <div className="ml-8">
                <h3 className="text-[#f1f2ee] text-xl font-sans font-medium mb-2 group-hover:text-[#38bdf8] transition-colors duration-300">Detect</h3>
                <p className="text-[#858a85] font-sans leading-relaxed">
                  Anomaly detected: pod crash loop in payment-service across 3 replicas
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative flex items-start mb-12 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0d100d] border border-white/[0.06] flex items-center justify-center relative z-10 mt-1">
                <span className="text-[#505551] font-mono text-xs">02</span>
              </div>
              <div className="ml-8">
                <h3 className="text-[#f1f2ee] text-xl font-sans font-medium mb-2 group-hover:text-[#38bdf8] transition-colors duration-300">Trace</h3>
                <p className="text-[#858a85] font-sans leading-relaxed">
                  Graph traversal identifies misconfigured resource limits after recent Helm chart update
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="relative flex items-start group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0d100d] border border-white/[0.06] flex items-center justify-center relative z-10 mt-1">
                <span className="text-[#505551] font-mono text-xs">03</span>
              </div>
              <div className="ml-8">
                <h3 className="text-[#f1f2ee] text-xl font-sans font-medium mb-2 group-hover:text-[#38bdf8] transition-colors duration-300">Resolve</h3>
                <p className="text-[#858a85] font-sans leading-relaxed">
                  Recommended fix: increase memory limit from 256Mi to 512Mi, matching pre-update configuration
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

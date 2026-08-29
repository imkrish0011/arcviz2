import React from 'react';
import { CheckIcon, CrossIcon } from './icons/Icons';

export const ComparisonTable: React.FC = () => {
  const comparisonRows = [
    {
      other: "Disconnected tools, broken workflows",
      nouva: "One unified platform for your entire output"
    },
    {
      other: "Manual tasks that eat your day",
      nouva: "AI handles the repetitive work for you"
    },
    {
      other: "No visibility into team output",
      nouva: "Real-time metrics, tracking, and insights"
    },
    {
      other: "Generic results, no customization",
      nouva: "Tailored to your workflow and brand voice"
    },
    {
      other: "Built for one user, not teams",
      nouva: "Built for collaborative teams of any size"
    },
    {
      other: "Hours wasted on repetitive work",
      nouva: "From idea to structured output in minutes"
    }
  ];

  return (
    <section className="py-24 md:py-36 relative bg-[#030305]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold font-mono text-[#ff2d46] mb-5 uppercase tracking-wider">
            Why Nouva
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Everything else falls short. <br className="hidden sm:inline" />
            <span className="text-white/40">Here's why teams choose us.</span>
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Other Tools Column */}
          <div className="rounded-2xl md:rounded-3xl bg-[#08080c]/60 border border-white/[0.06] p-8 md:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
                <h3 className="text-xl md:text-2xl font-bold text-white/50">Other Tools</h3>
                <span className="text-xs uppercase tracking-widest text-white/40 font-mono">Traditional</span>
              </div>
              <div className="space-y-6">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CrossIcon className="w-3 h-3 text-white/30" />
                    </div>
                    <span className="text-sm sm:text-base text-white/40 font-normal">
                      {row.other}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nouva Column (Highlighted) */}
          <div className="relative rounded-2xl md:rounded-3xl bg-gradient-to-b from-[#0e101a] to-[#08080c] border border-[#ff2d46]/35 p-8 md:p-10 flex flex-col justify-between shadow-[0_0_60px_rgba(255,45,70,0.12)]">
            {/* Top Red Glow Accent */}
            <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#ff2d46] to-transparent" />

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff2d46] shadow-[0_0_10px_rgba(255,45,70,0.8)]" />
                  Nouva
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#ff2d46] font-semibold font-mono bg-[#ff2d46]/10 px-3.5 py-1 rounded-full border border-[#ff2d46]/30">
                  Recommended
                </span>
              </div>
              <div className="space-y-6">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#ff2d46]/15 border border-[#ff2d46]/40 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_12px_rgba(255,45,70,0.3)]">
                      <CheckIcon className="w-3.5 h-3.5 text-[#ff2d46]" />
                    </div>
                    <span className="text-sm sm:text-base text-white font-medium">
                      {row.nouva}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

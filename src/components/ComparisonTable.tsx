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
    <section className="py-24 md:py-36 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-[#99a0b0] mb-5 uppercase tracking-wider">
            Why Nouva
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Everything else falls short. <br className="hidden sm:inline" />
            <span className="text-white/50">Here's why teams choose us.</span>
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Other Tools Column */}
          <div className="rounded-2xl md:rounded-3xl bg-[#0e131d]/40 border border-white/[0.06] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <h3 className="text-xl md:text-2xl font-bold text-white/60">Other Tools</h3>
                <span className="text-xs uppercase tracking-widest text-white/40 font-semibold">Traditional</span>
              </div>
              <div className="space-y-6">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CrossIcon className="w-3 h-3 text-white/40" />
                    </div>
                    <span className="text-sm sm:text-base text-white/50 font-normal">
                      {row.other}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nouva Column (Highlighted) */}
          <div className="relative rounded-2xl md:rounded-3xl bg-gradient-to-b from-[#121926] to-[#0e131d] border border-[#8cff2e]/30 p-8 md:p-10 flex flex-col justify-between shadow-[0_0_50px_rgba(140,255,46,0.08)]">
            {/* Top Glow Accent */}
            <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#8cff2e] to-transparent" />

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8cff2e]" />
                  Nouva
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#8cff2e] font-semibold bg-[#8cff2e]/10 px-3 py-1 rounded-full border border-[#8cff2e]/20">
                  Recommended
                </span>
              </div>
              <div className="space-y-6">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#8cff2e]/15 border border-[#8cff2e]/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(140,255,46,0.2)]">
                      <CheckIcon className="w-3.5 h-3.5 text-[#8cff2e]" />
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

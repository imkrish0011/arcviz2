import React from 'react';
import { Link } from 'react-router-dom';
import {
  BrandConsistencyIcon,
  MultiFormatIcon,
  BuiltInOptimizationIcon,
  TeamCollaborationIcon,
  AnalyticsInsightsIcon,
  UnlimitedOutputIcon,
  ArrowRightIcon
} from './icons/Icons';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      title: "Brand consistency",
      description: "Every output sounds like you — no matter who on your team created it.",
      icon: <BrandConsistencyIcon className="w-6 h-6 text-[#ff2d46]" />
    },
    {
      title: "Multi-format output",
      description: "One input. Every format your workflow needs, ready instantly.",
      icon: <MultiFormatIcon className="w-6 h-6 text-[#ff2d46]" />
    },
    {
      title: "Built-in optimization",
      description: "Every output is structured and optimized from the very first draft.",
      icon: <BuiltInOptimizationIcon className="w-6 h-6 text-[#ff2d46]" />
    },
    {
      title: "Team collaboration",
      description: "Work together seamlessly. Share templates, review outputs, and iterate in real time.",
      icon: <TeamCollaborationIcon className="w-6 h-6 text-[#ff2d46]" />
    },
    {
      title: "Analytics & insights",
      description: "Track output metrics, time saved, and workflow efficiency with precision.",
      icon: <AnalyticsInsightsIcon className="w-6 h-6 text-[#ff2d46]" />
    },
    {
      title: "Unlimited output",
      description: "No caps, no limits. Produce as much as your team needs.",
      icon: <UnlimitedOutputIcon className="w-6 h-6 text-[#ff2d46]" />
    }
  ];

  return (
    <section id="benefits" className="py-24 md:py-36 relative bg-[#030305]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-semibold font-mono text-[#ff2d46] mb-5 uppercase tracking-wider">
              Built for teams
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              One platform, <br />
              <span className="text-white/40">endless possibilities.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-sm text-[#858b9c]">Your whole team. One platform.</span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff2d46] to-[#e11d48] hover:from-[#ff4d61] hover:to-[#ff2d46] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(255,45,70,0.3)]"
            >
              Get started free
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#08080c] border border-white/[0.06] hover:border-[#ff2d46]/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden shadow-xl"
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff2d46]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#ff2d46]/50 transition-all duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff2d46] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-[#858b9c] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

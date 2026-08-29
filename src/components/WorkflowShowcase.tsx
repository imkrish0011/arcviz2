import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const WorkflowShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const workflows = [
    {
      id: "output",
      tag: "Analytics & Tracking",
      title: "Your output, growing every day",
      description: "Nouva tracks everything your team produces — daily, weekly, monthly — and shows you exactly where you stand.",
      image: "/assets/images/sPxjbIXvdQBm54sT9oTiOV9imaE.png",
      alt: "Dashboard card showing daily draft output of 1,240 for the current week with a 14% growth indicator",
      bullets: [
        "Real-time volume tracking across teams",
        "Weekly velocity & growth benchmarks",
        "Clear visibility into draft readiness"
      ]
    },
    {
      id: "multi-format",
      tag: "Cross-Channel Formats",
      title: "From one brief, every format you need",
      description: "Brief Nouva once and get every format your workflow demands — adapted, structured, and ready to go.",
      image: "/assets/images/UNKECvYuOt8BX4mHoDydbr8TrGs.png",
      alt: "Dashboard card showing 1,240 formats generated this month (Blog posts, Email copy, Social captions)",
      bullets: [
        "Simultaneous multi-channel variations",
        "Tone and voice consistency built-in",
        "Instant export to all production tools"
      ]
    },
    {
      id: "speed",
      tag: "10x Velocity",
      title: "Do in minutes what used to take hours",
      description: "Teams using Nouva complete the same work in a fraction of the time — without cutting corners or sacrificing quality.",
      image: "/assets/images/oJOYwNTtIhhBSzkaQd8o02tR3D4.png",
      alt: "Dashboard card showing 10x time saved before and after comparison",
      bullets: [
        "90% reduction in first-draft turnaround",
        "Automated formatting and styling rules",
        "Seamless team reviews & iteration cycles"
      ]
    }
  ];

  return (
    <section id="features" className="py-24 md:py-36 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-[#99a0b0] mb-5 uppercase tracking-wider">
            Built for every workflow
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            One platform that handles <br className="hidden sm:inline" />
            <span className="text-white/50">everything your team produces.</span>
          </h2>
        </div>

        {/* Tab Buttons (Interactive Quick Selector) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {workflows.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-white text-[#09090b] font-semibold shadow-md'
                  : 'bg-white/[0.04] text-[#99a0b0] hover:text-white hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              {item.title.split(',')[0]}
            </button>
          ))}
        </div>

        {/* Active Workflow Card Display */}
        <div className="relative rounded-2xl md:rounded-3xl bg-gradient-to-b from-[#121926]/90 to-[#0e131d]/90 border border-white/10 p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl transition-all duration-500">
          {/* Ambient Corner Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8cff2e]/10 blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8cff2e] tracking-widest uppercase mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  {workflows[activeTab].tag}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
                  {workflows[activeTab].title}
                </h3>
                <p className="text-sm sm:text-base text-[#99a0b0] leading-relaxed mb-6">
                  {workflows[activeTab].description}
                </p>

                <ul className="space-y-3 mb-8">
                  {workflows[activeTab].bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8cff2e]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full bg-[#8cff2e] hover:bg-[#9eff47] text-[#09090b] font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(140,255,46,0.2)]"
              >
                Get started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Visual Dashboard Graphic */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-[#080c12] p-2 shadow-2xl">
                <img
                  src={workflows[activeTab].image}
                  alt={workflows[activeTab].alt}
                  className="w-full h-auto object-cover rounded-lg transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

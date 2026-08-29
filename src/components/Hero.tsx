import React from 'react';
import { Link } from 'react-router-dom';
import { TopologyGraph } from './ui/TopologyGraph';
import { ArrowRight,  Terminal,  } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProblem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('problem');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#08090a]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* Eyebrow / System Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e1013] border border-[#1e2229] text-[11px] font-mono font-medium text-[#0ea5e9] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
            AI-Native Cloud Operating System
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.02] max-w-4xl text-[#ededed] mb-6">
          Infrastructure that <br className="hidden sm:inline" />
          understands itself.
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-[#888d96] max-w-2xl leading-relaxed mb-10 font-normal">
          ArchViz connects to your existing cloud, builds a living model of your infrastructure, and gives your team an intelligent way to understand, investigate, and operate it.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-16 max-w-md sm:max-w-none">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium text-sm transition-all duration-150 shadow-sm"
          >
            Connect your cloud
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#living-system"
            onClick={scrollToProblem}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-[#0e1013] hover:bg-[#12151a] text-[#ededed] border border-[#1e2229] hover:border-[#2e3440] font-medium text-sm transition-all duration-150"
          >
            See how it works
          </a>
        </div>

        {/* Live System Model Visual */}
        <div className="relative">
          <div className="mb-2 flex items-center justify-between text-xs font-mono text-[#888d96] px-1">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#0ea5e9]" />
              LIVE SYSTEM TOPOLOGY CANVAS
            </span>
            <span className="hidden sm:inline text-[#5e636e]">Continuous discovery active • 0 drift alerts</span>
          </div>

          <TopologyGraph />
        </div>
      </div>
    </section>
  );
};

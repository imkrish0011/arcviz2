import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('why-it-matters');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-600/15 via-pink-600/10 to-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[180px] bg-[#8cff2e]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center relative z-10">
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-[#8cff2e] animate-pulse" />
          <span className="text-xs font-medium text-[#99a0b0] tracking-wide">
            Next-generation AI content engine
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6 text-white">
          Words that work.<br />
          <span className="text-white/70">Every single time.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#99a0b0] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          The AI platform built for team workflows. Nouva turns raw ideas into structured, high-performing output — across every format your team relies on.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#8cff2e] hover:bg-[#9eff47] text-[#09090b] font-semibold text-sm tracking-wide uppercase transition-all duration-200 shadow-[0_0_30px_rgba(140,255,46,0.25)] hover:shadow-[0_0_35px_rgba(140,255,46,0.45)] hover:-translate-y-0.5"
          >
            Get started free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#why-it-matters"
            onClick={scrollToFeatures}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all duration-200"
          >
            Explore features
          </a>
        </div>

        {/* Cinematic Hero Image */}
        <div className="relative max-w-5xl mx-auto rounded-2xl md:rounded-3xl p-1.5 md:p-2 bg-gradient-to-b from-white/15 to-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-[#0e131d]">
            <img
              src="/assets/images/ro6i79EOvzrYuRqMtGWmH5OnP0k.png"
              alt="Cinematic landscape at dusk with a lone silhouette standing before a warm amber glow"
              className="w-full h-auto object-cover max-h-[560px] transform hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c12]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Scroll To Discover Indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 text-white/40 text-xs font-medium uppercase tracking-widest">
          <span>Scroll to discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-white/40" />
        </div>
      </div>
    </section>
  );
};

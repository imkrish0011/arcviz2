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
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-36 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background Top Mountain Twilight Image with Seamless Dark Blending */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/images/hero-mountain-twilight.jpg"
          alt="Twilight Mountain Silhouette Horizon"
          className="w-full h-full object-cover object-top opacity-60 filter saturate-[1.1] contrast-[1.05]"
        />
        {/* Top Vignette & Subtle Blue Ambient Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030305]/80 via-transparent to-[#030305]" />
        {/* Subtle Red & Sapphire Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#ff2d46]/15 via-blue-900/10 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center relative z-10 my-auto">
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#08080c]/60 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <span className="w-2 h-2 rounded-full bg-[#ff2d46] animate-pulse" />
          <span className="text-xs font-semibold text-white/80 tracking-wide font-mono uppercase">
            High-Performance Content Engine
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold tracking-[-0.035em] leading-[1.05] max-w-4xl mx-auto mb-6 text-white">
          Words that work.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#ff2d46]">
            Every single time.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#858b9c] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          The precision platform engineered for high-velocity teams. Nouva converts complex ideas into polished, high-converting deliverables across every channel.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff2d46] to-[#e11d48] hover:from-[#ff4d61] hover:to-[#ff2d46] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_35px_rgba(255,45,70,0.4)] hover:shadow-[0_0_45px_rgba(255,45,70,0.6)] hover:-translate-y-0.5"
          >
            Get started free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#why-it-matters"
            onClick={scrollToFeatures}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/25 font-medium text-xs tracking-wider uppercase transition-all duration-200 backdrop-blur-sm"
          >
            Explore features
          </a>
        </div>

        {/* Crisp Glassmorphism Metric Overview Strip */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 p-2 rounded-2xl bg-[#08080c]/70 border border-white/[0.08] backdrop-blur-xl shadow-2xl">
          <div className="px-6 py-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-extrabold text-white font-mono">10x</span>
            <span className="text-xs text-[#858b9c] uppercase tracking-wider mt-1">Faster Execution</span>
          </div>
          <div className="px-6 py-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-extrabold text-white font-mono">99.4%</span>
            <span className="text-xs text-[#858b9c] uppercase tracking-wider mt-1">Brand Consistency</span>
          </div>
          <div className="px-6 py-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-extrabold text-[#ff2d46] font-mono">Zero</span>
            <span className="text-xs text-[#858b9c] uppercase tracking-wider mt-1">Workflow Friction</span>
          </div>
        </div>
      </div>

      {/* Scroll To Discover Indicator */}
      <div className="mt-8 flex flex-col items-center gap-2 text-white/40 text-xs font-mono uppercase tracking-widest relative z-10">
        <span>Scroll to discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#ff2d46]" />
      </div>
    </section>
  );
};

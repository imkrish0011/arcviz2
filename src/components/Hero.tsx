import React from 'react';
import { Link } from 'react-router-dom';
import { HeroLiveLoop } from './ui/HeroLiveLoop';
import { ArrowRight, ShieldCheck, Zap, Server } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const Hero: React.FC = () => {
  const scrollToBuildConnect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('build-connect');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[960px] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#080a08] flex flex-col justify-between">
      {/* Layered Cinematic Mountain Sunset Atmosphere Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Sunset Mountain Landscape Photograph - Positioned clearly in the upper/middle hero band */}
        <img
          src="/assets/images/hero-landscape.jpg"
          alt="Atmospheric mountain twilight landscape"
          className="w-full h-full object-cover object-[center_48%] sm:object-[center_45%] opacity-85 filter brightness-[1.0] contrast-[1.15] saturate-[1.2]"
        />
        {/* Soft Ambient Horizon Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#f97316]/10 rounded-full blur-[120px]" />
        {/* Gentle Vertical Dissolve Gradient so sunset horizon shines brightly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08]/40 via-transparent via-50% to-[#080a08]" />
        {/* Subtle Edge Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#080a08_90%)]" />
        {/* Coordinate Grid Overlay */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10 w-full">
        {/* Hero Narrative Block with Staggered Side Animations */}
        <div className="max-w-3xl mb-24 sm:mb-32 md:mb-44 lg:mb-52">
          {/* Quiet Eyebrow Badge */}
          <ScrollReveal direction="left" delay={50} distance="30px">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-[#0d100d]/80 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider">
                AI-Native Cloud Operating System
              </span>
            </div>
          </ScrollReveal>

          {/* Main Headline */}
          <ScrollReveal direction="left" delay={150} distance="40px">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium tracking-tight leading-[0.96] text-[#f1f2ee] mb-6 max-w-2xl">
              The operating system <br />
              <span className="text-[#f1f2ee]">
                for your cloud.
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal direction="left" delay={250} distance="40px">
            <p className="text-base sm:text-lg text-[#858a85] max-w-[640px] leading-relaxed mb-8 font-normal">
              Build new infrastructure, connect what already exists, and let intelligent agents understand, operate, and continuously improve your cloud across AWS, Azure, and GCP.
            </p>
          </ScrollReveal>

          {/* Compact CTAs & Technical Capability Badges */}
          <ScrollReveal direction="left" delay={350} distance="40px">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium text-xs tracking-wide transition-all duration-200 shadow-[0_0_25px_rgba(14,165,233,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] group"
              >
                Connect your cloud
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#build-connect"
                onClick={scrollToBuildConnect}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0d100d]/80 hover:bg-white/[0.06] text-[#f1f2ee] border border-white/[0.1] hover:border-white/25 font-medium text-xs tracking-wide transition-all duration-200 backdrop-blur-sm"
              >
                See how it works
              </a>
            </div>

            {/* Technical Capability Line */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-[#858a85]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Read-Only Cross-Account Discovery</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>Pre-Flight Digital Twin Simulation</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>Unified multi-cloud infrastructure graph</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Live Operational Topology Canvas with Zoom Reveal */}
        <ScrollReveal direction="zoom" delay={450} distance="30px" duration={950}>
          <div className="p-6 sm:p-8 rounded-xl border border-white/[0.08] bg-[#0d100d]/80 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-white/[0.15] transition-all duration-300">
            <HeroLiveLoop />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

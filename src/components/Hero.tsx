import React from 'react';
import { Link } from 'react-router-dom';
import { HeroLiveLoop } from './ui/HeroLiveLoop';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToBuildConnect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('build-connect');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[940px] pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-[#080a08] flex flex-col justify-between">
      {/* Layered Cinematic Mountain Atmosphere Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Layer 2: Mountain Photograph */}
        <img
          src="/assets/images/hero-landscape.jpg"
          alt="Atmospheric mountain twilight landscape"
          className="w-full h-full object-cover object-center opacity-40 filter brightness-[0.6] contrast-[1.1] saturate-[0.8]"
        />
        {/* Layer 3: Vertical Dissolve Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08]/35 via-[#080a08]/65 to-[#080a08]" />
        {/* Layer 4: Edge Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#080a08_80%)]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10 w-full">
        {/* Hero Narrative Block */}
        <div className="max-w-3xl mb-16 md:mb-20">
          {/* Quiet Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              AI-Native Cloud Operating System
            </span>
          </div>

          {/* Headline (Solid #f1f2ee, no gradients) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium tracking-tight leading-[0.98] text-[#f1f2ee] mb-6 max-w-2xl">
            The operating system <br />
            for your cloud.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#858a85] max-w-[640px] leading-relaxed mb-10 font-normal">
            Build new infrastructure, connect what already exists, and let intelligent agents understand, operate, and continuously improve your cloud across AWS, Azure, and GCP.
          </p>

          {/* Compact CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium text-xs tracking-wide transition-colors duration-150"
            >
              Connect your cloud
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="#build-connect"
              onClick={scrollToBuildConnect}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-transparent hover:bg-white/[0.04] text-[#f1f2ee] border border-white/[0.08] hover:border-white/20 font-medium text-xs tracking-wide transition-colors duration-150"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Live Operational Simulator (Autonomous loop running on graph) */}
        <div className="mt-8">
          <HeroLiveLoop />
        </div>
      </div>
    </section>
  );
};

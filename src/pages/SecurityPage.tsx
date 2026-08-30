import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { TrustAndSecurity } from '../components/TrustAndSecurity';
import { ExistingInfrastructureFirst } from '../components/ExistingInfrastructureFirst';
import { OnboardingJourney } from '../components/OnboardingJourney';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const SecurityPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#080a08] text-[#f1f2ee] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />
      <main className="pt-16">
        {/* Dedicated Page Hero Header - Clean Heading Only with Background Image & Generous Gap */}
        <section className="relative pt-24 pb-28 md:pt-32 md:pb-36 lg:pt-36 lg:pb-44 overflow-hidden font-mono text-xs">
          {/* Atmospheric Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-75 filter contrast-125 brightness-110 saturate-125">
            <img
              src="/assets/images/security-shield-bg.jpg"
              alt="Cyber security matrix background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080a08]/70 via-[#080a08]/40 to-[#080a08]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#080a08_85%)]" />
          </div>

          <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
            <ScrollReveal direction="up" delay={50} distance="30px">
              <div className="max-w-3xl font-sans">
                <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                  Enterprise Trust & Governance
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#f1f2ee] leading-[1.0] mb-6">
                  Security by design. <br />
                  <span className="text-[#858a85]">Zero-trust cloud governance.</span>
                </h1>
                <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-2xl font-sans">
                  ArchViz operates on strict least-privilege principles. Read-only IAM discovery by default, bounded action policies, hardware WebAuthn signoffs, and complete cryptographic auditability.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 01. Trust and Security Matrix (6 Security Pillars on Clean Dark Canvas) */}
        <TrustAndSecurity />

        {/* 02. Frictionless Adoption (Existing Infrastructure First) */}
        <ExistingInfrastructureFirst />

        {/* 03. Customer Journey (What happens after you connect) */}
        <OnboardingJourney />

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

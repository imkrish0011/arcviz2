import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { TrustAndSecurity } from '../components/TrustAndSecurity';
import { ExistingInfrastructureFirst } from '../components/ExistingInfrastructureFirst';
import { OnboardingJourney } from '../components/OnboardingJourney';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export const SecurityPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#080a08] text-[#f1f2ee] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />
      <main className="pt-16">
        {/* 01. Trust and Security Matrix */}
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

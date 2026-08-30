import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { MemoryLineage } from '../components/MemoryLineage';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export const MemoryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#080a08] text-[#f1f2ee] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />
      <main className="pt-16">
        {/* 01. 5-Layer Persistent Memory Component */}
        <MemoryLineage />

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080c12] text-white selection:bg-[#99a0b0] selection:text-[#09090b] flex flex-col justify-between">
      <Navbar />

      <main className="pt-36 pb-24 md:pt-48 md:pb-36 flex-grow flex items-center justify-center relative">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-[600px] mx-auto px-6 text-center relative z-10">
          <div className="text-7xl sm:text-9xl font-bold tracking-tighter text-white/20 mb-4 select-none">
            404
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            This page doesn't exist
          </h1>
          <p className="text-base sm:text-lg text-[#99a0b0] mb-8 max-w-md mx-auto">
            The page you're looking for may have moved or no longer exists.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#8cff2e] hover:bg-[#9eff47] text-[#09090b] font-semibold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(140,255,46,0.25)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

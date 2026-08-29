import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030305] text-[#f1f1f4] selection:bg-[#ff2d46] selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-36 pb-24 md:pt-48 md:pb-36 flex-grow flex items-center justify-center relative">
        {/* Ambient Red & Indigo Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-gradient-to-tr from-[#ff2d46]/10 via-blue-900/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-[600px] mx-auto px-6 text-center relative z-10">
          <div className="text-7xl sm:text-9xl font-extrabold tracking-tighter text-white/15 mb-4 select-none font-mono">
            404
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            This page doesn't exist
          </h1>
          <p className="text-base sm:text-lg text-[#858b9c] mb-8 max-w-md mx-auto">
            The page you're looking for may have moved or no longer exists.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ff2d46] to-[#e11d48] hover:from-[#ff4d61] hover:to-[#ff2d46] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(255,45,70,0.35)]"
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

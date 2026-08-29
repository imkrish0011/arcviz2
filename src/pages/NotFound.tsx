import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08090a] text-[#ededed] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-36 pb-24 md:pt-48 md:pb-36 flex-grow flex items-center justify-center relative">
        <div className="max-w-[540px] mx-auto px-6 text-center relative z-10">
          <div className="text-6xl sm:text-8xl font-mono font-bold text-[#1e2229] mb-4 select-none">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#ededed] mb-2 font-mono">
            Resource Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#888d96] mb-8 font-mono">
            Error: The requested route does not match any known resource endpoint in the system model.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium text-xs font-mono transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Operating System
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

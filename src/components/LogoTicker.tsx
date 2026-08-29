import React from 'react';
import { RampLogo, LoomLogo, LinearLogo, RaycastLogo, RetoolLogo } from './icons/Icons';

export const LogoTicker: React.FC = () => {
  const logos = [
    { name: 'Ramp', component: <RampLogo className="h-5 text-white/50 hover:text-white transition-colors" /> },
    { name: 'Loom', component: <LoomLogo className="h-5 text-white/50 hover:text-white transition-colors" /> },
    { name: 'Linear', component: <LinearLogo className="h-5 text-white/50 hover:text-white transition-colors" /> },
    { name: 'Raycast', component: <RaycastLogo className="h-5 text-white/50 hover:text-white transition-colors" /> },
    { name: 'Retool', component: <RetoolLogo className="h-5 text-white/50 hover:text-white transition-colors" /> },
  ];

  return (
    <div className="py-16 relative overflow-hidden border-y border-white/[0.05] bg-[#080c12]/40">
      {/* Left/Right Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#080c12] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#080c12] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center gap-16 md:gap-24">
        {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
            {logo.component}
          </div>
        ))}
      </div>
    </div>
  );
};

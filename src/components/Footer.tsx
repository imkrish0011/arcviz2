import React from 'react';
import { Link } from 'react-router-dom';
import { ArchVizBrand } from './icons/ArchVizIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050605] pt-20 pb-14 relative z-10 text-xs font-mono text-[#858a86] overflow-hidden">
      {/* Background Star Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-15">
        <img
          src="/assets/images/star-trails-vortex.jpg"
          alt="Star trails vortex background"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050605] via-[#050605]/90 to-[#050605]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <ArchVizBrand />
            <p className="text-xs text-[#858a86] font-sans max-w-sm leading-relaxed mt-2">
              The AI-native operating system for cloud infrastructure. Continuously model, investigate, simulate, and operate cloud environments with deterministic policy controls.
            </p>
          </div>

          {/* Architecture */}
          <div>
            <h4 className="text-xs font-medium text-[#f2f2ee] uppercase tracking-wider mb-4">
              Architecture
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/#living-system" className="hover:text-[#f2f2ee] transition-colors">
                  Living Model
                </a>
              </li>
              <li>
                <a href="/#investigation" className="hover:text-[#f2f2ee] transition-colors">
                  AI Investigation
                </a>
              </li>
              <li>
                <a href="/#simulation" className="hover:text-[#f2f2ee] transition-colors">
                  Pre-Flight Simulation
                </a>
              </li>
              <li>
                <a href="/#control" className="hover:text-[#f2f2ee] transition-colors">
                  Security & Control
                </a>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-medium text-[#f2f2ee] uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/contact" className="hover:text-[#f2f2ee] transition-colors">
                  Connect Cloud
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy-policy" className="hover:text-[#f2f2ee] transition-colors">
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link to="/legal/terms-of-service" className="hover:text-[#f2f2ee] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-medium text-[#f2f2ee] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f2f2ee] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#f2f2ee] transition-colors">
                  Request Access
                </Link>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f2f2ee] transition-colors"
                >
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} ArchViz Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span className="text-[#f2f2ee]">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

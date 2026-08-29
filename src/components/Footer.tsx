import React from 'react';
import { Link } from 'react-router-dom';
import { ArchVizBrand } from './icons/ArchVizIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1e2229] bg-[#050607] pt-16 pb-12 relative z-10 text-xs font-mono">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-[#1e2229]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <ArchVizBrand />
            <p className="text-xs text-[#888d96] font-sans max-w-sm leading-relaxed mt-2">
              The AI-native operating system for cloud infrastructure. Continuously model, investigate, simulate, and operate cloud environments with deterministic policy controls.
            </p>
          </div>

          {/* Architecture */}
          <div>
            <h4 className="text-xs font-semibold text-[#ededed] uppercase tracking-wider mb-4">
              Architecture
            </h4>
            <ul className="space-y-2.5 text-[#888d96]">
              <li>
                <a href="/#living-system" className="hover:text-[#ededed] transition-colors">
                  Living System Model
                </a>
              </li>
              <li>
                <a href="/#investigation" className="hover:text-[#ededed] transition-colors">
                  AI Investigation
                </a>
              </li>
              <li>
                <a href="/#simulation" className="hover:text-[#ededed] transition-colors">
                  Pre-Flight Simulation
                </a>
              </li>
              <li>
                <a href="/#control" className="hover:text-[#ededed] transition-colors">
                  Controlled Execution
                </a>
              </li>
              <li>
                <a href="/#memory" className="hover:text-[#ededed] transition-colors">
                  Operational Memory
                </a>
              </li>
            </ul>
          </div>

          {/* Platform & Governance */}
          <div>
            <h4 className="text-xs font-semibold text-[#ededed] uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-[#888d96]">
              <li>
                <Link to="/contact" className="hover:text-[#ededed] transition-colors">
                  Connect AWS Cloud
                </Link>
              </li>
              <li>
                <a href="/#control" className="hover:text-[#ededed] transition-colors">
                  OPA Policy Engine
                </a>
              </li>
              <li>
                <Link to="/legal/privacy-policy" className="hover:text-[#ededed] transition-colors">
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link to="/legal/terms-of-service" className="hover:text-[#ededed] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-[#ededed] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-[#888d96]">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ededed] transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ededed] transition-colors">
                  Request Access
                </Link>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ededed] transition-colors"
                >
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution & System Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#888d96] gap-4">
          <div>
            © {new Date().getFullYear()} ArchViz Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span className="text-[#ededed]">All systems operational</span>
            <span className="text-[#5e636e]">• v1.4-prod</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArchVizBrand } from './icons/ArchVizIcons';
import { SystemBadge } from './ui/SystemBadge';
import { Menu, X,  Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
      isScrolled 
        ? 'bg-[#08090a]/90 backdrop-blur-md border-[#1e2229] py-3' 
        : 'bg-transparent border-transparent py-4'
    }`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand & System Status */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <ArchVizBrand />
          </Link>
          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#1e2229]">
            <SystemBadge status="healthy" label="v1.4-prod" />
          </div>
        </div>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#888d96]">
          <a
            href="/#problem"
            onClick={(e) => scrollToSection(e, 'problem')}
            className="hover:text-[#ededed] transition-colors cursor-pointer"
          >
            Problem
          </a>
          <a
            href="/#living-system"
            onClick={(e) => scrollToSection(e, 'living-system')}
            className="hover:text-[#ededed] transition-colors cursor-pointer"
          >
            Living Model
          </a>
          <a
            href="/#investigation"
            onClick={(e) => scrollToSection(e, 'investigation')}
            className="hover:text-[#ededed] transition-colors cursor-pointer"
          >
            Investigation
          </a>
          <a
            href="/#simulation"
            onClick={(e) => scrollToSection(e, 'simulation')}
            className="hover:text-[#ededed] transition-colors cursor-pointer"
          >
            Simulation
          </a>
          <a
            href="/#control"
            onClick={(e) => scrollToSection(e, 'control')}
            className="hover:text-[#ededed] transition-colors cursor-pointer"
          >
            Control & Policy
          </a>
          <a
            href="/#memory"
            onClick={(e) => scrollToSection(e, 'memory')}
            className="hover:text-[#ededed] transition-colors cursor-pointer"
          >
            Memory
          </a>
        </nav>

        {/* Right CTA - Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-[#888d96] hover:text-[#ededed] hover:bg-[#12151a] rounded border border-transparent hover:border-[#1e2229] transition-all"
          >
            <Terminal className="w-3.5 h-3.5" />
            Console
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-white bg-[#0ea5e9] hover:bg-[#38bdf8] rounded border border-[#0284c7] transition-all duration-150 shadow-sm"
          >
            Connect cloud
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#888d96] hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0f14] border-b border-[#1e2229] px-6 py-6 transition-all">
          <div className="flex flex-col gap-4 text-sm font-medium text-[#888d96]">
            <a
              href="/#problem"
              onClick={(e) => scrollToSection(e, 'problem')}
              className="hover:text-white transition-colors py-1"
            >
              Problem
            </a>
            <a
              href="/#living-system"
              onClick={(e) => scrollToSection(e, 'living-system')}
              className="hover:text-white transition-colors py-1"
            >
              Living Model
            </a>
            <a
              href="/#investigation"
              onClick={(e) => scrollToSection(e, 'investigation')}
              className="hover:text-white transition-colors py-1"
            >
              Investigation
            </a>
            <a
              href="/#simulation"
              onClick={(e) => scrollToSection(e, 'simulation')}
              className="hover:text-white transition-colors py-1"
            >
              Simulation
            </a>
            <a
              href="/#control"
              onClick={(e) => scrollToSection(e, 'control')}
              className="hover:text-white transition-colors py-1"
            >
              Control & Policy
            </a>
            <a
              href="/#memory"
              onClick={(e) => scrollToSection(e, 'memory')}
              className="hover:text-white transition-colors py-1"
            >
              Memory
            </a>
            <div className="pt-3 border-t border-[#1e2229] flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#0ea5e9] hover:bg-[#38bdf8] rounded transition-all text-center"
              >
                Connect cloud
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

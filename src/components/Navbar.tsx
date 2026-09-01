import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArchVizBrand } from './icons/ArchVizIcons';
import { 
  Home as HomeIcon, 
  Network, 
  Bot, 
  ShieldCheck, 
  History, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon className="w-3.5 h-3.5" /> },
    { name: 'Living Model', path: '/living-model', icon: <Network className="w-3.5 h-3.5" /> },
    { name: 'Agents & Autonomy', path: '/agents', icon: <Bot className="w-3.5 h-3.5" /> },
    { name: 'Security & Trust', path: '/security', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    { name: 'Memory', path: '/memory', icon: <History className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto">
        <div 
          className={`mx-auto rounded-2xl transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
            isScrolled 
              ? 'bg-[#0a0d0a]/90 backdrop-blur-xl border border-white/[0.12] shadow-[0_10px_35px_rgba(0,0,0,0.6)]' 
              : 'bg-[#0a0d0a]/60 backdrop-blur-md border border-white/[0.06] shadow-md'
          }`}
        >
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <ArchVizBrand />
          </Link>

          {/* Center Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? 'bg-white/[0.08] text-[#f1f2ee] font-medium border border-white/[0.1] shadow-sm'
                      : 'text-[#858a86] hover:text-[#f1f2ee] hover:bg-white/[0.03]'
                  }`}
                >
                  <span className={isActive ? 'text-[#38bdf8]' : 'text-[#505551]'}>
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-[#38bdf8] absolute bottom-1 left-1/2 -translate-x-1/2" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Medium Screen Compact Nav */}
          <nav className="hidden md:flex lg:hidden items-center gap-4 text-xs font-mono text-[#858a86]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors cursor-pointer ${
                    isActive ? 'text-[#38bdf8] font-medium' : 'hover:text-[#f1f2ee]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live System Status Pill */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-[#858a85]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>Multi-Cloud Live</span>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium text-white bg-[#0ea5e9] hover:bg-[#38bdf8] rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] cursor-pointer group"
            >
              <Sparkles className="w-3 h-3 text-white/90" />
              <span>Connect cloud</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[#858a86] hover:text-[#f2f2ee] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 rounded-2xl bg-[#0c0f0c]/95 backdrop-blur-2xl border border-white/[0.12] shadow-2xl transition-all space-y-3 font-mono text-xs">
            <div className="text-[10px] text-[#505551] uppercase tracking-wider pb-2 border-b border-white/[0.06] flex items-center justify-between">
              <span>Navigation Menu</span>
              <span className="flex items-center gap-1.5 text-[#10b981]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                Live Graph
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl transition-colors cursor-pointer ${
                      isActive 
                        ? 'bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#f1f2ee] font-medium' 
                        : 'text-[#858a86] hover:text-[#f1f2ee] hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? 'text-[#38bdf8]' : 'text-[#505551]'}>
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </div>
                    {isActive && <span className="text-[10px] text-[#38bdf8]">Active</span>}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/[0.06]">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono font-medium text-white bg-[#0ea5e9] hover:bg-[#38bdf8] rounded-xl text-center cursor-pointer shadow-lg"
              >
                <span>Connect your cloud</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

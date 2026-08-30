import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArchVizBrand } from './icons/ArchVizIcons';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const navHeight = 84;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const navHeight = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#080a08]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg' 
        : 'bg-transparent border-b border-transparent py-5'
    }`}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <ArchVizBrand />
        </Link>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-normal text-[#858a86]">
          <a
            href="/#build-connect"
            onClick={(e) => scrollToSection(e, 'build-connect')}
            className="hover:text-[#f2f2ee] transition-colors cursor-pointer"
          >
            How it works
          </a>
          <a
            href="/#living-system"
            onClick={(e) => scrollToSection(e, 'living-system')}
            className="hover:text-[#f2f2ee] transition-colors cursor-pointer"
          >
            Living Model
          </a>
          <a
            href="/#investigation"
            onClick={(e) => scrollToSection(e, 'investigation')}
            className="hover:text-[#f2f2ee] transition-colors cursor-pointer"
          >
            Investigation
          </a>
          <a
            href="/#simulation"
            onClick={(e) => scrollToSection(e, 'simulation')}
            className="hover:text-[#f2f2ee] transition-colors cursor-pointer"
          >
            Simulation
          </a>
          <a
            href="/#agents"
            onClick={(e) => scrollToSection(e, 'agents')}
            className="hover:text-[#f2f2ee] transition-colors cursor-pointer"
          >
            Agents
          </a>
          <a
            href="/#control"
            onClick={(e) => scrollToSection(e, 'control')}
            className="hover:text-[#f2f2ee] transition-colors cursor-pointer"
          >
            Security & Control
          </a>
          <a
            href="/#memory"
            onClick={(e) => scrollToSection(e, 'memory')}
            className="hover:text-[#f2f2ee] transition-colors cursor-pointer"
          >
            Memory
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/#final-cta"
            onClick={(e) => scrollToSection(e, 'final-cta')}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#0ea5e9] hover:bg-[#38bdf8] rounded-lg transition-all duration-150 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] cursor-pointer"
          >
            Connect cloud
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 text-[#858a86] hover:text-[#f2f2ee] focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d100d] border-b border-white/[0.08] px-6 py-6 transition-all shadow-2xl">
          <div className="flex flex-col gap-3.5 text-sm font-normal text-[#858a86]">
            <a
              href="/#build-connect"
              onClick={(e) => scrollToSection(e, 'build-connect')}
              className="hover:text-[#f2f2ee] transition-colors py-1 cursor-pointer"
            >
              How it works
            </a>
            <a
              href="/#living-system"
              onClick={(e) => scrollToSection(e, 'living-system')}
              className="hover:text-[#f2f2ee] transition-colors py-1 cursor-pointer"
            >
              Living Model
            </a>
            <a
              href="/#investigation"
              onClick={(e) => scrollToSection(e, 'investigation')}
              className="hover:text-[#f2f2ee] transition-colors py-1 cursor-pointer"
            >
              Investigation
            </a>
            <a
              href="/#simulation"
              onClick={(e) => scrollToSection(e, 'simulation')}
              className="hover:text-[#f2f2ee] transition-colors py-1 cursor-pointer"
            >
              Simulation
            </a>
            <a
              href="/#agents"
              onClick={(e) => scrollToSection(e, 'agents')}
              className="hover:text-[#f2f2ee] transition-colors py-1 cursor-pointer"
            >
              Agents
            </a>
            <a
              href="/#control"
              onClick={(e) => scrollToSection(e, 'control')}
              className="hover:text-[#f2f2ee] transition-colors py-1 cursor-pointer"
            >
              Security & Control
            </a>
            <a
              href="/#memory"
              onClick={(e) => scrollToSection(e, 'memory')}
              className="hover:text-[#f2f2ee] transition-colors py-1 cursor-pointer"
            >
              Memory
            </a>
            <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2">
              <a
                href="/#final-cta"
                onClick={(e) => scrollToSection(e, 'final-cta')}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-medium text-white bg-[#0ea5e9] hover:bg-[#38bdf8] rounded-lg text-center cursor-pointer shadow-md"
              >
                Connect cloud
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

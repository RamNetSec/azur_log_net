// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X, Briefcase, User, Code, MessageSquare } from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30; // Trigger slightly later
      setScrolled(isScrolled);
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setMobileMenuOpen(false);
      const yOffset = (scrolled ? -68 : -76);
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinkBase = `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1.5`;
  const navLinkScrolled = `text-slate-700 hover:text-indigo-600 hover:bg-indigo-50`;
  const navLinkTop = `text-white hover:text-indigo-200 hover:bg-white/10`; // Adjusted hover for top state

  const contactButtonBase = `ml-4 px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300 shadow-sm flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2`; // Added focus styles,semibold
  const contactButtonScrolled = `bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-white`;
  const contactButtonTop = `bg-white text-indigo-600 hover:bg-indigo-100 focus:ring-indigo-500 focus:ring-offset-indigo-800`; // Adjusted offset color

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white shadow-lg py-2.5' : 'bg-transparent py-4'}`}> {/* Added shadow-lg */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${scrolled ? 'h-12' : 'h-16'} transition-height duration-300`}> {/* Smooth height transition */}
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className={`font-bold text-xl cursor-pointer transition-colors duration-300 ${scrolled ? 'text-indigo-700' : 'text-white'}`}
            >
              Azul Ferreyra
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center"> {/* Use items-center */}
            <div className="ml-10 flex items-baseline space-x-2"> {/* Slightly more space */}
              <button onClick={() => scrollToSection('sobre-mi')} className={`${navLinkBase} ${scrolled ? navLinkScrolled : navLinkTop}`}>
                <User size={16} /> Sobre mí
              </button>
              <button onClick={() => scrollToSection('aptitudes')} className={`${navLinkBase} ${scrolled ? navLinkScrolled : navLinkTop}`}>
                <Code size={16} /> Aptitudes
              </button>
              <button onClick={() => scrollToSection('proyectos')} className={`${navLinkBase} ${scrolled ? navLinkScrolled : navLinkTop}`}>
                <Briefcase size={16} /> Proyectos
              </button>
              <button onClick={() => scrollToSection('contacto')} className={`${contactButtonBase} ${scrolled ? contactButtonScrolled : contactButtonTop}`}>
                <MessageSquare size={16} /> Contacto
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 ${scrolled ? 'text-slate-700 hover:text-indigo-600 hover:bg-indigo-50' : 'text-white hover:text-indigo-200 hover:bg-white/10'}`}
              aria-controls="mobile-menu" aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {mobileMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
       <div className={`${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-500 ease-in-out absolute w-full ${scrolled ? 'bg-white shadow-xl' : 'bg-indigo-900/95 backdrop-blur-sm'}`} id="mobile-menu"> {/* Better transition */}
         <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
           {/* Mobile Links using same base style */}
           <button onClick={() => scrollToSection('sobre-mi')} className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium flex items-center gap-2 ${scrolled ? navLinkScrolled : navLinkTop}`}>
             <User size={18} /> Sobre mí
           </button>
           <button onClick={() => scrollToSection('aptitudes')} className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium flex items-center gap-2 ${scrolled ? navLinkScrolled : navLinkTop}`}>
             <Code size={18} /> Aptitudes
           </button>
           <button onClick={() => scrollToSection('proyectos')} className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium flex items-center gap-2 ${scrolled ? navLinkScrolled : navLinkTop}`}>
             <Briefcase size={18} /> Proyectos
           </button>
           <button onClick={() => scrollToSection('contacto')} className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium flex items-center gap-2 ${scrolled ? navLinkScrolled : navLinkTop}`}>
             <MessageSquare size={18} /> Contacto
           </button>
         </div>
       </div>
    </nav>
  );
}

export default Navbar;

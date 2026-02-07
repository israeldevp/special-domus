import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-rich-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" onClick={() => window.scrollTo(0, 0)}>
          <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-[3rem]">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BF953F" />
                <stop offset="25%" stopColor="#FCF6BA" />
                <stop offset="50%" stopColor="#B38728" />
                <stop offset="75%" stopColor="#FBF5B7" />
                <stop offset="100%" stopColor="#AA771C" />
              </linearGradient>

              <filter id="shadow" x="-20%" y="-20%" width="150%" height="150%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
                <feOffset dx="1" dy="2" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.5" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g filter="url(#shadow)">
              <path d="M 10 50 L 50 13 L 90 50" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="butt" />

              <path d="M 30 32 L 30 18 L 38 18" stroke="url(#goldGradient)" strokeWidth="2" strokeLinejoin="miter" />

              <path d="M 23 48 L 23 82 L 77 82 L 77 48" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="butt" fill="none" />
            </g>
          </svg>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl text-gold-gradient tracking-widest">SPECIAL DOMUS</span>
            <span className="font-sans text-[0.5rem] tracking-[0.2em] text-neutral-400 uppercase">Remodelações Unipessoal Lda.</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#" className="font-sans text-xs uppercase tracking-widest text-neutral-400 hover:text-gold-med transition-colors">Home</a>
          <a href="#solucao" className="font-sans text-xs uppercase tracking-widest text-neutral-400 hover:text-gold-med transition-colors">A Solução</a>
          <a href="#projetos" className="font-sans text-xs uppercase tracking-widest text-neutral-400 hover:text-gold-med transition-colors">Porquê Nós</a>
          <a href="#faq" className="font-sans text-xs uppercase tracking-widest text-neutral-400 hover:text-gold-med transition-colors">FAQ</a>
          <button onClick={() => window.location.href = '#contato'} className="border border-gold-med/50 text-gold-med px-6 py-2 text-xs uppercase tracking-widest hover:bg-gold-med hover:text-black transition-all">
            Contactar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold-med" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-rich-black border-b border-gold-med/20 py-8 px-6 flex flex-col gap-6">
          <a href="#" onClick={() => setMobileOpen(false)} className="text-neutral-300 uppercase tracking-widest text-sm">Home</a>
          <a href="#solucao" onClick={() => setMobileOpen(false)} className="text-neutral-300 uppercase tracking-widest text-sm">A Solução</a>
          <a href="#projetos" onClick={() => setMobileOpen(false)} className="text-neutral-300 uppercase tracking-widest text-sm">Porquê Nós</a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="text-neutral-300 uppercase tracking-widest text-sm">FAQ</a>
          <a href="#contato" onClick={() => setMobileOpen(false)} className="text-gold-med uppercase tracking-widest text-sm font-bold">Pedir Orçamento</a>
        </div>
      )}
    </nav>
  );
};
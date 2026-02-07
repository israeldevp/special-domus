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
          <div className="w-10 h-10 border border-gold-med flex items-end justify-center pb-1 relative">
            <div className="absolute -top-3 w-[120%] h-[1px] bg-gold-med transform rotate-[-45deg] origin-left"></div>
            <div className="absolute -top-3 w-[120%] h-[1px] bg-gold-med transform rotate-[45deg] origin-right right-0"></div>
          </div>
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
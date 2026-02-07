import React from 'react';
import { GoldButton } from './ui/GoldButton';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-rich-black">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop" 
          alt="Interior de luxo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-rich-black/80 to-rich-black"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] px-6 text-center md:text-left md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8 mt-20 md:mt-0">
          <div className="inline-block border-l-2 border-gold-med pl-4">
             <span className="text-gold-med text-xs md:text-sm uppercase tracking-[0.3em] font-sans">
               Tradição & Modernidade
             </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white">
            Remodelações <br/>
            <span className="text-gold-gradient italic pr-2">sem stress</span>, 
            bem feitas e entregues no prazo.
          </h1>

          <p className="font-sans font-light text-neutral-300 text-base md:text-lg leading-relaxed max-w-lg">
            Chega de obras que atrasam e ficam mal acabadas.
            Aqui encontra qualidade, limpeza e compromisso do início ao fim.
          </p>

          <div className="pt-4 flex flex-col md:flex-row gap-6 items-center md:items-start">
            <GoldButton onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
              Pedir Orçamento Gratuito <ArrowRight className="w-4 h-4" />
            </GoldButton>
          </div>
        </div>

        {/* Abstract/Visual Element for Desktop */}
        <div className="hidden md:block w-[1px] h-[300px] bg-gradient-to-b from-transparent via-gold-med to-transparent opacity-50"></div>
        
        <div className="hidden md:block w-64 text-right space-y-6">
           <div className="space-y-1">
             <h3 className="text-gold-med font-serif text-3xl">10+</h3>
             <p className="text-neutral-500 text-xs uppercase tracking-widest">Anos de Experiência</p>
           </div>
           <div className="space-y-1">
             <h3 className="text-gold-med font-serif text-3xl">100%</h3>
             <p className="text-neutral-500 text-xs uppercase tracking-widest">qualidade e garantia</p>
           </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-gold-med"></div>
      </div>
    </div>
  );
};
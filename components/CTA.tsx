import React from 'react';
import { Section } from './ui/Section';
import { GoldButton } from './ui/GoldButton';
import { Instagram, Mail, MessageCircle, MapPin } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <Section id="contato" className="bg-rich-black py-32 md:py-40 text-center border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="space-y-8 mb-14">
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            Pronto para ver o seu <br/>
            <span className="text-gold-gradient">espaço transformado?</span>
          </h2>

          <p className="font-sans font-light text-lg text-neutral-400 max-w-xl mx-auto">
            Uma casa que pareça nova. Uma loja pronta a abrir no prazo. <br/>
            Sem stress, sem atrasos e sem dores de cabeça.
          </p>

          <div className="pt-4">
            <GoldButton onClick={() => window.open('https://wa.me/351933105153', '_blank')}>
              Peça já o seu orçamento gratuito
            </GoldButton>
          </div>
        </div>

        {/* Contact Information Bar: Compacted spacing between items and reduced top margin */}
        <div className="pt-10 mt-10">
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-y-10 gap-x-6 md:gap-x-10 lg:gap-x-12">
            
            {/* WhatsApp */}
            <div className="flex items-center gap-3 group min-w-fit">
              <div className="p-2.5 rounded-full bg-charcoal border border-white/5 group-hover:border-gold-med/50 transition-all duration-500 shadow-lg">
                <MessageCircle className="w-4.5 h-4.5 text-gold-med" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-[0.5rem] uppercase tracking-[0.2em] text-neutral-500 font-bold leading-none mb-1">WhatsApp</span>
                <a 
                  href="https://wa.me/351933105153" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-serif text-base text-neutral-200 hover:text-gold-med transition-colors"
                >
                  +351 933 105 153
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3 group min-w-fit">
              <div className="p-2.5 rounded-full bg-charcoal border border-white/5 group-hover:border-gold-med/50 transition-all duration-500 shadow-lg">
                <Instagram className="w-4.5 h-4.5 text-gold-med" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-[0.5rem] uppercase tracking-[0.2em] text-neutral-500 font-bold leading-none mb-1">Instagram</span>
                <a 
                  href="https://instagram.com/specialdomus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-serif text-base text-neutral-200 hover:text-gold-med transition-colors"
                >
                  @specialdomus
                </a>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-center gap-3 group min-w-fit">
              <div className="p-2.5 rounded-full bg-charcoal border border-white/5 group-hover:border-gold-med/50 transition-all duration-500 shadow-lg">
                <Mail className="w-4.5 h-4.5 text-gold-med" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-[0.5rem] uppercase tracking-[0.2em] text-neutral-500 font-bold leading-none mb-1">E-mail</span>
                <a 
                  href="mailto:geral@specialdomus.pt" 
                  className="font-serif text-base text-neutral-200 hover:text-gold-med transition-colors"
                >
                  geral@specialdomus.pt
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 group min-w-fit">
              <div className="p-2.5 rounded-full bg-charcoal border border-white/5 group-hover:border-gold-med/50 transition-all duration-500 shadow-lg">
                <MapPin className="w-4.5 h-4.5 text-gold-med" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-[0.5rem] uppercase tracking-[0.2em] text-neutral-500 font-bold leading-none mb-1">Trabalhos em</span>
                <span className="font-serif text-base text-neutral-200 whitespace-nowrap">
                  Lisboa e Vale do Tejo
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};
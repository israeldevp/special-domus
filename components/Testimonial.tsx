import React from 'react';
import { Section } from './ui/Section';
import { Quote } from 'lucide-react';

export const Testimonial: React.FC = () => {
  return (
    <Section className="bg-rich-black flex justify-center py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-med/5 rounded-full blur-[100px]"></div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <Quote className="w-12 h-12 text-gold-med mx-auto mb-8 opacity-50" />

        <blockquote className="font-serif text-2xl md:text-4xl leading-snug text-neutral-200 italic mb-12">
          "Trabalho de excelência e perfeição. O que mais me deliciou foi precisar de fazer alguma alteração e o Bruno dizer <span className="text-gold-med">'claro que se faz'</span>. Percebeu-se o coração no trabalho que fazia. Obrigada Special Domus."
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-16 h-[1px] bg-gold-med mb-4"></div>
          <cite className="font-sans text-sm uppercase tracking-widest text-gold-med not-italic">
            Rute Conrado
          </cite>
          <span className="text-xs text-neutral-400 mt-2">Cliente Residencial</span>
        </div>
      </div>
    </Section>
  );
};
import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2 } from 'lucide-react';

import brunoImg from '../assets/bruno.png';

export const Solution: React.FC = () => {
  return (
    <Section id="solucao" className="bg-rich-black">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">

        {/* Content Side */}
        <div className="flex-1 space-y-8 pt-10">
          <span className="text-gold-med uppercase tracking-widest text-xs font-bold">A Solução Special Domus</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
            Nós existimos para provar que uma obra pode ser <span className="text-gold-gradient italic">tranquila</span>.
          </h2>

          <div className="w-20 h-[1px] bg-gold-med/30"></div>

          <p className="font-sans md:font-light text-neutral-200 text-lg leading-relaxed">
            Com mais de 10 anos de experiência, <strong>Bruno Rodrigues</strong> lidera cada projeto com atenção ao pormenor, organização e respeito pelo seu espaço.
          </p>

          <p className="font-sans md:font-light text-neutral-300">
            Seja uma casa antiga, um apartamento, uma moradia ou uma loja, o objetivo é sempre o mesmo: entregar algo bem feito, moderno e com garantia.
          </p>

          <ul className="space-y-4 pt-4">
            {["O combinado é cumprido", "O trabalho é limpo", "O resultado fala por si"].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-white font-serif">
                <CheckCircle2 className="w-5 h-5 text-gold-med" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Side - Asymmetric Layout */}
        <div className="flex-1 relative mt-12 md:mt-0">
          {/* Decorative frame */}
          <div className="absolute top-[-20px] right-[-20px] w-full h-full border border-gold-med/30 z-0 hidden md:block"></div>

          <img
            src={brunoImg}
            alt="Bruno Rodrigues"
            className="relative z-10 w-full h-[600px] object-cover object-[20%_center] md:object-center grayscale contrast-125"
          />

          <div className="absolute bottom-0 left-0 bg-gold-gradient p-1 z-20">
            <div className="bg-rich-black px-8 py-4">
              <span className="text-gold-med font-serif text-xl italic">Bruno Rodrigues</span>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};
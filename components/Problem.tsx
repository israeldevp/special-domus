import React from 'react';
import { Section } from './ui/Section';
import { AlertCircle, Clock, Ban } from 'lucide-react';

import obraInacabadaImg from '../assets/obra-inacabada.jpg';

export const Problem: React.FC = () => {
  return (
    <Section className="bg-charcoal relative">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left: Image illustrating chaos/stress (metaphorical) */}
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 border border-white/5 z-0"></div>
          <img
            src={obraInacabadaImg}
            alt="Obra inacabada"
            className="relative z-10 w-full h-[500px] object-cover grayscale opacity-60 hover:opacity-80 transition-opacity duration-700"
          />
          <div className="absolute bottom-10 left-[-20px] bg-rich-black p-6 border-l-4 border-red-900 max-w-xs z-20 shadow-2xl">
            <p className="font-serif italic text-neutral-400">"Prometeram um prazo e nunca cumpriram."</p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 md:order-2 space-y-8">
          <span className="text-red-900 uppercase tracking-widest text-lg md:text-xl font-bold">O Problema</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
            Começar uma remodelação é muitas vezes sinónimo de stress.
          </h2>
          <p className="font-sans font-light text-neutral-400 leading-relaxed">
            Medo que fique mal feito, que a obra se arraste por meses ou que a casa vire um caos.
            E no meio disso tudo, o seu dia a dia fica virado do avesso.
          </p>

          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-red-900/10 rounded-full group-hover:bg-red-900/20 transition-colors">
                <Clock className="w-5 h-5 text-red-800" />
              </div>
              <div>
                <h4 className="font-serif text-white text-lg">Atrasos Intermináveis</h4>
                <p className="text-sm text-neutral-500 mt-1">Obras que duram o dobro do tempo previsto.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-red-900/10 rounded-full group-hover:bg-red-900/20 transition-colors">
                <AlertCircle className="w-5 h-5 text-red-800" />
              </div>
              <div>
                <h4 className="font-serif text-white text-lg">Orçamentos Derrapados</h4>
                <p className="text-sm text-neutral-500 mt-1">"Ficou mais caro no fim" é uma frase que não quer ouvir.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-red-900/10 rounded-full group-hover:bg-red-900/20 transition-colors">
                <Ban className="w-5 h-5 text-red-800" />
              </div>
              <div>
                <h4 className="font-serif text-white text-lg">Acabamentos Pobres</h4>
                <p className="text-sm text-neutral-500 mt-1">Ter que refazer tudo meses depois.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
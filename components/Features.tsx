import React from 'react';
import { Section } from './ui/Section';
import entregaChaveImg from '../assets/entrega-chave2.jpg';
import obraBemFeitaImg from '../assets/obra-bem-feita.jpg';

const features = [
  {
    title: "Obra bem feita, do início ao fim",
    description: "Nada de remendos ou atalhos. Usamos materiais de qualidade e cuidamos de cada pormenor para que o resultado seja duradouro.",
    image: obraBemFeitaImg
  },
  {
    title: "Prazos respeitados e planeamento",
    description: "“Obra demorada” não faz parte do nosso vocabulário. Planeamos bem para entregar no prazo combinado, sem surpresas.",
    image: entregaChaveImg
  },
  {
    title: "Menos stress para si",
    description: "Mantemos o espaço limpo, organizamos cada etapa e estamos sempre disponíveis para esclarecer dúvidas ou ajustar o que for preciso.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
  }
];

export const Features: React.FC = () => {
  return (
    <Section id="projetos" className="bg-charcoal">
      <div className="mb-20 text-center md:text-left">
        <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold block mb-4">Diferenciais</span>
        <h2 className="font-serif text-3xl md:text-5xl text-white">Porquê a <span className="text-gold-text">Special Domus</span>?</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="group relative bg-rich-black border border-white/5 hover:border-gold-med/30 transition-all duration-500 overflow-hidden">

            {/* Image area */}
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gold-med/10 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-8 relative">
              <div className="absolute top-0 left-8 -translate-y-1/2 w-12 h-12 bg-rich-black border border-gold-med flex items-center justify-center text-gold-med font-serif italic text-xl">
                {idx + 1}
              </div>

              <h3 className="font-serif text-xl text-white mt-4 mb-4 group-hover:text-gold-med transition-colors">{feature.title}</h3>
              <p className="font-sans text-neutral-400 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
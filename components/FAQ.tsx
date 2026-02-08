import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "A Special Domus trabalha apenas em Lisboa?",
    answer: "Atuamos em Lisboa e Vale do Tejo, tanto em projetos residenciais como comerciais."
  },
  {
    question: "Os prazos são realmente cumpridos?",
    answer: "Sim. O planeamento é feito antes de iniciar a obra e o compromisso com o prazo é uma prioridade. Fazemos questão de honrar o cronograma acordado."
  },
  {
    question: "Existe garantia no serviço?",
    answer: "Sim. Todos os trabalhos são realizados com materiais de qualidade e garantia, para sua total tranquilidade e segurança do seu investimento."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-charcoal max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-white">Perguntas Frequentes</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-white/10">
            <button
              className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className={`font-serif text-lg md:text-xl transition-colors ${openIndex === index ? 'text-gold-med' : 'text-neutral-300 group-hover:text-gold-light'}`}>
                {faq.question}
              </span>
              <span className="text-gold-med">
                {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
              <p className="font-sans font-light text-neutral-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
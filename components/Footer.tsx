import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 px-6 border-t border-gold-med/10">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-serif text-gold-med text-lg">SPECIAL DOMUS</h4>
          <p className="text-neutral-600 text-xs uppercase tracking-widest mt-1">Remodelações Unipessoal Lda.</p>
        </div>
        
        <div className="text-neutral-500 text-xs font-sans">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
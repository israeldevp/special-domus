import React from 'react';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const GoldButton: React.FC<GoldButtonProps> = ({ children, fullWidth = false, className = '', ...props }) => {
  return (
    <button 
      className={`
        relative overflow-hidden group
        bg-gold-gradient text-rich-black 
        font-sans font-bold uppercase tracking-widest text-xs md:text-sm
        py-4 px-8 
        transition-all duration-500 ease-out
        hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
        active:scale-95
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Shine effect overlay */}
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
    </button>
  );
};
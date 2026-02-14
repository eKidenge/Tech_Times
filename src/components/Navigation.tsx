import { Newspaper, Menu, X } from 'lucide-react';
import { useState } from 'react';

const categories = [
  'Latest',
  'Startups',
  'Venture',
  'Apple',
  'AI',
  'News',
  'Events',
  'Podcasts',
  'Newsletters'
];

interface NavigationProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Navigation({ activeCategory, onCategoryChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white sticky top-0 z-50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border-b border-emerald-500/30 backdrop-blur-sm bg-opacity-95">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(16, 185, 129, 0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.8)); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes border-pulse {
          0%, 100% { border-color: rgba(16, 185, 129, 0.2); }
          50% { border-color: rgba(16, 185, 129, 0.6); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @keyframes rotate-glow {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .animate-border-pulse { animation: border-pulse 2s ease-in-out infinite; }
        .animate-gradient-shift { background-size: 200% 200%; animation: gradient-shift 3s ease infinite; }
        .animate-scale-pulse { animation: scale-pulse 2s ease-in-out infinite; }
        .animate-rotate-glow { animation: rotate-glow 4s linear infinite; }
        .animate-slideIn { animation: slideIn 0.5s ease-out; }
        .animate-slideDown { animation: slideDown 0.5s ease-out; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .glass-effect { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        .text-shadow-lg { text-shadow: 0 2px 10px rgba(0,0,0,0.5), 0 0 20px rgba(16,185,129,0.3); }
        .text-shadow-xl { text-shadow: 0 4px 15px rgba(0,0,0,0.6), 0 0 30px rgba(16,185,129,0.4); }
        .hover-lift { transition: transform 0.2s ease; }
        .hover-lift:hover { transform: translateY(-2px); }
        .ripple-effect { position: relative; overflow: hidden; }
        .ripple-effect:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          transition: transform 0.3s, opacity 0.3s;
        }
        .ripple-effect:active:after {
          transform: translate(-50%, -50%) scale(2);
          opacity: 0.3;
          transition: 0s;
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        {/* Main flex container - forces straight line with no wrapping */}
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24 flex-nowrap gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
          
          {/* Header section - FAR LEFT with absolute minimum width to prevent squishing */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-5 flex-shrink-0 min-w-[160px] xs:min-w-[180px] sm:min-w-[220px] md:min-w-[260px] lg:min-w-[300px] xl:min-w-[340px] 2xl:min-w-[380px] group">
            
            {/* Logo container with multiple glow layers */}
            <div className="relative flex-shrink-0">
              {/* Outer glow layers */}
              <div className="absolute -inset-2 bg-emerald-400 rounded-2xl blur-2xl opacity-30 animate-pulse-glow"></div>
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 rounded-xl blur-xl opacity-40 animate-spin-slow"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-300 rounded-lg blur-lg opacity-50 animate-rotate-glow"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg blur-md opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:duration-300"></div>
              
              {/* Logo icon with multiple effects */}
              <Newspaper className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 text-emerald-400 relative transform group-hover:scale-110 group-hover:rotate-3 group-hover:-translate-y-1 transition-all duration-500 ease-out drop-shadow-[0_0_10px_rgba(16,185,129,0.7)] group-hover:drop-shadow-[0_0_25px_rgba(16,185,129,0.9)] animate-float" />
              
              {/* Corner accents */}
              <span className="absolute -top-1 -left-1 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></span>
              <span className="absolute -bottom-1 -right-1 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-300"></span>
              <span className="absolute top-1/2 -right-2 w-0.5 h-0.5 bg-emerald-300 rounded-full animate-pulse"></span>
              <span className="absolute bottom-1/2 -left-2 w-0.5 h-0.5 bg-emerald-400 rounded-full animate-pulse delay-150"></span>
            </div>

            {/* Header text with premium gradient and effects */}
            <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black tracking-[-0.02em] whitespace-nowrap bg-gradient-to-r from-white via-emerald-100 via-emerald-200 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_4px_15px_rgba(16,185_129,0.7)] transition-all duration-500 text-shadow-lg hover:text-shadow-xl relative">
              THE TECH TIMES
              
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent group-hover:w-full transition-all duration-700"></span>
              
              {/* Background shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              
              {/* Floating particles */}
              <span className="absolute -top-2 -right-2 w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></span>
              <span className="absolute -bottom-2 -left-2 w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300"></span>
            </h1>
          </div>

          {/* Desktop Navigation - FAR RIGHT with flex-nowrap, hidden on mobile */}
          <div className="hidden md:flex items-center justify-end flex-nowrap overflow-x-auto scrollbar-hide gap-0.5 lg:gap-1 xl:gap-2 2xl:gap-3 flex-shrink-0 min-w-0 max-w-[calc(100%-340px)] xl:max-w-[calc(100%-380px)]">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                style={{ 
                  animationDelay: `${index * 30}ms`,
                  animation: `slideIn 0.5s ease-out ${index * 0.05}s both`
                }}
                className={`
                  group relative 
                  px-1.5 xs:px-2 sm:px-2.5 md:px-3 lg:px-4 xl:px-5 2xl:px-6 
                  py-1 xs:py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 2xl:py-4
                  rounded-md xs:rounded-lg sm:rounded-xl md:rounded-2xl
                  whitespace-nowrap 
                  text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
                  font-black tracking-wide
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl
                  active:scale-95 active:translate-y-0
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900
                  ripple-effect
                  ${activeCategory === category ? 'text-white' : 'text-slate-300 hover:text-white'}
                `}
              >
                {/* Multiple background layers for depth */}
                <span className={`
                  absolute inset-0 rounded-md xs:rounded-lg sm:rounded-xl md:rounded-2xl
                  transition-all duration-500 ease-out
                  ${activeCategory === category 
                    ? 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 bg-[length:200%_200%] animate-gradient-shift shadow-[0_10px_30px_-5px_rgba(16,185,129,0.7)] shadow-emerald-500/50' 
                    : 'bg-slate-800/0 group-hover:bg-gradient-to-r group-hover:from-slate-700 group-hover:via-slate-600 group-hover:to-slate-700 group-hover:bg-[length:200%_200%] group-hover:animate-gradient-shift'
                  }
                `}></span>
                
                {/* Inner glow layer */}
                <span className={`
                  absolute inset-[1px] rounded-md xs:rounded-lg sm:rounded-xl md:rounded-2xl
                  transition-all duration-300
                  ${activeCategory === category
                    ? 'bg-gradient-to-r from-emerald-400/30 via-transparent to-emerald-400/30'
                    : 'group-hover:bg-gradient-to-r group-hover:from-white/15 group-hover:via-transparent group-hover:to-white/15'
                  }
                `}></span>
                
                {/* Glass morphism layer */}
                <span className={`
                  absolute inset-[2px] rounded-md xs:rounded-lg sm:rounded-xl md:rounded-2xl
                  backdrop-blur-sm transition-all duration-300
                  ${activeCategory === category
                    ? 'bg-white/5'
                    : 'bg-transparent group-hover:bg-white/5'
                  }
                `}></span>
                
                {/* Border glow */}
                <span className={`
                  absolute -inset-0.5 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${activeCategory === category
                    ? 'bg-gradient-to-r from-emerald-400 to-emerald-600 blur-sm'
                    : 'bg-gradient-to-r from-slate-400 to-slate-600 blur-sm'
                  }
                `}></span>

                {/* Text with enhanced readability */}
                <span className="relative z-10 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] font-extrabold">
                  {category}
                </span>
                
                {/* Active state multiple indicators */}
                {activeCategory === category && (
                  <>
                    {/* Animated dots */}
                    <span className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></span>
                    <span className="absolute -top-1.5 -right-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span className="absolute -top-1.5 -left-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse delay-150"></span>
                    <span className="absolute bottom-1/2 -right-2 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></span>
                    <span className="absolute top-1/2 -left-2 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-300"></span>
                    
                    {/* Corner accents */}
                    <span className="absolute top-0 left-0 w-1 h-1 border-t-2 border-l-2 border-emerald-400 rounded-tl"></span>
                    <span className="absolute top-0 right-0 w-1 h-1 border-t-2 border-r-2 border-emerald-400 rounded-tr"></span>
                    <span className="absolute bottom-0 left-0 w-1 h-1 border-b-2 border-l-2 border-emerald-400 rounded-bl"></span>
                    <span className="absolute bottom-0 right-0 w-1 h-1 border-b-2 border-r-2 border-emerald-400 rounded-br"></span>
                  </>
                )}
                
                {/* Hover spark effects */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <span className="absolute top-0 left-1/4 w-0.5 h-0.5 bg-white rounded-full animate-ping"></span>
                  <span className="absolute bottom-0 right-1/4 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-150"></span>
                  <span className="absolute top-1/2 left-0 w-0.5 h-0.5 bg-emerald-300 rounded-full animate-ping delay-300"></span>
                  <span className="absolute top-1/3 right-0 w-0.5 h-0.5 bg-emerald-400 rounded-full animate-ping delay-500"></span>
                </span>
                
                {/* Shimmer line on hover */}
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </button>
            ))}
          </div>

          {/* Hamburger Menu Button - Mobile only, far right */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative flex-shrink-0 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-[0_5px_20px_-5px_rgba(16,185,129,0.7)] hover:shadow-[0_8px_25px_-5px_rgba(16,185,129,0.9)] flex items-center justify-center group hover:scale-110 active:scale-95 hover:-translate-y-1"
            aria-label="Toggle menu"
          >
            {/* Multiple glow layers */}
            <div className="absolute -inset-1 bg-emerald-400 rounded-xl blur-lg opacity-40 group-hover:opacity-60 animate-pulse"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg blur opacity-50 group-hover:opacity-70 transition-opacity"></div>
            
            {/* Icon with rotation */}
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white transform group-hover:rotate-90 transition-transform duration-500 relative z-10" />
            ) : (
              <Menu className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white transform group-hover:scale-110 transition-transform duration-300 relative z-10" />
            )}
            
            {/* Ring indicator */}
            <span className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/20 group-hover:border-white/40 transition-colors"></span>
            
            {/* Corner dots */}
            <span className="absolute -top-1 -right-1 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></span>
            <span className="absolute -bottom-1 -left-1 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-150"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Hidden on desktop, shows when hamburger clicked */}
      <div className={`
        md:hidden fixed left-0 right-0 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950
        border-t border-emerald-500/30 shadow-2xl shadow-black/50
        transition-all duration-500 ease-in-out z-40
        backdrop-blur-xl bg-opacity-95
        ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}
      `}>
        {/* Decorative top border with animation */}
        <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-full animate-gradient-shift"></div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 md:py-8">
          
          {/* Menu header with close button */}
          <div className="flex items-center justify-between mb-4 sm:mb-6 pb-2 sm:pb-4 border-b border-emerald-500/20">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-lg blur-md animate-pulse"></div>
                <Newspaper className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 relative" />
              </div>
              <span className="text-sm sm:text-base font-black text-white">Categories</span>
              <span className="text-[8px] sm:text-[10px] font-bold text-emerald-400/60 bg-slate-800/50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                {categories.length}
              </span>
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center group transition-all duration-300 hover:scale-110"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 group-hover:rotate-90 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 w-1 h-1 bg-emerald-400 rounded-full"></span>
            </button>
          </div>

          {/* Mobile categories grid - maintains original categories but enhanced styling */}
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsMobileMenuOpen(false);
                }}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`
                  group relative
                  px-2 sm:px-3 md:px-4
                  py-2 sm:py-2.5 md:py-3
                  rounded-lg sm:rounded-xl md:rounded-2xl
                  text-[10px] xs:text-xs sm:text-sm md:text-base
                  font-extrabold tracking-wide
                  transition-all duration-300
                  hover:scale-105 hover:-translate-y-1
                  active:scale-95
                  text-center
                  animate-slideDown
                  ${activeCategory === category ? 'text-white' : 'text-slate-300 hover:text-white'}
                `}
              >
                {/* Background layers */}
                <span className={`
                  absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl
                  transition-all duration-300
                  ${activeCategory === category
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 shadow-[0_10px_20px_-5px_rgba(16,185,129,0.7)]'
                    : 'bg-slate-800/50 group-hover:bg-gradient-to-r group-hover:from-slate-700 group-hover:to-slate-600'
                  }
                `}></span>
                
                {/* Inner glow */}
                <span className={`
                  absolute inset-[1px] rounded-lg sm:rounded-xl md:rounded-2xl
                  transition-all duration-300
                  ${activeCategory === category
                    ? 'bg-gradient-to-r from-emerald-400/20 via-transparent to-emerald-400/20'
                    : 'group-hover:bg-gradient-to-r group-hover:from-white/5 group-hover:via-transparent group-hover:to-white/5'
                  }
                `}></span>
                
                {/* Text */}
                <span className="relative z-10 drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] block">
                  {category}
                </span>
                
                {/* Active indicators */}
                {activeCategory === category && (
                  <>
                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping"></span>
                    <span className="absolute -bottom-1 -left-1 w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></span>
                  </>
                )}
                
                {/* Hover border effect */}
                <span className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl border border-transparent group-hover:border-emerald-400/30 transition-colors duration-300"></span>
              </button>
            ))}
          </div>

          {/* Menu footer */}
          <div className="mt-4 sm:mt-6 pt-2 sm:pt-4 border-t border-emerald-500/20 flex items-center justify-between text-[8px] sm:text-[10px] text-emerald-400/40">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>Tech Times Premium</span>
              <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse delay-150"></span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span>10 categories</span>
              <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
              <span>Updated daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay with blur */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; backdrop-filter: blur(0px); }
              to { opacity: 1; backdrop-filter: blur(4px); }
            }
            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out forwards;
            }
          `}</style>
        </div>
      )}

      {/* Extra decorative elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-l from-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-emerald-400/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </nav>
  );
}
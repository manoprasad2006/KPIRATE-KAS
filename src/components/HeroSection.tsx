import React, { useState, useEffect } from 'react';
import { Anchor, ArrowDown, MessageCircle, Navigation } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background pirate ship image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/main-one.png"
          alt="Pirate ship on dark waters"
          className="w-full h-full object-contain object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Main content with images and text side by side */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content - Left */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="mb-8 w-full">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 relative">
              <span className="font-pirata text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-red-500">
                KASPIRATE
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-transparent blur-2xl rounded-full"></div>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-cyan-300 mb-4 animate-fade-in-up">
              Join the Crew. Own the Journey.
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Sail into the future with KASPIRATE - where blockchain meets the high seas. 
              Built on Kaspa's lightning-fast network for true digital treasure.
            </p>
          </div>
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center mb-16 w-full">
            <a
              href="https://www.kaspa.com/tokens/marketplace/token/KPRAT"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 flex items-center gap-3 justify-center"
            >
              <Navigation className="w-6 h-6" />
              Start Your Voyage
            </a>
            <a
              href="https://t.me/kaspiratecoin"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 border-2 border-yellow-400 rounded-full font-bold text-xl text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50 flex items-center gap-3 justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              Join Telegram Crew
            </a>
          </div>
        </div>
        {/* Hero Image Gallery - Right */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative md:ml-16">
            <img 
              src="/favi-inv.png" 
              alt="KASPIRATE Hero" 
              className="w-96 h-96 md:w-[32rem] md:h-[32rem] object-contain transition-transform duration-300 hover:scale-105 rounded-xl bg-black/20"
              style={{maxWidth: '100%', height: 'auto'}}
            />
          </div>
        </div>
        {/* Scroll indicator (keep at bottom center) */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-cyan-400" />
        </div>
      </div>

      {/* Animated ship silhouette */}
      <div 
        className="absolute top-20 right-20 opacity-30 transition-transform duration-700 z-10"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotateY(${mousePosition.x / 5}deg)`
        }}
      >
        <div className="w-96 h-96 relative flex items-center justify-center">
          <img
            src="/ship-dall.png"
            alt="Animated Pirate Ship"
            className="w-80 h-80 object-contain animate-float drop-shadow-2xl"
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>

      {/* Glowing skull hologram */}
      <div className="absolute top-10 left-10 opacity-20 z-10">
        <div className="text-8xl animate-pulse text-cyan-400">💀</div>
        <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-30 animate-ping"></div>
      </div>

      {/* Rotating compass */}
      <div className="absolute bottom-20 right-20 opacity-30 z-10">
        <div className="w-24 h-24 border-2 border-yellow-400 rounded-full relative animate-spin-slow">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-yellow-400"></div>
          <div className="absolute top-1/2 left-1 transform -translate-y-1/2 w-8 h-1 bg-yellow-400"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-yellow-400"></div>
          <div className="absolute top-1/2 right-1 transform -translate-y-1/2 w-8 h-1 bg-yellow-400"></div>
          <Anchor className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-yellow-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
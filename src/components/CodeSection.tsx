import React from 'react';
import { Scroll, Star, MapPin } from 'lucide-react';

const CodeSection: React.FC = () => {
  const codePoints = [
    "No rug pulls. No betrayals. No lies.",
    "The crew's treasure belongs to the crew.",
    "Transparency guides every decision.",
    "Fair winds and following seas for all."
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      {/* Background treasure map image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Ancient treasure map"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-gray-900/90"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center animate-on-scroll relative z-10">
        <div className="relative mb-16">
          <h2 className="text-6xl font-bold font-pirata text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 mb-4">
            The Code We Live By
          </h2>
          <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400/10 to-red-500/10 blur-3xl rounded-full"></div>
        </div>

        {/* Ancient scroll background effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 to-yellow-800/20 rounded-3xl border-2 border-yellow-600/30 backdrop-blur-sm"></div>
          
          {/* Decorative corners */}
          <div className="absolute top-4 left-4">
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <div className="absolute top-4 right-4">
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <div className="absolute bottom-4 right-4">
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>

          <div className="relative p-12">
            <div className="flex justify-center mb-8">
              <Scroll className="w-16 h-16 text-yellow-400" />
            </div>

            <div className="space-y-8">
              {codePoints.map((point, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-red-500 group-hover:scale-125 transition-transform duration-300" />
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                    <MapPin className="w-6 h-6 text-red-500 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  
                  <p className="text-2xl font-bold text-yellow-100 group-hover:text-yellow-400 transition-all duration-300 group-hover:scale-105">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Glowing signature */}
            <div className="mt-12 pt-8 border-t border-yellow-600/30">
              <p className="text-lg text-yellow-300 font-pirata">
                — Captain KPIRATE & The Kaspa Crew
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
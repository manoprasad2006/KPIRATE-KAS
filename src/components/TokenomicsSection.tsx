import React, { useState } from 'react';
import { TrendingUp, Lock, Users, Zap } from 'lucide-react';

const TokenomicsSection: React.FC = () => {
  const [chestOpen, setChestOpen] = useState(false);

  const tokenomicsData = [
    {
      icon: TrendingUp,
      label: "Total Supply",
      value: "167,000,000,000 KPRAT",
      description: "Fixed supply, no more coins will ever be minted"
    },
    {
      icon: Lock,
      label: "Liquidity Locked",
      value: "100%",
      description: "All liquidity permanently locked for security"
    },
    {
      icon: Users,
      label: "Community Allocation",
      value: "95%",
      description: "Fair distribution to the pirate crew"
    },
    {
      icon: Zap,
      label: "Development",
      value: "5%",
      description: "For ongoing development and marketing"
    }
  ];

  return (
    <section id="tokenomics" className="relative py-32 px-6">
      {/* Background treasure vault image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Golden treasure vault"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-6xl font-bold font-pirata text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-400 mb-4">
            Treasure Distribution
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our treasure chest is open for all to see. No hidden loot, no secret stashes.
          </p>
        </div>

        {/* Tokenomics Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-on-scroll">
          {[
            { img: "/chart.jpg", title: "Total Supply", value: "1,000,000,000 KPRAT", desc: "Fixed supply, no more coins will ever be minted." },
            { img: "/mapglow.jpg", title: "Liquidity Locked", value: "100%", desc: "All liquidity permanently locked for security." },
            { img: "/picc.jpg", title: "Community Allocation", value: "90%", desc: "Fair distribution to the pirate crew." }
          ].map((item, idx) => (
            <div key={idx} className="relative group cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-2 border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ aspectRatio: '3/2' }}
              />
            </div>
          ))}
        </div>

        {/* Interactive treasure chest */}
        <div className="flex justify-center mb-16">
          <div 
            className="relative cursor-pointer group"
            onClick={() => setChestOpen(!chestOpen)}
          >
            <div className="text-8xl transition-transform duration-500 group-hover:scale-110">
              {chestOpen ? '📦' : '💰'}
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
            
            {/* Floating coins animation when chest is open */}
            {chestOpen && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-2xl animate-bounce text-yellow-400"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '2s'
                    }}
                  >
                    🪙
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tokenomics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
          {tokenomicsData.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-gray-900/80 to-gray-800/80 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glowing background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/5 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-cyan-300 mb-3 text-center group-hover:text-cyan-200 transition-colors">
                  {item.label}
                </h3>
                
                <p className="text-2xl font-bold text-white mb-4 text-center group-hover:text-yellow-400 transition-colors">
                  {item.value}
                </p>
                
                <p className="text-sm text-gray-400 text-center group-hover:text-gray-300 transition-colors leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Floating sparkles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-500/30">
            <div className="text-2xl">⚠️</div>
            <p className="text-red-300 font-bold">
              No Presale • No VC • No Hidden Treasures
            </p>
          </div>
        </div>
      </div>
    </section>  
  );
};

export default TokenomicsSection;
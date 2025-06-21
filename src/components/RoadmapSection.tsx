import React from 'react';
import { Ship, Flag, Gem, Flame } from 'lucide-react';
import AnimatedDashedLine from './AnimatedDashedLine';
import { FaTelegramPlane, FaXTwitter } from 'react-icons/fa';

const RoadmapSection: React.FC = () => {
  const roadmapPhases = [
    {
      icon: Ship,
      quarter: "Q2 2025",
      title: "Setting Sail",
      items: [
        "Launch on Kaspa Network",
        "Website & Community Launch", 
        "Whitepaper Release",
        "Initial DEX Listing"
      ],
      color: "from-cyan-400 to-cyan-500"
    },
    {
      icon: Flag,
      quarter: "Q3 2025", 
      title: "Raising the Flag",
      items: [
        "CEX Listings",
        "Community Raids & Marketing",
        "Partnership Announcements",
        "First NFT Collection Launch"
      ],
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Gem,
      quarter: "Q4 2025",
      title: "Treasure Hunt",
      items: [
        "Airdrop Campaigns",
        "Genesis NFT Collection",
        "International Channels",
        "Cross-chain Integration"
      ],
      color: "from-red-400 to-red-500"
    },
    {
      icon: Flame,
      quarter: "2026",
      title: "Legend Status",
      items: [
        "Cooperations",
        "Community Challenges & Contests",
        "Burn Events, Airdrops & Many More"
      ],
      color: "from-purple-400 to-purple-500"
    }
  ];

  return (
    <section id="roadmap" className="relative py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
      {/* Background ocean voyage image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/roadmap-1.png"
          alt="Ocean voyage under starry sky"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-black/95"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-6xl font-bold font-pirata text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-red-400 mb-4">
            The Pirate Voyage
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Chart your course through our expedition across the digital seas
          </p>
        </div>

        {/* Roadmap Image Gallery */}
        <div className="flex flex-wrap justify-center gap-12 mb-16 animate-on-scroll">
          {[
            { img: "/roadmap-1.png" },
            { img: "/road-1.png", zoomOut: true }
          ].map((item, idx) => (
            <div key={idx} className="relative group cursor-pointer rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-2 border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 flex items-center justify-center" style={{ width: '500px', height: '500px' }}>
              <img 
                src={item.img} 
                alt={`Roadmap ${idx + 1}`} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-center ${item.zoomOut ? 'scale-96' : ''}`}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>

        {/* Animated ship path */}
        <div className="relative mb-16">
          <AnimatedDashedLine />
        </div>

        {/* Roadmap phases */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {roadmapPhases.map((phase, index) => (
            <div
              key={index}
              className={`group relative animate-on-scroll${index < 3 ? ' pt-8' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Island/location design */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-2 border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 cursor-pointer backdrop-blur-sm">
                {/* Glowing effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${phase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Phase icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <phase.icon className="w-10 h-10 text-black" />
                  </div>
                </div>

                {/* Phase info */}
                <div className="text-center mb-6">
                  <p className="text-sm font-bold text-gray-400 mb-2">{phase.quarter}</p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {phase.title}
                  </h3>
                </div>

                {/* Phase items */}
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0 group-hover:bg-yellow-400 transition-colors"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Treasure marker */}
                <div className="absolute -top-3 -right-3 text-2xl animate-bounce opacity-70 group-hover:opacity-100 transition-opacity">
                  🏝️
                </div>
              </div>

              {/* Connecting dotted line (except for last item) */}
              {index < roadmapPhases.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-px border-t-2 border-dashed border-cyan-400/50 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20 animate-on-scroll">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-900/50 to-cyan-800/50 border border-cyan-400/30">
            <p className="text-cyan-300 font-bold">
              The adventure has just begun - join us on this epic voyage!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
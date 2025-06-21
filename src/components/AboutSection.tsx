import React from 'react';
import { Shield, Users, Eye, Zap, Anchor } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Freedom from centralized control",
      description: "No single entity controls your treasure - true decentralization for the crew"
    },
    {
      icon: Users,
      title: "Fairness in distribution", 
      description: "Every crew member gets their fair share of the bounty, no exceptions"
    },
    {
      icon: Eye,
      title: "Transparency in decisions",
      description: "All decisions made in the open seas where everyone can see and verify"
    },
    {
      icon: Zap,
      title: "Community as the captain",
      description: "The crew decides the ship's direction through collective governance"
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-400/5 rounded-full blur-3xl"></div>
              </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-400/30 mb-8">
            <span className="text-red-300 font-semibold">About Our Crew</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-red-400 leading-[1.2] pb-2">
            Not just another meme coin.
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-8">
            A true movement under the pirate flag.
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join a decentralized crew where every member has a voice, every decision is transparent, 
            and the treasure is shared fairly among all who sail with us.
          </p>
        </div>

        {/* Cool Interactive Image Gallery - 3 Images Full Width */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
            {[
              { img: "/bike-pir.jpg", color: "from-purple-500 to-pink-600", shadow: "shadow-purple-500/25", title: "Ride into the Dawn", subtitle: "Fearless and fast, Kaspirate rides on 10BPS." },
              { img: "/about-sec.jpg", color: "from-green-400 to-emerald-600", shadow: "shadow-green-500/25", title: "Echo on the GhostDAG", subtitle: " Born from the shadows of the chain, the DAG speaks to him." },
              { img: "/wantedd.jpg", color: "from-blue-400 to-indigo-600", shadow: "shadow-blue-500/25", title: "Most Wanted on the Chain", subtitle: "Built by the community, feared by the constitution." }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`relative w-full h-96 rounded-3xl overflow-hidden bg-gradient-to-br ${item.color} p-1 shadow-2xl ${item.shadow} hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-rotate-1`}>
                  <div className="w-full h-full bg-black/90 rounded-3xl overflow-hidden relative">
                    <img 
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 bg-gray-900"
                      style={{ aspectRatio: '3/2' }}
                    />
                    {/* Overlay text at the bottom */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <h4 className="text-white text-xl font-bold mb-1">{item.title}</h4>
                      {item.subtitle && <p className="text-gray-200 text-sm">{item.subtitle}</p>}
                    </div>
                    {/* Cool overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                    {/* Animated border glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                    {/* Floating sparkle effect */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-200 transition-opacity duration-300"></div>
                    <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-500 transition-opacity duration-300"></div>
              </div>
          </div>

                {/* Outer glow effect */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${item.color} rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl -z-10`}></div>
              </div>
            ))}
          </div>
          </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "<1K", label: "Crew Members", icon: <Users className="w-10 h-10 mx-auto text-cyan-400" /> },
              { number: "100%", label: "Decentralized", icon: <Anchor className="w-10 h-10 mx-auto text-yellow-400" /> },
              { number: "24/7", label: "Community Driven", icon: <Shield className="w-10 h-10 mx-auto text-red-400" /> },
              { number: "∞", label: "Adventure Awaits", icon: <Zap className="w-10 h-10 mx-auto text-cyan-300" /> }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 group"
              >
                <div className="mb-2 group-hover:animate-bounce">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Section - Redesigned Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left side - Hero Image with Interactive Elements */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-[500px] relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src="/tyt.jpg"
                  alt="Digital treasure and blockchain"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-yellow-400/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Interactive floating elements */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-300 opacity-60"></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-red-400 rounded-full animate-bounce delay-500 opacity-70"></div>
                
                {/* Overlay content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30">
                    <h4 className="text-cyan-300 font-bold text-lg mb-2">The Pirate's Code</h4>
                    <p className="text-gray-200 text-sm">"No pirate sails alone—loyalty is the strongest treasure!"</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-cyan-400 rounded-tl-lg"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-yellow-400 rounded-tr-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-red-400 rounded-bl-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-cyan-400 rounded-br-lg"></div>
                </div>
                
            {/* Additional info cards below main image */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-600/20 to-cyan-700/20 border border-cyan-400/30">
                <Zap className="w-8 h-8 text-cyan-300 mb-2" />
                <div className="text-cyan-300 font-semibold">Lightning Fast</div>
                <div className="text-gray-400 text-sm">Instant transactions</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 border border-yellow-400/30">
                <Shield className="w-8 h-8 text-yellow-300 mb-2" />
                <div className="text-yellow-300 font-semibold">Secure Vault</div>
                <div className="text-gray-400 text-sm">Protected treasure</div>
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-r from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                          <feature.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors duration-300">
                      {feature.title}
                    </h4>
                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                      </div>
                    </div>
                    
                    {/* Hover arrow */}
                    <div className="absolute top-1/2 right-6 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center">
                        <span className="text-cyan-400">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
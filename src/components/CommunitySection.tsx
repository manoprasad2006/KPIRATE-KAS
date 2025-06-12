import React from 'react';
import { MessageCircle, Twitter, ExternalLink, Users } from 'lucide-react';

const CommunitySection: React.FC = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      title: "Hop Aboard Telegram",
      subtitle: "Join the crew for real-time updates",
      emoji: "🚢",
      gradient: "from-blue-500 to-blue-600",
      hoverGradient: "from-blue-400 to-blue-500",
      url: "https://t.me/kaspiratecoin"
    },
    {
      icon: Twitter,
      title: "Parroting Updates on X",
      subtitle: "Follow for the latest treasure maps",
      emoji: "🦜",
      gradient: "from-gray-700 to-gray-800",
      hoverGradient: "from-gray-600 to-gray-700",
      url: "https://x.com/kaspiratecoin"
    },
    {
      icon: ExternalLink,
      title: "Find Your Treasure",
      subtitle: "Buy KPIRATE on Kaspa DEX",
      emoji: "💰",
      gradient: "from-yellow-500 to-orange-500",
      hoverGradient: "from-yellow-400 to-orange-400",
      url: "https://t.me/kspr_home_bot?start=AW12dPw"
    }
  ];

  return (
    <section className="relative py-32 px-6">
      {/* Background pirate crew image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Pirate crew gathering"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-6xl font-bold font-pirata text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-400 mb-4">
            Join the Crew
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every great pirate needs a loyal crew. Come sail with us toward digital treasure and adventure.
          </p>
        </div>

        {/* Community Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-on-scroll">
          {/* Community Image 1 */}
          <div className="relative group cursor-pointer transition-all duration-300">
            <div className="w-full aspect-[4/3] flex items-center justify-center rounded-2xl overflow-hidden border border-cyan-400/30 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
              <img 
                src="/com-crew.png" 
                alt="Community 1" 
                className="w-full h-full object-cover rounded-2xl transition-all duration-300" 
              />
            </div>
          </div>

          {/* Community Image 2 */}
          <div className="relative group cursor-pointer transition-all duration-300">
            <div className="w-full aspect-[4/3] flex items-center justify-center rounded-2xl overflow-hidden border border-cyan-400/30 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
              <img 
                src="/com-dc.png" 
                alt="Community 2" 
                className="w-full h-full object-cover rounded-2xl transition-all duration-300" 
              />
            </div>
          </div>

          {/* Community Image 3 */}
          <div className="relative group cursor-pointer transition-all duration-300">
            <div className="w-full aspect-[4/3] flex items-center justify-center rounded-2xl overflow-hidden border border-cyan-400/30 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
              <img 
                src="/comm-fre.png" 
                alt="Community 3" 
                className="w-full h-full object-cover rounded-2xl transition-all duration-300" 
              />
            </div>
          </div>
        </div>

        {/* Animated parrot */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="text-6xl animate-bounce"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>

        {/* Social links grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="group relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block p-8 rounded-2xl bg-gradient-to-r ${link.gradient} hover:bg-gradient-to-r hover:${link.hoverGradient} transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-white/20`}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon and emoji */}
                  <div className="flex items-center gap-4 mb-4">
                    <link.icon className="w-8 h-8 text-white" />
                    <span className="text-3xl animate-bounce group-hover:scale-110 transition-transform duration-300">
                      {link.emoji}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors">
                    {link.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-sm text-gray-200 group-hover:text-white transition-colors">
                    {link.subtitle}
                  </p>
                </div>

                {/* Hover sparkles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Community stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 animate-on-scroll">
          {[
            { label: "Crew Members", value: "500+", icon: "👥" },
            { label: "Telegram Pirates", value: "500+", icon: "⚓" },
            { label: "X Followers", value: "750+", icon: "🐦" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-900/50 to-black/50 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-8 animate-on-scroll">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-900/50 to-cyan-800/50 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer group">
            <Users className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-cyan-300 font-bold group-hover:text-white transition-colors">
              Ready to set sail? The crew is waiting for you! ⚓
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
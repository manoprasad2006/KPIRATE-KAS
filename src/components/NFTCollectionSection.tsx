import React from 'react';
import { Crown, Sparkles, Gem, Star } from 'lucide-react';

const NFTCollectionSection: React.FC = () => {
  const nftFeatures = [
    {
      icon: Crown,
      title: "Pixel Art Pirates",
      description: "Hand-crafted 8-bit style pirate characters with nostalgic retro gaming aesthetics",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Sparkles,
      title: "Unique Traits",
      description: "Each pirate features distinct accessories, weapons, and characteristics in pixel perfection",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Star,
      title: "Limited Edition",
      description: "Only 200 unique pixel pirates will ever be minted - truly exclusive collection",
      color: "from-red-400 to-pink-500"
    }
  ];

  const nftImages = [
    { src: "https://tomato-worthwhile-flamingo-312.mypinata.cloud/ipfs/bafybeigthccfxcviobsqmziv66eqjwpe4sif4zerilp5274emncdl3uu6y/14.png"},
    { src: "https://tomato-worthwhile-flamingo-312.mypinata.cloud/ipfs/bafybeigthccfxcviobsqmziv66eqjwpe4sif4zerilp5274emncdl3uu6y/20.png"},
    { src: "https://tomato-worthwhile-flamingo-312.mypinata.cloud/ipfs/bafybeigthccfxcviobsqmziv66eqjwpe4sif4zerilp5274emncdl3uu6y/38.png"},
    { src: "https://tomato-worthwhile-flamingo-312.mypinata.cloud/ipfs/bafybeigthccfxcviobsqmziv66eqjwpe4sif4zerilp5274emncdl3uu6y/47.png" }
  ];

  return (
    <section id="nft-collection" className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-gray-900/95"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-400/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-6xl font-bold font-pirata text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 mb-4">
            NFT Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Own a piece of the pirate legend with our exclusive NFT collection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - NFT Images */}
          <div className="animate-on-scroll">
            <div className="grid grid-cols-2 gap-6">
              {nftImages.map((nft, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-2 border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 shadow-2xl">
                    <img
                      src={nft.src}
                      
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ imageRendering: 'pixelated' }}
                    />
                    {/* Glowing overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    

                    {/* Rarity indicator */}
                    <div className="absolute top-3 right-3">
                      <div className={`w-3 h-3 rounded-full ${
                        index === 0 ? 'bg-gray-400' :
                        index === 1 ? 'bg-green-400' :
                        index === 2 ? 'bg-purple-400' :
                        'bg-yellow-400'
                      } animate-pulse`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="animate-on-scroll">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pirate Crew</span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our pixel art NFT collection features 200 unique digital pirates, each meticulously crafted 
                  in classic 8-bit style. Every piece captures the nostalgic charm of retro gaming while 
                  bringing legendary pirates to life in the digital realm.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {nftFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <div className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.kaspa.com/nft/collections/KASPIRATE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    View Collection
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl font-bold text-cyan-400">200</div>
                  <div className="text-sm text-gray-300">Total Supply</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-400">7</div>
                  <div className="text-sm text-gray-300">Unique Traits</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl font-bold text-yellow-400">8-Bit</div>
                  <div className="text-sm text-gray-300">Pixel Style</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTCollectionSection;
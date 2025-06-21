import React, { useState } from 'react';
import { Copy, Check, Fuel, QrCode, Gift } from 'lucide-react';

const DonationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const kaspaAddress = "kaspa:qz2h938e2q34k9a6y5rt3mlkx963velxp5z3p9hfe0y3v8u9l758xkcsnsj4e";

  const handleCopy = () => {
    navigator.clipboard.writeText(kaspaAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      {/* Background treasure room image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Golden treasure room"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-gray-900/90"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-on-scroll mb-16">
          <h2 className="text-6xl font-bold font-pirata text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-4">
            Fuel Our Ship
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Help us maintain the ship and expand our pirate fleet. Every contribution keeps us sailing toward new horizons.
          </p>
        </div>

        {/* Donation Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 animate-on-scroll place-items-center">
          {/* Fuel Image 1 */}
          <div className="relative group cursor-pointer transition-all duration-300">
            <div className="w-full aspect-square flex items-center justify-center rounded-2xl overflow-hidden border border-yellow-400/30 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
              <img 
                src="/dona-2.jpg" 
                alt="Fuel 1" 
                className="w-full h-full object-cover rounded-2xl transition-all duration-300" 
              />
            </div>
          </div>

          {/* Fuel Image 2 */}
          <div className="relative group cursor-pointer transition-all duration-300">
            <div className="w-full aspect-square flex items-center justify-center rounded-2xl overflow-hidden border border-yellow-400/30 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
              <img 
                src="/dona-1.jpg" 
                alt="Fuel 2" 
                className="w-full h-full object-cover rounded-2xl transition-all duration-300" 
              />
            </div>
          </div>

          {/* Fuel Image 3 */}
          <div className="relative group cursor-pointer transition-all duration-300">
            <div className="w-full aspect-square flex items-center justify-center rounded-2xl overflow-hidden border border-yellow-400/30 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
              <img 
                src="/dona-3.jpg" 
                alt="Fuel 3" 
                className="w-full h-full object-cover rounded-2xl transition-all duration-300" 
              />
            </div>
          </div>
        </div>

        {/* Treasure rain background effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-400 text-2xl opacity-20 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              💰
            </div>
          ))}
        </div>

        {/* Main donation card */}
        <div className="relative animate-on-scroll">
          <div className="bg-gradient-to-b from-gray-900/90 to-gray-800/90 rounded-3xl border-2 border-yellow-600/30 p-12 backdrop-blur-sm">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Fuel className="w-16 h-16 text-yellow-400" />
                <div className="absolute -inset-4 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-yellow-400 mb-8">
              Kaspa Donation Address
            </h3>

            {/* Address display */}
            <div className="bg-black/50 rounded-2xl p-8 mb-8 border border-gray-600">
              <div className="flex items-center justify-between gap-4">
                <code className="text-cyan-400 text-sm md:text-base font-mono break-all flex-1">
                  {kaspaAddress}
                </code>
                <button
                  onClick={handleCopy}
                  className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 hover:scale-105 group"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <Copy className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  )}
                </button>
              </div>
              
              {copied && (
                <div className="mt-4 text-green-400 font-bold animate-fade-in">
                  ✓ Address copied to clipboard!
                </div>
              )}
            </div>

            

            
          </div>
        </div>

        {/* Thank you message */}
        <div className="mt-12 animate-on-scroll">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-500/30">
            <div className="text-2xl">🙏</div>
            <p className="text-red-300 font-bold">
              Every donation helps us sail further into uncharted waters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
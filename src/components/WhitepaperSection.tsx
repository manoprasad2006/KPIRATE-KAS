import React from 'react';
import { Download } from 'lucide-react';

const WhitepaperSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold font-pirata text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-red-400 mb-4">
            KPRAT Whitepaper
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            A meme coin sailing on the Kaspa Chain
          </p>
          <a
            href="/KPRAT_Whitepaper.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>

        {/* Content */}
        <div id="whitepaper-content" className="prose prose-invert max-w-none bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20">
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">1. Vision</h2>
              <p className="text-gray-300">
                KPRAT is a community-driven meme coin anchored in the values of the pirate era: freedom, fairness, and loyalty. Built on the Kaspa blockchain, it embodies the spirit of decentralized adventure and collective ownership.
              </p>
              <p className="text-gray-300 italic mt-4">
                "No pirate sails alone — loyalty is the strongest treasure."
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">2. Why KPRAT?</h2>
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Kaspa-native: KPRAT is built on Kaspa's ultra-fast GHOSTDAG technology, enabling high throughput and instant finality.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Culture-first: Inspired by pirate lore and community memes, KPRAT is more than a token — it's a crew.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Fair and transparent: No VC funding, no insider dumping — KPRAT is for the people, by the people.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">3. Token Overview</h2>
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Token Name: KPRAT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Standard: KRC-20</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Chain: Kaspa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Total Supply: 167,000,000,000 (167B)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Premint: 5% (8,350,000,000 KPRAT)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Self-Minted: 10% (16,700,000,000 KPRAT)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Community: 85% (141,950,000,000 KPRAT)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">4. Token Distribution</h2>
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">5% Premint – For genesis deployment, early community testing, and initial infrastructure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">10% Self-Minted – Reserved for strategic airdrops, event-based burns, CEX liquidity pools, and partnership incentives.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">85% Community – Fair-launch allocation via public mint.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">5. Use Cases & Utility</h2>
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Governance Voting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Burn Events & Gamified Scarcity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">NFT Ecosystem Access (Genesis NFTs, future drops)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">CEX & DEX Liquidity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Community Quests & Reward Pools</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">6. Roadmap</h2>
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Q2 2025 – Launch website, Genesis Story, Premint</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Q3 2025 – Self-Minting for Airdrops, NFT teaser drops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Q4 2025 – First burn events, CEX listing prep</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Q1 2026 – Community DAO voting begins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Q2 2026 – NFT ecosystem expansion, Pirate Game Teaser</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">7. Key Features</h2>
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Security: Backed by Kaspa's PoW and GHOSTDAG finality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Speed: 10+ blocks per second — fast, smooth transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Decentralization: 100% community-driven; no VC or insider ownership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Low Cost: Gas-efficient KRC-20 transfers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Utility-Driven: Staking, NFTs, governance, events</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">8. The Code of the Chain</h2>
              <p className="text-gray-300 italic mb-4">
                "No pirate sails alone."
              </p>
              <p className="text-gray-300 mb-4">
                Every action in the KPRAT ecosystem is guided by its core values:
              </p>
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Loyalty – Crew-first tokenomics and governance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Fairness – No whale allocations or private sales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Freedom – Built without central control, evolving through community votes</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">9. Expansion & Engagement Strategy</h2>
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Transparency & Updates: Weekly updates on socials, open multisig wallets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">CEX/DEX Listings: Gradual onboarding to increase reach & liquidity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Cross-Chain Swaps: Future bridge to other networks using $KPRAT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Community & Content: Focus on memes, lore, interactive quests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Partnerships: Collaborate with other Kaspa projects, artists, and tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Merch & NFTs: Limited edition, pirate-themed collectibles purchasable in $KPRAT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Marketing: Organic growth via community-driven storytelling & creative drops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span className="text-gray-300">Long-Term Vision: Build a legendary crypto brand that thrives on trust and fun</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">10. Closing Statement</h2>
              <p className="text-gray-300">
                KPRAT is a movement disguised as a meme coin. Backed by technology, driven by lore, and steered by its crew, it aims to set sail on one of the most authentic, engaging journeys in the KRC-20 ecosystem. Join the crew, claim your share, and let's raid the crypto seas together.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperSection; 
'use client';
import { motion } from 'framer-motion';

const sponsors = [
  { name: 'Google', tier: 'Platinum', logo: '🔍' },
  { name: 'Microsoft', tier: 'Gold', logo: '💻' },
  { name: 'Amazon AWS', tier: 'Gold', logo: '☁️' },
  { name: 'GitHub', tier: 'Silver', logo: '🐙' },
  { name: 'DigitalOcean', tier: 'Silver', logo: '🌊' },
  { name: 'Vercel', tier: 'Silver', logo: '▲' },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-black to-blue-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Sponsors</span>
          </h2>
          <p className="text-gray-300 text-lg">Proudly supported by industry leaders</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-3">{sponsor.logo}</div>
              <h3 className="text-white font-semibold mb-1">{sponsor.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                sponsor.tier === 'Platinum' ? 'bg-gradient-to-r from-gray-400 to-white text-black' :
                sponsor.tier === 'Gold' ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-black' :
                'bg-gradient-to-r from-gray-600 to-gray-400 text-white'
              }`}>
                {sponsor.tier}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            Become a Sponsor
          </button>
        </motion.div>
      </div>
    </section>
  );
}
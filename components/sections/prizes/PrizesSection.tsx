'use client';
import { motion } from 'framer-motion';

const PrizesSection = () => {
  const prizes = [
    {
      position: "1st",
      title: "Grand Prize",
      amount: "₹2,00,000",
      color: "from-yellow-500 to-yellow-300",
      borderColor: "border-yellow-500",
      rewards: [
        "Cash Prize ₹2,00,000",
        "Gold Medals",
        "Certificates of Excellence",
        "Internship Opportunities",
        "Mentorship Sessions"
      ]
    },
    {
      position: "2nd",
      title: "Runner Up",
      amount: "₹1,00,000",
      color: "from-gray-400 to-gray-300",
      borderColor: "border-gray-400",
      rewards: [
        "Cash Prize ₹1,00,000",
        "Silver Medals",
        "Certificates of Excellence",
        "Internship Opportunities"
      ]
    },
    {
      position: "3rd",
      title: "Second Runner Up",
      amount: "₹50,000",
      color: "from-orange-600 to-orange-400",
      borderColor: "border-orange-500",
      rewards: [
        "Cash Prize ₹50,000",
        "Bronze Medals",
        "Certificates of Excellence",
        "Swag Kits"
      ]
    }
  ];

  const specialPrizes = [
    {
      category: "Best AI/ML Project",
      prize: "₹25,000",
      icon: "🤖"
    },
    {
      category: "Best Web3 Project",
      prize: "₹25,000",
      icon: "⛓️"
    },
    {
      category: "Best UI/UX Design",
      prize: "₹25,000",
      icon: "🎨"
    },
    {
      category: "Best Social Impact",
      prize: "₹25,000",
      icon: "🌍"
    }
  ];

  return (
    <section id="prizes" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Prize Pool
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compete for an amazing prize pool of over <span className="text-yellow-400 font-bold">₹5,00,000</span> 
            in cash, gadgets, and exclusive opportunities!
          </p>
        </motion.div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.position}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-black/40 backdrop-blur-md border ${prize.borderColor}/30 rounded-2xl p-8 text-center overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-10`}></div>
              
              {/* Position Badge */}
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${prize.color} rounded-full mb-6`}>
                <span className="text-2xl font-bold text-white">{prize.position}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{prize.title}</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-6">{prize.amount}</div>

              <ul className="space-y-3 text-left">
                {prize.rewards.map((reward, rewardIndex) => (
                  <motion.li
                    key={rewardIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: rewardIndex * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {reward}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Special Category Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Special Category Prizes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((special, index) => (
              <motion.div
                key={special.category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{special.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {special.category}
                </h4>
                <div className="text-xl font-bold text-purple-400">
                  {special.prize}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Perks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">All Participants Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎁", text: "Swag Kits & Goodies" },
              { icon: "📜", text: "Participation Certificates" },
              { icon: "🤝", text: "Networking Opportunities" }
            ].map((perk, index) => (
              <motion.div
                key={perk.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl mb-4">{perk.icon}</div>
                <p className="text-gray-300 font-semibold">{perk.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;
'use client';
import { motion } from 'framer-motion';

const ThemesSection = () => {
  const themes = [
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Build intelligent systems that learn and adapt. From predictive models to neural networks.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "⛓️",
      title: "Web3 & Blockchain",
      description: "Decentralize the future. Create DApps, smart contracts, and blockchain solutions.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "📱",
      title: "IoT & Smart Devices",
      description: "Connect the physical world. Build smart home systems, wearables, and automation.",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: "💳",
      title: "FinTech Innovation",
      description: "Revolutionize finance. Create payment solutions, trading algorithms, and banking tech.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🏥",
      title: "Healthcare Technology",
      description: "Transform healthcare. Build telemedicine, diagnostics, and patient care solutions.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: "🎓",
      title: "EdTech Solutions",
      description: "Redefine education. Create learning platforms, AR/VR education, and skill development tools.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🌍",
      title: "Climate & Sustainability",
      description: "Save our planet. Build solutions for climate monitoring, renewable energy, and conservation.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: "🚀",
      title: "Space Tech",
      description: "Reach for the stars. Create satellite tracking, space data analysis, and aerospace solutions.",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <section id="themes" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hackathon Themes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your battlefield! Explore diverse domains and build innovative solutions 
            that can make a real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-64 bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">{theme.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {theme.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {theme.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -m-0.5`}></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Don't see your preferred theme? You can still build anything innovative!
          </p>
          <motion.a
            href="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            Register Now & Choose Your Theme
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ThemesSection;
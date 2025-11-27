'use client';
import { motion } from 'framer-motion';

const judges = [
  { name: 'Dr. John Smith', role: 'AI Research Lead', company: 'Google', avatar: '👨‍💼' },
  { name: 'Sarah Johnson', role: 'Blockchain Expert', company: 'Ethereum Foundation', avatar: '👩‍💻' },
  { name: 'Mike Chen', role: 'Startup Founder', company: 'TechStars', avatar: '👨‍🚀' },
  { name: 'Dr. Priya Patel', role: 'Professor', company: 'IIT Bombay', avatar: '👩‍🏫' },
];

export default function JudgesSection() {
  return (
    <section id="judges" className="py-20 bg-gradient-to-b from-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Judges</span>
          </h2>
          <p className="text-gray-300 text-lg">Industry experts who will evaluate your projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge, index) => (
            <motion.div
              key={judge.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-6 text-center"
            >
              <div className="text-6xl mb-4">{judge.avatar}</div>
              <h3 className="text-white font-bold text-xl mb-2">{judge.name}</h3>
              <p className="text-blue-300 mb-1">{judge.role}</p>
              <p className="text-gray-400 text-sm">{judge.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Alex Johnson', role: 'Organizer', avatar: '👨‍💼' },
  { name: 'Maria Garcia', role: 'Tech Lead', avatar: '👩‍💻' },
  { name: 'David Kim', role: 'Operations', avatar: '👨‍💻' },
  { name: 'Sarah Wilson', role: 'Marketing', avatar: '👩‍🎤' },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Team</span>
          </h2>
          <p className="text-gray-300 text-lg">The amazing people behind CHAKRAVYUH 2.0</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-6 text-center"
            >
              <div className="text-6xl mb-4">{member.avatar}</div>
              <h3 className="text-white font-bold text-xl mb-2">{member.name}</h3>
              <p className="text-blue-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
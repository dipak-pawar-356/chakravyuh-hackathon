'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [counts, setCounts] = useState({
    participants: 0,
    colleges: 0,
    projects: 0
  });

  useEffect(() => {
    const targetCounts = {
      participants: 500,
      colleges: 50,
      projects: 100
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const counters = {
      participants: 0,
      colleges: 0,
      projects: 0
    };

    const updateCounts = () => {
      Object.keys(targetCounts).forEach(key => {
        const target = targetCounts[key as keyof typeof targetCounts];
        const increment = target / steps;
        counters[key as keyof typeof counters] = Math.min(
          counters[key as keyof typeof counters] + increment,
          target
        );
      });

      setCounts({ ...counters });

      if (counters.participants < targetCounts.participants) {
        setTimeout(updateCounts, stepDuration);
      }
    };

    updateCounts();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Hackathon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">CHAKRAVYUH 2.0</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-6">
              CHAKRAVYUH 2.0 is not just another hackathon - it's a cosmic journey into the realm of innovation and technology. 
              Inspired by the ancient Indian military formation, we challenge you to break through complex problems and emerge victorious.
            </p>
            <p className="text-lg text-gray-400">
              Over 48 hours, you'll collaborate, innovate, and build solutions that could change the world. 
              With mentors from top tech companies, workshops on cutting-edge technologies, and a vibrant community of creators, 
              this is where your ideas take flight.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { number: counts.participants, label: 'Cosmic Coders', suffix: '+' },
            { number: counts.colleges, label: 'Colleges', suffix: '+' },
            { number: counts.projects, label: 'Projects Built', suffix: '+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-8 bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl"
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold text-white mb-2"
                key={Math.floor(stat.number)}
              >
                {Math.floor(stat.number)}{stat.suffix}
              </motion.div>
              <div className="text-blue-300 text-lg font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* About College */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-8 mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            About SVERI College of Engineering
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-4">
                Shree Vithal Education & Research Institute (SVERI) College of Engineering, Pandharpur 
                is a premier institution committed to excellence in technical education and innovation.
              </p>
              <p className="text-gray-300 text-lg mb-4">
                Located in the holy city of Pandharpur, SVERI has been nurturing future engineers and 
                innovators with state-of-the-art infrastructure and industry-relevant curriculum.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Innovation', 'Excellence', 'Research', 'Community'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-64 lg:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏛️</div>
                  <p className="text-xl font-semibold">SVERI Campus</p>
                  <p className="text-blue-200">Pandharpur</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: '📅',
              title: 'Event Date',
              content: 'December 15-17, 2024'
            },
            {
              icon: '📍',
              title: 'Venue',
              content: 'SVERI College Campus, Pandharpur'
            },
            {
              icon: '🕒',
              title: 'Duration',
              content: '48 Hours Non-Stop'
            }
          ].map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-2">{detail.title}</h4>
              <p className="text-gray-300">{detail.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
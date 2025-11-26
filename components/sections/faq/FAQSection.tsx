'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is CHAKRAVYUH 2.0?",
      answer: "CHAKRAVYUH 2.0 is a 48-hour hackathon organized by SVERI College of Engineering, Pandharpur. It's a platform for developers, designers, and innovators to build innovative solutions to real-world problems."
    },
    {
      question: "Who can participate?",
      answer: "Any student currently enrolled in a college/university can participate. You can form teams of 1-5 members. Professionals and working individuals can participate as mentors or judges."
    },
    {
      question: "What are the registration fees?",
      answer: "The registration fee is ₹1000 per person. IEEE members get a 20% discount. The fee includes meals, swag, and access to all hackathon resources."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, chargers, any hardware you plan to use, valid college ID, and lots of enthusiasm! We'll provide food, drinks, and a creative environment."
    },
    {
      question: "Will there be prizes?",
      answer: "Yes! We have a prize pool of over ₹5,00,000 including cash prizes, gadgets, internship opportunities, and mentorship from industry experts."
    },
    {
      question: "What about accommodation?",
      answer: "We'll provide basic accommodation facilities for outstation participants. Please bring your own sleeping bags if needed."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers! If you can't find what you're looking for, 
            feel free to reach out to us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.div
                className="bg-gray-800/50 backdrop-blur-md border border-blue-500/30 rounded-xl cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-400 text-xl font-bold"
                  >
                    ↓
                  </motion.span>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-300"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
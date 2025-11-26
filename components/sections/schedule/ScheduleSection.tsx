// 'use client';
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { client } from "@/lib/sanity";

// interface ScheduleItem {
//   _id: string;
//   time: string;
//   event: string;
//   description: string;
//   image?: { asset: { _ref: string } };
// }

// export default function ScheduleSection() {
//   const [schedule, setSchedule] = useState<ScheduleItem[]>([]);

//   useEffect(() => {
//     client.fetch(`*[_type == "schedule"] | order(time asc)`).then(setSchedule);
//   }, []);

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
//       <h2 className="text-center text-4xl font-bold text-white mb-12">Hackathon Schedule 🕓</h2>
//       <div className="relative flex flex-col items-center gap-16">
//         {schedule.map((item, i) => (
//           <motion.div
//             key={item._id}
//             className={`relative flex items-center justify-between w-full max-w-3xl ${
//               i % 2 === 0 ? "flex-row" : "flex-row-reverse"
//             }`}
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: i * 0.2 }}
//           >
//             <motion.div
//               className="w-40 h-40 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xl font-bold shadow-lg"
//               whileHover={{ scale: 1.1, rotate: 10 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               {item.time}
//             </motion.div>
//             <div className="max-w-md text-left text-white">
//               <h3 className="text-2xl font-semibold mb-2">{item.event}</h3>
//               <p className="text-gray-300">{item.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }





'use client';
import { motion } from 'framer-motion';

const ScheduleSection = () => {
  const schedule = [
    {
      day: "Day 1",
      date: "December 15, 2024",
      events: [
        { time: "08:00 AM", title: "Registration & Breakfast", description: "Check-in and get your hackathon kits" },
        { time: "10:00 AM", title: "Opening Ceremony", description: "Welcome speech and hackathon guidelines" },
        { time: "11:30 AM", title: "Hackathon Begins", description: "Start coding! Problem statements revealed" },
        { time: "01:00 PM", title: "Lunch", description: "Networking and team building" },
        { time: "02:30 PM", title: "Workshop 1: Web Development", description: "Modern web technologies workshop" },
        { time: "06:00 PM", title: "Evening Snacks", description: "Quick break and refreshments" },
        { time: "08:00 PM", title: "Mentor Session 1", description: "One-on-one mentoring sessions" }
      ]
    },
    {
      day: "Day 2",
      date: "December 16, 2024",
      events: [
        { time: "12:00 AM", title: "Midnight Snacks", description: "Energy boost for night owls" },
        { time: "08:00 AM", title: "Breakfast", description: "Start your day with energy" },
        { time: "10:00 AM", title: "Workshop 2: AI/ML", description: "Introduction to machine learning" },
        { time: "01:00 PM", title: "Lunch", description: "Networking continues" },
        { time: "04:00 PM", title: "Mentor Session 2", description: "Progress review and guidance" },
        { time: "07:00 PM", title: "Dinner", description: "Delicious meal to keep you going" },
        { time: "10:00 PM", title: "Fun Activity", description: "Gaming session and relaxation" }
      ]
    },
    {
      day: "Day 3",
      date: "December 17, 2024",
      events: [
        { time: "08:00 AM", title: "Breakfast", description: "Final day energy boost" },
        { time: "10:00 AM", title: "Project Submission", description: "Final code and demo submission" },
        { time: "11:30 AM", title: "Judging Round", description: "Project presentations to judges" },
        { time: "01:00 PM", title: "Lunch", description: "Final networking opportunity" },
        { time: "03:00 PM", title: "Closing Ceremony", description: "Winner announcements and prizes" },
        { time: "05:00 PM", title: "Hackathon Ends", description: "Farewell and certificates distribution" }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mark your calendars! Here's the cosmic journey we have planned for you.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
              className="mb-12"
            >
              {/* Day Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-blue-400 mb-2">{day.day}</h3>
                <p className="text-gray-400 text-lg">{day.date}</p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500/30 h-full"></div>
                
                {/* Events */}
                <div className="space-y-8">
                  {day.events.map((event, eventIndex) => (
                    <motion.div
                      key={event.time}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: eventIndex * 0.1 }}
                      className={`flex items-center w-full ${
                        eventIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      {/* Event Content */}
                      <div className={`w-5/12 ${eventIndex % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-6"
                        >
                          <div className="text-blue-400 font-semibold text-lg mb-2">
                            {event.time}
                          </div>
                          <h4 className="text-white font-bold text-xl mb-2">
                            {event.title}
                          </h4>
                          <p className="text-gray-300">
                            {event.description}
                          </p>
                        </motion.div>
                      </div>

                      {/* Timeline Dot */}
                      <div className="w-2/12 flex justify-center">
                        <motion.div
                          whileHover={{ scale: 1.5 }}
                          className="w-4 h-4 bg-blue-500 rounded-full border-4 border-black z-10"
                        />
                      </div>

                      {/* Empty Space */}
                      <div className="w-5/12"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
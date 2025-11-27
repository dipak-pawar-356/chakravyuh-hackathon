'use client';
import { motion } from 'framer-motion';

const FloatingAstronaut = () => {
  return (
    <motion.div
      className="absolute right-10 top-1/4 hidden xl:block"
      initial={{ y: -20, x: 20 }}
      animate={{ 
        y: [-20, 20, -20],
        x: [20, 10, 20],
        rotate: [0, 5, 0, -5, 0]
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="relative">
        <div className="w-32 h-40 relative">
          <div className="absolute w-24 h-24 bg-gray-200 rounded-full top-0 left-4">
            <div className="absolute w-20 h-20 bg-blue-100 rounded-full top-2 left-2">
              <div className="absolute w-8 h-4 bg-white/30 rounded-full top-4 left-4 rotate-45"></div>
            </div>
          </div>
          <div className="absolute w-20 h-24 bg-white top-20 left-6 rounded-lg"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingAstronaut;










// 'use client';
// import { motion } from 'framer-motion';

// const FloatingAstronaut = () => {
//   return (
//     <motion.div
//       className="absolute right-10 top-1/4 hidden xl:block"
//       initial={{ y: -20, x: 20 }}
//       animate={{ 
//         y: [-20, 20, -20],
//         x: [20, 10, 20],
//         rotate: [0, 5, 0, -5, 0]
//       }}
//       transition={{ 
//         duration: 8,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }}
//     >
//       <div className="relative">
//         {/* Astronaut */}
//         <div className="w-32 h-40 relative">
//           {/* Helmet */}
//           <div className="absolute w-24 h-24 bg-gray-200 rounded-full top-0 left-4">
//             <div className="absolute w-20 h-20 bg-blue-100 rounded-full top-2 left-2">
//               {/* Visor reflection */}
//               <div className="absolute w-8 h-4 bg-white/30 rounded-full top-4 left-4 rotate-45"></div>
//             </div>
//           </div>
          
//           {/* Body */}
//           <div className="absolute w-20 h-24 bg-white top-20 left-6 rounded-lg">
//             {/* Oxygen tank */}
//             <div className="absolute w-6 h-8 bg-gray-300 -left-3 top-4 rounded"></div>
//           </div>
//         </div>

//         {/* Floating particles */}
//         {[...Array(5)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-blue-400 rounded-full"
//             initial={{ 
//               x: Math.random() * 40 - 20, 
//               y: Math.random() * 40 - 20,
//               scale: 0 
//             }}
//             animate={{ 
//               scale: [0, 1, 0],
//               y: [Math.random() * 40 - 20, Math.random() * 80 - 40],
//               x: [Math.random() * 40 - 20, Math.random() * 80 - 40]
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: i * 0.5
//             }}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default FloatingAstronaut;
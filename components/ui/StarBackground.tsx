'use client';
import { useEffect, useState } from 'react';

const StarBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number; delay: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.7 + 0.3,
          delay: Math.random() * 5,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;







// 'use client';
// import { useEffect, useState } from 'react';

// const StarBackground = () => {
//   const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number; delay: number }>>([]);

//   useEffect(() => {
//     const generateStars = () => {
//       const newStars = [];
//       for (let i = 0; i < 150; i++) {
//         newStars.push({
//           id: i,
//           x: Math.random() * 100,
//           y: Math.random() * 100,
//           size: Math.random() * 2 + 1,
//           opacity: Math.random() * 0.7 + 0.3,
//           delay: Math.random() * 5,
//         });
//       }
//       setStars(newStars);
//     };

//     generateStars();
//   }, []);

//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="absolute rounded-full bg-white animate-pulse"
//           style={{
//             left: `${star.x}%`,
//             top: `${star.y}%`,
//             width: `${star.size}px`,
//             height: `${star.size}px`,
//             opacity: star.opacity,
//             animationDelay: `${star.delay}s`,
//             animationDuration: `${3 + Math.random() * 2}s`,
//           }}
//         />
//       ))}
      
//       {/* Animated shooting stars */}
//       <div className="absolute inset-0">
//         {[...Array(3)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-shooting-star"
//             style={{
//               top: `${20 + i * 25}%`,
//               left: `${-10 + i * 5}%`,
//               animationDelay: `${i * 7}s`,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StarBackground;
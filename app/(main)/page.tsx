// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black p-6">
//       <div className="max-w-3xl space-y-8">
//         <Image
//           src="/logo.png"
//           alt="Chakravyuh 2.0 Logo"
//           width={160}
//           height={160}
//           className="mx-auto"
//         />

//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
//           Welcome to <span className="text-indigo-600">Chakravyuh 2.0</span>
//         </h1>

//         <p className="text-lg text-gray-600 dark:text-gray-400">
//           A national-level hackathon by{" "}
//           <span className="font-semibold">SVERI’s College of Engineering, Pandharpur</span> — 
//           bringing innovation, creativity, and collaboration together.
//         </p>

//         <div className="flex justify-center gap-4 flex-wrap">
//           <Link
//             href="/(auth)/sign-up"
//             className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
//           >
//             Register Your Team
//           </Link>

//           <Link
//             href="/(main)/schedule"
//             className="px-6 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-full shadow hover:bg-indigo-50 transition"
//           >
//             View Schedule
//           </Link>
//         </div>

//         <p className="text-sm text-gray-500 dark:text-gray-500 mt-6">
//           #HackWithSVERI | #Chakravyuh2.0 | #InnovationForChange
//         </p>
//       </div>
//     </main>
//   );
// }











import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import PrizesSection from '@/components/sections/PrizesSection';
import ThemesSection from '@/components/sections/ThemesSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import JudgesSection from '@/components/sections/JudgesSection';
import TeamSection from '@/components/sections/TeamSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <PrizesSection />
      <ThemesSection />
      <SponsorsSection />
      <JudgesSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
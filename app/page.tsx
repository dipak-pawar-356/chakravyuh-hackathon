import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 dark:from-gray-900 dark:via-black dark:to-gray-800 text-center px-6">
      <div className="flex flex-col items-center space-y-8 max-w-3xl">
        <Image
          src="/chakravyuh-logo.jpg"
          alt="Chakravyuh 2.0 Logo"
          width={140}
          height={140}
          className="rounded-full shadow-md"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-700 dark:text-indigo-300">
          Welcome to Chakravyuh 2.0 🚀
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          The official hackathon of <strong>SVERI’s College of Engineering, Pandharpur</strong>!  
          Get ready to code, innovate, and collaborate with the brightest minds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="/team"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition"
          >
            Meet the Team
          </a>
          <a
            href="/judges"
            className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-md hover:bg-pink-700 transition"
          >
            Meet the Judges
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          Organized by SVERI’s COE Pandharpur | #HackWithSVERI
        </p>
      </div>
    </main>
  );
}

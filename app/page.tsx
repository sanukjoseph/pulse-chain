import Image from "next/image";


import React from 'react';


const ComingSoon: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:via-teal-800 dark:to-blue-700 transition-colors">
      <div className="text-center px-6 py-10 rounded-xl shadow-xl bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-70 backdrop-blur-md">
        <div className="mb-6">
          <Image
            src="/logo.svg"
            alt="PulseChain Logo"
            width={120}
            height={120}
            className="mx-auto"
          />
       </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)]">
          PulseChain
        </h1>
        <p className="text-lg md:text-xl text-teal-800 dark:text-teal-100 mb-8">
          Automation You Trust. Intelligence You Rely On.
        </p>
        <p className="text-2xl font-semibold tracking-wide mb-2 animate-pulse text-blue-700 dark:text-blue-200">
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <ComingSoon />
  );
}

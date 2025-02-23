import React from "react";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
      <p className="text-lg mb-4">Here are some of our exciting projects.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Project 1: TARA - Takes full width */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center col-span-2">
          <Image src="/rover.jpg" alt="TARA" width={200} height={200} className="rounded-lg object-cover" />
          <h2 className="text-xl font-semibold mt-4">TARA</h2>
          <p className="mt-2 text-gray-300 text-center">A rover created for University Rover Challenge 2025.</p>
        </div>

        {/* Project 2: HAL */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <Image src="/hal.png" alt="HAL" width={200} height={200} className="rounded-lg object-cover" />
          <h2 className="text-xl font-semibold mt-4">HAL</h2>
          <p className="mt-2 text-gray-300 text-center">High-Speed Autonomous Logistics Bot.</p>
        </div>

        {/* Project 3: Doggo */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <Image src="/doggo.png" alt="Doggo" width={200} height={200} className="rounded-lg object-cover" />
          <h2 className="text-xl font-semibold mt-4">Doggo</h2>
          <p className="mt-2 text-gray-300 text-center">A 4-legged bot mimicking the movement of a dog.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
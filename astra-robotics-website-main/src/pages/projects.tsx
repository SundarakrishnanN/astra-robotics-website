"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "TARA",
    image: "/rover.jpg",
    description: "A rover created for University Rover Challenge 2025.",
    details: "TARA is an advanced Mars Rover prototype with autonomous navigation and robotic arms.",
  },
  {
    id: 2,
    name: "HAL",
    image: "/hal.png",
    description: "High-Speed Autonomous Logistics Bot.",
    details: "HAL is designed for warehouse automation, featuring AI-driven pathfinding and object handling.",
  },
  {
    id: 3,
    name: "Doggo",
    image: "/images.jpg",
    description: "A 4-legged bot mimicking the movement of a dog.",
    details: "Doggo is an agile robotic quadruped capable of rough terrain traversal and dynamic movement.",
  },
];

const ProjectsPage = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center p-6 overflow-auto">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="/robot-boomerang.mp4" type="video/mp4" />
      </video>
      <h1 className="text-4xl md:text-5xl font-bold mt-16 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Our Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl p-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 bg-opacity-90 p-4 rounded-xl shadow-lg flex flex-col items-center cursor-pointer transition-all hover:scale-105 hover:bg-gray-700 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => toggleExpand(project.id)}
          >
            <Image
              src={project.image}
              alt={project.name}
              width={180}
              height={180}
              className="rounded-lg object-cover border-2 border-gray-600"
            />
            <h2 className="text-xl md:text-2xl font-semibold mt-4 text-purple-300">{project.name}</h2>
            <p className="mt-2 text-gray-300 text-center text-sm md:text-base">{project.description}</p>

            {expandedProject === project.id && (
              <motion.div
                className="mt-4 p-3 bg-gray-900 bg-opacity-90 rounded-lg text-gray-300 text-center shadow-inner"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {project.details}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

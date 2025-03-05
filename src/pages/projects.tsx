"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "TARA",
    description: "A rover created for University Rover Challenge 2025.",
    longDescription: "TARA is an advanced autonomous rover designed for the rigorous challenges of the University Rover Challenge 2025. Equipped with state-of-the-art navigation and manipulation systems, it is built to operate in extreme environments, pushing the limits of robotic exploration.",
    image: "/tara2.jpg",
    objectFit: "contain",
    imageHeight: "h-72", // Adjusted height for horizontal image
  },
  {
    title: "HAL",
    description: "High-Speed Autonomous Logistics Bot.",
    longDescription: "HAL is a cutting-edge autonomous logistics bot designed for high-speed package transportation. With AI-powered navigation and real-time obstacle avoidance, HAL ensures efficient and reliable deliveries in dynamic environments.",
    image: "/hal.png",
    imageHeight: "h-72", // Standard height
  },
  {
    title: "Doggo",
    description: "A 4-legged bot mimicking the movement of a dog.",
    longDescription: "Doggo is a quadrupedal robotic system that mimics canine movement. Built for agility and stability, it serves as a research platform for legged robotics, paving the way for advanced mobility solutions in rough terrains.",
    image: "/images.jpg",
    imageHeight: "h-72", // Standard height
  },
];

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageHeight?: string;
  objectFit?: string;
  span?: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-900/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl border border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className={`relative w-full ${project.imageHeight || "h-64"} mb-6 overflow-hidden rounded-2xl border-2 border-gray-700`}>
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          layout="fill"
          objectFit={project.objectFit || "cover"}
          objectPosition="center"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        {project.title}
      </h2>
      <p className="text-lg text-gray-200 text-center px-4">{project.description}</p>
      <p className="text-sm text-gray-300 text-center px-4 mt-2">{project.longDescription}</p>
    </motion.div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen text-white flex flex-col items-center p-10 pt-24 overflow-auto">
      {/* Video Background from second snippet */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="/robot-boomerang.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay to reduce background intensity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>
      
      <motion.h1
        className="text-6xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Cutting-Edge Projects
      </motion.h1>
      <motion.p
        className="text-xl text-gray-200 mb-12 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover our innovative robotics projects designed for competitions and groundbreaking research. Push the
        boundaries of what's possible in the world of robotics.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="bg-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
            Ready to Innovate?
          </h2>
          <p className="text-xl text-gray-200 mb-6">
            Join us in shaping the future of robotics. Let's build something amazing together.
          </p>

          <button
            onClick={() => window.location.href = "mailto:teamastra@rvce.edu.in"}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl 
                       font-semibold hover:from-blue-600 hover:to-purple-600 
                       transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mx-auto"
          >
            Contact Us
          </button>

          <p className="text-gray-300 mt-4">
            Or email us directly at: 
            <a 
              href="mailto:teamastra@rvce.edu.in" 
              className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              teamastra@rvce.edu.in
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
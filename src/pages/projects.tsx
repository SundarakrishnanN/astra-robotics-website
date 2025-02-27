"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const projects = [
  {
    title: "TARA",
    description: "A rover created for University Rover Challenge 2025.",
    longDescription: "TARA is an advanced autonomous rover designed for the rigorous challenges of the University Rover Challenge 2025. Equipped with state-of-the-art navigation and manipulation systems, it is built to operate in extreme environments, pushing the limits of robotic exploration.",
    image: "/rover.jpg",
    span: "md:col-span-2",
  },
  {
    title: "HAL",
    description: "High-Speed Autonomous Logistics Bot.",
    longDescription: "HAL is a cutting-edge autonomous logistics bot designed for high-speed package transportation. With AI-powered navigation and real-time obstacle avoidance, HAL ensures efficient and reliable deliveries in dynamic environments.",
    image: "/hal.png",
  },
  {
    title: "Doggo",
    description: "A 4-legged bot mimicking the movement of a dog.",
    longDescription: "Doggo is a quadrupedal robotic system that mimics canine movement. Built for agility and stability, it serves as a research platform for legged robotics, paving the way for advanced mobility solutions in rough terrains.",
    image: "/doggo.png",
  },
]

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      className={`bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-xl flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl ${
        project.span || ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="relative w-full h-64 mb-6 overflow-hidden rounded-2xl">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        {project.title}
      </h2>
      <p className="text-lg text-gray-300 text-center px-4">{project.description}</p>
      <p className="text-sm text-gray-400 text-center px-4 mt-2">{project.longDescription}</p>
      <motion.button
        className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  )
}

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center p-10 pt-24">
      <motion.h1
        className="text-6xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Cutting-Edge Projects
      </motion.h1>
      <motion.p
        className="text-xl text-gray-300 mb-12 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover our innovative robotics projects designed for competitions and groundbreaking research. Push the
        boundaries of what's possible in the world of robotics.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
          Ready to Innovate?
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          Join us in shaping the future of robotics. Let's build something amazing together.
        </p>
        <motion.a
          href="mailto:contact@yourdomain.com"
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-white text-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </motion.div>
    </div>
  )
}

export default ProjectsPage

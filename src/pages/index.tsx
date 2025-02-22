import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background Video */ }
      <video
        className="absolute inset-0 w-full h-full object-cover filter brightness-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/AstraRobotics_SCRVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center relative z-10 px-4">
        <h1 className="text-8xl font-bold text-white drop-shadow-lg">
          Astra Robotics
        </h1>
        <p className="mt-4 text-lg text-gray-200 leading-relaxed w-full max-w-4xl">
          Astra Robotics is an interdisciplinary student-led technical team at RV College of Engineering, Bengaluru, dedicated to developing innovative solutions that address everyday societal challenges through the fields of robotics and automation. Our team is committed to driving innovation, as we firmly believe that automation and technology are the keys to creating a more efficient and sustainable future.
        </p>
        <div className="mt-8">
          <Link href="/projects">
            <Button className="px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md">
              Explore Projects
            </Button>
          </Link>
        </div>
      </header>

      {/* Additional Content Section */}
      <section className="flex flex-col items-center justify-center py-16 text-white relative z-10 px-4">
        <h2 className="text-3xl font-bold drop-shadow-lg">Discover More</h2>
        <p className="mt-4 text-gray-200 text-center max-w-3xl">
          Dive into our journey of innovation and creativity. Explore the projects we've been working on and see how we're shaping the future with robotics and automation.
        </p>
        <div className="mt-8">
          <Link href="/team">
            <Button className="px-6 py-3 text-lg bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md">
              Meet Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background Video */}
      
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
      <header className="flex flex-col items-center justify-center h-screen text-center relative z-10 px-6">
        <h1 className="text-4xl md:text-8xl font-bold text-white drop-shadow-lg">
          Astra Robotics
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed max-w-lg md:max-w-4xl">
          Astra Robotics is an interdisciplinary student-led technical team at
          RV College of Engineering, Bengaluru, dedicated to developing
          innovative solutions that address everyday societal challenges through
          robotics and automation. Our team is committed to driving innovation,
          as we firmly believe that automation and technology are the keys to
          creating a more efficient and sustainable future.
        </p>
        <div className="mt-6">
          <Link href="/projects">
            <Button className="px-5 py-3 text-base md:text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md">
              Explore Projects
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover filter"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/AstraRobotics_SCRVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center relative z-10 ">
      <h1 className="text-8xl font-bold text-white">Astra Robotics</h1>
      <p className="mt-4 text-lg text-white justify-left w-[1000px]">
        Astra Robotics is an interdisciplinary student-led technical team at RV College of Engineering, Bengaluru, dedicated to developing innovative solutions that address everyday societal challenges through the fields of robotics and automation. Our team is committed to driving innovation, as we firmly believe that automation and technology are the keys to creating a more efficient and sustainable future.
      </p>
      </header>

      {/* Additional Content Section */}
      <section className="flex flex-col items-center justify-center py-16 text-white relative z-10">
        <h2 className="text-3xl font-bold">More Content Here</h2>
        <p className="mt-4">
          You can add more content to the page, and the background video will continue scrolling.
        </p>
      </section>
    </div>
  );
}

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
        }}
      />
      {/* Navbar */}
      <nav className="relative z-10 bg-navbar bg-opacity-75 shadow-lg">
        <div className="container mx-auto flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/astralogo.png"
              alt="Logo"
              width={100}
              height={100}
              className="border-radius-[50%]"
            />
            <div>
              <Link href="/">
                <h1 className="text-4xl font-bold text-white px-2">ASTRA</h1>
              </Link>
            </div>
          </div>
          {/* Nav Links */}
          <div className="flex space-x-8 text-sm justify-center flex-grow text-white">
            <Link href="/team" className="hover:text-red-500">The Team</Link>
            <Link href="/projects" className="hover:text-red-500">Projects</Link>
            <Link href="/genesis" className="hover:text-red-500">Genesis</Link>
            <Link href="/sponsorship" className="hover:text-red-500">Sponsorship</Link>
            <Link href="/contact" className="hover:text-red-500">Contact Us!</Link>
          </div>
          {/* Join Button */}
          <div>
            <Link href="/join">
              <Button className="border border-white px-4 py-2 rounded text-white hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Join Us
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center relative z-10">
        <h1 className="text-8xl font-bold text-white">Astra Robotics</h1>
        <p className="mt-4 text-lg text-white justify-left w-[1000px]">
          Astra Robotics is an interdisciplinary student-led technical team at RV College of Engineering, Bengaluru, dedicated to developing innovative solutions that address everyday societal challenges through the fields of robotics and automation. Our team is committed to driving innovation, as we firmly believe that automation and technology are the keys to creating a more efficient and sustainable future.
        </p>
      </header>

      {/* Additional Content Section */}
      <section className="flex flex-col items-center justify-center py-16 text-white relative z-10">
        <h2 className="text-3xl font-bold">More Content Here</h2>
        <p className="mt-4">
          You can add more content to the page, and the background image will continue scrolling.
        </p>
      </section>
    </div>
  );
}

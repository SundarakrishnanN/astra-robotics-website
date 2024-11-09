import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
export default function Achievements() {
    const sections = [
      {
        title: "IIT Bombay E-Yantra’ 24 - 1st PLACE",
        text: "An international project based competition focused on solving real world problems involving dynamic controlnand kinematics of robots.",
        imageUrl: "/kiwi.jpg",
        reverse: false,
      },
      {
        title: "Indian Rover Design Challenge’23 -2nd RUNNERUP",
        text: "Second Runners-Up out of 20 teams hailing from various countries.",
        imageUrl: "/orange.jpg",
        reverse: true,
      },
      {
        title: "University Rover Challenge’24 - Qualified PDRA",
        text: "The University Rover Challenge (URC) is an annual robotics competition held by the Mars Society, where student teams from around the world design and build rovers to compete in simulated Mars exploration tasks.",
        imageUrl: "/strawberry.jpg",
        reverse: false,
      },
      {
        title: "IRoC-U - ISRO Rover Challenge- Top 50",
        text: "University teams design and develop rovers to complete tasks simulating lunar and planetary exploration.",
        imageUrl: "/watermelon.jpg",
        reverse: true,
      },
    ];
  
    return (
      <div className="min-h-screen bg-[#1B1212] text-white py-12">
        <div className="container mx-auto px-4">
          <main className="container mx-auto flex flex-col pt-20">
        <h1 className="text-7xl font-bold text-primary mb-4 text-white">Achievements</h1>
      </main>
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                section.reverse ? "md:flex-row-reverse" : ""
              } items-center my-12`}
            >
              <div className="md:w-1/2 p-4">
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <p>{section.text}</p>
              </div>
              <div className="md:w-1/2 p-4">
                <img
                  src={section.imageUrl}
                  alt={section.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
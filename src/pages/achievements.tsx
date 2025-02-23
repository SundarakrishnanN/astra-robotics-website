import React from 'react';

import Image from 'next/image';

import { BackgroundLines } from '@/components/ui/background-lines';
interface AchievementCard {
  title: string;
  text: string;
  imageUrl: string;
  reverse?: boolean; // Optional prop, defaults to false if not provided
}

const AchievementCard: React.FC<AchievementCard> =({ title, text, imageUrl, reverse }) => (
  <div 
    className={`flex flex-col ${
      reverse ? 'md:flex-row-reverse' : 'md:flex-row'
    } items-center gap-8 py-16 px-4 transition-all duration-300 hover:transform hover:scale-[1.02]`}
  >
    <div className="md:w-1/2 space-y-4">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        {text}
      </p>
    </div>
    <div className="md:w-1/2 relative group">
      <div className="relative overflow-hidden rounded-xl shadow-2xl">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  </div>
);

export default function Achievements() {
  const achievements = [
    {
      title: "IIT Bombay E-Yantra' 24 - 1st PLACE",
      text: "An international project based competition focused on solving real world problems involving dynamic control and kinematics of robots.",
      imageUrl: "/eyantra.jpg",
      reverse: false,
    },
    {
      title: "Indian Rover Design Challenge'23 - 2nd RUNNER-UP",
      text: "Second Runners-Up out of 20 teams hailing from various countries.",
      imageUrl: "/irdc.png",
      reverse: true,
    },
    {
      title: "University Rover Challenge'24 - Qualified PDRA",
      text: "The University Rover Challenge (URC) is an annual robotics competition held by the Mars Society, where student teams from around the world design and build rovers to compete in simulated Mars exploration tasks.",
      imageUrl: "/urc.jpg",
      reverse: false,
    },
    {
      title: "IRoC-U - ISRO Rover Challenge - Top 50",
      text: "University teams design and develop rovers to complete tasks simulating lunar and planetary exploration.",
      imageUrl: "/isro.jpg",
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1212] to-[#2D2D2D] text-white">
      <BackgroundLines className="fixed inset-0 z-0 opacity-20" />
      
      <div className="relative z-10">
        <main className="container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-7xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>
          
          <div className="max-w-7xl mx-auto">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                {...achievement}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
import Image from 'next/image';
import Navbar from '@/components/navbar';

export default function RoboticsGenesis() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100 pt-24 px-4">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 bg-white border border-[#141414] shadow-lg rounded-lg p-8">
          <h1 className="text-5xl font-bold mb-4 text-center text-[#141414]">ASTRA GENESIS</h1>
          <p className="text-xl text-[#141414] max-w-2xl mx-auto text-left">
            Astra Robotics is dedicated to advancing the field of robotics by continuously pushing the boundaries of innovation and technology. Through hands-on projects, competitions, and workshops, we immerse ourselves in cutting-edge robotics. Our commitment lies in shaping a future driven by automation and ingenuity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {['genesis1.jpeg', 'genesis2.jpeg', 'genesis3.jpeg'].map((img, index) => (
            <div key={index} className="bg-[#141414] border border-[#333] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="relative h-96">
                <Image
                  src={`/${img}`}
                  alt={`Genesis ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-100">
                  {['sometext1', 'sometext2', 'sometext3'][index]}
                </h3>
                <p className="text-gray-300 text-sm">
                  {['small note1', 'small note2', 'small note3'][index]}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="md:w-1/2 bg-white border border-[#141414] shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-4 text-black">Genesis Workshop</h2>
            <p className="text-black text-lg">
              Genesis is a hands-on workshop conducted by Astra members to equip juniors with foundational skills in robotics. It serves as an opportunity for students to enhance their technical expertise and prepare for potential membership in the club.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

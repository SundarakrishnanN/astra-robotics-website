
import { BackgroundLines } from '@/components/ui/background-lines';
import Image from 'next/image';

const teamSections = [
  { 
    title: "Team Lead", 
    members: [
        { name: "KAMATH ABHAY SUNIL", designation: "Team Lead", imageUrl: "/bro7.jpg" },
        { name: "JEEVOTTAM HEBLE", designation: "Team Lead", imageUrl: "/bro4.jpg" }]
    },
  
  { 
    title: "Mechanical System", 
    members: [
      { name: "ANKITA M", designation: "Lead", imageUrl: "/sis1.jpg" }
    ]
  },
  { title: "Power System", members: [
        { name: "ANOOP JALI", designation: "Lead", imageUrl: "/bro5.jpg" },
        { name: "DHRUTI", designation: "Analog Engineer", imageUrl: "/sis3.jpg" }
    ]
  },
  { 
    title: "Embedded Systems", 
    members: [
      { name: "NITHIN", designation: "Lead", imageUrl: "/bro3.jpg" }
    ]
  },
  { 
    title: "Navigation System", 
    members: [
      { name: "SAIVARUN", designation: "Lead", imageUrl: "/bro2.jpg" },
      { name: "SAMARTH", designation: "Slam Engineer", imageUrl: "/bro1.jpg" }
    ]
  },
  { 
    title: "Machine Learning", 
    members: [
      { name: "SUNDARKRISHNAN N", designation: "Lead", imageUrl: "/bro6.jpg" },
      { name: "PRAMATH", designation: "Data Analysis Engineer", imageUrl: "/bro8.jpg" }
    ]
  },
  { 
    title: "Communication And Outreach Management",
    members: [
      { name: "SMRITI V SOOLEBHAVI", designation: "Lead", imageUrl: "/sis2.jpg" }
    ]
  }
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">
      <BackgroundLines className="fixed inset-0 z-0 opacity-20" />
      
      <div className="relative z-10">
        <main className="container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-7xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          
          {teamSections.map((section, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-4xl font-bold text-center mb-6 text-purple-300">{section.title}</h2>
              <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto text-center">
                {section.members.map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-4 p-4 bg-gray-900 rounded-xl shadow-lg w-80">
                    <Image src={member.imageUrl} alt={member.name} width={120} height={120} className="rounded-full object-cover border-2 border-gray-600 w-40 h-40" />
                    <h2 className="text-2xl font-semibold text-purple-300">{member.name}</h2>
                    <p className="text-lg text-gray-300">{member.designation}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

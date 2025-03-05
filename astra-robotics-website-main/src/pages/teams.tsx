import Navbar from "@/components/navbar"; // Importing the default export from navbar
import { TeamMember } from "@/components/teamMember";

const teamMembers = [
  {
    name: "astra",
    role: "CEO",
    description: "John is a visionary leader with over 15 years of experience in the tech industry.",
    imageUrl: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "astra",
    role: "CTO",
    description: " Astra Robotics is an interdisciplinary student-led technical team at RV College of Engineering, Bengaluru, ",
    imageUrl: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "astra",
    role: "Lead Designer",
    description: " Astra Robotics is an interdisciplinary student-led technical team at RV College of Engineering, Bengaluru, ",
    imageUrl: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "astra",
    role: "Marketing Director",
    description: " Astra Robotics is an interdisciplinary student-led technical team at RV College of Engineering, Bengaluru, ",
    imageUrl: "/placeholder.svg?height=300&width=300"
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar /> {/* Use the default exported Navbar */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </main>
    </div>
  );
}

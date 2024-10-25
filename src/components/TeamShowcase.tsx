import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';




interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO",
    description: "Visionary leader with 15+ years of industry experience.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "CTO",
    description: "Tech innovator driving our cutting-edge solutions.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    id: 3,
    name: "Carol Williams",
    role: "CFO",
    description: "Financial expert ensuring our sustainable growth.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    id: 4,
    name: "David Brown",
    role: "COO",
    description: "Operations guru optimizing our business processes.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    id: 5,
    name: "Eva Martinez",
    role: "CMO",
    description: "Creative marketer crafting our brand story.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    id: 6,
    name: "Frank Lee",
    role: "Head of HR",
    description: "People-first leader nurturing our company culture.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    id: 7,
    name: "Grace Taylor",
    role: "Head of Product",
    description: "Product visionary turning ideas into reality.",
    imageUrl: "/placeholder.svg?height=400&width=400"
  }
]

export default function TeamShowcase() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Team</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <p className="text-xl text-gray-700 mb-8">
              Meet the brilliant minds behind our success. Each member brings unique expertise and passion to our team.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedMember(member)}
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
                    <p className="text-md text-gray-600">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full"
          >
            <img
              src={selectedMember.imageUrl}
              alt={selectedMember.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-center mb-2">{selectedMember.name}</h2>
            <p className="text-lg text-gray-600 text-center mb-4">{selectedMember.role}</p>
            <p className="text-gray-700 mb-4">{selectedMember.description}</p>
            <button
              onClick={() => setSelectedMember(null)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
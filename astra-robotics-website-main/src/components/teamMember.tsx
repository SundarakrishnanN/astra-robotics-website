import Image from 'next/image'

interface TeamMemberProps {
  name: string
  role: string
  description: string
  imageUrl: string
}

export function TeamMember({ name, role, description, imageUrl }: TeamMemberProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={imageUrl}
        alt={`${name}'s profile picture`}
        width={300}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 bg-gray-800">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-gray-300 mb-2">{role}</p>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  )
}

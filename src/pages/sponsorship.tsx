import React from "react";
import Image from "next/image";

const SponsorshipPage = () => {
  const sponsors = [
    {
      name: "SolidWorks",
      logo: "/solidworks.png",
      description: "Industry-leading 3D CAD software for engineering and design"
    },
    {
      name: "ANSYS",
      logo: "/ansys.png",
      description: "World-class engineering simulation software"
    }
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:teamastra@rvce.edu.in";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Our Valued Sponsors
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are grateful to partner with industry leaders who share our vision and support our mission.
          </p>
        </div>
      </div>

      {/* Sponsors Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl 
                       hover:bg-gray-800/70 transition-all duration-300 border border-gray-700"
            >
              <div className="bg-white rounded-xl p-4 mb-6 w-fit mx-auto">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} Logo`}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-center mb-4">{sponsor.name}</h2>
              <p className="text-gray-400 text-center">{sponsor.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-3xl border border-gray-700">
          <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of industry leaders and support the next generation of innovation.
          </p>
          <button 
            onClick={handleContactClick}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl 
                     font-semibold hover:from-blue-600 hover:to-purple-600 
                     transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mx-auto"
          >
            Contact Us
          </button>
          <p className="text-gray-400 mt-4">
            Or email us directly at: 
            <a 
              href="mailto:teamastra@rvce.edu.in" 
              className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              teamastra@rvce.edu.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPage;
import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-4 text-center">
        Always open to connecting, collaborating, and exploring new opportunities!
      </p>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center w-full max-w-md">
        <p className="text-lg">Email: <a href="mailto:teamastra@rvce.edu.in" className="text-blue-400">teamastra@rvce.edu.in</a></p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.linkedin.com/company/team-astra-robotics/" className="text-blue-400 text-3xl"><FaLinkedin /></a>
          <a href="https://www.instagram.com/astra_robotics/" className="text-pink-400 text-3xl"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

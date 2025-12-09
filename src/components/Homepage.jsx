// Authors: Lakshay Bansal (A00467478), Marko Ostrovitsa (A00448932), Ben Anderson (A00473343)
// Purpose: To display the Contact section of the Woodland Conservation website

import React from "react";
import dayBackground from "../assets/forest1.png"; // Daytime forest image
import nightBackground from "../assets/nightforest.png"; // Nighttime forest image
import { FaTree, FaLeaf, FaSeedling, FaMapMarkedAlt } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import tts from "../assets/tts";
import { IoVolumeHigh } from "react-icons/io5";

const Homepage = ({ dark }) => {
  const handleTextToSpeech = () => {
    const text = `
      Woodland Conservation Area
      Immerse yourself in nature's wonders. Discover. Learn. Protect.

      Learn more button.

      Explore Nature
      Discover trails, wildlife, and serene spots for relaxation.
      Learn more button.

      Conservation Education
      Attend workshops on sustainability and biodiversity.
      Learn more button.  

      Volunteer & Support
      Join us in tree-planting events or contribute to our cause.
      Learn more button.

      Quick Facts,
      500+ Acres of Protected Land,
      200+ Wildlife Species,
      10,000+ Annual Visitors.

      What Visitors Say
      "A serene and beautiful place to connect with nature. My kids loved the guided tour!"
      from Emily R.

      "The workshops on conservation were enlightening and fun!"
      from John D.

      Interactive Map
      Plan your visit with our interactive site map. Explore trails, picnic areas, and more.
      View map button.

      Become a Conservation Partner
      Help us protect the environment. Become a member today and make a difference.
      Join us button.

      Copyright 2025 Woodland Conservation Area. All Rights Reserved.
    `;
  
    if (tts.isSpeaking()) {
      tts.stop();
    } else {
      tts.speak(text);
    }
  };

  return (
    <div data-cy="header"
      className={`flex flex-col min-h-screen bg-cover bg-center transition-all duration-500`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${
          dark ? nightBackground : dayBackground
        })`,
      }}
    >
      {/* Header Section */}
      <header className="text-white py-20 px-6">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-md">
            Woodland Conservation Area
          </h1>

          <button
            onClick={handleTextToSpeech}
            className="ml-4 -mt-12 bg-yellow-400 text-gray-900 dark:bg-yellow-500 dark:text-gray-100 rounded-full p-5 focus:outline-none"
          >
            <IoVolumeHigh className="text-3xl" />
          </button>
        </div>

        <p className="text-xl md:text-3xl max-w-3xl mx-auto text-center drop-shadow-md mt-6">
          Immerse yourself in nature's wonders. Discover. Learn. Protect.
        </p>
        <button
          className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 mt-6 rounded-full shadow-lg font-semibold transition block mx-auto"
          onClick={() => alert("Explore Section Coming Soon!")}
        >
          Explore Now
        </button>
      </header>

      {/* Main Sections */}
      <div className="flex-1 text-gray-900 bg-white/80 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Interactive Cards */}
          <div data-cy="iCards" className="text-center bg-green-100/70 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaTree className="text-green-600 text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Explore Nature</h2>
            <p className="text-lg">
              Discover trails, wildlife, and serene spots for relaxation.
            </p>
            <button
              className="text-green-600 hover:text-green-800 mt-4 inline-flex items-center"
              onClick={() => alert("Nature Exploration Section Coming Soon!")}
            >
              Learn More <BsArrowRightCircle className="ml-2" />
            </button>
          </div>
          <div className="text-center bg-blue-100/70 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaLeaf className="text-blue-600 text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Conservation Education</h2>
            <p className="text-lg">
              Attend workshops on sustainability and biodiversity.
            </p>
            <button
              className="text-blue-600 hover:text-blue-800 mt-4 inline-flex items-center"
              onClick={() => alert("Education Section Coming Soon!")}
            >
              Learn More <BsArrowRightCircle className="ml-2" />
            </button>
          </div>
          <div className="text-center bg-yellow-100/70 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaSeedling className="text-yellow-600 text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Volunteer & Support</h2>
            <p className="text-lg">
              Join us in tree-planting events or contribute to our cause.
            </p>
            <button
              className="text-yellow-600 hover:text-yellow-800 mt-4 inline-flex items-center"
              onClick={() => alert("Volunteer Section Coming Soon!")}
            >
              Learn More <BsArrowRightCircle className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Facts Section */}
      <div data-cy="facts" className="bg-green-600/90 text-white py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-6">Quick Facts</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p>Acres of Protected Land</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p>Wildlife Species</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">10,000+</h3>
            <p>Annual Visitors</p>
          </div>
        </div>
      </div>

      {/* Visitor Reviews Section */}
      <div data-cy="reviews" className="py-12 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8">What Visitors Say</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="italic text-lg">
              "A serene and beautiful place to connect with nature. My kids
              loved the guided tour!"
            </p>
            <footer className="mt-4 text-right">- Emily R.</footer>
          </blockquote>
          <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="italic text-lg">
              "The workshops on conservation were enlightening and fun!"
            </p>
            <footer className="mt-4 text-right">- John D.</footer>
          </blockquote>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="bg-gray-900 text-white py-16 px-8">
        <div className="text-center mb-6">
          <FaMapMarkedAlt className="text-6xl mx-auto mb-4 text-green-400" />
          <h2 className="text-4xl font-bold">Interactive Map</h2>
          <p className="text-lg mt-2">
            Plan your visit with our interactive site map. Explore trails,
            picnic areas, and more.
          </p>
        </div>
        <button
          className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full shadow-lg font-semibold transition mx-auto block"
          onClick={() => alert("Map Feature Coming Soon!")}
        >
          View Map
        </button>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-green-700 text-white py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Become a Conservation Partner</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Help us protect the environment. Become a member today and make a
          difference.
        </p>
        <button
          className="bg-white text-green-600 font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:bg-gray-200 transition"
          onClick={() => alert("Membership Coming Soon!")}
        >
          Join Us
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p className="text-lg">
          © {new Date().getFullYear()} Woodland Conservation Area. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
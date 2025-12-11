// Authors: Lakshay Bansal (A00467478), Marko Ostrovitsa (A00448932), Ben Anderson (A00473343), Sam Oystreck (A00478278)
// Purpose: To display the Contact section of the Woodland Conservation website

import React from "react";
import dayBackground from "../assets/DSC08560b-scaled.jpg"; // Daytime forest image
import nightBackground from "../assets/DSC08560b-scaled.jpg"; // Nighttime forest image
import { FaTree, FaLeaf, FaSeedling, FaMapMarkedAlt } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import tts from "../assets/tts";
import { IoVolumeHigh } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Homepage = ({ dark }) => {

const navigate = useNavigate();

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
      <header className="text-white py-60 px-6">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-calibri mb-6 drop-shadow-md dark:text-yellow-100">
            Woodland Conservation Area
          </h1>

          <button
            onClick={handleTextToSpeech}
            className="ml-4 -mt-12 bg-yellow-400 text-gray-900 dark:bg-yellow-500 dark:text-gray-100 rounded-full p-5 focus:outline-none"
          >
            <IoVolumeHigh className="text-3xl" />
          </button>
        </div>

        <p className="text-xl md:text-3xl max-w-3xl mx-auto text-center drop-shadow-md mt-6 dark:text-yellow-100">
          Immerse yourself in nature's wonders. Discover. Learn. Protect.
        </p>
      </header>

      {/* Quick Facts Section */}
      <div data-cy="facts" className="bg-green-600/90 text-white py-12 px-8 dark:bg-green-900/90">
        <h2 className="text-4xl font-calibri text-center mb-6 dark:text-yellow-100">Quick Facts</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center dark:text-yellow-100">
          <div>
            <h3 className="text-3xl font-calibri dark:text-yellow-100">500+</h3>
            <p>Acres of Protected Land</p>
          </div>
          <div>
            <h3 className="text-3xl font-calibri dark:text-yellow-100">200+</h3>
            <p>Wildlife Species</p>
          </div>
          <div>
            <h3 className="text-3xl font-calibri">10,000+</h3>
            <p>Annual Visitors</p>
          </div>
        </div>
      </div>

      {/* Visitor Reviews Section */}
      <div data-cy="reviews" className="py-12 px-6 bg-lightbrown ">
        <h2 className="text-4xl text-white font-calibri text-center mb-8 dark:text-yellow-100">What Visitors Say</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="calibri text-lg">
              "A serene and beautiful place to connect with nature. My kids
              loved the guided tour!"
            </p>
            <footer className="mt-4 text-right">- Emily R.</footer>
          </blockquote>
          <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="calibri text-lg">
              "The workshops on conservation were enlightening and fun!"
            </p>
            <footer className="mt-4 text-right">- John D.</footer>
          </blockquote>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="bg-gray-900 text-white py-16 px-8 dark:text-yellow-100">
        <div className="text-center mb-6">
          <FaMapMarkedAlt className="text-6xl mx-auto mb-4 text-green-400" />
          <h2 className="text-4xl font-calibri">Interactive Map</h2>
          <p className="text-lg mt-2">
            Plan your visit with our interactive site map. Explore trails,
            picnic areas, and more.
          </p>
        </div>
        <button
          className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 dark:text-yellow-100 rounded-full shadow-lg font-calibri transition mx-auto block"
          onClick={() => navigate('/sitemap')}
        >
          View Map
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center dark:text-yellow-100">
        <p className="text-lg">
          © {new Date().getFullYear()} Woodland Conservation Area. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
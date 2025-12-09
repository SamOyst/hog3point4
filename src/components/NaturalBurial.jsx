// Author: Lakshay Bansal (A00467478) Piper Barbour (A00473078)
// Purpose: This file represents the Natural Burial component.  

import React, { useRef, useState, useEffect } from "react";
import outlookImage from "../assets/outlook.jpg"; 
import { IoVolumeHigh, IoVolumeOff } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const NaturalBurial = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [showMoreMission, setShowMoreMission] = useState(false);
  const [voices, setVoices] = useState([]);
  const speechSynthesisRef = useRef(null);
  const textRef = useRef("");

  useEffect(() => {
    const loadVoices = () => {
      const voicesList = window.speechSynthesis.getVoices();
      setVoices(voicesList);
    };
    
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  // Handle text-to-speech
  const handleTextToSpeech = () => {
    if (speechSynthesisRef.current && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (speechSynthesisRef.current && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      textRef.current = `
        Welcome to the St. Margaret’s Bay Area Woodland Conservation Site.
        Situated in Halifax, Nova Scotia, this 200-acre natural haven is a vital ecosystem, home to diverse flora and fauna.
        It represents a commitment to preserving biodiversity and fostering a connection between people and nature.
        Our mission is to protect, sustain, and inspire, ensuring that the woodland thrives for future generations.
      `;
      const utterance = new SpeechSynthesisUtterance(textRef.current);
      
      // Select a soft female voice
      const selectedVoice = voices.find(voice => voice.name.includes("Female") && voice.lang === "en-US");
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
// Adjust pitch and rate for a softer tone
 utterance.pitch = 1.4; // Slightly higher pitch
  utterance.rate = 0.9; // Slightly slower rate

      speechSynthesisRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      utterance.onend = () => {
        speechSynthesisRef.current = null;
        setIsPaused(false);
      };
    }
  };

  return (
    <div className="p-8 bg-white dark:bg-darkerBlue text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div data-cy="header" className="flex items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-center mb-5 text-gray-900 dark:text-gray-100">
          Natural Burial at St. Margaret’s Bay Area Woodland Conservation Site
        </h1>
      </div>
      
      <div data-cy="desc">
        <p className="text-lg flex p-8 mb-5">
          Natural burial is an eco-friendly approach to burial where the body is returned to the earth with minimal environmental impact, 
          using biodegradable materials and without harmful chemicals.
          <button
            onClick={handleTextToSpeech}
            className="ml-4 bg-yellow-400 text-gray-900 dark:bg-yellow-500 dark:text-gray-100 rounded-full p-5 focus:outline-none"
          >
            {speechSynthesisRef.current && !isPaused ? (
              <IoVolumeOff className="text-3xl" />
            ) : (
              <IoVolumeHigh className="text-3xl" />
            )}
          </button>
        </p>
      </div>

      <div data-cy="mainDiv" className="bg-green-500 dark:bg-green-800 rounded-xl p-5 w-full">
        <p className="text-2xl flex items-center justify-center w-full m-5 text-center">
          Options for Burial Material
        </p>
        <table className=" table-fixed text-center w-full border-separate border-spacing-5">
          <tr>
            <td className="bg-white dark:bg-darkerBlue rounded-lg p-5 m-10 leading-loose text-xl">Pinebox<img 
              src="src\assets\pinebox.jpg" alt="Pinebox Image" className="mx-auto rounded-lg w-[80%]"></img><br></br>
              A biodegradable box with limited affect on the surrounding environment</td>
            <td className="bg-white dark:bg-darkerBlue rounded-lg m-10 leading-loose text-xl">Shroud<img 
              src="src\assets\burialshroud.png" alt="Shroud Image" className="mx-auto rounded-lg w-[75%]"></img><br></br>
              A simple biodegradable cloth wrapping</td>
          </tr>
        </table>
        <p className="text-2xl flex items-center justify-center w-full my-5 text-center">
          Options for Burial Marking
        </p>
        <table className="w-full table-fixed text-center border-separate border-spacing-5">
          <tr>
            <td className="bg-white dark:bg-darkerBlue rounded-lg p-5 leading-loose">Small Bush<img 
              src="src\assets\bushmarking.jpg" alt="Bush Marker Image" className="mx-auto rounded-lg w-[80%]"></img></td>
            <td className="bg-white dark:bg-darkerBlue rounded-lg m-10 leading-loose">Wooden Sign<img 
              src="src\assets\signmarking.jpg" alt="Sign Image" className="mx-auto rounded-lg w-[75%]"></img></td>  
            <td className="bg-white dark:bg-darkerBlue rounded-lg m-10 leading-loose">GPS Coordinates<img 
              src="src\assets\gps.jpeg" alt="GPS Image" className="mx-auto rounded-lg w-[82%]"></img></td>
          </tr>
        </table>
      </div>
    <div className="text-lg flex p-8">
      <p>Please reach out to us through our Contact page to learn more about individual and family burial.</p>
    </div>
    </div>
  );
};

export default NaturalBurial;
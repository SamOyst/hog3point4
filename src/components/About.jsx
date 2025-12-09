/**
 * @file About.jsx
 * @authors
 *  Lakshay Bansal (A00467478),
 *  Daniel Johnston (A00450815)
 * @description React component for the About page, featuring text-to-speech,
 * dynamic accordion sections, Tailwind styling, and species lists derived from
 * ecosystem data.
 */

import React, { useRef, useState, useEffect } from "react";
import data from '../data/EcosystemData';
import outlookImage from "../assets/outlook.jpg";
import { IoVolumeHigh, IoVolumeOff } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import tts from "../assets/tts";

/**
 * About Component
 *
 * Renders the About page, including:
 * - Speech synthesis for accessibility
 * - Species lists (flora / fauna / fungi)
 * - Accordion UI sections
 *
 * @component
 * @returns {JSX.Element}
 */
const About = () => {

  const [isPaused, setIsPaused] = useState(false);

  const [accordionState, setAccordionState] = useState({
    floraFauna: false,
    heritageLegacy: false,
    mission: false,
    vision: false,
  });

  const floraContentRef = useRef(null);

  /**
   * Loads available voices for speech synthesis and updates component state.
   *
   * @function loadVoices
   * @returns {void}
   */
  useEffect(() => {
    const loadVoices = () => {
      const voicesList = window.speechSynthesis.getVoices();
      setVoices(voicesList);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  /**
   * Handles text-to-speech behavior.
   *
   * - If audio is playing → pause it
   * - If paused → resume it
   * - If not yet played → initialize speech, select a voice, speak
   *
   * @function handleTextToSpeech
   * @returns {void}
   */
  const handleTextToSpeech = () => {
    if (speechSynthesisRef.current && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (speechSynthesisRef.current && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      textRef.current = `Welcome to the St. Margaret’s Bay Area Woodland Conservation Site.`;
      const utterance = new SpeechSynthesisUtterance(textRef.current);

      const selectedVoice = voices.find(
        (voice) => voice.name.includes("Female") && voice.lang === "en-US"
      );
      if (selectedVoice) utterance.voice = selectedVoice;

      utterance.pitch = 1.4;
      utterance.rate = 0.9;

      speechSynthesisRef.current = utterance;
      window.speechSynthesis.speak(utterance);

      utterance.onend = () => {
        speechSynthesisRef.current = null;
        setIsPaused(false);
      };
    }
  };

  /**
   * Toggles a specific accordion section open or closed.
   *
   * @function toggleAccordion
   * @param {string} section - Section key: "floraFauna", "heritageLegacy", "mission", or "vision".
   * @returns {void}
   */
  const toggleAccordion = (section) => {
    setAccordionState((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  /**
   * Extracted species lists.
   * @constant
   * @type {string[]}
   */
  const floraNames = Array.from(new Set(
    data
      .filter((i) => i.category?.toLowerCase().includes("flora"))
      .map((i) => i.name)
  )).sort();

  const faunaNames = Array.from(new Set(
    data
      .filter((i) => i.category?.toLowerCase().includes("fauna"))
      .map((i) => i.name)
  )).sort();

  const fungiNames = Array.from(new Set(
    data
      .filter(
        (i) =>
          i.category &&
          (i.category.toLowerCase().includes("fungi") ||
            i.category.toLowerCase().includes("lichen"))
      )
      .map((i) => i.name)
  )).sort();

  return (
    <div className="p-8 bg-yellow-100 dark:bg-gray-900 text-black dark:text-yellow-100 min-h-screen flex flex-col items-center">

      {/* Header & TTS */}
      <div className="flex items-center justify-center w-full mb-10" data-cy="about-heading">
        <h1 className="text-4xl p-8 text-center flex-1 text-black dark:text-yellow-100">
          About St. Margaret’s Bay Area Woodland Conservation Site
        </h1>

        <button
          onClick={handleTextToSpeech}
          data-cy="tts-toggle"
          className="ml-4 bg-blue-400 dark:bg-blue-500 text-black dark:text-yellow-100 rounded-full p-5"
        >
          <IoVolumeHigh className="text-3xl" />
        </button>
      </div>

      {/* Image */}
      <div className="mb-10">
        <img
          src={outlookImage}
          alt="Woodland Outlook"
          data-cy="about-image"
          className="w-full h-auto max-w-4xl rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Species Section */}
      <div className="w-full max-w-4xl mb-0">
        <div className="mb-4">
          <button
            className="flex justify-between w-full p-4 bg-white dark:bg-gray-800 text-2xl rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => toggleAccordion("floraFauna")}
            data-cy="accordion-toggle-floraFauna"
          >
            <span>Species</span>
            {accordionState.floraFauna ? (
              <AiOutlineMinus className="text-3xl" />
            ) : (
              <AiOutlinePlus className="text-3xl" />
            )}
          </button>

          <div
            ref={floraContentRef}
            data-cy="accordion-content-floraFauna"
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
            style={{ maxHeight: accordionState.floraFauna ? undefined : "0px" }}
          >
            <div className="p-4 text-2xl bg-gray-50 dark:bg-gray-900 rounded-b-lg shadow-md">
              <p className="mt-4">
                Explore the unique diversity of life thriving in this woodland.
              </p>
            </div>
            <div className="p-4 text-xl bg-yellow-50 dark:bg-gray-700 rounded-b-lg shadow-md text-black dark:text-yellow-100">

              <p className="mt-4">
                Explore the unique diversity of life thriving in this woodland.
              </p>

              {/* Fauna */}
              <div className="mt-4" data-cy="fauna-section">
                <h3 className="text-2xl mb-2">Fauna</h3>
                <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-1 text-lg">
                  {faunaNames.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>

              {/* Flora */}
              <div className="mt-4" data-cy="flora-section">
                <h3 className="text-2xl mb-2">Flora</h3>
                <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-1 text-lg">
                  {floraNames.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>

              {/* Fungi */}
              <div className="mt-4" data-cy="fungi-section">
                <h3 className="text-2xl mb-2">Fungi</h3>
                <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-1 text-lg">
                  {fungiNames.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Heritage Section */}
      <div className="w-full max-w-4xl mb-4">
        <button
          data-cy="accordion-toggle-heritageLegacy"
          className="flex justify-between w-full p-4 bg-white dark:bg-gray-800 text-2xl rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => toggleAccordion("heritageLegacy")}
        >
          <span>Heritage and Legacy</span>
          {accordionState.heritageLegacy ? (
            <AiOutlineMinus className="text-3xl" />
          ) : (
            <AiOutlinePlus className="text-3xl" />
          )}
        </button>
        <div
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${accordionState.heritageLegacy ? "max-h-screen" : "max-h-0"
            }`}
        >
          <div className="p-4 text-xl bg-yellow-50 dark:bg-gray-700 rounded-b-lg shadow-md text-black dark:text-yellow-100">
            <p>
              The woodland is a testament to the natural history of the region.
              Each tree and stone carries stories of the past, adding to the rich
              narrative of this thriving ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-4xl mb-4">
        <button
          data-cy="accordion-toggle-mission"
          className="flex justify-between w-full p-4 bg-white dark:bg-gray-800 text-2xl rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => toggleAccordion("mission")}
        >
          <span>Mission Statement</span>
          {accordionState.mission ? (
            <AiOutlineMinus className="text-3xl" />
          ) : (
            <AiOutlinePlus className="text-3xl" />
          )}
        </button>

        <div data-cy="accordion-content-mission"
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${accordionState.mission ? "max-h-screen" : "max-h-0"
            }`}
        >
          <div className="p-4 text-xl bg-yellow-50 dark:bg-gray-700 rounded-b-lg shadow-md text-black dark:text-yellow-100">
            <p>
              Our mission is to preserve and enhance the ecological integrity of
              this woodland site. We aim to protect habitats, promote sustainable
              practices, and foster a deep appreciation for our environment
              through education and community engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="w-full max-w-4xl mb-12">
        <button
          data-cy="accordion-toggle-vision"
          className="flex justify-between w-full p-4 bg-white dark:bg-gray-800 text-2xl rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => toggleAccordion("vision")}
        >
          <span>Vision</span>
          {accordionState.vision ? (
            <AiOutlineMinus className="text-3xl" />
          ) : (
            <AiOutlinePlus className="text-3xl" />
          )}
        </button>

        <div data-cy="accordion-content-vision"
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${accordionState.vision ? "max-h-screen" : "max-h-0"
            }`}
        >
          <div className="p-4 text-xl bg-yellow-50 dark:bg-gray-700 rounded-b-lg shadow-md text-black dark:text-yellow-100">
            <p>
              We envision a thriving ecosystem that serves as a beacon for
              conservation efforts, inspiring future generations to cherish and
              protect this natural treasure.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
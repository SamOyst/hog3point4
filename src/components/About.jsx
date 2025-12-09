// Author: Lakshay Bansal (A00467478), Daniel Johnston (A00450815), Ben Anderson (A00473343)
// Prupose: This file represents an about component.

import React, { useRef, useState, useEffect } from "react";
import data from "./floraData";
import outlookImage from "../assets/outlook.jpg";
import { IoVolumeHigh, IoVolumeOff } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import tts from "../assets/tts";

const About = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [accordionState, setAccordionState] = useState({
    floraFauna: false,
    heritageLegacy: false,
    mission: false,
    vision: false,
  });
  const [showMoreMission, setShowMoreMission] = useState(false);
  const floraContentRef = useRef(null);

  const handleTextToSpeech = () => {
    const text = `
      About St. Margaret’s Bay Area Woodland Conservation Site. 
      Explore the unique diversity of life thriving in this woodland.
      
      Species.
        Fauna.
        Alder Flycatcher,
        American Dog Tick,
        Banded Longhorn Beetle,
        Black Firefly,
        Bothersome Deer Fly,
        Brown Water Scorpion,
        Dragonhunter,
        Eastern American Toad,
        Eastern Floater,
        Eastern Red-backed Salamander,
        Goldenrod Gall Fly,
        Grass Spiders,
        Green Immigrant Leaf Weevil,
        Laurel Sphinx,
        Northern Short-tailed Shrew,
        Otiorhynchus carinatopunctatus,
        Painted Turtle,
        Pickerel Frog,
        Rainbow Smelt,
        Saddleback Harvestman,
        Strangalepta Flower Longhorn Beetle.

        Flora.
          Alder Buckthorn,
          Alternate Leaved Dogwood,
          American Royal Fern,
          Balsam Fir,
          Beaked Hazelnut,
          Black Huckleberry,
          Bog Aster,
          Bog Myrtle,
          Canada Goldenrod (Solidago),
          Canada Mayflower,
          Cinnamon ,
          Common Cinquefoil,
          Common Columbine,
          Common Dandelion,
          Common Hemp Nettle,
          Common Honeysuckle,
          Common Selfheal,
          Common Selfheal (Prunella),
          Common Valerian,
          Common Wrinkled-Leaved Goldenrod,
          Corn Speedwell,
          Creeping Buttercup,
          Creeping Jenny,
          Creeping Snowberry,
          Dame Rocket,
          Dwarf Raspberry,
          Eastern White Pine,
          Ghost Pipe,
          Greater Plantain,
          Grey Alder,
          Hay-scented Fern,
          Heath Speedwell,
          Herb Robert,
          Himalayan Balsam,
          Intermediate Wood Fern,
          Japanese Barberry,
          Lingonberry,
          Little Floatingheart,
          Marsh Skullcap,
          Mountain Holly,
          Mountain Maple,
          Mountain Woodsorrel,
          Multiflora Rose,
          New York Fern,
          Northern Bayberry,
          Northern Lady-fern,
          Northern Oak Fern,
          Northern Starflower,
          Northern Wild Raisin,
          Norway Maple,
          Oxeye Daisy,
          Pickerelweed,
          Pineapple Weed,
          Pinesap,
          Purple Foxglove,
          Ragwort,
          Red Berried Elder,
          Red Clover,
          Red Currant,
          Red Osier Dogwood,
          Red Raspberry,
          Rhodora,
          Sensitive Fern,
          Sheep Laurel,
          Smooth Gooseberry,
          Stairstep Moss,
          Swamp Alder,
          Swamp Laurel,
          Tamarack,
          Threeleaf Goldthread,
          Variegated Yellow Pond Lily,
          Velvetleaf Blueberry,
          Virginia Creeper,
          Virginia Strawberry,
          Western Poison Ivy,
          White Ash,
          White Meadowsweet,
          Wild Sarsaparilla,
          Winterberry Holly,
          Woodland Strawberry,
          Yellow Coastal Birch.

        Fungi.
          Black Knot
          Chaga
          Common Coral Slime
          Dyer Polypore
          Lactarius Thyinos
          Methuselah Beard Lichen
          Northern Red Belt
          Painted Suillus
          Tree Lungwort
          Varied Rag Lichen

      Heritage and Legacy.
        The woodland is a testament to the natural history of the
        region. Each tree and stone carries stories of the past, adding
        to the rich narrative of this thriving ecosystem.

      Mission Statement
        Our mission is to preserve and enhance the ecological integrity 
        of this woodland site. We aim to protect habitats, promote 
        sustainable practices, and foster a deep appreciation for our 
        environment through education and community engagement.

      Vision
        We envision a thriving ecosystem that serves as a beacon for 
        conservation efforts, inspiring future generations to cherish 
        and protect this natural treasure.
    `;

    // Start speaking normally
    if (tts.isSpeaking()) {
      tts.stop(); // If speaking → stop immediately
    } else {
      tts.speak(text); // If not speaking → start speech
    }
  };

  // Toggle accordion state
  const toggleAccordion = (section) => {
    setAccordionState((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Build species name lists
  const floraNames = Array.from(
    new Set(
      data
        .filter((i) => i.category && i.category.toLowerCase().includes("flora"))
        .map((i) => i.name)
    )
  ).sort();

  const faunaNames = Array.from(
    new Set(
      data
        .filter((i) => i.category && i.category.toLowerCase().includes("fauna"))
        .map((i) => i.name)
    )
  ).sort();

  const fungiNames = Array.from(
    new Set(
      data
        .filter(
          (i) =>
            i.category &&
            (i.category.toLowerCase().includes("fungi") ||
              i.category.toLowerCase().includes("lichen"))
        )
        .map((i) => i.name)
    )
  ).sort();

  return (
    <div className="p-8 bg-white dark:bg-darkerBlue text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="flex items-center justify-center w-full mb-10">
        <h1 className="text-5xl font-bold text-center flex-1">
          About St. Margaret’s Bay Area Woodland Conservation Site
        </h1>

        <button
          onClick={handleTextToSpeech}
          className="ml-4 bg-yellow-400 text-gray-900 dark:bg-yellow-500 dark:text-gray-100 rounded-full p-5 focus:outline-none"
        >
          <IoVolumeHigh className="text-3xl" />
        </button>
      </div>

      {/* Image */}
      <div className="mb-10">
        <img
          src={outlookImage}
          alt="Woodland Outlook"
          className="w-full h-auto max-w-4xl rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>

      {/* Species Section */}
      <div className="w-full max-w-4xl mb-0">
        <div className="mb-4">
          <button
            className="flex justify-between w-full p-4 bg-gray-100 dark:bg-gray-800 text-2xl font-semibold rounded-lg shadow-md focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => toggleAccordion("floraFauna")}
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
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
            style={{ maxHeight: accordionState.floraFauna ? undefined : "0px" }}
          >
            <div className="p-4 text-2xl bg-gray-50 dark:bg-gray-900 rounded-b-lg shadow-md">
              <p className="mt-4">
                Explore the unique diversity of life thriving in this woodland.
              </p>

              <div className="mt-4">
                <h3 className="text-2xl font-semibold mb-2">Fauna</h3>
                {faunaNames.length ? (
                  <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-1 text-lg">
                    {faunaNames.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg">No fauna items available.</p>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-semibold mb-2">Flora</h3>
                {floraNames.length ? (
                  <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-1 text-lg">
                    {floraNames.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg">No flora items available.</p>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-semibold mb-2">Fungi</h3>
                {fungiNames.length ? (
                  <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-1 text-lg">
                    {fungiNames.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg">No fungi items available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Heritage and Legacy Section */}
      <div className="w-full max-w-4xl mb-4">
        <button
          className="flex justify-between w-full p-4 bg-gray-100 dark:bg-gray-800 text-2xl font-semibold rounded-lg shadow-md focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700"
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
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            accordionState.heritageLegacy ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4 text-2xl bg-gray-50 dark:bg-gray-900 rounded-b-lg shadow-md">
            <p>
              The woodland is a testament to the natural history of the region.
              Each tree and stone carries stories of the past, adding to the
              rich narrative of this thriving ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-4xl mb-4">
        <button
          className="flex justify-between w-full p-4 bg-gray-100 dark:bg-gray-800 text-2xl font-semibold rounded-lg shadow-md focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => toggleAccordion("mission")}
        >
          <span>Mission Statement</span>
          {accordionState.mission ? (
            <AiOutlineMinus className="text-3xl" />
          ) : (
            <AiOutlinePlus className="text-3xl" />
          )}
        </button>
        <div
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            accordionState.mission ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4 text-2xl bg-gray-50 dark:bg-gray-900 rounded-b-lg shadow-md">
            <p>
              Our mission is to preserve and enhance the ecological integrity of
              this woodland site. We aim to protect habitats, promote
              sustainable practices, and foster a deep appreciation for our
              environment through education and community engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="w-full max-w-4xl mb-12">
        <button
          className="flex justify-between w-full p-4 bg-gray-100 dark:bg-gray-800 text-2xl font-semibold rounded-lg shadow-md focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => toggleAccordion("vision")}
        >
          <span>Vision</span>
          {accordionState.vision ? (
            <AiOutlineMinus className="text-3xl" />
          ) : (
            <AiOutlinePlus className="text-3xl" />
          )}
        </button>
        <div
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            accordionState.vision ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4 text-2xl bg-gray-50 dark:bg-gray-900 rounded-b-lg shadow-md">
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
/**
 * @file Ecosystem.jsx
 * @authors
 *  Kunal Singla (A00461346),
 *  Cole Turner (A00469026),
 *  Bahnu Prakash (A00468530),
 *  Daniel Johnston (A00450815)
 *  Ben Anderson (A00473343)
 * ChatGPT
 * @description React component that renders the ecosystem page, including search,
 * infinite scrolling, and item detail modals.
 */

import React, { useState, useEffect, useRef } from 'react';
import data from '../data/EcosystemData'; // Importing images and info from data file
import tts from '../assets/tts';
import { IoVolumeHigh } from "react-icons/io5";

/**
 * Ecosystem Component
 * @description Displays a searchable, scrollable grid of ecosystem items and a modal for details.
 * @returns {JSX.Element} Rendered ecosystem page.
 */
const ecosystem = () => {

  /** 
   * @state selectedItem
   * @description Holds the item currently opened in the modal. Null when closed.
   */
  const [selectedItem, setSelectedItem] = useState(null);

  /**
   * closeModal
   * @description Closes the modal by clearing selectedItem.
   * @returns {void}
   */
  const closeModal = () => setSelectedItem(null);

  /** 
   * @state filter
   * @description Current category filter. Defaults to "All".
   */
  const [filter] = useState('All');

  /**
   * @state searchTerm
   * @description Holds the user’s live input in the search bar.
   */
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * @state activeSearch
   * @description The search term applied when the Search button is clicked.
   */
  const [activeSearch, setActiveSearch] = useState('');

  /**
   * handleSearchClick
   * @description Applies the current searchTerm as the active search filter.
   * @returns {void}
   */
  const handleSearchClick = () => setActiveSearch(searchTerm);

  /**
   * Filtered data based on selected category and search
   * @returns {Array} Array of filtered ecosystem items.
   */
  const filteredData =
    (filter === 'All' ? data : data.filter((item) => item.category === filter))
      .filter((item) =>
        item.name.toLowerCase().includes(activeSearch.toLowerCase()) ||
        item.category.toLowerCase().includes(activeSearch.toLowerCase())
      );

  // ===== Infinite Scroll Logic =====

  const BATCH_SIZE = 6;

  /**
   * @state visibleCount
   * @description Number of visible items in the grid at one time.
   */
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  /**
   * @ref sentinelRef
   * @description Used for detecting scroll position to load more items.
   */
  const sentinelRef = useRef(null);

  /**
   * useEffect — Reset visible items when search or filter changes
   */
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [filter, activeSearch]);

  /**
   * useEffect — Infinite scroll observer
   */
  useEffect(() => {
    if (!sentinelRef.current) return;

    /**
     * @callback IntersectionObserverCallback
     * @param {IntersectionObserverEntry[]} entries
     */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCount((prev) =>
              Math.min(prev + BATCH_SIZE, filteredData.length)
            );
          }
        });
      },
      { root: null, rootMargin: '200px', threshold: 0.1 }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [filteredData.length]);

  /**
   * visibleData
   * @description Data currently shown in grid.
   * @returns {Array}
   */
  const visibleData = filteredData.slice(0, visibleCount);

  /**
   * @returns {JSX.Element}
   * @description Main rendered UI for the Ecosystem component.
   */
  return (
    /**
     * Main page container
     * @description Provides padding, background color, and full-height layout.
     */
    <div className="p-8 bg-yellow-100 dark:bg-gray-900">

      {/* ============================================
        Header + Intro Paragraph + TTS BUTTON
      ============================================ */}
      <div className="text-center flex flex-col items-center">

        <div className="flex items-center justify-center">
          <h1
            className="text-4xl p-8 text-center text-black dark:text-yellow-100"
            data-cy="head"
          >
            The Ecosystem of the St. Margaret's Bay Woodland Conservation Area
          </h1>

          {/* TTS Button — title + paragraph text */}
          <button
            onClick={() =>
              tts.toggleSpeak(
                "The Ecosystem of the St. Margaret's Bay Woodland Conservation Area. " +
                "The Woodland is home to a vast and diverse ecosystem filled with many different species. " +
                "Its terrain is also unique, featuring a mix of wetlands and forest. " +
                "Use the search bar to explore species within the Woodland. " +
                "Click on an image to learn more."
              )
            }
            className="ml-4 bg-yellow-400 text-gray-900 dark:bg-yellow-500 dark:text-gray-100 rounded-full p-5 focus:outline-none"
          >
            <IoVolumeHigh className="text-3xl" />
          </button>
        </div>

        <p className="text-2xl pt-4 text-center text-black dark:text-yellow-100">
          The Woodland is home to a vast and diverse ecosystem filled with many different species.
          Its terrain is also unique, featuring a mix of wetlands and forest.
          Use the search bar to explore species within the Woodland.
          Click on an image to learn more.
        </p>
      </div>

      {/* ============================================
        Search Bar
      ============================================ */}
      <div className="max-w-md mx-auto mb-8 flex gap-3" data-cy="searchBar">
        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchTerm}
          /**
           * @event onChange
           * @param {React.ChangeEvent<HTMLInputElement>} e
           * @description Updates live searchTerm as the user types.
           */
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-xl text-black dark:text-yellow-100 placeholder-black dark:placeholder-yellow-100 w-full px-5 py-3 rounded-lg border border-black dark:border-yellow-100 bg-white dark:bg-gray-700"
        />

        <button
          /**
           * @event onClick
           * @description Applies the current search term and triggers filtering.
           */
          onClick={handleSearchClick}
          className="text-xl px-6 py-2 bg-blue-400 dark:bg-blue-500 text-black dark:text-yellow-100 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* ============================================
        Grid of Items
      ============================================ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-cy="images">
        {visibleData.map((item, index) => (
          <div
            key={index}
            /**
             * @event onClick
             * @description Sets this item as the active modal item.
             * @param {Object} item — The selected ecosystem entry.
             */
            onClick={() => setSelectedItem(item)}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <img
              /**
               * @prop item.image — The image to display.
               * @prop item.name — Used as alt text for accessibility.
               */
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h2 className="text-xl text-white">{item.name}</h2>
              <p className="text-sm text-gray-300">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Infinite Scroll Sentinel */}
      <div ref={sentinelRef} className="w-full flex justify-center items-center mt-8">
        {visibleCount < filteredData.length}
      </div>

      {/* ============================================
        Modal + TTS BUTTON
      ============================================ */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative max-w-lg w-full">

            {/* ★ Small Modal TTS Button */}
            <button
              onClick={() =>
                tts.toggleSpeak(
                  `${selectedItem.name}. Category: ${selectedItem.category}. ${selectedItem.description}`
                )
              }
              className="absolute top-2 left-2 bg-yellow-400 text-gray-900 dark:bg-yellow-500 dark:text-gray-100 rounded-full p-2 focus:outline-none"
            >
              <IoVolumeHigh className="text-xl" />
            </button>

            {/* Close Button */}
            <button
              /**
               * @event onClick
               * @description Closes modal and clears selectedItem.
               */
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
            >
              ✕
            </button>

            {/* Modal Image */}
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            {/* Modal Title */}
            <h2 className="text-2xl mb-2 text-black dark:text-yellow-100">
              {selectedItem.name}
            </h2>

            {/* Modal Description */}
            <p className="text-black dark:text-yellow-100">
              {selectedItem.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ecosystem;

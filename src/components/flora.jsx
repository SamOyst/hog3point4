//Authors: Kunal Singla(A00461346), Cole Turner (A00469026), Bahnu Prakash (A00468530), DAaniel Johnston (A00450815)
//Purpose: This file represents a componet to display a flora fauna fungi page.

import React, { useState, useEffect, useRef } from 'react';
import data from './floraData';

const FloraFaunaFungi = () => {
  const [selectedItem, setSelectedItem] = useState(null); 
  // State to store the currently selected item for displaying in a modal. Initially null.

  const [filter, setFilter] = useState('All'); 
  // State to manage the current filter category (e.g., Flora, Fauna, Fungi). Defaults to 'All'.

  const [searchTerm, setSearchTerm] = useState('');
  // State to manage the search term input.

  const [activeSearch, setActiveSearch] = useState('');
  // State to manage the active search filter applied only when button is pressed.

  // Function to close the modal by resetting the selected item to null
  const closeModal = () => setSelectedItem(null);

  // Function to handle the search button click
  const handleSearchClick = () => {
    setActiveSearch(searchTerm);
  };

  // Function to filter the data based on the current filter and active search term
  const filteredData = (filter === 'All' ? data : data.filter((item) => item.category === filter))
    .filter((item) => 
      item.name.toLowerCase().includes(activeSearch.toLowerCase()) ||
      item.category.toLowerCase().includes(activeSearch.toLowerCase())
    );

  // Visible items (6 at a time)
  const BATCH_SIZE = 6;
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const sentinelRef = useRef(null);

  // When filter or search changes, reset visible count so user sees first batch again
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
    // scroll to top of list when new filter/search is applied
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [filter, activeSearch]);

  // IntersectionObserver to load more items when sentinel becomes visible
  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredData.length));
          }
        });
      },
      { root: null, rootMargin: '200px', threshold: 0.1 }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [filteredData.length]);

  const visibleData = filteredData.slice(0, visibleCount);

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Main container with padding, background color, and full screen height */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
        Explore the Woodland's Flora, Fauna, and Fungi
        {/* Page title with responsive styling for light and dark modes */}
      </h1>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8 flex gap-2">
        <input
          type="text"
          placeholder="Search by name or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearchClick()}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearchClick}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Search
        </button>
      </div>

<h1 className="text-4xl p-8 text-center mb-10 text-gray-900 dark:text-gray-100">
        The Ecosystem of The St. Margaret's Bay Woodland Conservation Area
        <p className="text-2xl pt-4 mx-auto text-center w-4/5 pt-4">
          The St. Margaret’s Bay Area Woodland Conservation ecosystem is home 
          to a vast and diverse ecosystem home to many different flora, fauna and fungi.
          This includes many different mammals such as skunk, deer and even moose.
          Additionally, the terrain itself is very unique including wetlands and forest:
          take a look at it here!
        </p>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleData.map((item, index) => (
          <div
            key={index} 
            // Unique key for each grid item
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            // Styling for hover effects and responsiveness
            onClick={() => setSelectedItem(item)} 
            // Set the clicked item as the selected item
          >
            <img
              src={item.image} 
              // Source of the item's image
              alt={item.name} 
              // Alternative text for the image
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              // Image styling with hover zoom effect
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              {/* Overlay with a gradient background, visible on hover */}
              <h2 className="text-xl font-bold text-white">{item.name}</h2>
              {/* Display the item's name */}
              <p className="text-sm text-gray-300">{item.category}</p>
              {/* Display the item's category */}
            </div>
          </div>
        ))}
      </div>

      {/* sentinel used for infinite scroll; user scrolling will reveal more items */}
      <div ref={sentinelRef} className="w-full flex justify-center items-center mt-8">
        {visibleCount < filteredData.length}
      </div>

      {/* Modal for displaying the selected item's details */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Semi-transparent background for the modal */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative max-w-lg w-full">
            {/* Modal container with styling */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
              // Close button with styling
              onClick={closeModal}
             
            >
              ✕
            </button>
            <img
              src={selectedItem.image} 
              // Image of the selected item
              alt={selectedItem.name} 
              // Alternative text for the image
              className="w-full h-64 object-cover rounded-lg mb-4"
              // Image styling inside the modal
            />
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
              {selectedItem.name}
              {/* Display the selected item's name */}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{selectedItem.description}</p>
            {/* Display the selected item's description */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FloraFaunaFungi;

// Authors: Kunal Singla(A00461346)
//          Sam Oystreck (A00478278)
// Purpose: This file holds the workings for a gallery

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import path from "path";

const Gallery = () => {
  //Creates two empty arrays which will be filled with approved images
  const [imageArray, setImageArray] = useState([]);

  //Needed to interact with things outside the DOM (getting images)
  useEffect(() => {
    async function getImages() {
      //Get the response.data from our axios request
      const {data} = await axios.get("http://ugdev.cs-smu.ca:3000/api/acceptedImages")
      setImageArray(data);
    }

    getImages();

    //Ensures it "runs once on a mount"?
  }, []);

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        Enchanting Forest Gallery
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
        Discover the breathtaking beauty of forests and serene landscapes. Feel free to add your favorite photos to enrich this gallery!
      </p>

      {/* Gallery Grid */}
      <div
        id="gallery"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {imageArray.map((filename, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={`http://ugdev.cs-smu.ca:3000/api/gallery/${filename}`}
              alt={filename}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay with name */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-white text-lg font-semibold">{filename}</p>
            </div>
          </div>
        ))}
      </div>
</div>
  );
}


export default Gallery;


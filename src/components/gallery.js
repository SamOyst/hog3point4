// Author: Kunal Singla(A00461346) 
// Purpose: This file represents the gallery component.

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Optional initial images
import image1 from '../assets/download-1.jpg';
import image2 from '../assets/download-2.jpg';
import image3 from '../assets/download-3.jpg';

const Gallery = () => {
  const CLOUD_NAME = 'dqfydborc';
  const UPLOAD_PRESET = 'hog3point4';

  // Load saved images from localStorage or fallback to initial images
  const loadImages = () => {
    const saved = localStorage.getItem('galleryImages');
    if (saved) return JSON.parse(saved);
    return [
      { src: image1, name: 'Image 1' },
      { src: image2, name: 'Image 2' },
      { src: image3, name: 'Image 3' },
    ];
  };

  const [images, setImages] = useState(loadImages());
  const [isDragging, setIsDragging] = useState(false);

  // Save to localStorage whenever images change
  useEffect(() => {
    localStorage.setItem('galleryImages', JSON.stringify(images));
  }, [images]);

  // Upload a file to Cloudinary
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData
    );

    return { src: res.data.secure_url, name: file.name };
  };

  const handleFiles = async (files) => {
    try {
      const uploaded = await Promise.all(
        Array.from(files).map(uploadToCloudinary)
      );
      setImages((prev) => [...prev, ...uploaded]);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Error uploading images. Check console.');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) handleFiles(e.dataTransfer.files);
  };
  const handleInputChange = (e) => {
    if (e.target.files.length > 0) handleFiles(e.target.files);
  };

  // Remove broken images (failed to load)
  const handleImageError = (index) => {
    setImages((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        Enchanting Forest Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 flex justify-center items-center bg-gray-200 dark:bg-gray-800"
            style={{ height: '16rem' }}
          >
            <img
              src={`${img.src}?v=${Date.now()}`} // cache-busting query
              alt={img.name}
              onError={() => handleImageError(idx)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-white text-lg font-semibold">{img.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Drag-and-Drop Upload */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`mt-10 text-center border-2 border-dashed border-gray-500 p-6 rounded-lg transition-all duration-300 cursor-pointer ${
          isDragging
            ? 'bg-blue-100 border-blue-500 dark:bg-blue-800'
            : 'bg-gray-200 dark:bg-gray-800'
        } hover:shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700`}
      >
        <p className="text-gray-700 dark:text-gray-300">
          {isDragging
            ? 'Drop the images here...'
            : 'Drag and drop images here or click below to upload'}
        </p>
        <label className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition-transform duration-300 hover:scale-105">
          Upload Images
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleInputChange}
            style={{ display: 'none' }}
          />
        </label>
      </div>
    </div>
  );
};

export default Gallery;


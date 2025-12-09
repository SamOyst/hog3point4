// Authors: Kunal Singla(A00461346)
//          Sam Oystreck (A00478278)
//          OpenAI ChatGPT
// Purpose: This file holds the workings for a gallery


//imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { serverHost } from '../constants';

const Gallery = () => {

  //Variables
  //Modal pannel
  const [selectedItem, setSelectedItem] = useState(null);
  const closeModal = () => setSelectedItem(null);
  //Server Health
  const [serverUp, setServerUp] = useState(true);
  const [checkingServer, setCheckingServer] = useState(true);
  //Image array for gallery
  const [imageArray, setImageArray] = useState([]);


  // ----------------- ENSURING SERVER IS UP -----------------
  /**
 * Effect hook: checks if the server is up on initial render.
 * Sends a request to the server, displays the page if recieved, if not waits 3s, then declares it down
 */
  useEffect(() => {
    async function checkServer() {
      //Checks to see if the server is up
      try {
        await axios.get(serverHost + "/api/acceptedImages", {
          timeout: 3000,
        });
        //Good to display
        setServerUp(true);

        //Runs if the server is not up
      } catch (err) {
        setServerUp(false);
      } finally {
        setCheckingServer(false);
      }
    }

    checkServer();
  }, []);
  // ----------------- ENSURING SERVER IS UP -----------------

  // ----------------- GALLERY IMAGE FETCHING -----------------
  /**
   * Effect hook: fetches all accepted images from server on initial render.
   * Populates imageArray state.
   */
  useEffect(() => {
    async function getImages() {
      //Get the response.data from our axios request
      const accepted = await axios.get(serverHost + "/api/acceptedImages")
      setImageArray(accepted.data);
    }

    getImages();

    //Ensures it runs on initial render only
  }, []);
  // ----------------- GALLERY IMAGE FETCHING -----------------

  // ----------------- PICTURE UPLOADING -----------------
  /**
 * Handle dropped files from the drag-and-drop area and upload to the server.
 * 
 * @param {File[]} acceptedFiles - Array of image files selected by the user
 */
  const onDrop = async (acceptedFiles) => {
    //creating the data to send
    const formData = new FormData();
    acceptedFiles.forEach((file) => formData.append("image", file));

    //attempt to upload
    try {
      const res = await axios.post(
        `${serverHost}/api/upload`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      //ensuring it goes through
      console.log("SERVER RESPONSE:", res.data);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  /**
 * Configure react-dropzone for drag-and-drop functionality.
 * Provides root and input props for drop area.
 */
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });
  // ----------------- PICTURE UPLOADING -----------------

  // ----------------- DISPLAY GALLERY DOWN  -----------------
  if (checkingServer) {
    return (
      <div className="text-center text-4xl text-black-500 p-10">
        Checking server status...
      </div>
    );
  }

  if (!serverUp) {
    return (
      <div className="text-center text-4xl text-red-500 p-10 font-calibri">
        The gallery server is currently offline.
      </div>
    );
  }
  // ----------------- DISPLAY GALLERY DOWN -----------------

  // ----------------- DISPLAY THE GALLERY -----------------
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">

      {/*Head*/}
      <h1 className="text-4xl font-calibri text-center mb-6 text-gray-900 dark:text-gray-100">
        Enchanting Forest Gallery
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
        Discover the breathtaking beauty of forests and serene landscapes. Feel free to add your favorite photos to enrich this gallery!
      </p>

      {/* Drag and drop box */}
      <div data-cy="dragDropBox"
        {...getRootProps()}
        className={`border-4 border-dashed rounded-xl p-16 mb-8 text-center cursor-pointer transition 
    ${isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-400 bg-gray-200"} 
    hover:bg-gray-300`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-600 font-calibri text-2xl">Drop files here…</p>
        ) : (
          <p className="text-gray-700 font-calibri text-2xl">Drag & drop images here, or click to upload</p>
        )}
      </div>

      {/* Gallery Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {imageArray.map((filename, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            onClick={() => setSelectedItem(filename)}
          >
            {/* Image */}
            <img
              src={`${serverHost}/api/accepted/${filename}`}
              alt={filename}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Modal for displaying the selected item's details */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Modal container scales with image */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 relative max-w-[90vw] max-h-[90vh] overflow-auto">
            <button
              className="absolute top-2 right-2 bg-yellow-500 text-white rounded-full p-2"
              onClick={closeModal}
            >
              X
            </button>
            <img
              src={`${serverHost}/api/accepted/${selectedItem}`}
              alt={selectedItem}
              className="rounded-lg mb-4 max-w-[80vw] max-h-[80vh] w-auto h-auto"
            />
          </div>
        </div>
      )}
    </div>
  )
};


export default Gallery;


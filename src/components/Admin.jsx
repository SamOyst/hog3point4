//Author: Sam Oystreck (A00478278)
//Contains an admin page for the Woodland Conservation Site

import React, { useState, useEffect } from 'react';
import axios from "axios";

const Admin = () => {
    //Creates two empty arrays which will be filled with approved images
    const [approvedArray, setApprovedArray] = useState([]);
    const [pendingArray, setPendingArray] = useState([]);

    //Needed to interact with things outside the DOM (getting images)
    useEffect(() => {
        async function getImages() {
            //Get the response.data from our axios request
            const approved = await axios.get("http://ugdev.cs-smu.ca:3000/api/acceptedImages")
            setApprovedArray(approved.data);
            const pending = await axios.get("http://ugdev.cs-smu.ca:3000/api/pendingImages")
            setPendingArray(pending.data);
        }

        getImages();

        //Ensures it "runs once on a mount"?
    }, []);

    return (

        <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <header className="text-center text-black py-20 px-4">
                <h1 className="text-6xl md:text-8l font-bold mb-6 drop-shadow-md">
                    Woodland Conservation Area Admin Page
                </h1>
            </header>

            {/* Gallery Grid */}
            <div
                id="gallery"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {pendingArray.map((filename, i) => (
                    <div
                        key={i}
                        className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                    >
                        {/* Image */}
                        <img
                            src={`http://ugdev.cs-smu.ca:3000/api/pending/${filename}`}
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

            {/* Gallery Grid */}
            <div
                id="gallery"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {approvedArray.map((filename, i) => (
                    <div
                        key={i}
                        className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                    >
                        {/* Image */}
                        <img
                            src={`http://ugdev.cs-smu.ca:3000/api/accepted/${filename}`}
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
};
export default Admin
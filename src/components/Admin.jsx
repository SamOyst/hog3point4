//Authors: Sam Oystreck (A00478278)
//         OpenAI ChatGPT
//Purpose: Contains an admin page for the Woodland Conservation Site

import React, { useState, useEffect } from 'react';
import axios from "axios";
import { serverHost } from "../constants"

const Admin = () => {

    //Variables
    //Two empty arrays which will be filled with approved images
    const [approvedArray, setApprovedArray] = useState([]);
    const [pendingArray, setPendingArray] = useState([]);
    //For modal display
    const [selectedItem, setSelectedItem] = useState(null);
    const closeModal = () => setSelectedItem(null);


    // ----------------- POPULATING IMAGE ARRAYS -----------------
/**
* Fetch approved and pending images from server and populate state arrays.
* 
* @returns {Promise<void>}
*/
    useEffect(() => {
        async function getImages() {
            //Get the response.data from our axios request
            const approved = await axios.get(serverHost + "/api/acceptedImages")
            setApprovedArray(approved.data);
            const pending = await axios.get(serverHost + "/api/pendingImages")
            setPendingArray(pending.data);
        }

        getImages();

    }, []);
    // ----------------- POPULATING IMAGE ARRAYS -----------------

    // ----------------- ACCEPT PENDING -----------------
    /**
 * Accept a pending image and move it to the approved array.
 * 
 * @param {string} filename - Name of the image to accept
 * @returns {Promise<void>}
 */
    const handleAccept = async (filename) => {
        try {
            //Ask server to accept
            await axios.post(`${serverHost}/api/accept`, { filename });

            // Update local arrays
            setPendingArray((prev) => prev.filter((f) => f !== filename));
            setApprovedArray((prev) => [...prev, filename]);

            // Close modal
            setSelectedItem(null);
        } catch (err) {
            console.error("Accept failed:", err);
        }
    };
    // ----------------- ACCEPT PENDING -----------------

    // ----------------- DENY PENDING -----------------
    /**
 * Deny a pending image and remove it from the pending array.
 * 
 * @param {string} filename - Name of the image to deny
 * @returns {Promise<void>}
 */
    const handleDeny = async (filename) => {
        try {
            //Ask server to deny
            await axios.post(`${serverHost}/api/deny`, { filename });

            // Update local arrays
            setPendingArray((prev) => prev.filter((f) => f !== filename));

            // Close modal
            setSelectedItem(null);
        } catch (err) {
            console.error("Deny failed:", err);
        }
    };
    // ----------------- DENY PENDING -----------------

    // ----------------- REMOVE ACCEPTED -----------------
    /**
     * Remove an accepted image from the approved array.
     * 
     * @param {string} filename - Name of the image to remove
     * @returns {Promise<void>}
     */
    const handleRemove = async (filename) => {
        try {
            // POST to server to delete image from accepted
            await axios.post(`${serverHost}/api/remove`, { filename });

            // Update local state arrays
            setApprovedArray((prev) => prev.filter((f) => f !== filename));

            // Close modal
            setSelectedItem(null);
        } catch (err) {
            console.error("Remove failed:", err);
        }
    };
    // ----------------- REMOVE ACCEPTED -----------------

    // ----------------- DISPLAY PAGE -----------------
    return (

        <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <header className="text-center text-black py-20 px-4">
                <h1 className="text-7xl font-calibri text-center mb-6 text-gray-900 dark:text-gray-100">
                    Woodland Conservation Area Admin Page
                </h1>
            </header>

            {/* Pending Grid */}
            <h2 className="text-4xl font-calibri text-gray-900 dark:text-gray-100 mb-2">
                Pending
            </h2>
            <div
                id="pendingGallery"
                className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-red-500/50 min-h-64 p-bottom-16"
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
                            onClick={() => setSelectedItem(filename)}
                        />
                    </div>

                ))}
            </div>

            <div
                id="divider"
                className="p-8">
            </div>

            {/* Accepted Grid */}
            <h2 className="text-4xl font-calibri text-gray-900 dark:text-gray-100 mb-2">
                Accepted
            </h2>
            <div
                id="AcceptedGallery"
                className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-green-500/50 min-h-64"
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
                            onClick={() => setSelectedItem(filename)}
                        />
                    </div>
                ))}
            </div>


            {/*Modal*/}
            {selectedItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative max-w-lg w-full">

                        {/* Close button */}
                        <button
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>

                        {/* Image */}
                        <img
                            src={`${serverHost}/api/${approvedArray.includes(selectedItem) ? "accepted" : "pending"
                                }/${selectedItem}`}
                            alt={selectedItem}
                            className="w-auto h-auto object-fill rounded-lg mb-4"
                        />

                        {/* Buttons */}
                        <div className="flex justify-center gap-4">
                            {pendingArray.includes(selectedItem) && (
                                <>
                                    <button
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg font-calibri"
                                        onClick={() => handleAccept(selectedItem)}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg font-calibri"
                                        onClick={() => handleDeny(selectedItem)}
                                    >
                                        Deny
                                    </button>
                                </>
                            )}

                            {approvedArray.includes(selectedItem) && (
                                <button
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-calibri"
                                    onClick={() => {
                                        if (window.confirm("Are you sure you want to remove this image?")) {
                                            handleRemove(selectedItem);
                                        }
                                    }}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};
export default Admin
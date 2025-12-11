//Authors: Sam Oystreck (A00478278)
//         OpenAI ChatGPT
//Purpose: Contains the server which serves as the backbone to the gallery and admin pages

//Imports
const express = require('express');
const server = express();
const cors = require('cors');
const path = require("path");
const fs = require('fs');
const multer = require("multer");
const siteHost = require("../constants.js")

// ----------------- SETUP -----------------
//Ensures server will act properly
server.use(cors({ origin: siteHost }));
server.use(express.json());

//Setting up directory
const directory = path.resolve();


/**
 * Multer storage configuration for pending image uploads.
 * 
 * @param {Object} req - Express request object
 * @param {Object} file - Uploaded file object
 * @param {Function} cb - Callback to specify destination/filename
 */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(directory, "gallery_uploads/pending"));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });
// ----------------- SETUP -----------------

// ----------------- ENDPOINTS -----------------
/**
 * Get all accepted images.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
server.get("/api/acceptedImages", (req, res) => {
    //fs.readdir gives a list of all subdirectories in a given directory
    fs.readdir(path.join(directory, "/gallery_uploads/accepted"), (err, fileNames) => {
        if (err) {
            console.log("Failed to read images");
        }

        res.json(fileNames);
    });
});


/**
 * Get all pending images.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
server.get("/api/pendingImages", (req, res) => {
    fs.readdir(path.join(directory, "gallery_uploads/pending"), (err, fileNames) => {
        if (err) {
            console.log("Failed to read images");
            return res.json([]);
        }
        res.json(fileNames);
    });
});


/**
 * Accept a pending image (move to accepted folder).
 * 
 * @param {Object} req - Express request object containing { filename }
 * @param {Object} res - Express response object
 */
server.post("/api/accept", (req, res) => {
    const { filename } = req.body;
    const pendingPath = path.join(directory, "gallery_uploads/pending", filename);
    const acceptedPath = path.join(directory, "gallery_uploads/accepted", filename);

    fs.rename(pendingPath, acceptedPath, (err) => {
        if (err) return res.status(500).json({ error: "Failed to accept image" });
        res.json({ success: true, filename });
    });
});


/**
 * Deny a pending image (delete from pending folder).
 * 
 * @param {Object} req - Express request object containing { filename }
 * @param {Object} res - Express response object
 */
server.post("/api/deny", (req, res) => {
    const { filename } = req.body;
    const pendingPath = path.join(directory, "gallery_uploads/pending", filename);

    fs.unlink(pendingPath, (err) => {
        if (err) return res.status(500).json({ error: "Failed to deny image" });
        res.json({ success: true, filename });
    });
});


/**
 * Remove an accepted image (delete from accepted folder).
 * 
 * @param {Object} req - Express request object containing { filename }
 * @param {Object} res - Express response object
 */
server.post("/api/remove", (req, res) => {
    const { filename } = req.body;
    const acceptedPath = path.join(directory, "gallery_uploads/accepted", filename);

    fs.unlink(acceptedPath, (err) => {
        if (err) return res.status(500).json({ error: "Failed to remove image" });
        res.json({ success: true, filename });
    });
});


/**
 * Upload one or more images to the pending folder.
 * 
 * @param {Object} req - Express request object containing uploaded files
 * @param {Object} res - Express response object returning uploaded filenames
 */
server.post("/api/upload", upload.array("image"), (req, res) => {
    const filenames = req.files.map(f => f.filename);
    res.json({ filenames });
});
// ----------------- ENDPOINTS -----------------

// ----------------- FUNCTIONALITY -----------------
//Serves static images to be accessed by the fronted
//Makes images in gallery_uploads/accepted accessable from https://pathname/gallery/imagename
server.use("/api/accepted", express.static(path.join(directory, "gallery_uploads/accepted")));
server.use("/api/pending", express.static(path.join(directory, "gallery_uploads/pending")));


//Starts the server - while on SSH access using http://ugdev.cs-smu.ca:3100/api
server.listen(3100, '0.0.0.0', () => {
    console.log("Server running on port 3100");
}).on('error', (err) => {
    console.error("SERVER LISTEN ERROR:", err);
});
// ----------------- FUNCTIONALITY -----------------
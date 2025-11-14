const express = require('express');
const server = express();
const cors = require('cors');
const path = require("path");
const fs = require('fs');


server.use(cors({ origin: ["http://localhost:4000"] }));

//Serves static images to be accessed by the fronted
const directory = path.resolve();
server.use("/api/gallery", express.static(path.join(directory, "gallery_uploads/accepted")));

//Need to get the urls of every image being served and return it to frontend to be used
server.get("/api/acceptedImages", (req, res) => {
    //fs.readdir gives a list of all subdirectories in a given directory
    fs.readdir(path.join(directory, "/gallery_uploads/accepted"), (err, fileNames) => {
        if(err){
            console.log("Failed to read images");
        }

        res.json(fileNames);
    });
});

//create a route for the login
//server.use because use monitors all HTTP requests, so it is good for authentication
server.post("/login", (req, res) => {
    {token: "testing"}
});


//Starts the server - while on SSH access using http://ugdev.cs-smu.ca:3000/api
server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000.');
});
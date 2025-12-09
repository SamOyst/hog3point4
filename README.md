# Getting Started with Vite

This project was bootstrapped with Vite

## HOW TO RUN PROJECT

Clone project from github in your ide of your choice navigate to project directory and run the following in the terminal 
you need to have node.js installed in order to run npm commands

## `npm install` 

Installs required packages

## `npm install @vis.gl/react-google-maps`

installs packages for google maps api

## `npm run dev`

ONCE INSTALLED, IT WILL CREATE A FOLDER CALLED node_modules AND A FILE CALLED package-lock, YOU CAN IGNORE THOSE, WE HAVE A GITIGNORE TO DEAL WITH THEM
NOW TO SEE IT RUN, TYPE INTO TERMINAL npm run dev

## API KEYS 

note that for the sitemap portion of the requires an active API key to run please refer to https://developers.google.com/codelabs/maps-platform/maps-platform-101-react-js#7 on how to set up 
an api key on google cloud you will require a google maps api key and generate a new mapid in order to use advanced markers

Once you obtain a API key and mapID you will need to create a '.env' file in your project directory MAKE SURE ITS ON your .gitignore becuase having a exposed api key will cost you
thousands of dollars. your .env file will only have 2 things 
VITE_GOOGLE_MAPS_API_KEY= API KEY HERE 
VITE_GOOGLE_MAPS_MAP_ID= MAP ID HERE

## CYPRESS TESTING

## `npx cypress run` and `npx cypress run --component`

These commands run E2E test and component tests. If you want ui testing (outside command line), use `npx cypress open`
// Authors:
// Bhanu Prakash(A00468530) - Responsible for handling the 'Get Directions' functionality.
// Cole Turner (A00469026) - Responsible for map interction, UI design, TailWind CSS.
// Purpose: This file represents a site map component for the conservation area. 

// src/components/SiteMap.jsx
import React, { useState } from "react";
import { APIProvider, Map, Marker, Pin, AdvancedMarker } from "@vis.gl/react-google-maps";


import rewildingBirch from '../assets/rewildingBirch222.jpg';
import trailHead from '../assets/hiking.png';
import farm from '../assets/farm.png';
import well from '../assets/water-well.png';
import sitting from '../assets/sitting.png';
import birch from '../assets/birch.png';
import mapData from "../assets/map.json";

const DEFAULT_CENTER = { lat: 44.6247822, lng: -63.920578 };


const pointsOfInterest = [
  {
    id: 1,
    name: "Trailhead",
    googlePosition: { lat: 44.625028, lng: -63.921417 },
    icon: trailHead,
  },
  {
    id: 2,
    name: "Farmhouse Foundation",
    googlePosition: { lat: 44.625833, lng: -63.920972 },
    icon: farm,
  },
  {
    id: 3,
    name: "Well",
    googlePosition: { lat: 44.624022, lng: -63.920028 },
    icon: well,
  },
  {
    id: 4,
    name: "Sitting Area",
    googlePosition: { lat: 44.625028, lng: -63.920417 },
    icon: sitting,
  },
  {
    id: 5,
    name: "Coastal Yellow Birch",
    googlePosition: { lat: 44.624, lng: -63.920056 },
    icon: birch,
  },
];

function SiteMap() {
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);
  const [mapZoom, setMapZoom] = useState(14);
  const [userLocation, setUserLocation] = useState(null);
  const [hasLocation, setHasLocation] = useState(false);

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported in this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setUserLocation(coords);   // marker position
        setMapCenter(coords);      // recenter map once
        setMapZoom(16);
        setHasLocation(true);
      },
      (err) => {
        console.error(err);
        alert("Could not get your location.");
      }
    );
  };
  const PoiMarkers = ({ pois }) => (
  <>
    {pois.map((poi) => (
      <AdvancedMarker
        key={poi.id}
        position={poi.googlePosition}
        title={poi.name}
      >
        <img
          src={poi.icon}
          alt={poi.name}
          style={{
            width: 32,
            height: 32,
            transform: "translate(-50%, -50%)", // center on point
            filter: "drop-shadow(0 0 4px rgba(0,0,0,0.7))",
          }}
        />
      </AdvancedMarker>
    ))}
  </>
);

  return (
    <APIProvider
      apiKey={"AIzaSyCuH_8PIdOnvsmaCPzmFzPRUH6VHzo4a-0"}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        {/* Header text */}
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 10,
            zIndex: 2,
            padding: "8px 12px",
            background: "rgba(0,0,0,0.6)",
            color: "white",
            borderRadius: 8,
            fontSize: 14,
            pointerEvents: "none",
          }}
        >
          <div>
            <strong>Site Map</strong>
          </div>
          <div>
            {hasLocation ? "Showing your location" : "Showing default location"}
          </div>
        </div>

        {/* Use my location button */}
        <button
          onClick={handleUseMyLocation}
          style={{
            position: "absolute",
            top: 80,
            right: 10,
            zIndex: 2,
            padding: "8px 12px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            background: "rgba(0,0,0,0.6)",
            color: "white",
          }}
        >
          Use my location
        </button>

        {/* The map itself */}
        <Map
          style={{ width: "100%", height: "100%" }}
          center={mapCenter}
          zoom={mapZoom}
          //mapTypeId="hybrid"
          mapId="f010a907a8acdb54c13b6e8a"
          gestureHandling="greedy"
          onCameraChanged={(ev) => {
            const { center, zoom } = ev.detail;
            setMapCenter(center);   // only move camera, not marker
            setMapZoom(zoom);
          }}
        >

          {/* Marker: stays at userLocation (or default center if none yet) */}
          <Marker position={userLocation || DEFAULT_CENTER} />
           {/* POI markers */}
           <PoiMarkers pois={pointsOfInterest} />

          
        </Map>
      </div>
    </APIProvider>
  );
}



export default SiteMap;
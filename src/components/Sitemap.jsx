// Authors:
// Bhanu Prakash(A00468530) - Responsible for handling the 'Get Directions' functionality.
// Cole Turner (A00469026) - Responsible for map interction, UI design, TailWind CSS.
// Ben Anderson (A00473343) - Text-to-Speech
// Purpose: This file represents a site map component for the conservation area. 

// src/components/SiteMap.jsx
import React, { useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  AdvancedMarker,
} from "@vis.gl/react-google-maps"; // to use run npm install @vis.gl/react-google-maps in project directory
import rewildingBirch from "../assets/rewildingBirch222.jpg";
import trailHead from "../assets/hiking.png";
import farm from "../assets/farm.png";
import well from "../assets/water-well.png";
import sitting from "../assets/sitting.png";
import birch from "../assets/birch.png";
import mapData from "../assets/map.json";
import tts from "../assets/tts";

const DEFAULT_CENTER = { lat: 44.6247822, lng: -63.920578 };

const pointsOfInterest = [
  {
    id: 1,
    name: "Trailhead",
    googlePosition: { lat: 44.625028, lng: -63.921417 },
    icon: trailHead,
    clickText:
      "Trailhead: Start the 1 km trail here, right behind St. Paul's Church and beside the parking lot.",
  },
  {
    id: 2,
    name: "Farmhouse Foundation",
    googlePosition: { lat: 44.625833, lng: -63.920972 },
    icon: farm,
    clickText:
      "Farmhouse Foundation: These low stones mark the remains of a small forest cabin that once served a farm family.",
  },
  {
    id: 3,
    name: "Well",
    googlePosition: { lat: 44.624022, lng: -63.920028 },
    icon: well,
    clickText:
      "Well: This old well gave water to church neighbors and the few families who lived nearby.",
  },
  {
    id: 4,
    name: "Sitting Area",
    googlePosition: { lat: 44.625028, lng: -63.920417 },
    icon: sitting,
    clickText:
      "Sitting Area: A quiet clearing to rest, listen to the wind, and take in beauty of the nature.",
  },
  {
    id: 5,
    name: "Coastal Yellow Birch",
    googlePosition: { lat: 44.624, lng: -63.920056 },
    icon: birch,
    clickText:
      "Coastal Yellow Birch: From here the trail is full of bright yellow birch trees that are easy to spot because of their golden bark.",
  },
];

function SiteMap() {
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);
  const [mapZoom, setMapZoom] = useState(14);
  const [userLocation, setUserLocation] = useState(null);
  const [hasLocation, setHasLocation] = useState(false);
  const [selectedPoi, setSelectedPoi] = useState(null);

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
        setUserLocation(coords); // marker position
        setMapCenter(coords); // recenter map once
        setMapZoom(16);
        setHasLocation(true);
      },
      (err) => {
        console.error(err);
        alert("Could not get your location.");
      }
    );
  };

  const handleGetDirections = () => {
    if (!selectedPoi || !selectedPoi.googlePosition) return;

    const { lat, lng } = selectedPoi.googlePosition;
    let url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

    if (userLocation) {
      url += `&origin=${userLocation.lat},${userLocation.lng}`;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Render POI markers with click handler
  const PoiMarkers = ({ pois, onPoiClick }) => (
    <>
      {pois.map((poi) => (
        <AdvancedMarker
          key={poi.id}
          position={poi.googlePosition}
          title={poi.name}
          onClick={() => onPoiClick(poi)}
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

        {/* Info box for selected POI */}
        {selectedPoi && (
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              maxWidth: 400,
              padding: "10px 14px",
              background: "rgba(0,0,0,0.8)",
              color: "white",
              borderRadius: 10,
              fontSize: 14,
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 4,
              }}
            >
              <strong>{selectedPoi.name}</strong>
              <button
                onClick={() => setSelectedPoi(null)}
                style={{
                  marginLeft: 8,
                  border: "none",
                  background: "transparent",
                  color: "white",
                  cursor: "pointer",
                  fontSize: 16,
                  lineHeight: 1,
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div style={{ marginBottom: 8 }}>{selectedPoi.clickText}</div>
            <button
              onClick={handleGetDirections}
              style={{
                padding: "6px 10px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                background: "#4CAF50",
                color: "white",
                fontSize: 14,
              }}
            >
              Get directions
            </button>
          </div>
        )}

        {/* The map itself */}
        <Map
          style={{ width: "100%", height: "100%" }}
          center={mapCenter}
          zoom={mapZoom}
          // mapTypeId="hybrid"
          mapId="f010a907a8acdb54c13b6e8a"
          gestureHandling="greedy"
          onCameraChanged={(ev) => {
            const { center, zoom } = ev.detail;
            setMapCenter(center); // only move camera, not marker
            setMapZoom(zoom);
          }}
        >
          {/* Marker: stays at userLocation (or default center if none yet) */}
          <Marker position={userLocation || DEFAULT_CENTER} />

          {/* POI markers with click interaction */}
          <PoiMarkers
            pois={pointsOfInterest}
            onPoiClick={(poi) => {
              setSelectedPoi(poi);

            if (tts.isSpeaking()) {
              tts.stop();
            return;
            }

        tts.speak(poi.clickText);
  }}
/>
        </Map>
      </div>
    </APIProvider>
  );
}

export default SiteMap;
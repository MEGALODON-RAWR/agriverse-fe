import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import Image from "next/image";

const Maps = dynamic(() => import("@/components/Map.jsx"), { ssr: false });

// Check if running in the browser environment
const isBrowser = typeof window !== "undefined";

export default function CeritaKami() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (isBrowser) {
      // Get user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    }
  }, []);

  const locations = [
    { id: 1, name: "Location 1", latitude: -6.5959, longitude: 106.7859 },
    // Add more locations as needed
  ];

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

  const radius = 3; // Set the desired radius in kilometers

  // Filter locations within the specified radius
  const nearbyLocations = locations.filter((loc) => {
    const distance = calculateDistance(
      latitude,
      longitude,
      loc.latitude,
      loc.longitude
    );
    return distance <= radius;
  });

  return (
    <>
      <Header />
      <Maps />
      <div>
        <h2>Nearby Locations within 3 km</h2>
        {nearbyLocations.map((loc) => (
          <div key={loc.id} className="card">
            <h3>{loc.name}</h3>
            <p>
              Distance:{" "}
              {latitude && longitude
                ? calculateDistance(
                    latitude,
                    longitude,
                    loc.latitude,
                    loc.longitude
                  ).toFixed(2)
                : "Loading..."}{" "}
              km
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

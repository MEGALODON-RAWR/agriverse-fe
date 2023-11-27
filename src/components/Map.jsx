import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useState, useEffect } from "react";
import L from "leaflet";
import Markercust from "@/images/markerlocation.png"; // Import the image
import Keranjang from "./SideBarAdmin";
import Image from "next/image";

const MapPage = ({ latitude, longitude, locations }) => {

  const youAreHereIcon = new L.divIcon({
    className: "custom-marker",
    html: '<img class="imgdisini" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarkerlocation.6387ecf7.png&w=1080&q=75" alt="You Are Here" style="width: 50px;"/> <p class="teksdisini">Lokasi Anda</p>',
  });

  return (
    <div>
      <div style={{ height: "350px" }}>
        {latitude !== null && longitude !== null && (
          <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[latitude, longitude]} icon={youAreHereIcon} />

            {locations &&
              locations.length > 0 &&
              locations.map((loc) => {
                const markerIcon = new L.Icon();

                return (
                  <Marker key={loc.id} position={[loc.latitude, loc.longitude]}>
                    <Popup>
                      <h3>{loc.nama}</h3>
                      <p>{loc.distance} KM</p>
                      <Image
                        src={loc.image}
                        alt="Teknik Deep Water Culture"
                        width={400}
                        height={400}
                      />
                      <p>{loc.alamat}</p>
                    </Popup>
                  </Marker>
                );
              })}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default MapPage;

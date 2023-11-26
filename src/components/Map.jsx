import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useState, useEffect } from "react";
import L from "leaflet";
import Markercust from "@/images/markerlocation.png"; // Import the image
import Keranjang from "./SideBarAdmin";

const MapPage = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "Sarana Tani",
      latitude: -6.59598955600667,
      longitude: 106.78597584183616,
      alamat:
        "Jl. Veteran No.37, RT.01/RW.02, Kb. Klp., Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16125",
    },
    {
      id: 2,
      name: "Toko Pertanian Kurnia Tani",
      latitude: -6.592706467186471,
      longitude: 106.79263478001381,
      alamat:
        "Gg. Mekah, RT.02/RW.01, Pasar Anyar, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16121",
    },
    {
      id: 3,
      name: "Usaha Tani Maju",
      latitude: -6.572535626842326,
      longitude: 106.80821803953634,
      alamat:
        "Jl. Raya Pajajaran Blok Pancuran No.11, RT.01/RW.05, Bantarjati, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16153",
    },
    {
      id: 4,
      name: "Tani Jaya Baru",
      latitude: -6.5929600621112545,
      longitude: 106.79402135302895,
      alamat:
        "Jl. Gedong Sawah No.4 no. 12, Pabaton, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16121",
    },
    // Add more locations as needed
  ]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("demo").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  }, []); // Empty dependency array to run the effect only once on component mount

  function showPosition(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  const youAreHereIcon = new L.divIcon({
    className: "custom-marker",
    html: '<img class="imgdisini" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarkerlocation.6387ecf7.png&w=1080&q=75" alt="You Are Here" style="width: 50px;"/> <p class="teksdisini">You Are Here</p>',
  });

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
            {locations.map((loc) => {
              const distance = calculateDistance(
                latitude,
                longitude,
                loc.latitude,
                loc.longitude
              );

              const markerIcon = distance <= 3 ? youAreHereIcon : new L.Icon();

              return (
                <Marker key={loc.id} position={[loc.latitude, loc.longitude]}>
                  <Popup>
                    {loc.img}
                    {loc.name}
                    <br></br>
                    {loc.alamat}
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        )}
      </div>
      {/* <div>
        <h2>Nearby Locations</h2>
        {locations.map((loc) => (
          <div key={loc.id} className="card">
            <h3>{loc.name}</h3>
            <p>
              Distance:{" "}
              {calculateDistance(
                latitude,
                longitude,
                loc.latitude,
                loc.longitude
              ).toFixed(2)}{" "}
              km
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MapPage;

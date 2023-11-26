import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import Image from "next/image";
import Terdekat from "@/images/terdekat.png";

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
    {
      id: 5,
      name: "Tani Jaya Baru",
      latitude: -6.5929600621112545,
      longitude: 106.79402135302895,
      alamat:
        "Jl. Gedong Sawah No.4 no. 12, Pabaton, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16121",
    },
    // Add more locations as needed
  ]);

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

  const maxRadius = 3;

  // Filter locations within the specified radius
  const nearbyLocations = locations
    .filter(
      (loc) =>
        calculateDistance(latitude, longitude, loc.latitude, loc.longitude) <=
        maxRadius
    )
    .sort((loc1, loc2) => {
      const distance1 = calculateDistance(
        latitude,
        longitude,
        loc1.latitude,
        loc1.longitude
      );
      const distance2 = calculateDistance(
        latitude,
        longitude,
        loc2.latitude,
        loc2.longitude
      );
      return distance1 - distance2;
    });

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 terdekatatas">
            <h1 className="p-bold judulterdekat">
              CARI TOKO TERDEKAT UNTUK <br />
              <span className="t_kuning">
                MEMENUHI KEBUTUHAN <br /> ANDA
              </span>
            </h1>
            <Image
              className="logo imgf float-end imgterdekat"
              src={Terdekat}
              alt="Teknik Deep Water Culture"
            />
          </div>
          <div className="col-12">
            <Maps />
          </div>

          <div className="col-6">
            <h2 className="mt-20">Toko Terdekat (maks 3km)</h2>
          </div>

          <div className="row mt-20">
            {nearbyLocations.map((loc) => (
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3">
                <div key={loc.id} className="card-maps">
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
                  <p>{loc.alamat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

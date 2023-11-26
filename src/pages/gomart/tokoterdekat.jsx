import dynamic from "next/dynamic";
import React, { use, useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import Image from "next/image";
import Terdekat from "@/images/terdekat.png";
import { axiosInstance } from "@/lib/axios";
import { Spinner } from "@chakra-ui/react";
const MapPage = dynamic(() => import("@/components/Map"), { ssr: false });

const useFetchAgent = (latitude, longitude) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await axiosInstance
      .get("/agen?latitude=" + latitude + "&longitude=" + longitude)
      .then((res) => res.data);
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [latitude, longitude]);

  return { data, loading };
};

const isBrowser = typeof window !== "undefined";

export default function CeritaKami() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isBrowser) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setLoading(false);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
      setLoading(false);
    }
  }, []);

  const { data, loading: loadingData } = useFetchAgent(latitude, longitude);

  useEffect(() => {
    if (data) {
      setLocations(data?.data?.data);
      setLoading(loadingData);
    }
  }, [data]);

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
            {latitude && longitude ? (
              <MapPage
                latitude={latitude}
                longitude={longitude}
                locations={locations}
              />
            ) : (
              <div className="col-12 text-center">
                <Spinner />
              </div>
            )}
          </div>
          <div className="col-6">
            <h2 className="mt-20">Toko Terdekat</h2>
          </div>

          <div className="row mt-20">
            {!latitude && !longitude  ? (
              <div className="col-12 text-center">
                <Spinner />
              </div>
            ) : (
              <div className="col-12">
                {locations.map((loc) => (
                  <div key={loc.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3">
                    <div key={loc.id} className="card-maps">
                      <h3>{loc.nama}</h3>
                      <p>{loc.distance} KM</p>
                      <p>{loc.alamat}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

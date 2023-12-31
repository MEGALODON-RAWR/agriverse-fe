import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import penyuluh from "@/images/penyuluh.png";
import wick from "@/images/wick.png";
import deep from "@/images/deep.png";
import manfaat from "@/images/manfaat.png";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function GoFarm() {
  const [animateBg2, setAnimateBg2] = useState(false);
  const [animateBg3, setAnimateBg3] = useState(false);
  const [animateTeknik, setAnimateTeknik] = useState(false);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  const teknikRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Untuk "bg-2"
      const bg2Element = bg2Ref.current;
      if (bg2Element) {
        const rect = bg2Element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !animateBg2) {
          setAnimateBg2(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animateBg2]);

  useEffect(() => {
    const handleScroll = () => {
      // Untuk "bg-3"
      const bg3Element = bg3Ref.current;
      if (bg3Element) {
        const rect = bg3Element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !animateBg3) {
          setAnimateBg3(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animateBg3]);

  useEffect(() => {
    const handleScroll = () => {
      // Untuk "bg-2"
      const teknikElement = teknikRef.current;
      if (teknikElement) {
        const rect = teknikElement.getBoundingClientRect();
        if (
          rect.top < window.innerHeight &&
          rect.bottom >= 0 &&
          !animateTeknik
        ) {
          setAnimateTeknik(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animateTeknik]);
  return (
    <>
      <Header />
      <div className="bg-gofarm">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-11">
              <h1 className="mt-20 p-bold hadir" ref={bg2Ref}>
                Go Farm{" "}
                <span className="t-hijau fs-30 hadir1">
                  hadir untuk memudahkanmu menanam sendiri!
                </span>
              </h1>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-7 col-10">
                <p className="p-medium fs-20 desk-gofarm">
                  Mencoba menanam tumbuhan favoritmu di rumah dengan mudah
                  menggunakan metode hidroponik. Dapatkan panen segar dan
                  berkualitas tinggi setiap hari. Mulai petualangan pertanianmu
                  dengan Go Farm sekarang!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt--100">
          <div className="col-4 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div
              class="card bg-hijau"
              style={{
                width: "100%",
                opacity: animateBg2 ? 1 : 0,
                transform: animateBg2 ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
              }}
            >
              <a href="404">
                <div class="card-body cbf">
                  <div className="row">
                    <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                      <Image
                        className="logo imgf mx-auto"
                        src={penyuluh}
                        alt="Penyuluh"
                        width={100}
                      />
                    </div>
                    <div className="col-12 col-xxl-8 col-xl-8 xol-lg-8 col-md-8 col-sm-8">
                      <h2 className="t_putih p-bold text-center gf">
                        Data Penyuluh
                      </h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-4 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div
              class="card bg-hijau"
              style={{
                width: "100%",
                opacity: animateBg2 ? 1 : 0,
                transform: animateBg2 ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
              }}
            >
              <a href="gofarm/deepwaterculture">
                <div class="card-body cbf">
                  <div className="row">
                    <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                      <Image
                        className="logo imgf mx-auto"
                        src={deep}
                        alt="Teknik Deep Water Culture"
                        width={100}
                      />
                    </div>
                    <div className="col-12 col-xxl-8 col-xl-8 xol-lg-8 col-md-8 col-sm-8">
                      <h2 className="t_putih p-bold text-center gf">
                        Teknik Deep Water Culture
                      </h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-4 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div
              class="card bg-hijau"
              style={{
                width: "100%",
                opacity: animateBg2 ? 1 : 0,
                transform: animateBg2 ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
              }}
            >
              <a href="gofarm/wicksystem">
                <div class="card-body cbf">
                  <div className="row">
                    <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                      <Image
                        className="logo imgf mx-auto"
                        src={wick}
                        alt="Wick System"
                        width={100}
                      />
                    </div>
                    <div className="col-12 col-xxl-8 col-xl-8 xol-lg-8 col-md-8 col-sm-8">
                      <h2 className="t_putih p-bold text-center gf">
                        Teknik Wick System
                      </h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-50 mb-100">
          <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <Image className="logo" src={manfaat} alt="Manfaat" width={1000} />
          </div>
          <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <h2 className="p-semibold fs-30 mh">Manfaat hidroponik</h2>
            <hr />

            <ul className="p-medium fs-20 listmisi mt-100 list-mh">
              <li>Tanaman untuk tumbuh dan produksi lebih terjamin.</li>
              <li>
                Perawatan lebih praktis dan gangguan hama lebih terkontrol.
              </li>
              <li>Tanaman dapat tumbuh lebih pesat.</li>
              <li>Hasil tumbuhan lebih segar dan sehat.</li>
              <li>Mempercantik taman di rumah.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import penyuluh from "@/images/penyuluh.png";
import wick from "@/images/tangan2.png";
import deep from "@/images/deep.png";
import manfaat from "@/images/manfaat.png";
import bak from "@/images/bak.png";
import sty from "@/images/impra.png";
import alu from "@/images/rockwool.png";
import net from "@/images/netpot1.png";
import ukur from "@/images/alatukur1.png";
import cutter from "@/images/gunting.png";
import rock from "@/images/benih.png";
import aer from "@/images/aerator.png";
import lar from "@/images/larutan.png";
import Image from "next/image";
import dwc1 from "@/images/dwc1.png";
import dwc2 from "@/images/dwc2.png";
import dwc3 from "@/images/dwc3.png";
import dwc4 from "@/images/dwc4.png";
import dwc5 from "@/images/dwc5.png";
import dwc6 from "@/images/dwc6.png";
import dwc7 from "@/images/dwc7.png";
import dwc8 from "@/images/dwc8.png";
import dwc9 from "@/images/dwc9.png";
import dwc10 from "@/images/dwc10.png";
import dwc11 from "@/images/dwc11.png";
import dwc12 from "@/images/dwc12.png";
import dwc13 from "@/images/dwc13.png";

import { useEffect, useRef, useState } from "react";

export default function DeepWaterCulture() {
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
      <div className="bg-teknik">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1
                className="mt-20 p-bold fs-30 t_putih text-center"
                ref={bg2Ref}
              >
                <span className="t_kuning hadir1 fs-50">Mulailah </span>
                hari ini dengan menanam <br /> hidroponik Menggunakan{" "}
                <span className="t_hitam">Wick System</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 dwc">
            <p className="p-medium fs-17">
              Sistem Wick atau dikenal juga dengan sistem sumbu. Sistem WIck
              tidak menggunakan sumber listrik ataupun pompa air. Sistem sumbu
              merupakan sistem pasif untuk jenis hidroponik, akar dari tanaman
              tidak bersentuhan dengan air secara langsung karena menggunakan
              bantuan yang berupa sumbu. Tanaman pada sistem ini mendapatkan
              nutrisi yang diserap melalui sumbu atau kain flanel. Sistem ini
              seperti kompor minyak tanah. Bahan yang digunakan mudah didapatkan
              dengan harga terjangkau seperti tali fibrosa, kain flanel, benang
              atau tali wol, benang poliuretan yang dikepang, nilon, kapas,
              perca kain.
            </p>
          </div>
          <div className="col-12">
            <Image
              className="logo imgf imgteknik"
              src={wick}
              alt="Wick System"
              width={100}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="p-semibold mt-50">Alat dan Bahan Wick System</h3>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="card-bahan-teknik">
                  <Image
                    className="logo imgf alat mx-auto"
                    src={bak}
                    alt="Bak"
                    width={200}
                  />
                </div>
                <div className="nama-alat text-center">
                  <h5>Bak / Baskom / Media Tanam Lainnya</h5>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="card-bahan-teknik">
                  <Image
                    className="logo imgf alat mx-auto"
                    src={sty}
                    alt="Bak"
                    width={200}
                  />
                </div>
                <div className="nama-alat text-center">
                  <h5>Impraboard</h5>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="card-bahan-teknik">
                  <Image
                    className="logo imgf alat mx-auto"
                    src={alu}
                    alt="Bak"
                    width={200}
                  />
                </div>
                <div className="nama-alat text-center">
                  <h5>Rockwool</h5>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="card-bahan-teknik">
                  <Image
                    className="logo imgf alat mx-auto"
                    src={net}
                    alt="Bak"
                    width={200}
                  />
                </div>
                <div className="nama-alat text-center">
                  <h5>Netpot + Sumbu Flanel</h5>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="card-bahan-teknik">
                  <Image
                    className="logo imgf alat mx-auto"
                    src={ukur}
                    alt="Bak"
                    width={200}
                  />
                </div>
                <div className="nama-alat text-center">
                  <h5>Alat Ukur Nutrisi</h5>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="card-bahan-teknik">
                  <Image
                    className="logo imgf alat mx-auto"
                    src={cutter}
                    alt="Bak"
                    width={200}
                  />
                </div>
                <div className="nama-alat text-center">
                  <h5>Gunting / Gergaji Besi</h5>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mx-auto">
                <div className="card-bahan-teknik">
                  <Image
                    className="logo imgf alat mx-auto"
                    src={rock}
                    alt="Bak"
                    width={200}
                  />
                </div>
                <div className="nama-alat text-center">
                  <h5>Benih Tanaman</h5>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mx-auto">
                <div className="card-bahan-teknik">
                  <Image
                    className="logo imgf alat mx-auto"
                    src={lar}
                    alt="Bak"
                    width={200}
                  />
                </div>
                <div className="nama-alat text-center">
                  <h5>Larutan Nutrisi AB Mix</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="p-semibold mt-50">
              Tata Cara Hidroponik Wick System
            </h3>
          </div>
        </div>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="row mb-20">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <Image className="imgtata mx-auto" src={dwc1} alt="Bak" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <Image className="imgtata mx-auto" src={dwc2} alt="Bak" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <Image className="imgtata mx-auto" src={dwc3} alt="Bak" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <Image className="imgtata mx-auto" src={dwc4} alt="Bak" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <Image className="imgtata mx-auto" src={dwc5} alt="Bak" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <Image className="imgtata mx-auto" src={dwc6} alt="Bak" />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row mb-20">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <Image className="imgtata mx-auto" src={dwc7} alt="Bak" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <Image className="imgtata mx-auto" src={dwc8} alt="Bak" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <Image className="imgtata mx-auto" src={dwc9} alt="Bak" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <Image className="imgtata mx-auto" src={dwc10} alt="Bak" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <Image className="imgtata mx-auto" src={dwc11} alt="Bak" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <Image className="imgtata mx-auto" src={dwc12} alt="Bak" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mx-auto">
                  <Image className="imgtata mx-auto" src={dwc13} alt="Bak" />
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon tatacarou"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon tatacarou"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

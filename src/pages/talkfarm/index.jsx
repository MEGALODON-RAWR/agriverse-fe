import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import CardForum from "@/components/CardForum.jsx";
import React from "react";
import penyuluh from "@/images/penyuluh.png";
import wick from "@/images/vas.png";
import deep from "@/images/deep.png";
import manfaat from "@/images/manfaat.png";
import bak from "@/images/bak.png";
import sty from "@/images/styrofoam.png";
import alu from "@/images/alumunium.png";
import net from "@/images/netpot1.png";
import ukur from "@/images/alatukur.png";
import cutter from "@/images/cutter.png";
import rock from "@/images/rockwool1.png";
import aer from "@/images/aerator.png";
import lar from "@/images/larutan.png";
import gambar from "@/images/inp_gambar.png";
import video from "@/images/inp_video.png";
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
      <div className="bg-talkfarm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1
                className="mt-20 p-bold fs-30 t_putih text-center"
                ref={bg2Ref}
              >
                <span className="t_hitam hadir1 fs-50">
                  Bertanya, Berbagi, dan Berdiskusi di Forum Hidroponik Di{" "}
                </span>
                <span className="t-hijau fs-50">Forum Hidroponik</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <input
              type="search"
              name="cari-talkfarm"
              id="cari-talkfarm"
              className="inp_pembayaran mt-20"
              placeholder="Cari Forum"
            />
          </div>

          <div className="col-12 card-forum">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-10">
                <textarea
                  className="p-regular fs-17 add-forum"
                  name="forum"
                  id="forum"
                  cols="110.5"
                  rows="4"
                  placeholder="Apa yang ingin Anda tanyakan atau bagikan?"
                ></textarea>
              </div>
              <div className="col-2"></div>
              <div className="col-8">
                <label htmlFor="input-image">
                  <Image className="imgtata mx-auto" src={gambar} alt="Bak" />
                </label>
                <input
                  type="file"
                  id="input-image"
                  name="myfile"
                  className="hidden"
                />

                <label htmlFor="input-video">
                  <Image className="imgtata mx-auto" src={video} alt="Bak" />
                </label>
                <input
                  type="file"
                  id="input-video"
                  name="myfile"
                  className="hidden"
                />
              </div>
              <div className="col-2">
                <button className="btn-hijau mt-4">Buat Postingan</button>
              </div>
            </div>
          </div>

          <CardForum />
        </div>
      </div>

      <Footer />
    </>
  );
}

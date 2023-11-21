import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import tambah_produk from "@/images/tambah-produk.png";
import tambah_artikel from "@/images/tambah-artikel.png";
import data_penyuluh from "@/images/data-penyuluh.png";
import grafik from "@/images/grafik.png";
import shinta from "@/images/shinta.png";
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

export default function TambahArtikel({ setComponent }) {
  const [animateBg2, setAnimateBg2] = useState(false);
  const [animateBg3, setAnimateBg3] = useState(false);
  const [animateTeks, setAnimateTeks] = useState(false);
  const [animateTeknik, setAnimateTeknik] = useState(false);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  const teksRef = useRef(null);
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

  const [activeComponent, setActiveComponent] = useState("downloadpenyuluh");

  useEffect(() => {
    setComponent(activeComponent);
  }, [activeComponent]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h1 className="p-medium bb-kuning">Profile Penyuluh</h1>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Image
              className="profile-penyuluh mt-20"
              src={shinta}
              alt="shinta"
              width={200}
            />
          </div>

          <div className="col-12 d-flex justify-content-center">
            <h4 className="p-semibold mt-20">Shinta Arafah Hidayanti</h4>
          </div>

          <div className="row">
            <div className="col-4">
              <label htmlFor="nama">Nama</label>
            </div>
            <div className="col-8">
              <input type="text" name="nama" id="nama" />
            </div>
          </div>

          <div className="col-12 mt-20">
            <a href="#" className="btn-hijau">
              Simpan
            </a>
            <a
              href="#"
              className="btn-abu"
              onClick={() => setActiveComponent("penyuluh")}
            >
              Batal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

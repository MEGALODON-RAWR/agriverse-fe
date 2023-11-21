import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import tambah_produk from "@/images/tambah-produk.png";
import tambah_artikel from "@/images/tambah-artikel.png";
import data_penyuluh from "@/images/data-penyuluh.png";
import grafik from "@/images/grafik.png";
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

  const [activeComponent, setActiveComponent] = useState("tambahpenyuluh");

  useEffect(() => {
    setComponent(activeComponent);
  }, [activeComponent]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h1 className="p-medium bb-kuning">Tambah Penyuluh</h1>
        </div>

        <div className="row">
          <div className="col-12 mt-20">
            <label htmlFor="nama">Nama Penyuluh</label>
          </div>
          <div className="col-12">
            <input
              type="text"
              name="nama"
              id="nama"
              className="input-produk"
              placeholder="Masukkan Nama Penyuluh"
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="gambar-penyuluh">Gambar Penyuluh</label>
          </div>
          <div className="col-12">
            <input
              type="file"
              name="gambar-penyuluh"
              id="gambar-penyuluh"
              className="input-produk"
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="umur-penyuluh">Umur Penyuluh</label>
          </div>
          <div className="col-12">
            <input
              type="text"
              name="umur-penyuluh"
              id="umur-penyuluh"
              className="input-produk"
              placeholder="Masukkan Umur Penyuluh"
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="alamat-penyuluh">Alamat Penyuluh</label>
          </div>
          <div className="col-12">
            <input
              type="text"
              name="alamat-penyuluh"
              id="alamat-penyuluh"
              className="input-produk"
              placeholder="Masukkan Alamat Penyuluh"
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="telp-penyuluh">No Telp Penyuluh</label>
          </div>
          <div className="col-12">
            <input
              type="text"
              name="telp-penyuluh"
              id="telp-penyuluh"
              className="input-produk"
              placeholder="Masukkan No Telp Penyuluh"
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="email-penyuluh">Email Penyuluh</label>
          </div>
          <div className="col-12">
            <input
              type="email"
              name="email-penyuluh"
              id="email-penyuluh"
              className="input-produk"
              placeholder="Masukkan Email Penyuluh"
            />
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

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

export default function TambahProduk({ setComponent }) {
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

  const [activeComponent, setActiveComponent] = useState("tambahproduk");

  useEffect(() => {
    setComponent(activeComponent);
  }, [activeComponent]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="p-medium bb-kuning">Tambah Produk</h1>
        </div>

        <div className="row">
          <div className="col-12 mt-20">
            <label htmlFor="nama">Nama Produk</label>
          </div>
          <div className="col-12">
            <input
              type="text"
              name="nama"
              id="nama"
              className="input-produk"
              placeholder="Masukkan Nama Produk"
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="nama">Gambar Produk</label>
          </div>
          <div className="col-12">
            <input type="file" name="nama" id="nama" className="input-produk" />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="nama">Deskripsi Produk</label>
          </div>
          <div className="col-12">
            <input type="file" name="nama" id="nama" className="input-produk" />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="nama">Harga Produk (Rp)</label>
          </div>
          <div className="col-12">
            <input type="file" name="nama" id="nama" className="input-produk" />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="nama">Stok Produk</label>
          </div>
          <div className="col-12">
            <input
              type="number"
              name="nama"
              id="nama"
              className="input-produk"
            />
          </div>

          <div className="col-12 mt-20">
            <a href="#" className="btn-hijau">
              Simpan
            </a>
            <a
              href="#"
              className="btn-abu"
              onClick={() => setActiveComponent("produk")}
            >
              Batal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

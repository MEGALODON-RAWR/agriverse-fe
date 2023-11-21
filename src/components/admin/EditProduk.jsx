import React from "react";
import { useEffect, useRef, useState } from "react";

export default function EditProduk({ setComponent, params }) {
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

  const [activeComponent, setActiveComponent] = useState("editproduk");

  useEffect(() => {
    setComponent(activeComponent);
  }, [activeComponent]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="p-medium bb-kuning">Edit Produk</h1>
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
            <label htmlFor="gambar">Gambar Produk</label>
          </div>
          <div className="col-12">
            <input
              type="file"
              name="gambar"
              id="gambar"
              className="input-produk"
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="deskripsi-produk">Deskripsi Produk</label>
          </div>
          <div className="col-12">
            <input
              type="text"
              name="deskripsi-produk"
              id="deskripsi-produk"
              className="input-produk"
              placeholder="Masukkan Deskripsi Produk"
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="harga">Harga Produk (Rp)</label>
          </div>
          <div className="col-12">
            <input
              type="text"
              name="harga"
              id="harga"
              className="input-produk"
              placeholder="Masukkan Harga Produk"
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="stok">Stok Produk</label>
          </div>
          <div className="col-12">
            <input
              type="number"
              name="stok"
              id="stok"
              className="input-produk"
              placeholder="Masukkan Stok Produk"
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

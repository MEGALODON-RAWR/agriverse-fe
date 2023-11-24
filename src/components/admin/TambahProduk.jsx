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
import { axiosInstance } from "@/lib/axios";
import { useToast } from "@chakra-ui/react";

export default function TambahProduk({ setComponent }) {
  const [animateBg2, setAnimateBg2] = useState(false);
  const [animateBg3, setAnimateBg3] = useState(false);
  const [animateTeks, setAnimateTeks] = useState(false);
  const [animateTeknik, setAnimateTeknik] = useState(false);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  const teksRef = useRef(null);
  const teknikRef = useRef(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [spesifikasi, setSpesifikasi] = useState([]);
  const { data: session, status } = useSession();
  const toast = useToast();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        setImage(base64);
      }
      reader.readAsDataURL(file);
    }
  }

  const tambahProduk = () => {
    const data = {
      name: name,
      description: description,
      image: image,
      price: price,
      stock: stock,
      spesification: spesifikasi
    }

    console.log(data);
    axiosInstance.post("/product", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: session?.accessToken,
      },
    }).then((res) => {
      if (res.data.code === 200) {
        toast({
          title: "Berhasil menambah produk",
          status: "success",
          duration: 3000,
        });
        setComponent("produk");
      } else {
        toast({
          title: "Gagal menambah produk",
          status: "error",
          duration: 3000,
        });
      }
    }).catch((err) => {
      toast({
        title: "Gagal menambah produk",
        status: "error",
        duration: 3000,
      });
    })
  }

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="gambar">Gambar Produk</label>
          </div>
          {image && (
            <div className="col-12 mt-20">
              <Image src={image} alt="Gambar Produk" className="gambar-produk" width={300} height={300} />
            </div>
          )}
          <div className="col-12">
            <input
              type="file"
              name="gambar"
              id="gambar"
              className="input-produk"
              onChange={handleFileChange}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
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
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
            />
          </div>
          <div className="col-12 mt-20">
            <label htmlFor="kategori">Spesifikasi Produk</label>
          </div>
          <div className="col-12">
            {Array.isArray(spesifikasi) &&
              spesifikasi.map((item, index) => (
                <div className="row" key={index}>
                  <div className="col-10">
                    <input
                      type="text"
                      name="spesifikasi"
                      id="spesifikasi"
                      className="input-produk mt-2"
                      placeholder="Masukkan Spesifikasi Produk"
                      value={item}
                      onChange={(e) => {
                        const newSpesifikasi = [...spesifikasi];
                        newSpesifikasi[index] = e.target.value;
                        setSpesifikasi(newSpesifikasi);
                      }}
                    />
                  </div>
                  <div className="col-2">
                    <button
                      className="btn-hijau"
                      onClick={() => {
                        const newSpesifikasi = [...spesifikasi];
                        newSpesifikasi.splice(index, 1);
                        setSpesifikasi(newSpesifikasi);
                      }}
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div className="col-12 mt-20">
            <div className="row">
              <div className="col-10 mt-20">
                <button className="btn-hijau" onClick={tambahProduk}>Simpan</button>
                <a
                  href="#"
                  className="btn-abu"
                  onClick={() => setActiveComponent("produk") }
                >
                  Batal
                </a>
              </div>

              <div className="col-2">
                <button
                  className="btn-hijau"
                  onClick={() => {
                    const newSpesifikasi = [...spesifikasi];
                    newSpesifikasi.push("");
                    setSpesifikasi(newSpesifikasi);
                  }}
                >
                  Tambah Spesifikasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

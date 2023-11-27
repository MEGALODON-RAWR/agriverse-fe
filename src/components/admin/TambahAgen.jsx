import React from "react";
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { useToast } from "@chakra-ui/react";

export default function TambahAgen({ setComponent }) {
  const [animateBg2, setAnimateBg2] = useState(false);
  const [animateBg3, setAnimateBg3] = useState(false);
  const [animateTeks, setAnimateTeks] = useState(false);
  const [animateTeknik, setAnimateTeknik] = useState(false);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  const teksRef = useRef(null);
  const teknikRef = useRef(null);

  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [phone, setPhone] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState();
  const [image, setImage] = useState();
  const [imageBase64, setImageBase64] = useState(null);


  const { data: session, status } = useSession();

  const toast = useToast();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        setImage(base64);
        setImageBase64(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const editArtikel = () => {
    const data = {
      nama: nama,
      alamat: alamat,
      phone: phone,
      latitude: latitude,
      longitude: longitude,
      image: imageBase64,
    };

    axiosInstance
      .post(`/agen`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: session?.accessToken,
        },
      })
      .then((res) => {
        if (res.data.code === 200) {
          toast({
            title: "Berhasil",
            description: "Berhasil menambah agen",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setComponent("agen");
        } else {
          toast({
            title: "Gagal",
            description: "Gagal menambah agen",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      });
  };

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

  const [activeComponent, setActiveComponent] = useState("tambahagen");

  useEffect(() => {
    setComponent(activeComponent);
  }, [activeComponent]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="p-medium bb-kuning">Tambah Agen</h1>
        </div>

        <div className="row">
          <div className="col-12 mt-20">
            <label htmlFor="judul-artikel">Nama</label>
          </div>
          <div className="col-12">
            <input
              type="text"
              name="judul-artikel"
              id="judul-artikel"
              className="input-produk"
              placeholder="Masukkan Nama Agen"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="gambar-artikel">Foto</label>
          </div>
          {imageBase64 && (
            <Image src={image} width={500} height={500} />
          )}
          <div className="col-12">
            <input
              type="file"
              name="gambar-artikel"
              id="gambar-artikel"
              className="input-produk"
              placeholder="Masukkan Gambar Agen"
              onChange={handleFileChange}
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="isi-artikel">Alamat</label>
          </div>
          <div className="col-12">
            <textarea
              type="text"
              name="isi-artikel"
              id="isi-artikel"
              className="input-produk"
              rows={8}
              placeholder="Masukkan Isi Artikel"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="isi-artikel">Phone</label>
          </div>
          <div className="col-12">
            <input
              type="text"
              name="isi-artikel"
              id="isi-artikel"
              className="input-produk"
              placeholder="Masukkan Isi nomor telephone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="col-12 mt-20 row">
            <div className="col-6">
              <label htmlFor="isi-artikel">Latitude</label>
              <input
                type="number"
                name="isi-artikel"
                id="isi-artikel"
                className="input-produk"
                placeholder="Masukkan Latitude"
                value={latitude}
                onChange={(e) => setLatitude(Number(e.target.value))}
              />
            </div>
            <div className="col-6">
              <label htmlFor="isi-artikel">Longitude</label>
              <input
                type="number"
                name="isi-artikel"
                id="isi-artikel"
                className="input-produk"
                placeholder="Masukkan Longitude"
                value={longitude}
                onChange={(e) => setLongitude(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="col-12 mt-20">
            <button className="btn-hijau" onClick={editArtikel}>
              Simpan
            </button>

            <a
              href="#"
              className="btn-abu"
              onClick={() => setActiveComponent("artikel")}
            >
              Batal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

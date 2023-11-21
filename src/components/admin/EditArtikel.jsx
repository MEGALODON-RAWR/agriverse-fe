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

export default function EditArtikel({ setComponent, params }) {
  const [animateBg2, setAnimateBg2] = useState(false);
  const [animateBg3, setAnimateBg3] = useState(false);
  const [animateTeks, setAnimateTeks] = useState(false);
  const [animateTeknik, setAnimateTeknik] = useState(false);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  const teksRef = useRef(null);
  const teknikRef = useRef(null);

  const [judul, setJudul] = useState(params.judul);
  const [isi, setIsi] = useState(params.isi);
  const [image, setImage] = useState(params.image);
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
      judul: judul,
      isi: isi,
      ...(imageBase64 && { image: imageBase64 })
    };

    axiosInstance.put(`/berita/${params.id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: session?.accessToken
      },
    }).then((res) => {
      if (res.data.code === 200) {
        toast({
          title: "Berhasil",
          description: "Berhasil mengedit artikel",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      setComponent("artikel");
      } else {
        toast({
          title: "Gagal",
          description: "Gagal mengedit artikel",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
    );
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

  const [activeComponent, setActiveComponent] = useState("editartikel");

  useEffect(() => {
    setComponent(activeComponent);
  }, [activeComponent]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="p-medium bb-kuning">Edit Artikel</h1>
        </div>

        <div className="row">
          <div className="col-12 mt-20">
            <label htmlFor="judul-artikel">Judul Artikel</label>
          </div>
          <div className="col-12">
            <input
              type="text"
              name="judul-artikel"
              id="judul-artikel"
              className="input-produk"
              placeholder="Masukkan Judul Artikel"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="gambar-artikel">Gambar Artikel</label>
          </div>
          <Image src={image} width={500} height={500} />
          <div className="col-12">
            <input
              type="file"
              name="gambar-artikel"
              id="gambar-artikel"
              className="input-produk"
              placeholder="Masukkan Gambar Artikel"
              onChange={handleFileChange}
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="isi-artikel">Isi Artikel</label>
          </div>
          <div className="col-12">
            <textarea 
              type="text"
              name="isi-artikel"
              id="isi-artikel"
              className="input-produk"
              rows={15}
              placeholder="Masukkan Isi Artikel"
              value={isi}
              onChange={(e) => setIsi(e.target.value)}
            />
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

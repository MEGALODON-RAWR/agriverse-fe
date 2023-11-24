import { axiosInstance } from "@/lib/axios";
import { useToast } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
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

  const [name, setName] = useState(params.name);
  const [description, setDescription] = useState(params.description);
  const [price, setPrice] = useState(params.price);
  const [stock, setStock] = useState(params.stock);
  const [image, setImage] = useState(params.image);
  const [spesifikasi, setSpesifikasi] = useState(params.spesification);
  const [imageBase64, setImageBase64] = useState(null);
  const toast = useToast();
  const {data : session, status} = useSession();

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

  
  const editProduk = () => {
    const data = {
      name: name,
      description: description,
      price: price,
      stock: stock,
      spesification: spesifikasi,
      ...(imageBase64 && { image: imageBase64 }),
    };

    console.log(data);

    axiosInstance.put(`/product/${params.id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: session?.accessToken,
      },
    }).then((res) => {
      if (res.data.code === 200) {
        toast({
          title: "Berhasil",
          description: "Berhasil mengedit produk",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      setComponent("produk");
      } else {
        toast({
          title: "Gagal",
          description: "Gagal mengedit produk",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    });
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="gambar">Gambar Produk</label>
          </div>
          <Image src={image} alt={name} width={500} height={500} />
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
              onChange={(e) => setPrice(e.target.value)}
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
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="col-12 mt-20">
            <label htmlFor="kategori">Spesifikasi Produk</label>
          </div>
          <div className="col-12">
            {Array.isArray(spesifikasi) &&
              spesifikasi.map((item, index) => (
                <div className="row">
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
                <button className="btn-hijau" onClick={editProduk}>
                  Simpan
                </button>
                <a
                  href="#"
                  className="btn-abu"
                  onClick={() => setActiveComponent("produk")}
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

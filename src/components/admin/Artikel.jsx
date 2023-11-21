import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import rockwool from "@/images/rockwool.png";
import hidroponik from "@/images/hidroponik.png";
import edit from "@/images/edit.png";
import hapus from "@/images/hapus-merah.png";
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

export default function Artikel({ setComponent }) {
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

  const [activeComponent, setActiveComponent] = useState("artikel");

  useEffect(() => {
    setComponent(activeComponent);
  }, [activeComponent]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <h1 className="p-medium bb-kuning">Artikel</h1>
        </div>
        <div className="row">
          <div className="col-3">
            <input
              type="search"
              name="cari-produk"
              id="cari-produk"
              placeholder="Cari..."
            />
          </div>
          <div className="col-9 d-flex justify-content-end">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filters
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="btn-hijau text-center"
              onClick={() => setActiveComponent("tambahartikel")}
            >
              Tambah
            </a>
          </div>
        </div>

        <div className="row mt-20">
          <div className="col-12">
            <table class="table">
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Judul Artikel</th>
                  <th>Gambar</th>
                  <th>Isi Artikel</th>
                  <th>Tanggal Terbit</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-start p-medium">1</td>
                  <td className="text-start p-medium nama-produk">
                    Harga Tomat di Sini Naik Gila-gilaan! Stok Petani Banyak
                  </td>
                  <td className="text-start p-medium">
                    <Image
                      className="img-produk"
                      src={rockwool}
                      alt="rockwool"
                      width={100}
                    />
                  </td>
                  <td className="text-start p-medium deskripsi">
                    Harga komoditas tomat di India terus mengalami peningkatan.
                    Bahkan harga pangan yang satu ini tercatat mengalami
                    peningkatan ...........
                  </td>
                  <td className="text-start p-medium">12/11/2023</td>
                  <td className="text-start p-medium">
                    <div className="rowq">
                      <div className="col-6">
                        <Image
                          className="icon-aksi float-start"
                          src={edit}
                          alt="edit"
                          width={1000}
                          onClick={() => setActiveComponent("editartikel")}
                        />
                      </div>
                      <div className="col-6">
                        <Image
                          className="icon-aksi float-end mt-20"
                          src={hapus}
                          alt="hapus"
                          width={1000}
                        />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="text-start p-medium">2</td>
                  <td className="text-start p-medium nama-produk">
                    Harga Tomat di Sini Naik Gila-gilaan! Stok Petani Banyak
                  </td>
                  <td className="text-start p-medium">
                    <Image
                      className="img-produk"
                      src={rockwool}
                      alt="rockwool"
                      width={100}
                    />
                  </td>
                  <td className="text-start p-medium deskripsi">
                    Harga komoditas tomat di India terus mengalami peningkatan.
                    Bahkan harga pangan yang satu ini tercatat mengalami
                    peningkatan ...........
                  </td>
                  <td className="text-start p-medium">12/11/2023</td>
                  <td className="text-start p-medium">
                    <div className="rowq">
                      <div className="col-6">
                        <Image
                          className="icon-aksi float-start"
                          src={edit}
                          alt="edit"
                          width={1000}
                          onClick={() => setActiveComponent("editartikel")}
                        />
                      </div>
                      <div className="col-6">
                        <Image
                          className="icon-aksi float-end mt-20"
                          src={hapus}
                          alt="hapus"
                          width={1000}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

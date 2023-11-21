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

export default function Pesanan({ setComponent }) {
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

  const [pesananList, setPesananList] = useState([
    { id: 1, status: "" },
    { id: 2, status: "" },
    { id: 3, status: "" },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setPesananList((prevPesananList) =>
      prevPesananList.map((pesanan) =>
        pesanan.id === id ? { ...pesanan, status: newStatus } : pesanan
      )
    );
    const dropdownButton = document.getElementById(
      `statusPesananDropdown-${id}`
    );
    if (dropdownButton) {
      dropdownButton.click(); // Simulasi klik untuk menutup dropdown
    }
  };

  useEffect(() => {
    setComponent("pesanan");
  }, []); // Gunakan dependensi kosong agar hanya dijalankan sekali saat komponen dimuat

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h1 className="p-medium bb-kuning">Pesanan</h1>
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
          </div>
        </div>

        <div className="row mt-20">
          <div className="col-12">
            <table class="table">
              <thead>
                <tr>
                  <th>ID Pesanan</th>
                  <th>Produk</th>
                  <th>Jumlah</th>
                  <th>Pembeli</th>
                  <th>Status Pesanan</th>
                </tr>
              </thead>
              <tbody>
                {pesananList.map((pesanan) => (
                  <tr
                    key={pesanan.id}
                    style={{
                      backgroundColor:
                        pesanan.status === "selesai" ? "green" : "orange",
                    }}
                  >
                    <td className="text-start p-medium">A1000{pesanan.id}</td>
                    <td className="text-start p-medium nama-produk">
                      Nama Produk
                    </td>
                    <td className="text-start p-medium">Jumlah</td>
                    <td className="text-start p-medium deskripsi">
                      Nama Pembeli
                    </td>
                    <td className="text-start p-medium">
                      <div className="dropdown">
                        <button
                          className={`btn btn-${
                            pesanan.status === "selesai"
                              ? "success"
                              : pesanan.status === "sedang diproses"
                              ? "warning"
                              : pesanan.status === "belum diproses"
                              ? "danger"
                              : "secondary"
                          } dropdown-toggle`}
                          type="button"
                          id={`statusPesananDropdown-${pesanan.id}`}
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {pesanan.status}
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby={`statusPesananDropdown-${pesanan.id}`}
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={() =>
                                handleStatusChange(pesanan.id, "belum diproses")
                              }
                            >
                              Belum Diproses
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={() =>
                                handleStatusChange(
                                  pesanan.id,
                                  "sedang diproses"
                                )
                              }
                            >
                              Sedang Diproses
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={() =>
                                handleStatusChange(pesanan.id, "selesai")
                              }
                            >
                              Selesai
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

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

export default function Dashboard({ setComponent }) {
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

  const [activeComponent, setActiveComponent] = useState("dashboard");

  useEffect(() => {
    setComponent(activeComponent);
  }, [activeComponent]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h1 className="p-medium bb-kuning">Dashboard</h1>
        </div>
        <div className="row mt-20">
          <div className="col-4">
            <div
              class="card bg-hijau"
              style={{
                width: "100%",
              }}
              onClick={() => setActiveComponent("tambahproduk")}
            >
              <a href="#">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <Image
                        className="logo"
                        src={tambah_produk}
                        alt="Tambah Produk"
                        width={100}
                      />
                    </div>
                    <div className="col-8">
                      <h2 className="t_putih p-bold">Tambah Produk</h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-4">
            <div
              className="card bg-hijaumuda"
              style={{
                width: "100%",
              }}
            >
              <a href="gomart">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <Image
                        className="logo"
                        src={tambah_artikel}
                        alt="Tambah Artikel"
                        width={100}
                      />
                    </div>
                    <div className="col-8">
                      <h2 className="t_putih p-bold">Tambah Artikel</h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-4">
            <div
              className="card bg-hijau"
              style={{
                width: "100%",
              }}
            >
              <a href="talkfarm">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <Image
                        className="logo"
                        src={data_penyuluh}
                        alt="Data Penyuluh"
                        width={100}
                      />
                    </div>
                    <div className="col-8">
                      <h2 className="t_putih p-bold">Data Penyuluh</h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-20">
          <div className="col-6 border-dashboard">
            <div className="row">
              <div className="col-9">
                <h5 className="p-semibold t-hijau">Data Pesanan</h5>
              </div>
              <div className="col-3">
                <a href="#" className="btn-hijau">
                  See all
                </a>
              </div>
            </div>

            <div className="row mt-20">
              <div className="col-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Pembeli</th>
                      <th>Produk</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-start p-medium">Nanda</td>
                      <td className="text-start p-medium">Hidpronik Kit</td>
                      <td className="text-start p-medium selesai">Selesai</td>
                    </tr>

                    <tr>
                      <td className="text-start p-medium">Salma</td>
                      <td className="text-start p-medium">Rockwool</td>
                      <td className="text-start p-medium proses">Proses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-6 border-dashboard">
            <div className="row">
              <div className="col-5">
                <h5 className="p-semibold t-hijau">Grafik Penjualan</h5>
              </div>
              <div className="col-7">
                <ul className="d-flex">
                  <li className="approved">Approved</li>
                  <li className="submitted">Submitted</li>
                </ul>
              </div>
            </div>

            <div className="row grafik">
              <div className="col-12">
                <Image
                  className="grafik"
                  src={grafik}
                  alt="Grafik Penjualan"
                  width={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

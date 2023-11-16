import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import Image from "next/image";
import shinta from "../images/shinta.png";
import jane from "../images/jane.png";
import nana from "../images/nana.png";
import dany from "../images/dany.png";

import { useEffect, useRef, useState } from "react";

export default function Tentang() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 className="t-hijau mt-20 p-bold">
              Selamat Datang di Tim Agriverse
            </h2>
          </div>
          <div className="col-7">
            <a
              href="ceritakami"
              className="btn-hijau mt-20 float-end justify-content-center d-flex"
            >
              Cerita Kami
            </a>
          </div>
          <div className="col-12">
            <p className="p-regular fs-17 text-justify mt-20 mb-10">
              Dalam setiap proyek yang kami hadapi, harapannya dapat memberikan
              yang terbaik. Kami percaya bahwa kerjasama adalah kunci kesuksesan
                sejati Terima kasih telah mengunjungi &quot;Agriverse&quot; kami, mari
              bersama-sama menciptakan perubahan yang luar biasa.
              </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Image className="tim" src={shinta} alt="Shinta" />
            <p className="mt-20 p-semibold t-hijau text-center">
              Shinta Arafah Hidayanti
            </p>
          </div>
          <div className="col-3">
            <Image className="tim" src={jane} alt="Jane" />
            <p className="mt-20 p-semibold t-hijau text-center">
              Evlyn Jane Putri
            </p>
          </div>
          <div className="col-3">
            <Image className="tim" src={nana} alt="Nana" />
            <p className="mt-20 p-semibold t-hijau text-center">
              Andi Nur Fitriana
            </p>
          </div>
          <div className="col-3">
            <Image className="tim" src={dany} alt="Dany" />
            <p className="mt-20 p-semibold t-hijau text-center">
              Dany Fadhilah
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="p-semibold text-center t-hijau judul-berita mt-50">
              VISI
            </h2>
          </div>
          <div className="col-12">
            <div className="visi text-center p-medium mt-50">
              Menjadi sumber informasi terpercaya dan platform terdepan dalam
              menyediakan berita terkini, panduan praktis, dan layanan jual beli
              alat dan bahan pertanian serta menghubungkan petani, ahli
              pertanian, dan masyarakat untuk mendukung pertanian yang efisien,
              berkelanjutan, dan menghasilkan hasil terbaik.
            </div>
          </div>
          <div className="col-12">
            <h2 className="p-semibold text-center t-hijau judul-berita mt-50">
              MISI
            </h2>
          </div>
          <div className="col-12">
            <div className="visi mt-50 mb-100">
              <ol type="1" className="p-medium listmisi">
                <li>
                  Menyediakan platform jual beli alat dan bahan pertanian yang
                  aman dan terpercaya, memudahkan petani dalam mencari dan
                  menjual produk pertanian serta alat yang dibutuhkan.
                </li>
                <li>
                  Menyediakan informasi tentang lokasi penjualan alat dan bahan
                  pertanian terdekat, termasuk harga, ketersediaan, dan ulasan
                  pengguna.
                </li>
                <li>
                  Menyediakan berita terkini dan terpercaya tentang perkembangan
                  terbaru dalam industri pertanian, termasuk inovasi teknologi,
                  kebijakan pertanian, dan tren pasar.
                </li>
                <li>
                  Menyediakan panduan praktis tentang cara menanam dengan baik,
                  teknik pertanian modern, pengelolaan hama dan penyakit, serta
                  praktik berkelanjutan untuk meningkatkan produktivitas dan
                  kualitas hasil pertanian.
                </li>
                <li>
                  Membangun komunitas yang aktif dan kolaboratif antara petani,
                  ahli pertanian, dan pemangku kepentingan lainnya untuk saling
                  berbagi pengetahuan, pengalaman, dan peluang kerjasama.
                </li>
                <li>
                  Mengedukasi masyarakat tentang pentingnya pertanian
                  berkelanjutan, keberlanjutan pangan, dan dampak positif dari
                  membeli produk pertanian lokal.
                </li>
                <li>
                  Mendorong adopsi teknologi pertanian yang inovatif dan ramah
                  lingkungan untuk meningkatkan efisiensi produksi dan
                  mengurangi dampak negatif terhadap lingkungan.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import tim from "../images/timkami.png";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function Tentang() {
  return (
    <>
      <Header />
      <div className="bg-berita">
        <div className="container">
          <h2 className="p-semibold text-center t_putih judul-berita">
            TIM KAMI
          </h2>
          <div className="row">
            <div className="col-12">
              <Image className="mt-20" src={tim} alt="tim kami" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="p-semibold text-center t-hijau judul-berita mt-50">
              VISI KAMI
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
              MISI KAMI
            </h2>
          </div>
          <div className="col-12">
            <div className="visi mt-50">
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
            <div className="col-12">
              <a href="ceritakami">
                <h2 className="t-hijau mt-50 mb-100 d-flex justify-content-end">Cerita Kami --&gt;</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

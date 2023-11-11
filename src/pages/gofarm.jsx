import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import filter from "../images/filter.png";
import toko from "../images/icon-toko.png";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function GoFarm() {
  return (
    <>
      <Header />
      <div className="bg-gofarm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mt-20 p-bold text-center">
                BELANJA UNTUK MENDUKUNG{" "}
                <span className="t-hijau">PERTANIANMU</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-hijau-muda">
        <div className="container">
          <div className="row">
            <div className="col-2 d-flex b-filter">
              <Image className="logo-filter" src={filter} alt="filter" />
              <h4 className="t_putih p-medium filter">Filter</h4>
            </div>
            <div className="col-10">
              <p className="p-regular t_putih tengah">
                Menampilkan 1 dari 16 hasil
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container toko-terdekat">
        <div className="row">
          <div className="col-5 mt-50">
            <div className="row bg-hijau-muda-toko toko-terdekat2">
              <div className="col-3 d-flex align-items-center justify-content-center">
                <Image
                  className="logo-carousel"
                  src={toko}
                  alt="icontoko"
                  width={50}
                />
              </div>
              <div className="col-9 d-flex align-items-center justify-content-center mt-2">
                <h4 className="t_putih p-medium">Toko Terdekat</h4>
              </div>
            </div>
          </div>
          <div className="col-7 mt-70">
            <input type="search" name="" id="" className="cari-barang" placeholder="Cari barang yang anda butuhkan"/>
            <a className="btn-hijau-muda" href="">Cari</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ceritakami p-medium mt-50 text-justify">
              <strong>AGRIVERSE</strong> adalah platform informasi terdepan yang
              menyediakan berita perkembangan terbaru di sektor pertanian,
              lokasi penjualan alat dan bahan pertanian, panduan praktis tentang
              cara menanam dengan baik, berita tentang pertanian, serta layanan
              jual beli alat dan bahan pertanian.
              <br />
              <br />
              Kami senantiasa berkomitmen untuk memberikan kepuasan pada seluruh
              pengguna platform Agrinesia. Kami juga turut berkontribusi
              terhadap masyarakat dan kelestarian lingkungan melalui berbagai
              program dan Corporate Social Responsibility (CSR) perusahaan.
              <br />
              <br />
              Dalam rangka memberikan layanan terbaik, kami selalu berinovasi
              dalam produk dan layanan agar dapat memberikan produk-produk
              dengan kualitas terbaik yang dapat menjadi tren di semua tempat
              Agrinesia berada. Saat ini, Agrinesia telah memiliki berbagai
              produk unggulan seperti pupuk organik, benih unggul, pestisida
              alami, dan alat pertanian modern.
              <br />
              <br />
              Agrinesia juga menyediakan informasi tentang lokasi penjualan alat
              dan bahan pertanian terdekat, termasuk harga, ketersediaan, dan
              ulasan pengguna. Kami juga menyediakan panduan praktis tentang
              cara menanam dengan baik, teknik pertanian modern, pengelolaan
              hama dan penyakit, serta praktik berkelanjutan untuk meningkatkan
              produktivitas dan kualitas hasil pertanian.
              <br />
              <br />
              Kami juga menyajikan berita terkini dan terpercaya tentang
              perkembangan terbaru dalam industri pertanian, termasuk inovasi
              teknologi, kebijakan pertanian, dan tren pasar. Agrinesia juga
              menyediakan platform jual beli alat dan bahan pertanian yang aman
              dan terpercaya, memudahkan petani dalam mencari dan menjual produk
              pertanian serta alat yang dibutuhkan.
              <br />
              <br />
              Dengan visi dan misi kami untuk mendukung pertanian yang efisien,
              berkelanjutan, dan menghasilkan hasil terbaik, kami berharap dapat
              memberikan akses mudah, informasi terpercaya, dan layanan yang
              mendukung petani dan pemangku kepentingan di sektor pertanian
              dalam mencapai hasil pertanian yang lebih baik dan berkelanjutan.
            </div>
            <div className="col-12">
              <a href="tentang">
                <h2 className="t-hijau mt-50 mb-100">&lt;-- Visi Misi Kami</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

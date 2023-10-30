import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import tim from "../images/timkami.png";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function CeritaKami() {
  return (
    <>
      <Header />
      <div className="bg-berita">
        <div className="container">
          <h2 className="p-semibold text-center t_putih judul-berita">
            CERITA KAMI
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="visi p-medium mt-50 text-justify">
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
                <h2 className="t-hijau mt-50 mb-100">
                  &lt;-- Visi Misi Kami
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

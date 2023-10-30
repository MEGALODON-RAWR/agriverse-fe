import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import Image from "next/image";
import berita1 from "../images/berita1.png";

import { useEffect, useRef, useState } from "react";

export default function IsiBerita() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 className="p-bold mt-50">
              Harga Tomat di Sini Naik Gila-gilaan! Stok Petani Banyak
            </h2>
          </div>
        </div>
        <div className="row">
          <center>
            <div className="col-10">
              <Image
                className="img-artikel mt-20"
                src={berita1}
                alt="berita1"
              />
            </div>
          </center>
        </div>
        <div className="row">
          <div className="col-12 text-justify">
            <p className="paragraf1 p-regular mt-20">
              <strong> Jakarta </strong>- Harga komoditas tomat di India terus
              mengalami peningkatan. Bahkan harga pangan yang satu ini tercatat
              mengalami peningkatan lebih dari 4 kali lipat dalam beberapa pekan
              terakhir.Melansir dari Business Today India, Rabu (12/7/2023),
              hingga akhir pekan kemarin harga eceran tomat sempat melonjak
              hingga 162 rupee per kg atau sekitar Rp 29,6 ribu (kurs Rp
              183/rupee India).Secara rinci menurut data yang dikelola oleh
              Kementerian Urusan Konsumen India, harga eceran tomat di tertinggi
              terjadi di kota Kolkata senilai 152 rupee per kg, diikuti oleh
              Delhi dengan 120 rupee per kg, Chennai dengan 117 rupee per kg,
              dan Mumbai 108 rupee per kg.
            </p>
            <p className="paragraf1 p-regular mt-20">
              Tidak hanya itu, di tengah kenaikan harga ini banyak petani tomat
              di India yang mengalami insiden pencurian. Bahkan salah seorang
              petani di Belur, Karnataka, dilaporkan kecolongan tomat senilai
              lebih dari 2,7 lakh rupee (270.000 rupee atau Rp 49,4 juta)."Kami
              telah menanam tomat di dua hektar tetapi kami tidak mendapatkan
              apa-apa. Tomat biasanya tumbuh tetapi tidak pernah matang. Kali
              ini mereka tumbuh, tetapi kemarin seseorang mencurinya," kata
              salah seorang petani tomat di Belur, Parvathamma.Secara terpisah,
              20 kg tomat diduga dicuri dari sebuah toko sayur di distrik
              Mahabubabad di Telangana. Menurut kesaksian pedagang sayuran itu,
              tomat seberat 20 kg dan empat sayuran lainnya seberat sekitar 35
              kg yang disimpan dalam dua kotak di tokonya dibawa pergi oleh
              orang tak dikenal.Hal ini menunjukkan betapa seriusnya kondisi
              kenaikan harga tomat di India. Terlebih mengingat bagaimana tomat
              sendiri merupakan salah satu komoditas paling diminati di negara
              itu.Baca artikel detikfinance.
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-100" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="p-semibold">Tinggalkan Komentar</h4>
            <textarea
              placeholder="Tuliskan Komentarmu!"
              className="input-komen mt-20"
              style={{ height: "250px !important" }}
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <input
              className="komen-isi-berita mt-20"
              type="text"
              placeholder="Nama"
            />
          </div>
          <div className="col-6">
            <input
              className="komen-isi-berita mt-20"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button type="submit" className="btn-hijau mt-20 mb-100">
              Kirim Komentar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

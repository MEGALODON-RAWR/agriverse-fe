import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import tanpa from "@/images/tanpatanah.png";
import artikel1 from "@/images/tomat-artikel.png";
import artikel2 from "@/images/artikel2.png";
import artikel3 from "@/images/artikel3.png";
import artikel4 from "@/images/artikel4.png";
import Image from "next/image";

import CardBerita from "@/components/CardBerita";
import { useFetchBerita } from "@/features/berita/useFetchBerita";

export default function Berita() {
  const { berita, isLoading, error } = useFetchBerita(1, 4, "");
  const {
    berita: berita2,
    isLoading: isLoading2,
    error: error2,
  } = useFetchBerita(1, 10, "");

  return (
    <>
      <Header />
      <div className="bg-berita">
        <div className="container">
          <h1 className="p-bold text-center judul-berita">Berita</h1>
        </div>
      </div>

      <div className="container">
        <div className="row hot-topics">
          <div className="col-12">
            <p className="t-hitam fs-20 fw-bold mt-50 p-semibold">Hot Topics</p>
            <hr className="custom-hr-kiri" />
          </div>
          <div className="row mt-20 text-justify">
            <CardBerita berita={berita} />
          </div>
        </div>

        <div className="row hot-topics">
          <div className="col-12">
            <p className="t-hitam fs-20 fw-bold mt-20 p-semibold">News</p>
            <hr className="custom-hr-kiri" />

            <div className="d-flex justify-content-center">
              <div
                id="myCarousel1"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      className="logo-carousel"
                      src={tanpa}
                      alt="tanpatanah"
                      width={1000}
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>
                        Keren! Mahasiswa KKN UNDIP Mampu Menyulap Galon Bekas
                        Menjadi Hidroponik Sederhana yang Bermanfaat dan
                        Memiliki Nilai Estetika
                      </h5>
                      <p>
                        Andita Saffanah Rana selaku mahasiswi KKN TIM II UNDIP
                        2021/2022 yang berlokasi di Kelurahan Bubakan memberikan
                        informasi kepada ibu-ibu PKK di Kelurahan Bubakan
                        mengenai pengertian, manfaat, serta cara pembuatan
                        hidroponik sederhana menggunakan galon bekas.
                      </p>
                      <a
                        href="isi-berita"
                        className="btn-hijau-news-artikel float-end text-center"
                      >
                        Lihat Selengkapnya
                      </a>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <Image
                      className="logo-carousel"
                      src={tanpa}
                      alt="tanpatanah"
                      width={1000}
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>
                        Keren! Mahasiswa KKN UNDIP Mampu Menyulap Galon Bekas
                        Menjadi Hidroponik Sederhana yang Bermanfaat dan
                        Memiliki Nilai Estetika
                      </h5>
                      <p>
                        Andita Saffanah Rana selaku mahasiswi KKN TIM II UNDIP
                        2021/2022 yang berlokasi di Kelurahan Bubakan memberikan
                        informasi kepada ibu-ibu PKK di Kelurahan Bubakan
                        mengenai pengertian, manfaat, serta cara pembuatan
                        hidroponik sederhana menggunakan galon bekas.
                      </p>
                      <a
                        href="isi-berita"
                        className="btn-hijau-news-artikel float-end text-center"
                      >
                        Lihat Selengkapnya
                      </a>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <Image
                      className="logo-carousel"
                      src={tanpa}
                      alt="tanpatanah"
                      width={1000}
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>
                        Keren! Mahasiswa KKN UNDIP Mampu Menyulap Galon Bekas
                        Menjadi Hidroponik Sederhana yang Bermanfaat dan
                        Memiliki Nilai Estetika
                      </h5>
                      <p>
                        Andita Saffanah Rana selaku mahasiswi KKN TIM II UNDIP
                        2021/2022 yang berlokasi di Kelurahan Bubakan memberikan
                        informasi kepada ibu-ibu PKK di Kelurahan Bubakan
                        mengenai pengertian, manfaat, serta cara pembuatan
                        hidroponik sederhana menggunakan galon bekas.
                      </p>
                      <a
                        href="isi-berita"
                        className="btn-hijau-news-artikel float-end text-center"
                      >
                        Lihat Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  className="carousel-control-prev-icon d-none"
                  href="#myCarousel1"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next-icon d-none"
                  href="#myCarousel1"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>

                <ol className="carousel-indicators">
                  <li
                    data-bs-target="#myCarousel1"
                    data-bs-slide-to="0"
                    className="active"
                  ></li>
                  <li data-bs-target="#myCarousel1" data-bs-slide-to="1"></li>
                  <li data-bs-target="#myCarousel1" data-bs-slide-to="2"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="row hot-topics">
          <div className="row mt-20 text-justify mt-50">
            <CardBerita berita={berita2} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

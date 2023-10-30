import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import gofarm from "@/images/gofarm.png";
import gomart from "@/images/gomart.png";
import talkfarm from "@/images/talkfarm.png";
import tangan from "@/images/tangan.png";
import kangkung from "@/images/kangkung.png";
import bayam from "@/images/bayam.png";
import timun from "@/images/timun.png";
import seledri from "@/images/seledri.png";
import tomat from "@/images/tomat.png";
import teknik from "@/images/bg_teknik.jpg";
import tanpa from "@/images/tanpatanah.png";
import artikel1 from "@/images/tomat-artikel.png";
import artikel2 from "@/images/artikel2.png";
import artikel3 from "@/images/artikel3.png";
import artikel4 from "@/images/artikel4.png";
import maps from "@/images/maps.png";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function Berita() {
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
            <div className="col-3">
              <div class="card card-artikel" style={{ width: "18rem;" }}>
                <Image className="img-artikel" src={artikel1} alt="artikel1" />
                <div class="card-body">
                  <h6 class="card-title p-medium fs-15">
                    PLTA Diprediksi Jadi Andalan Pertumbuhan Energi Terbarukan
                    10 Tahun Mendatang
                  </h6>
                  <p class="card-text fs-12">
                    Hingga 10 tahun ke depan energi air masih menjadi andalan
                    dan motor untuk pertumbuhan energi terbarukan di Indonesia
                    yang memiliki banyak aliran sungai. Karena itu pembangkit
                    listrik tenaga air (PLTA) akan menjadi tulang punggung untuk
                    Indonesia transisi dari energi fosil ke energi terbarukan.
                  </p>
                  <a
                    href="isi-berita"
                    class="btn-hijau float-end text-center fs-12"
                    style={{
                      width: "90px",
                      height: "38px",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div class="card card-artikel" style={{ width: "18rem;" }}>
                <Image className="img-artikel" src={artikel2} alt="artikel2" />
                <div class="card-body">
                  <h6 class="card-title p-medium fs-15">
                    PLTA Diprediksi Jadi Andalan Pertumbuhan Energi Terbarukan
                    10 Tahun Mendatang
                  </h6>
                  <p class="card-text fs-12">
                    Hingga 10 tahun ke depan energi air masih menjadi andalan
                    dan motor untuk pertumbuhan energi terbarukan di Indonesia
                    yang memiliki banyak aliran sungai. Karena itu pembangkit
                    listrik tenaga air (PLTA) akan menjadi tulang punggung untuk
                    Indonesia transisi dari energi fosil ke energi terbarukan.
                  </p>
                  <a
                    href="isi-berita"
                    class="btn-hijau float-end text-center fs-12"
                    style={{
                      width: "90px",
                      height: "38px",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div class="card card-artikel" style={{ width: "18rem;" }}>
                <Image className="img-artikel" src={artikel3} alt="artikel3" />
                <div class="card-body">
                  <h6 class="card-title p-medium fs-15">
                    PLTA Diprediksi Jadi Andalan Pertumbuhan Energi Terbarukan
                    10 Tahun Mendatang
                  </h6>
                  <p class="card-text fs-12">
                    Hingga 10 tahun ke depan energi air masih menjadi andalan
                    dan motor untuk pertumbuhan energi terbarukan di Indonesia
                    yang memiliki banyak aliran sungai. Karena itu pembangkit
                    listrik tenaga air (PLTA) akan menjadi tulang punggung untuk
                    Indonesia transisi dari energi fosil ke energi terbarukan.
                  </p>
                  <a
                    href="isi-berita"
                    class="btn-hijau float-end text-center fs-12"
                    style={{
                      width: "90px",
                      height: "38px",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div class="card card-artikel" style={{ width: "18rem;" }}>
                <Image className="img-artikel" src={artikel4} alt="artikel4" />
                <div class="card-body">
                  <h6 class="card-title p-medium fs-15">
                    PLTA Diprediksi Jadi Andalan Pertumbuhan Energi Terbarukan
                    10 Tahun Mendatang
                  </h6>
                  <p class="card-text fs-12">
                    Hingga 10 tahun ke depan energi air masih menjadi andalan
                    dan motor untuk pertumbuhan energi terbarukan di Indonesia
                    yang memiliki banyak aliran sungai. Karena itu pembangkit
                    listrik tenaga air (PLTA) akan menjadi tulang punggung untuk
                    Indonesia transisi dari energi fosil ke energi terbarukan.
                  </p>
                  <a
                    href="isi-berita"
                    class="btn-hijau float-end text-center fs-12"
                    style={{
                      width: "90px",
                      height: "38px",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row hot-topics">
          <div className="col-12">
            <p className="t-hitam fs-20 fw-bold mt-50 p-semibold">News</p>
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
            <div className="col-3">
              <div class="card card-artikel" style={{ width: "18rem;" }}>
                <Image className="img-artikel" src={artikel1} alt="artikel1" />
                <div class="card-body">
                  <h6 class="card-title p-medium fs-15">
                    PLTA Diprediksi Jadi Andalan Pertumbuhan Energi Terbarukan
                    10 Tahun Mendatang
                  </h6>
                  <p class="card-text fs-12">
                    Hingga 10 tahun ke depan energi air masih menjadi andalan
                    dan motor untuk pertumbuhan energi terbarukan di Indonesia
                    yang memiliki banyak aliran sungai. Karena itu pembangkit
                    listrik tenaga air (PLTA) akan menjadi tulang punggung untuk
                    Indonesia transisi dari energi fosil ke energi terbarukan.
                  </p>
                  <a
                    href="isi-berita"
                    class="btn-hijau float-end text-center fs-12"
                    style={{
                      width: "90px",
                      height: "38px",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div class="card card-artikel" style={{ width: "18rem;" }}>
                <Image className="img-artikel" src={artikel2} alt="artikel2" />
                <div class="card-body">
                  <h6 class="card-title p-medium fs-15">
                    PLTA Diprediksi Jadi Andalan Pertumbuhan Energi Terbarukan
                    10 Tahun Mendatang
                  </h6>
                  <p class="card-text fs-12">
                    Hingga 10 tahun ke depan energi air masih menjadi andalan
                    dan motor untuk pertumbuhan energi terbarukan di Indonesia
                    yang memiliki banyak aliran sungai. Karena itu pembangkit
                    listrik tenaga air (PLTA) akan menjadi tulang punggung untuk
                    Indonesia transisi dari energi fosil ke energi terbarukan.
                  </p>
                  <a
                    href="isi-berita"
                    class="btn-hijau float-end text-center fs-12"
                    style={{
                      width: "90px",
                      height: "38px",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div class="card card-artikel" style={{ width: "18rem;" }}>
                <Image className="img-artikel" src={artikel3} alt="artikel3" />
                <div class="card-body">
                  <h6 class="card-title p-medium fs-15">
                    PLTA Diprediksi Jadi Andalan Pertumbuhan Energi Terbarukan
                    10 Tahun Mendatang
                  </h6>
                  <p class="card-text fs-12">
                    Hingga 10 tahun ke depan energi air masih menjadi andalan
                    dan motor untuk pertumbuhan energi terbarukan di Indonesia
                    yang memiliki banyak aliran sungai. Karena itu pembangkit
                    listrik tenaga air (PLTA) akan menjadi tulang punggung untuk
                    Indonesia transisi dari energi fosil ke energi terbarukan.
                  </p>
                  <a
                    href="isi-berita"
                    class="btn-hijau float-end text-center fs-12"
                    style={{
                      width: "90px",
                      height: "38px",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div class="card card-artikel" style={{ width: "18rem;" }}>
                <Image className="img-artikel" src={artikel4} alt="artikel4" />
                <div class="card-body">
                  <h6 class="card-title p-medium fs-15">
                    PLTA Diprediksi Jadi Andalan Pertumbuhan Energi Terbarukan
                    10 Tahun Mendatang
                  </h6>
                  <p class="card-text fs-12">
                    Hingga 10 tahun ke depan energi air masih menjadi andalan
                    dan motor untuk pertumbuhan energi terbarukan di Indonesia
                    yang memiliki banyak aliran sungai. Karena itu pembangkit
                    listrik tenaga air (PLTA) akan menjadi tulang punggung untuk
                    Indonesia transisi dari energi fosil ke energi terbarukan.
                  </p>
                  <a
                    href="isi-berita"
                    class="btn-hijau float-end text-center fs-12"
                    style={{
                      width: "90px",
                      height: "38px",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-justify mt-50 mb-20">
            <div className="col-3">
              <div class="card card-artikel" style={{ width: "18rem;" }}>
                <Image className="img-artikel" src={artikel1} alt="artikel1" />
                <div class="card-body">
                  <h6 class="card-title p-medium fs-15">
                    PLTA Diprediksi Jadi Andalan Pertumbuhan Energi Terbarukan
                    10 Tahun Mendatang
                  </h6>
                  <p class="card-text fs-12">
                    Hingga 10 tahun ke depan energi air masih menjadi andalan
                    dan motor untuk pertumbuhan energi terbarukan di Indonesia
                    yang memiliki banyak aliran sungai. Karena itu pembangkit
                    listrik tenaga air (PLTA) akan menjadi tulang punggung untuk
                    Indonesia transisi dari energi fosil ke energi terbarukan.
                  </p>
                  <a
                    href="isi-berita"
                    class="btn-hijau float-end text-center fs-12"
                    style={{
                      width: "90px",
                      height: "38px",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div class="card card-artikel" style={{ width: "18rem;" }}>
                <Image className="img-artikel" src={artikel2} alt="artikel2" />
                <div class="card-body">
                  <h6 class="card-title p-medium fs-15">
                    PLTA Diprediksi Jadi Andalan Pertumbuhan Energi Terbarukan
                    10 Tahun Mendatang
                  </h6>
                  <p class="card-text fs-12">
                    Hingga 10 tahun ke depan energi air masih menjadi andalan
                    dan motor untuk pertumbuhan energi terbarukan di Indonesia
                    yang memiliki banyak aliran sungai. Karena itu pembangkit
                    listrik tenaga air (PLTA) akan menjadi tulang punggung untuk
                    Indonesia transisi dari energi fosil ke energi terbarukan.
                  </p>
                  <a
                    href="isi-berita"
                    class="btn-hijau float-end text-center fs-12"
                    style={{
                      width: "90px",
                      height: "38px",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div class="card card-artikel" style={{ width: "18rem;" }}>
                <Image className="img-artikel" src={artikel3} alt="artikel3" />
                <div class="card-body">
                  <h6 class="card-title p-medium fs-15">
                    PLTA Diprediksi Jadi Andalan Pertumbuhan Energi Terbarukan
                    10 Tahun Mendatang
                  </h6>
                  <p class="card-text fs-12">
                    Hingga 10 tahun ke depan energi air masih menjadi andalan
                    dan motor untuk pertumbuhan energi terbarukan di Indonesia
                    yang memiliki banyak aliran sungai. Karena itu pembangkit
                    listrik tenaga air (PLTA) akan menjadi tulang punggung untuk
                    Indonesia transisi dari energi fosil ke energi terbarukan.
                  </p>
                  <a
                    href="isi-berita"
                    class="btn-hijau float-end text-center fs-12"
                    style={{
                      width: "90px",
                      height: "38px",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div class="card card-artikel" style={{ width: "18rem;" }}>
                <Image className="img-artikel" src={artikel4} alt="artikel4" />
                <div class="card-body">
                  <h6 class="card-title p-medium fs-15">
                    PLTA Diprediksi Jadi Andalan Pertumbuhan Energi Terbarukan
                    10 Tahun Mendatang
                  </h6>
                  <p class="card-text fs-12">
                    Hingga 10 tahun ke depan energi air masih menjadi andalan
                    dan motor untuk pertumbuhan energi terbarukan di Indonesia
                    yang memiliki banyak aliran sungai. Karena itu pembangkit
                    listrik tenaga air (PLTA) akan menjadi tulang punggung untuk
                    Indonesia transisi dari energi fosil ke energi terbarukan.
                  </p>
                  <a
                    href="isi-berita"
                    class="btn-hijau float-end text-center fs-12"
                    style={{
                      width: "90px",
                      height: "38px",
                      padding: "10px",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

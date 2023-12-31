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
import maps from "@/images/markerlocation.png";
import Image from "next/image";
import dynamic from "next/dynamic";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useFetchBerita } from "@/features/berita/useFetchBerita";
import CardBerita from "@/components/CardBerita";

export default function Home() {
  const [animateBg2, setAnimateBg2] = useState(false);
  const [animateBg3, setAnimateBg3] = useState(false);
  const [animateTeks, setAnimateTeks] = useState(false);
  const [animateTeknik, setAnimateTeknik] = useState(false);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  const teksRef = useRef(null);
  const teknikRef = useRef(null);
  const { berita: dataBerita } = useFetchBerita(1, 4, "");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

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

  const MapWithNoSSR = dynamic(() => import("@/components/Map.jsx"), {
    ssr: false,
  });

  return (
    <>
      <Header />
      <div className="bg1">
        <div className="container">
          <div className="ml-100 pt-220 pb-220 jumbotron">
            <h1 className="t_putih fs-60 p-semibold">TINGKATKAN</h1>
            <h2 className="t_putih fs-50 mt-20 p-semibold">
              PRODUKTIVITAS PERTANIAN ANDA <br></br> DENGAN
              <span className="t_kuning p-semibold"> HIDROPONIK</span>
            </h2>
            <p className="t_hitam fs-17 fw-bold mt-20 p-regular">
              Maksimalkan hasil panen Anda dengan metode hidroponik yang efisien
              dan ramah lingkungan
            </p>
            <a href="#temukan">
              <button className="btn-hijau mt-20 p-semibold">
                Selanjutnya
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="bg2" ref={bg2Ref}>
        <div className="container">
          <div className="mt-100 mb-100">
            <p
              className="t-hitam fs-17 fw-bold mt-20 text-center p-bold"
              id="temukan"
            >
              Temukan Kebutuhan Anda
            </p>
            <hr className="custom-hr" />
            <p className="t-hijau text-center p-medium mt-3 mb-10">
              Dengan fitur-fitur ini untuk nikmati kemudahan dan kenyamanan
            </p>

            <div className="row">
              <div className="col-12 col-xxl-4 col-lg-4 col-md-6 col-sm-12">
                <div
                  class="card bg-hijau"
                  style={{
                    width: "100%",
                    opacity: animateBg2 ? 1 : 0,
                    transform: animateBg2
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition:
                      "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                  }}
                >
                  <a href="gofarm">
                    <div class="card-body fitur-hp">
                      <div className="row">
                        <div className="col-4">
                          <Image
                            className="logo"
                            src={gofarm}
                            alt="GoFarm"
                            width={100}
                          />
                        </div>
                        <div className="col-8">
                          <h2 className="t_putih p-bold">Go Farm</h2>
                          <p className="t_putih desk p-regular">
                            Yuk! Nikmati kegiatan menanam degan mudah
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-xxl-4 col-lg-4 col-md-6 col-sm-12">
                <div
                  class="card bg-hijaumuda"
                  style={{
                    width: "100%",
                    opacity: animateBg2 ? 1 : 0,
                    transform: animateBg2
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition:
                      "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                  }}
                >
                  <a href="gomart">
                    <div class="card-body fitur-hp">
                      <div className="row">
                        <div className="col-4">
                          <Image
                            className="logo"
                            src={gomart}
                            alt="GoMart"
                            width={100}
                          />
                        </div>
                        <div className="col-8">
                          <h2 className="t_putih p-bold">Go Mart</h2>
                          <p className="t_putih desk p-regular">
                            Belanja disini untuk memenuhi kebutuhan mu.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-xxl-4 col-lg-4 col-md-12 col-sm-12">
                <div
                  class="card bg-hijau"
                  style={{
                    width: "100%",
                    opacity: animateBg2 ? 1 : 0,
                    transform: animateBg2
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition:
                      "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                  }}
                >
                  <a href="talkfarm">
                    <div class="card-body fitur-hp">
                      <div className="row">
                        <div className="col-4">
                          <Image
                            className="logo"
                            src={talkfarm}
                            alt="TalkFarm"
                            width={100}
                          />
                        </div>
                        <div className="col-8">
                          <h2 className="t_putih p-bold">Talk Farm</h2>
                          <p className="t_putih desk p-regular">
                            Temukan teman untuk berdiskusi dengan mu.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg3" ref={teksRef}>
        <div className="container-fluid">
          <div className="row pt-220 pb-220">
            <div className="col-12 col-xxl-8 col-lg-8 col-md-8 col-sm-8">
              <h2
                className="pl-200 t_putih fs-50 mt-20 p-semibold"
                style={{
                  opacity: animateBg2 ? 1 : 0,
                  transform: animateBg2 ? "translateY(0)" : "translateY(20px)",
                  transition:
                    "opacity 1s ease-in-out, transform 0.5s ease-in-out",
                }}
              >
                Apa, itu{" "}
                <span ref={bg3Ref} className="t_kuning p-semibold">
                  hidroponik?
                </span>
              </h2>

              <h3
                className=" pl-200 t_kuning mt-20 p-semibold"
                style={{
                  opacity: animateBg2 ? 1 : 0,
                  transform: animateBg2 ? "translateY(0)" : "translateY(20px)",
                  transition:
                    "opacity 1s ease-in-out, transform 0.5s ease-in-out",
                }}
              >
                Hidroponik,{" "}
                <span className="t_putih p-medium fs-20">
                  merupakan metode bertanam tanpa menggunakan tanah sebagai
                  media tanam. Tanaman ditanam dalam larutan nutrisi yang kaya
                  akan unsur-unsur penting bagi pertumbuhan tanaman.
                </span>
              </h3>
            </div>

            <div className="col-4 me-auto" style={{ position: "relative" }}>
              <Image
                className="tangan"
                src={tangan}
                alt="TalkFarm"
                width={400}
                style={{
                  position: "absolute",
                  right: animateBg3 ? "0" : "-200px",
                  transition: "right 1.5s ease-in-out",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg2">
        <div className="container">
          <div className="mt-50 mb-100 mt-100">
            <p className="t-hitam fs-17 fw-bold mt-20 text-center p-bold mm">
              Mari Mengenal
            </p>
            <hr className="custom-hr" />
            <p className="t-hijau text-center p-medium mt-3 mb-10 jh">
              Jenis-jenis tumbuhan hidroponik
            </p>

            <div className="d-flex justify-content-center">
              <div
                id="myCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row p-regular p-3 text-center">
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={bayam}
                            alt="bayam"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Bayam</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={kangkung}
                            alt="kangkung"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Kangkung</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={timun}
                            alt="timun"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Timun</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={seledri}
                            alt="seledri"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Seledri</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={tomat}
                            alt="tomat"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Tomat</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={kangkung}
                            alt="kangkung"
                            width={70}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row p-regular p-3 text-center">
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={bayam}
                            alt="bayam"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Bayam</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={kangkung}
                            alt="kangkung"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Kangkung</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={timun}
                            alt="timun"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Timun</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={seledri}
                            alt="seledri"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Seledri</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={tomat}
                            alt="tomat"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Tomat</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={kangkung}
                            alt="kangkung"
                            width={70}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row p-regular p-3 text-center">
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={bayam}
                            alt="bayam"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Bayam</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={kangkung}
                            alt="kangkung"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Kangkung</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={timun}
                            alt="timun"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Timun</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={seledri}
                            alt="seledri"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Seledri</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={tomat}
                            alt="tomat"
                            width={70}
                          />
                        </div>
                        <p className="t-hijau mt-3">Tomat</p>
                      </div>
                      <div className="col-4 col-xxl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="card-carousel">
                          <Image
                            className="logo-carousel"
                            src={kangkung}
                            alt="kangkung"
                            width={70}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev-icon d-none"
                  href="#myCarousel"
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
                  href="#myCarousel"
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
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="0"
                    className="active"
                  ></li>
                  <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                  <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg2">
        <div className="container">
          <div className="mt-50 mb-100 mt-100">
            <p
              className="t-hitam fs-30 fw-bold mt-20 p-bold mm"
              ref={teknikRef}
            >
              Yuk Mulai Menanam
            </p>
            <hr className="custom-hr-kiri" />
          </div>

          <div className="d-flex justify-content-center">
            <div>
              <div className="">
                <div className="carousel-item active">
                  <div className="row p-regular p-3 text-center">
                    <div className="col-12">
                      <div className="image-container">
                        <Image
                          className="logo-carousel none"
                          src={teknik}
                          alt="teknik"
                        />
                        <div
                          className="overlay"
                          style={{
                            opacity: animateTeknik ? 1 : 0,
                            transform: animateTeknik
                              ? "translateY(0)"
                              : "translateY(20px)",
                            transition:
                              "opacity 1s ease-in-out, transform 0.5s ease-in-out",
                          }}
                        >
                          <h2 className="no-teknik t_putih">1</h2>
                          <div className="card-cara t-hijau">
                            <h2>Deep Water Culture</h2>
                            <p className="text-start">
                              Teknik Rakit Apung  adalah menggantungkan tanaman
                              pada wadah, sehingga akar tanaman tersebut
                              terendam dalam air yang telah dicampur dengan
                              larutan keasaman (pH).
                            </p>
                            <a
                              href="404"
                              className="btn-hijau-teknik float-right d-flex"
                            >
                              Mulai
                            </a>
                          </div>
                        </div>

                        <div
                          className="overlay1 t_putih"
                          style={{
                            opacity: animateTeknik ? 1 : 0,
                            transform: animateTeknik
                              ? "translateY(0)"
                              : "translateY(20px)",
                            transition:
                              "opacity 1s ease-in-out, transform 0.5s ease-in-out",
                          }}
                        >
                          <h2 className="no-teknik1 t-hijau">2</h2>
                          <div className="card-cara1">
                            <h2>Wick System</h2>
                            <p className="text-start">
                              Sistem Wick atau dikenal juga dengan sistem sumbu.
                              Sistem WIck tidak menggunakan sumber listrik
                              ataupun pompa air.
                            </p>
                            <a
                              href="404"
                              className="btn-putih-teknik float-right d-flex t-hijau"
                            >
                              Mulai
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg2 artikel">
        <div className="container">
          <div className="mt-50 mb-100 mt-100">
            <p className="t-hitam fs-30 fw-bold mt-20 p-bold mm">Artikel</p>
            <hr className="custom-hr-kiri" />
            <p className="t-hitam fs-20 fw-bold mt-20 p-semibold mm">
              Hot Topics
            </p>
            <div className="row hot-topics">
              <div className="col-12 col-sm-12 col-xxl-4 col-lg-4">
                <a href="#">
                  <Image
                    className="logo-carousel img-hot-topic"
                    src={tanpa}
                    alt="tanpa"
                  />
                </a>
              </div>
              <div className="col-12 col-sm-12 col-xxl-6 col-lg-6">
                <div className="col-12 col-lg-10 col-md-12 col-sm-12">
                  <h1 className="p-semibold fs-30 title-hot jb">
                    <a href="#">CARA MENANAM TANPA MEDIA TANAH</a>
                  </h1>
                </div>
                <div className="col-12">
                  <p className="p-regular text-justify fs-15 ib">
                    Hidroponik merupakan sebuah cara budidaya menanam tanpa
                    media tanah, dengan cara memanfaatkan air. Satu hal yang
                    dapat ditekankan dalam sebuah hidroponik yaitu pemenuhan
                    kebutuhan nutrisi untuk sebuah tanaman. Teknik dalam menanam
                    hidroponik ini memerlukan air lebih sedikit apabila
                    dibandingkan dengan menanam di tanah pada umumnya.
                  </p>
                </div>
                <div className="col-11 col-xxl-12 col-lg-12 col-md-6 d-flex justify-content-end">
                  <div className="card-topic">
                    <a href="#">Alergi</a>
                  </div>
                  <div className="card-topic">
                    <a href="#">Hepatomegali</a>
                  </div>
                  <div className="card-topic">
                    <a href="#">Alergi Dingin</a>
                  </div>
                  <div className="card-topic">
                    <a href="#">Batuk</a>
                  </div>
                  <div className="card-topic">
                    <a href="#">Ibu Hamil</a>
                  </div>
                  <div className="card-topic">
                    <a href="#">Corona</a>
                  </div>
                </div>
              </div>
              <div className="col-8 tinjau col-sm-4 col-xxl-2 col-lg-2">
                <span className="t-abu fs-12">
                  1 Hour Ago <br></br>{" "}
                  <span className="fs-15">
                    Ditinjau oleh{" "}
                    <span className="t-biru">dr. Rizal Fadli</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="row mt-50 text-justify">
              <CardBerita berita={dataBerita} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg2">
        <div className="container">
          <div className="mt-50 mb-100 mt-100">
            <p className="t-hitam fs-30 fw-bold mt-50 p-bold mm tb">
              Tinggalkan Balasan Disini
            </p>
            <hr className="custom-hr-kiri" />
            <div className="row hot-topics">
              <div className="col-12 col-xxl-7 col-lg-7 col-md-7 col-sm-12">
                <div className="row">
                  <div className="col-6">
                    <input
                      className="komen"
                      type="text"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div className="col-6">
                    <input className="komen" type="text" placeholder="Email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <textarea
                      placeholder="Berikan Komentarmu!"
                      className="input-komen mt-20"
                      style={{ height: "150px" }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xxl-5 col-lg-5 col-md-5 col-sm-12 mt-20">
                <MapWithNoSSR latitude={latitude} longitude={longitude} />
              </div>
              <div className="col-12 text-center mt-50">
                <a href="#" class="btn-hijau ">
                  Kirim Komentar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

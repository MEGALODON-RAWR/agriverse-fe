import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import filter from "@/images/filter.png";
import toko from "@/images/icon-toko.png";
import netpot from "@/images/netpot.png";
import cart from "@/images/cart.png";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function GoMart() {
  return (
    <>
      <Header />
      <div className="bg-gomart">
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
            <a className="btn-hijau-muda float-end" href="">
              Cari
            </a>
            <input
              type="search"
              name=""
              id=""
              className="cari-barang float-end"
              placeholder="Cari barang yang anda butuhkan"
            />
          </div>
        </div>
      </div>

      <div className="container mb-100">
        <div className="row mt-50">
          <div className="col-4 d-flex justify-content-center">
            <div class="card card-produk" style={{ width: "100%;" }}>
              <Image className="img-produk" src={netpot} alt="netpot" />
              <div class="card-body-produk">
                <div className="row">
                  <div className="col-10">
                    <h6 class="card-nama-produk p-medium fs-30">Netpot</h6>
                    <p class="card-harga fs-20">Rp 15.000</p>
                  </div>
                  <div className="col-2 cart-produk">
                    <a href="gomart/detail-produk">
                      <Image src={cart} alt="cart" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 d-flex justify-content-center">
            <div class="card card-produk" style={{ width: "100%;" }}>
              <Image className="img-produk" src={netpot} alt="netpot" />
              <div class="card-body-produk">
                <div className="row">
                  <div className="col-10">
                    <h6 class="card-nama-produk p-medium fs-30">Netpot</h6>
                    <p class="card-harga fs-20">Rp 15.000</p>
                  </div>
                  <div className="col-2 cart-produk">
                    <a href="gomart/detail-produk">
                      <Image src={cart} alt="cart" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 d-flex justify-content-center">
            <div class="card card-produk" style={{ width: "100%;" }}>
              <Image className="img-produk" src={netpot} alt="netpot" />
              <div class="card-body-produk">
                <div className="row">
                  <div className="col-10">
                    <h6 class="card-nama-produk p-medium fs-30">Netpot</h6>
                    <p class="card-harga fs-20">Rp 15.000</p>
                  </div>
                  <div className="col-2 cart-produk">
                    <a href="gomart/detail-produk">
                      <Image src={cart} alt="cart" />
                    </a>
                  </div>
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

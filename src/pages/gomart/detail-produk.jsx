import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import filter from "@/images/filter.png";
import toko from "@/images/icon-toko.png";
import netpot from "@/images/netpot.png";
import cart from "@/images/cart.png";
import keranjang from "@/images/keranjang.png";
import beli from "@/images/beli.png";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function DetailProduk() {
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => {
      setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
      if (quantity > 1) {
        setQuantity((prevQuantity) =>
          prevQuantity > 1 ? prevQuantity - 1 : 1
        );
      }
    };
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <a href="gomart">
              <span className="p-semibold fs-30">&lt;</span>{" "}
              <span className="fs-20 p-semibold">Kembali Belanja</span>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <Image
              className="foto-produk"
              src={netpot}
              alt="Netpot"
              width={1000}
            />
          </div>
          <div className="col-6">
            <p className="p-medium fs-20">Netpot Hidroponik (16ps)</p>
            <p className="p-regular fs-20 harga-produk">Rp. 15.000</p>
            <p className="p-regular fs-20 deskripsi-produk">Deskripsi Produk</p>
            <p className="p-regular fs-17">Spesifikasi:</p>
            <ul className="p-regular fs-17 listmisi">
              <li>Diameter Atas Dalam : 40.3 mm.</li>
              <li>Diameter Atas Luar : 53.8 mm.</li>
              <li>Diameter Bawah Luar : 35 mm.</li>
              <li>Tinggi : 52.5 mm (termasuk tebal bibir +/- 1.5 mm).</li>
            </ul>
            <div className="row">
              <div className="col-3">
                <div className="input-group">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                  </span>
                  <input
                    type="number"
                    className="form-control text-center"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                  </span>
                </div>
              </div>

              <div className="col-4 d-flex justify-content-center">
                <button className="btn-keranjang">
                  <span className="float-left">Masukkan Keranjang</span>
                  <Image
                    className="keranjang float-right"
                    src={keranjang}
                    alt="keranjang"
                    width={100}
                  />
                </button>
              </div>

              <div className="col-4 d-flex justify-content-center">
                <button className="btn-keranjang-hijau">
                  <span className="float-left">Beli Sekarang</span>
                  <Image
                    className="keranjang"
                    src={beli}
                    alt="keranjang"
                    width={100}
                  />
                </button>
              </div>
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
                    <Image src={cart} alt="cart" />
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
                    <Image src={cart} alt="cart" />
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
                    <Image src={cart} alt="cart" />
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

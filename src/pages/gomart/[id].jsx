import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React, { use } from "react";
import filter from "@/images/filter.png";
import toko from "@/images/icon-toko.png";
import netpot from "@/images/netpot.png";
import cart from "@/images/cart.png";
import keranjang from "@/images/keranjang.png";
import beli from "@/images/beli.png";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { axiosInstance } from "@/lib/axios";
import NumberWithCommas from "@/lib/NumberWithComma";
import CardProduct from "@/components/CardProduct";
import { useFetchProducts } from "@/features/product/useFetchProducts";

export default function DetailProduk() {
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    }
  };

  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState({});

  const fetchProductDetail = async () => {
    const res = await axiosInstance.get(`/product/${id}`).then((res) => {
      setData(res.data.data);
    });
  };

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalData, setTotalData] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [produkSuggested, setProdukSuggested] = useState([]);

  const { data: dataProduk } = useFetchProducts(page, pageSize, keyword);

  useEffect(() => {
    if (dataProduk) {
      setProdukSuggested(dataProduk?.data);
      setTotalData(dataProduk?.total_data);
      setTotalPage(dataProduk?.total_page);
    }
  }, [dataProduk]);

  useEffect(() => {
    if (id) {
      fetchProductDetail();
    }
  }, [id]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button onClick={()=> router.push("/gomart")}>
              <span className="p-semibold fs-30">&lt;</span>{" "}
              <span className="fs-20 p-semibold">Kembali Belanja</span>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <Image
              className="foto-produk"
              src={data.image}
              alt="Netpot"
              width={1000}
              height={1000}
            />
          </div>
          <div className="col-6">
            <p className="p-medium fs-20">{data.name}</p>
            <p className="p-regular fs-20 harga-produk">
              Rp {NumberWithCommas(data.price)}
            </p>
            <p className="p-regular fs-20 deskripsi-produk">
              {data.description}
            </p>
            <p className="p-regular fs-17">Spesifikasi:</p>
            <ul className="p-regular fs-17 listmisi">
              {Array.isArray(data.spesification) &&
                data.spesification.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="row">
              <div className="col-12 col-xxl-3 col-xl-3 col-lg-4 col-md-12 col-sm-12">
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

              <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
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

              <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="cari-barang float-end"
              placeholder="Cari barang yang anda butuhkan"
            />
          </div>
        </div>
      </div>

      <div className="container mb-100">
        <div className="row mt-50">
          {Array.isArray(produkSuggested) &&
            produkSuggested.map((item, index) => (
              <CardProduct key={index} product={item} />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

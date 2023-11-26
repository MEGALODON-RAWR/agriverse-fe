import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import filter from "@/images/filter.png";
import toko from "@/images/icon-toko.png";
import netpot from "@/images/netpot.png";
import cart from "@/images/cart.png";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { useFetchProducts } from "@/features/product/useFetchProducts";
import CardProduct from "@/components/CardProduct";
import Pagination from "@/components/Pagination";

export default function GoMart() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalData, setTotalData] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  const { data: dataProduk } = useFetchProducts(page, pageSize, keyword);

  useEffect(() => {
    if (dataProduk) {
      setData(dataProduk?.data);
      setTotalData(dataProduk?.total_data);
      setTotalPage(dataProduk?.total_page);
    }
  }, [dataProduk]);

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

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
            <div className="col-12 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 d-flex b-filter">
              <Image className="logo-filter" src={filter} alt="filter" />
              <h4 className="t_putih p-medium filter">Filter</h4>
            </div>
            <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10">
              <p className="p-regular t_putih tengah">
                Temukan produk yang kamu butuhkan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container toko-terdekat">
        <div className="row">
          <div className="col-12 col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 mt-50">
            <a href="gomart/tokoterdekat">
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
            </a>
          </div>
          <div className="col-12 col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-7 mt-70 bc">
            <a className="btn-hijau-muda float-end" href="">
              Cari
            </a>
            <input
              type="search"
              name=""
              id=""
              className="cari-barang float-end"
              placeholder="Cari barang yang anda butuhkan"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mb-100">
        <div className="row mt-50">
          {Array.isArray(data) &&
            data.map((item, index) => {
              return <CardProduct product={item} key={index} />;
            })}
        </div>
      </div>
      <Pagination
        page={page}
        pageSize={pageSize}
        totalData={totalData}
        totalPage={totalPage}
        paginate={paginate}
      />
      <Footer />
    </>
  );
}

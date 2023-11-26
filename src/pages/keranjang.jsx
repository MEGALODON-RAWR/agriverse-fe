import Header from "@/components/Header";
import React from "react";
import hapus from "@/images/hapus.png";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useFetchKeranjang } from "@/features/keranjang/useFetchKeranjang";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import NumberWithCommas from "@/lib/NumberWithComma";
import { axiosInstance } from "@/lib/axios";
import Pagination from "@/components/Pagination";

export default function Keranjang() {
  const toast = useToast();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [keyword, setKeyword] = useState("");
  const [change, setChange] = useState(0);

  const { data: dataKeranjang, isLoading: loadingFetch } = useFetchKeranjang(
    page,
    pageSize,
    keyword,
    change
  );

  const [data, setData] = useState(dataKeranjang?.data);
  const [totalPage, setTotalPage] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(loadingFetch);

  useEffect(() => {
    if (dataKeranjang) {
      setData(dataKeranjang?.data);
      setTotalPage(dataKeranjang?.total_page);
      setTotalData(dataKeranjang?.total_data);
    }
  }, [dataKeranjang, change]);

  useEffect(() => {
    if (data) {
      let total = 0;
      data?.map((item) => {
        total += item?.total_price;
      });
      setTotalPrice(total);
    }
  }, [data]);

  const handleIncrease = async (id, quantity) => {
    const body = {
      quantity: quantity,
    };

    try {
      setLoading(true);

      await axiosInstance.put("/keranjang/" + id, body, {
        headers: {
          Authorization: `${session?.accessToken}`,
        },
      });

      setChange(change + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axiosInstance.delete("/keranjang/" + id, {
        headers: {
          Authorization: `${session?.accessToken}`,
        },
      });
      setChange(change + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row mt-50">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 text-center">
                      <span className="p-regular fs-20 nama-produk-keranjang">
                        Loading
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (totalData === 0) {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row mt-50">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 text-center">
                      <span className="p-regular fs-20 nama-produk-keranjang">
                        Keranjang Anda Kosong
                      </span>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        className="btn-hijau-muda mt-3"
                        onClick={() => router.push("/gomart")}
                      >
                        Kembali Belanja
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="container">
        <div className="row mt-50">
          <div className="col-9">
            <table className="table table-keranjang">
              <thead className="table-success">
                <tr>
                  <th scope="col">Pilih</th>
                  <th scope="col">Produk</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data) &&
                  data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input type="checkbox" name="pilih" id="pilih" />
                      </td>
                      <td className="d-flex align-items-center">
                        <Image
                          className="foto-produk-keranjang"
                          src={item?.product?.image}
                          alt="Netpot"
                          width={1000}
                          height={1000}
                        />
                        <span className="p-regular fs-20 nama-produk-keranjang">
                          {item?.product?.name}
                        </span>
                      </td>
                      <td>Rp{NumberWithCommas(item?.product?.price)}</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <span className="p-regular fs-20 mx-2">
                            <button
                              className="btn-keranjang"
                              disabled={loading}
                              onClick={() =>
                                handleIncrease(item?.id, item?.quantity + 1)
                              }
                            >
                              +
                            </button>
                            {item?.quantity}
                            <button
                              className="btn-keranjang"
                              disabled={item.quantity === 1 || loading}
                              onClick={() =>
                                handleIncrease(item?.id, item?.quantity - 1)
                              }
                            >
                              -
                            </button>
                          </span>
                        </div>
                      </td>
                      <td>Rp{NumberWithCommas(item?.total_price)}</td>
                      <td>
                        <button>
                          <Image
                            className=""
                            src={hapus}
                            alt="hapus"
                            width={25}
                            height={25}
                            onClick={() => handleDelete(item?.id)}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <Pagination page={page} totalData={totalData} pageSize={page} totalPage={totalPage} paginate={paginate} />
            <button
              className="btn-hijau-muda mt-3 mb-5"
              onClick={() => router.push("/gomart")}
            >
              Kembali Belanja
            </button>
          </div>

          <div className="col-3">
            <div className="row">
              <div className="head-co">
                <div className="col-12 text-center">Total Keranjang</div>
              </div>
              {loading && (
                <div className="col-12 text-center">
                  <span className="p-regular fs-20 nama-produk-keranjang">
                    Loading
                  </span>
                </div>
              )}
              <div className="body-co">
                <div className="col-5 mt-2">Total</div>
                <div className="col-7 t-hijau fs-20">
                  Rp{NumberWithCommas(totalPrice)}
                </div>
                <div className="col-12 mt-3 d-flex justify-content-center">
                  <a href="#">
                    <button className="btn-hijau-muda">Check Out</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

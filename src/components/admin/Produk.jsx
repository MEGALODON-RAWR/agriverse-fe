import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React, { use } from "react";
import rockwool from "@/images/rockwool.png";
import hidroponik from "@/images/hidroponik.png";
import edit from "@/images/edit.png";
import hapus from "@/images/hapus-merah.png";
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useFetchProducts } from "@/features/product/useFetchProducts";
import IndexNumber from "@/lib/IndexNumber";
import Pagination from "../Pagination";
import { axiosInstance } from "@/lib/axios";
import { useToast } from "@chakra-ui/react";

export default function Produk({ setComponent, setParams }) {
  const [animateBg2, setAnimateBg2] = useState(false);
  const [animateBg3, setAnimateBg3] = useState(false);
  const [animateTeks, setAnimateTeks] = useState(false);
  const [animateTeknik, setAnimateTeknik] = useState(false);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  const teksRef = useRef(null);
  const teknikRef = useRef(null);

  const [produk, setProduk] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [keyword, setKeyword] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const toast = useToast();

  const { data: dataProduk } = useFetchProducts(page, pageSize, keyword);
  const [dataParams, setDataParams] = useState();

  useEffect(() => {
    if (dataParams) {
      setParams(dataParams);
    }
  }, [dataParams]);

  useEffect(() => {
    if (dataProduk) {
      setProduk(dataProduk?.data);
      setTotalPage(dataProduk?.total_page);
      setTotalData(dataProduk?.total_data);
    }
  }, [dataProduk]);

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

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

  const [activeComponent, setActiveComponent] = useState("produk");

  useEffect(() => {
    setComponent(activeComponent);
  }, [activeComponent]);

  const { data: session, status } = useSession();

  const onDeleteHandler = (id) => {
    const confirmDelete = window.confirm(
      "Apakah yakin ingin menghapus produk ini?"
    );

    if (!confirmDelete) {
      return;
    }

    axiosInstance
      .delete(`/product/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: session?.accessToken,
        },
      })
      .then((res) => {
        toast({
          title: "Berhasil menghapus artikel",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setPage(1);
        setTotalData(totalData - 1);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h1 className="p-medium bb-kuning">Produk</h1>
        </div>
        <div className="row">
          <div className="col-3">
            <input
              type="search"
              name="cari-produk"
              id="cari-produk"
              placeholder="Cari..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <div className="col-9 d-flex justify-content-end">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filters
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="btn-hijau text-center"
              onClick={() => setActiveComponent("tambahproduk")}
            >
              Tambah
            </a>
          </div>
        </div>

        <div className="row mt-20">
          <div className="col-12">
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Produk</th>
                  <th>Gambar</th>
                  <th>Deskripsi</th>
                  <th>Harga</th>
                  <th>Stok</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(produk) &&
                  produk.map((item, index) => (
                    <tr>
                      <td className="text-start p-medium">
                        {IndexNumber(page, pageSize, index)}
                      </td>
                      <td className="text-start p-medium nama-produk">
                        {item.name}
                      </td>
                      <td className="text-start p-medium">
                        <Image
                          className="img-produk"
                          src={item.image}
                          alt={item.name}
                          width={100}
                          height={100}
                        />
                      </td>
                      <td className="text-start p-medium deskripsi">
                        {item.description}
                      </td>
                      <td className="text-start p-medium">Rp. {item.price}</td>
                      <td className="text-start p-medium">{item.stock}</td>
                      <td className="text-start p-medium">
                        <div className="rowq">
                          <div className="col-6">
                            <Image
                              className="icon-aksi float-start"
                              src={edit}
                              alt="edit"
                              width={1000}
                              onClick={() => {
                                setActiveComponent("editproduk")
                                setDataParams(item);
                              }
                              }
                            />
                          </div>
                          <div className="col-6">
                            <Image
                              className="icon-aksi float-end mt-20"
                              src={hapus}
                              alt="hapus"
                              width={1000}
                              onClick={() => onDeleteHandler(item.id)}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <Pagination
              page={page}
              pageSize={pageSize}
              totalData={totalData}
              totalPage={totalPage}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

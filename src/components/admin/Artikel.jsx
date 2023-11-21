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
import { useFetchBerita } from "@/features/berita/useFetchBerita";
import Pagination from "../Pagination";
import { axiosInstance } from "@/lib/axios";
import { useToast } from "@chakra-ui/react";

export default function Artikel({ setComponent, setParams }) {
  const [animateBg2, setAnimateBg2] = useState(false);
  const [animateBg3, setAnimateBg3] = useState(false);
  const [animateTeks, setAnimateTeks] = useState(false);
  const [animateTeknik, setAnimateTeknik] = useState(false);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  const teksRef = useRef(null);
  const teknikRef = useRef(null);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [keyword, setKeyword] = useState("");

  const { berita } = useFetchBerita(page, pageSize, keyword);


  const [data, setData] = useState(berita?.data);
  const [totalPage, setTotalPage] = useState(berita?.total_page);
  const [totalData, setTotalData] = useState(berita?.total_data);
  const { data: session, status } = useSession();
  const toast = useToast();

  useEffect(() => {
    if (berita) {
      setData(berita?.data);
      setTotalPage(berita?.total_page);
      setTotalData(berita?.total_data);

    }
  }, [berita]);

  

  const onDeleteHandler = (id) => {

    const confirmDelete = window.confirm("Apakah yakin ingin menghapus artike ini?");

    if (!confirmDelete) {
      return;
    }
    
    
    axiosInstance.delete(`/berita/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: session?.accessToken,
      },
    }).then((res) => {
      toast({
        title: "Berhasil menghapus artikel",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setPage(1);
    }
    );
  };

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

  const [activeComponent, setActiveComponent] = useState("artikel");
  const [dataParams, setDataParams] = useState();

  useEffect(() => {
    setComponent(activeComponent);
  }, [activeComponent]);

  useEffect(() => {
    setParams(dataParams);
  }, [dataParams]);

  const indexNumber = (page, pageSize, index) => {
    return (page - 1) * pageSize + index + 1;
  }
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <h1 className="p-medium bb-kuning">Artikel</h1>
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
              onClick={() => setActiveComponent("tambahartikel")}
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
                  <th>Nomor</th>
                  <th>Judul Artikel</th>
                  <th>Gambar</th>
                  <th>Isi Artikel</th>
                  <th>Tanggal Terbit</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>

                {Array.isArray(data) &&
                data.map((item, index) => (
                  <tr key={item.id}>
                  <td className="text-start p-medium">{indexNumber(page, pageSize, index)}</td>
                  <td className="text-start p-medium nama-produk">
                    {item.judul}
                  </td>
                  <td className="text-start p-medium">
                    <Image
                      className="img-produk"
                      src={item.image}
                      alt="rockwool"
                      width={100}
                      height={100}
                    />
                  </td>
                  <td className="text-start p-medium deskripsi">
                    {item.isi.substring(0, 110)+"..."}
                  </td>
                  <td className="text-start p-medium">{item.tanggal}</td>
                  <td className="text-start p-medium">
                    <div className="rowq">
                      <div className="col-6">
                        <Image
                          className="icon-aksi float-start"
                          src={edit}
                          alt="edit"
                          width={1000}
                          onClick={() => { 
                            setActiveComponent("editartikel")
                            setDataParams(item)

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
            <Pagination page={page} pageSize={pageSize} totalData={totalData} totalPage={totalPage} paginate={paginate}/>
          </div>
        </div>
      </div>
    </div>
  );
}


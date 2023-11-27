import React, { use } from "react";
import edit from "@/images/edit.png";
import hapus from "@/images/hapus-merah.png";
import profile from "@/images/jane.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useFetchAgen } from "@/features/agen/useFetchAgen";
import IndexNumber from "@/lib/IndexNumber";
import { Box, useToast } from "@chakra-ui/react";
import { axiosInstance } from "@/lib/axios";
import { headers } from "../../../next.config";
import { useSession } from "next-auth/react";

export default function Agen({ setComponent, setParams }) {
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

  const { data: agenData } = useFetchAgen(page, pageSize, keyword);

  const [data, setData] = useState(agenData?.data);
  const [totalPage, setTotalPage] = useState(agenData?.total_page);
  const [totalData, setTotalData] = useState(agenData?.total_data);
  const toast = useToast();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (agenData) {
      setData(agenData?.data);
      setTotalPage(agenData?.total_page);
      setTotalData(agenData?.total_data);
    }
  }, [agenData]);


  const handleDelete = (id) => {
    axiosInstance.delete(`/agen/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: session?.accessToken,
      },
    }).then((res) => {
      if (res.status === 200) {
        toast({
          title: "Berhasil menghapus agen",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setComponent("agen");
      }
    });
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

  const [activeComponent, setActiveComponent] = useState("agen");
  const [dataParams, setDataParams] = useState(null);

  useEffect(() => {
    setComponent(activeComponent);
  }, [activeComponent]);

  useEffect(() => {
    setParams(dataParams);
  }, [dataParams]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h1 className="p-medium bb-kuning">Agen</h1>
        </div>
        <div className="row">
          <div className="col-3">
            <input
              type="search"
              name="cari-produk"
              id="cari-produk"
              placeholder="Cari..."
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
              onClick={() => setActiveComponent("tambahagen")}
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
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Gambar</th>
                  <th>No Telp</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data) &&
                  data.map((item, index) => (
                    <tr key={index}>
                      <td className="text-start p-medium">
                        {IndexNumber(page, pageSize, index)}
                      </td>
                      <td className="text-start p-medium nama-produk">
                        {item.nama}
                      </td>
                      <td className="text-start p-medium">{item.alamat}</td>
                      <td className="text-start p-medium">
                        <Image
                          className="image-produk"
                          src={item.image}
                          alt="profile"
                          width={200}
                          height={200}
                        />
                      </td>
                      <td className="text-start p-medium">{item.phone}</td>
                      <td className="text-start p-medium">
                        <div className="rowq">
                          <div className="col-6">
                            <Box
                              as="button"
                              onClick={() => {
                                setActiveComponent("editagen");
                                setDataParams(item);
                              }}
                            >
                              <Image
                                className="icon-aksi float-start"
                                src={edit}
                                alt="edit"
                                width={1000}
                              />
                            </Box>
                          </div>
                          <div className="col-6">
                            <Box
                              as="button"
                              onClick={() => {
                                handleDelete(item.id);
                                // setActiveComponent("hapuspenyuluh");
                                // setDataParams(item);
                              }}
                            >
                              <Image
                                className="icon-aksi float-end mt-20"
                                src={hapus}
                                alt="hapus"
                                width={1000}
                              />
                            </Box>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

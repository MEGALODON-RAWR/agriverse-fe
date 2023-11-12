import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import Image from "next/image";

export default function IsiBerita( {data} ) {
  console.log(data);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 className="p-bold mt-50">
              {data.data.judul}
            </h2>
          </div>
        </div>
        <div className="row">
          <center>
            <div className="col-10">
              <Image
                className="mt-20"
                src={"https://agriverse-be.pegelinux.my.id/"+data.data.image}
                width={1000}
                height={500}
                alt="berita1"
              />
            </div>
          </center>
        </div>
        <div className="row">
          <div className="col-12 text-justify">
            <p className="paragraf1 p-regular mt-20">
              {data.data.isi}
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-100" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="p-semibold">Tinggalkan Komentar</h4>
            <textarea
              placeholder="Tuliskan Komentarmu!"
              className="input-komen mt-20"
              style={{ height: "250px !important" }}
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <input
              className="komen-isi-berita mt-20"
              type="text"
              placeholder="Nama"
            />
          </div>
          <div className="col-6">
            <input
              className="komen-isi-berita mt-20"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button type="submit" className="btn-hijau mt-20 mb-100">
              Kirim Komentar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://agriverse-be.pegelinux.my.id/api/v1/berita/${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
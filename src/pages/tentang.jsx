import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function Tentang() {
  return (
    <>
      <Header />
      <div className="bg-berita">
        <div className="container">
          <h2 className="p-semibold text-center t-hijau judul-berita">
            Tentang
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

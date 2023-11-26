import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import React from "react";
import main from "../images/main.png";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function CeritaKami() {
  return (
    <>
      <Header />
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Image className="mx-auto" src={main} alt="main" width={500} />
      </div>
    </>
  );
}

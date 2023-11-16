import Header from "@/components/HeaderAdmin";
import Dashboard from "@/components/admin/Dashboard.jsx";
import SideBarAdmin from "@/components/SideBarAdmin.jsx";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Produk from "@/components/admin/Produk";
import Pesanan from "@/components/admin/Pesanan";
import Artikel from "@/components/admin/Artikel";

export default function Admin() {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const setComponent = (component) => {
    setActiveComponent(component);
  };

  console.log(activeComponent);
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <SideBarAdmin setComponent={setComponent} />
          </div>
          <div className="col-9">
            {activeComponent === "dashboard" && (
              <Dashboard setComponent={setComponent} />
            )}
            {activeComponent === "produk" && <Produk />}
            {activeComponent === "pesanan" && <Pesanan />}
            {activeComponent === "artikel" && <Artikel />}
          </div>
        </div>
      </div>
    </>
  );
}

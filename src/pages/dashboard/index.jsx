import Header from "@/components/HeaderAdmin";
import Dashboard from "@/components/admin/Dashboard.jsx";
import SideBarAdmin from "@/components/SideBarAdmin.jsx";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Produk from "@/components/admin/Produk";
import Pesanan from "@/components/admin/Pesanan";
import Artikel from "@/components/admin/Artikel";
import { useFetchCurrentUser } from "@/features/users/useFetchCurrentUser";

export default function Admin() {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const { user: currentUser, status, isLoading } = useFetchCurrentUser();


  if (isLoading) {
    return (
      <>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </>
    );
  }

  if (status !== "authenticated") {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center h-screen">

          <h1>Anda belum login</h1>
        </div>
      </>
    )
  }

  if (currentUser?.role !== "admin") {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center h-screen">

          <h1>Anda bukan admin</h1>
        </div>
      </>
    )
  }

  const setComponent = (component) => {
    setActiveComponent(component);
  };

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

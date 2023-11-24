import Header from "@/components/HeaderAdmin";
import Dashboard from "@/components/admin/Dashboard.jsx";
import SideBarAdmin from "@/components/SideBarAdmin.jsx";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Produk from "@/components/admin/Produk";
import Pesanan from "@/components/admin/Pesanan";
import Artikel from "@/components/admin/Artikel";
import TambahProduk from "@/components/admin/TambahProduk";
import EditProduk from "@/components/admin/EditProduk";
import TambahArtikel from "@/components/admin/TambahArtikel";
import EditArtikel from "@/components/admin/EditArtikel";
import Penyuluh from "@/components/admin/Penyuluh";
import DownloadPenyuluh from "@/components/admin/DownloadPenyuluh";
import TambahPenyuluh from "@/components/admin/TambahPenyuluh";
import { useFetchCurrentUser } from "@/features/users/useFetchCurrentUser";
import { Spinner } from "@chakra-ui/react";

export default function Admin() {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const { user: currentUser, status, isLoading } = useFetchCurrentUser();
  const [dataParams, setDataParams] = useState();

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
    );
  }

  if (currentUser?.role !== "admin") {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1>Anda bukan admin</h1>
        </div>
      </>
    );
  }

  const setComponent = (component) => {
    setActiveComponent(component);
  };

  const setParams = (params) => {
    setDataParams(params);
  }

  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-3 sidebar-admin">
            <SideBarAdmin setComponent={setComponent} />
          </div>
          <div className="col-9 isi-admin">
            {activeComponent === "dashboard" && (
              <Dashboard setComponent={setComponent} />
            )}
            {activeComponent === "produk" && (
              <Produk setComponent={setComponent} setParams={setParams}/>
            )}
            {activeComponent === "pesanan" && (
              <Pesanan setComponent={setComponent} />
            )}
            {activeComponent === "artikel" && (
              <Artikel setComponent={setComponent}  setParams={setParams} />
            )}
            {activeComponent === "editartikel" && (
              <EditArtikel setComponent={setComponent} params={dataParams} />
            )}
            {activeComponent === "tambahproduk" && (
              <TambahProduk setComponent={setComponent} />
            )}
            {activeComponent === "editproduk" && (
              <EditProduk setComponent={setComponent} params={dataParams} />
            )}
            {activeComponent === "tambahartikel" && (
              <TambahArtikel setComponent={setComponent} />
            )}
            {activeComponent === "penyuluh" && (
              <Penyuluh setComponent={setComponent} />
            )}
            {activeComponent === "tambahpenyuluh" && (
              <TambahPenyuluh setComponent={setComponent} />
            )}
            {activeComponent === "downloadpenyuluh" && (
              <DownloadPenyuluh setComponent={setComponent} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

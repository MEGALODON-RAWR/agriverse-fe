import React from "react";
import dashboard from "@/images/dashboard.svg";
import shopingcart from "@/images/shoping-cart.svg";
import clipboard from "@/images/clipboard.svg";
import artikel from "@/images/artikel.svg";
import profile from "@/images/profile.svg";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

import { useEffect, useRef, useState } from "react";

export default function Keranjang({ setComponent }) {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  console.log(activeComponent);

  useEffect(() => {
    setComponent(activeComponent);
  }, [activeComponent]);

  return (
    <>
      <div className="container">
        <div class="row sidebar-body sidebar-body1">
          <div
            className="col-8 d-flex nav-sidebar"
            onClick={() => setActiveComponent("dashboard")}
          >
            <Image
              className="logo-sidebar"
              src={dashboard}
              alt="icon-dashboard"
              width={100}
            />
            <a href="#" className="p-medium fs-20">
              Dashboard
            </a>
          </div>
          <div
            className="col-8 d-flex nav-sidebar"
            onClick={() => setActiveComponent("produk")}
          >
            <Image
              className="logo-sidebar"
              src={shopingcart}
              alt="icon-shopingcart"
              width={100}
            />
            <a href="#" className="p-medium fs-20">
              Produk
            </a>
          </div>
          <div
            className="col-8 d-flex nav-sidebar"
            onClick={() => setActiveComponent("pesanan")}
          >
            <Image
              className="logo-sidebar"
              src={clipboard}
              alt="icon-clipboard"
              width={100}
            />
            <a href="#" className="p-medium fs-20">
              Pesanan
            </a>
          </div>
          <div
            className="col-8 d-flex nav-sidebar"
            onClick={() => setActiveComponent("artikel")}
          >
            <Image
              className="logo-sidebar"
              src={artikel}
              alt="icon-artikel"
              width={100}
            />
            <a href="#" className="p-medium fs-20">
              Artikel
            </a>
          </div>
          <div
            className="col-8 d-flex nav-sidebar"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image
              className="logo-sidebar"
              src={profile}
              alt="icon-profile"
              width={100}
            />
            <div class="dropdown">
              <button class="dropdown-toggle p-medium fs-20" type="button">
                Profil
              </button>
              <ul class="dropdown-menu menu-dashboard">
                <li onClick={() => setActiveComponent("penyuluh")}>
                  <a
                    class="dropdown-item col-8 d-flex nav-sidebar1 p-medium fs-20"
                    href="#"
                  >
                    Penyuluh
                  </a>
                </li>
                <li onClick={() => setActiveComponent("agen")}>
                  <a
                    class="dropdown-item col-8 d-flex nav-sidebar1 p-medium fs-20"
                    href="#"
                  >
                    Agen
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-8 d-flex nav-sidebar mt-95"
            onClick={() => signOut()}
          >
            <Image
              className="logo-sidebar"
              src={profile}
              alt="icon-profile"
              width={100}
            />
            <a href="#" className="p-medium fs-20">
              Keluar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

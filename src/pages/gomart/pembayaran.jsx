import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import Image from "next/image";
import bca from "@/images/bca.png";
import bni from "@/images/bni.png";
import bri from "@/images/bri.png";
import dana from "@/images/dana.png";
import ovo from "@/images/ovo.png";

const Maps = dynamic(() => import("@/components/Map.jsx"), { ssr: false });

// Check if running in the browser environment
const isBrowser = typeof window !== "undefined";

export default function CeritaKami() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (isBrowser) {
      // Get user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    }
  }, []);

  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "Sarana Tani",
      latitude: -6.59598955600667,
      longitude: 106.78597584183616,
      alamat:
        "Jl. Veteran No.37, RT.01/RW.02, Kb. Klp., Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16125",
    },
    {
      id: 2,
      name: "Toko Pertanian Kurnia Tani",
      latitude: -6.592706467186471,
      longitude: 106.79263478001381,
      alamat:
        "Gg. Mekah, RT.02/RW.01, Pasar Anyar, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16121",
    },
    {
      id: 3,
      name: "Usaha Tani Maju",
      latitude: -6.572535626842326,
      longitude: 106.80821803953634,
      alamat:
        "Jl. Raya Pajajaran Blok Pancuran No.11, RT.01/RW.05, Bantarjati, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16153",
    },
    {
      id: 4,
      name: "Tani Jaya Baru",
      latitude: -6.5929600621112545,
      longitude: 106.79402135302895,
      alamat:
        "Jl. Gedong Sawah No.4 no. 12, Pabaton, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16121",
    },
    {
      id: 5,
      name: "Tani Jaya Baru",
      latitude: -6.5929600621112545,
      longitude: 106.79402135302895,
      alamat:
        "Jl. Gedong Sawah No.4 no. 12, Pabaton, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16121",
    },
    {
      id: 5,
      name: "Alat Mesin Pertanian",
      latitude: -6.572695543701313,
      longitude: 106.76925465117776,
      alamat:
        "Jl. Brigjen Saptadji Hadiprawira No.76, RT.02/RW.08, Cilendek Bar., Kec. Bogor Bar., Kota Bogor, Jawa Barat 16112",
    },
    {
      id: 6,
      name: "Sahabat Tani Toko",
      latitude: -6.603345251928879,
      longitude: 106.80008858371579,
      alamat:
        "Jl. Otto Iskandardinata No.20, RT.01/RW.5, Babakan Ps., Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16126",
    },
    // Add more locations as needed
  ]);

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

  const maxRadius = 3;

  // Filter locations within the specified radius
  const nearbyLocations = locations
    .filter(
      (loc) =>
        calculateDistance(latitude, longitude, loc.latitude, loc.longitude) <=
        maxRadius
    )
    .sort((loc1, loc2) => {
      const distance1 = calculateDistance(
        latitude,
        longitude,
        loc1.latitude,
        loc1.longitude
      );
      const distance2 = calculateDistance(
        latitude,
        longitude,
        loc2.latitude,
        loc2.longitude
      );
      return distance1 - distance2;
    });

  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelection = (paymentType) => {
    setSelectedPayment(paymentType);
  };

  return (
    <>
      <Header />
      <div className="bg-gomart">
        <div className="container">
          <h1 className="p-bold text-center judul-berita">Pembayaran</h1>
        </div>
      </div>

      <div className="container">
        <div className="row mt-50 mb-20">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <h1 className="p-medium">Detail Pembayaran</h1>
            <div className="col-12">
              <label htmlFor="nama">
                Nama Lengkap <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                name="nama"
                id="nama"
                className="inp_pembayaran"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="kota">
                Kota / Kabupaten <span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="Kota">Kota</option>
                <option value="Kabupaten">Kabupaten</option>
              </select>
            </div>
            <div className="col-12"></div>

            <div className="col-12">
              <label htmlFor="alamat">
                Alamat Rumah <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                name="alamat"
                id="alamat"
                className="inp_pembayaran"
                required
              />
            </div>

            <div className="col-12">
              <input
                type="text"
                name="info-tambahan"
                id="info-tambahan"
                className="inp_pembayaran"
                placeholder="Informasi Tambahan"
              />
            </div>

            <div className="col-12">
              <label htmlFor="kec">
                Kecamatan <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                name="kec"
                id="kec"
                className="inp_pembayaran"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="kel">
                Kelurahan <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                name="kel"
                id="kel"
                className="inp_pembayaran"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="pos">
                Kode Pos <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                name="pos"
                id="pos"
                className="inp_pembayaran"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="hp">
                No Handphone <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                name="hp"
                id="hp"
                className="inp_pembayaran"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="email">
                Email <span className="text-danger">*</span>
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                name="email"
                id="email"
                className="inp_pembayaran"
                required
              />
            </div>
          </div>

          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ms-auto">
            <div className="row">
              <div className="col-6">
                <h5 className="p-medium">Produk</h5>
              </div>
              <div className="col-6">
                <h5 className="p-medium">Subtotal</h5>
              </div>

              <div className="col-6">
                <h6 className="p-regular text-secondary">
                  Netpot <span className="t_hitam">x1</span>
                </h6>
              </div>
              <div className="col-6">
                <h6 className="p-regular text-secondary">Rp. 15,000</h6>
              </div>

              <div className="col-6">
                <h6 className="p-regular">Subtotal</h6>
              </div>
              <div className="col-6">
                <h6 className="p-regular text-secondary">Rp. 15,000</h6>
              </div>

              <div className="col-6">
                <h6 className="p-regular">Ongkos Kirim</h6>
              </div>
              <div className="col-6">
                <h6 className="p-regular text-secondary">Rp. 14,000</h6>
              </div>

              <div className="col-6">
                <h6 className="t-hijau p-medium">Total</h6>
              </div>
              <div className="col-6">
                <h6 className="p-medium t-hijau">Rp. 29,000</h6>
              </div>
              <div className="col-12">
                <hr />
              </div>

              <ul>
                <li onClick={() => handlePaymentSelection("transferBank")}>
                  Transfer Bank
                </li>
                {selectedPayment === "transferBank" && (
                  <div
                    className="deskripsi text-secondary p-regular"
                    id="transferBank"
                  >
                    <p>
                      Lakukan pembayaran Anda langsung ke E-Wallet yang Anda
                      Pilih. Pesanan Anda tidak akan dikirim sampai dana telah
                      masuk ke rekening kami.
                    </p>
                    <label htmlFor="bca">
                      <Image className="imgtata mx-auto" src={bca} alt="Bak" />
                    </label>
                    <input
                      type="radio"
                      name="pembayaran"
                      id="bca"
                      value={"bca"}
                    />

                    <label htmlFor="bni">
                      <Image className="imgtata mx-auto" src={bni} alt="Bak" />
                    </label>
                    <input
                      type="radio"
                      name="pembayaran"
                      id="bni"
                      value={"bni"}
                    />

                    <label htmlFor="bri">
                      <Image className="imgtata mx-auto" src={bri} alt="Bak" />
                    </label>
                    <input
                      type="radio"
                      name="pembayaran"
                      id="bri"
                      value={"bri"}
                    />
                  </div>
                )}
                <li onClick={() => handlePaymentSelection("eWallet")}>
                  E-Wallet
                </li>
                {selectedPayment === "eWallet" && (
                  <div
                    className="deskripsi text-secondary p-regular"
                    id="eWallet"
                  >
                    <p>
                      Lakukan pembayaran Anda langsung ke E-Wallet yang Anda
                      Pilih. Pesanan Anda tidak akan dikirim sampai dana telah
                      masuk ke rekening kami.
                    </p>
                    <label htmlFor="dana">
                      <Image className="imgtata mx-auto" src={dana} alt="Bak" />
                    </label>
                    <input
                      type="radio"
                      name="pembayaran"
                      id="dana"
                      value={"dana"}
                    />

                    <label htmlFor="ovo">
                      <Image className="imgtata mx-auto" src={ovo} alt="Bak" />
                    </label>
                    <input
                      type="radio"
                      name="pembayaran"
                      id="ovo"
                      value={"ovo"}
                    />
                  </div>
                )}
                <li onClick={() => handlePaymentSelection("cod")}>
                  Bayar di tempat (COD)
                </li>
                {selectedPayment === "cod" && (
                  <div className="deskripsi text-secondary p-regular" id="cod">
                    <p>
                      Lakukan pembayaran Anda langsung saat barang sampai di
                      lokasi Anda
                    </p>

                    <label htmlFor="codd">COD</label>
                    <input
                      type="radio"
                      name="pembayaran"
                      id="codd"
                      value={"cod"}
                    />
                  </div>
                )}
              </ul>

              <div className="col-12">
                <p className="p-regular text-secondary">
                  Data pribadi Anda akan digunakan untuk mendukung pengalaman
                  Anda di seluruh situs web ini, untuk mengelola akses ke akun
                  Anda, dan untuk tujuan lain yang dijelaskan dalam{" "}
                  <span className="t_hitam">kebijakan privasi</span> kami.
                </p>
              </div>

              <div className="col-12">
                <button type="submit" className="btn-hijau-muda mx-auto">
                  Memesan Produk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

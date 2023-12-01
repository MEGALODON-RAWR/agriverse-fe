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
import { useFetchKeranjang } from "@/features/keranjang/useFetchKeranjang";
import NumberWithCommas from "@/lib/NumberWithComma";
import { axiosInstance } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Pembayaran() {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelection = (paymentType) => {
    setSelectedPayment(paymentType);
  };
  const [alamat, setAlamat] = useState("");
  const [buktiBayar, setBuktiBayar] = useState("");
  const [nama, setNama] = useState("");
  const [phone, setPhone] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kodePos, setKodePos] = useState("");

  const { data: dataKeranjang, isLoading: loadingFetch } = useFetchKeranjang(
    1,
    30,
    "",
    1
  );

  // const handleImageUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertBase64(file);
  //   setBuktiBayar(base64);
  // };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        setBuktiBayar(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const { data: session, status } = useSession();
  const router = useRouter();

  //create request data for order
  const handleOrder = async () => {
    const orderProduct = data?.map((item) => {
      return {
        id: item?.product?.id,
        jumlah: item?.quantity,
      };
    });

    const body = {
      alamat:
        nama + " " + alamat + " " + kecamatan + " " + kelurahan + " " + kodePos,
      order_product: orderProduct,
      bukti_bayar: buktiBayar,
    };
    const res = await axiosInstance.post("/order", body, {
      headers: {
        Authorization: `${session?.accessToken}`,
      },
    });
    console.log(res);
    router.push("/keranjang");
  };

  const [data, setData] = useState(dataKeranjang?.data);
  const [totalPage, setTotalPage] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(loadingFetch);

  useEffect(() => {
    if (dataKeranjang) {
      setData(dataKeranjang?.data);
      setTotalPage(dataKeranjang?.total_page);
      setTotalData(dataKeranjang?.total_data);
    }
  }, [dataKeranjang]);

  useEffect(() => {
    if (data) {
      let total = 0;
      data?.map((item) => {
        total += item?.total_price;
      });
      setTotalPrice(total);
    }
  }, [data]);

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
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            {/* <div className="col-12">
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
            </div> */}
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
                onChange={(e) => setAlamat(e.target.value)}
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
                onChange={(e) => setKecamatan(e.target.value)}
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
                onChange={(e) => setKelurahan(e.target.value)}
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
                onChange={(e) => setKodePos(e.target.value)}
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
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ms-auto">
            <div className="row">
              <div className="col-12">
                <h5 className="p-medium">Produk</h5>
              </div>

              {Array.isArray(data) &&
                data?.map((item) => (
                  <div key={item.id} className="col-12">
                    <h6 className="p-regular text-secondary">
                      {item?.product?.name}{" "}
                      <span className="t_hitam">x{item?.quantity}</span>
                    </h6>
                    <div className="col-12">
                      <h6 className="p-regular text-secondary">
                        Subtotal : Rp{NumberWithCommas(item?.total_price)}
                      </h6>
                    </div>
                    <br />
                  </div>
                ))}

              <div className="col-12">
                <h5 className="p-medium">Total Harga</h5>
                <h6 className="p-regular text-secondary">
                  Rp{NumberWithCommas(totalPrice)}
                </h6>
              </div>

              <div className="col-12 mt-5">
                <h5 className="p-medium">Transfer Ke</h5>
                <h6 className="p-regular text-secondary">
                  Bank BCA 12839289/Shinta Arafah
                </h6>
                <h6 className="p-regular text-secondary">
                  Bank BNI 128392322/Shinta Arafah
                </h6>
                <h6 className="p-regular text-secondary">
                  Bank BRI 128312389/Shinta Arafah
                </h6>
              </div>

              <div className="col-12 mt-5">
                <h5 className="p-medium">Bukti Pembayaran</h5>
                <div className="col-12">
                  <input
                    type="file"
                    name="bukti"
                    id="bukti"
                    className="inp_pembayaran"
                    required
                    onChange={handleImageUpload}
                  />
                </div>
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  onClick={handleOrder}
                  className="btn-hijau-muda mx-auto"
                >
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

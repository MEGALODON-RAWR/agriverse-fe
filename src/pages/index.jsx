import Header from "@/components/Header"
import React from 'react';
import gofarm from '@/images/gofarm.png'
import gomart from '@/images/gomart.png'
import talkfarm from '@/images/talkfarm.png'
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <div className="bg1">
      <div className="container">
        <div className="ml-100 pt-220 pb-220">
          <h1 className="t_putih fs-60 p-semibold">TINGKATKAN</h1>
          <h2 className="t_putih fs-50 mt-20 p-semibold">PRODUKTIVITAS PERTANIAN ANDA <br></br> DENGAN<span className="t_kuning p-semibold">HIDROPONIK</span></h2>
          <p className="t_hitam fs-17 fw-bold mt-20 p-regular">Maksimalkan hasil panen Anda dengan metode hidroponik yang efisien dan ramah lingkungan</p>
          <button className="btn-hijau mt-20 p-semibold">Selanjutnya</button>
        </div>
      </div>
    </div>
    <div className="bg2">
      <div className="container">
        <div className="mt-50 mb-100">
          <p className="t-hitam fs-17 fw-bold mt-20 text-center p-bold">Temukan Kebutuhan Anda</p>
          <hr className="custom-hr" />
          <p className="text-center p-medium mt-3">Dengan fitur-fitur ini untuk nikmati kemudahan dan kenyamanan</p>

          <div className="row">
            <div className="col-4">
              <div class="card bg-hijau" style={{width: '100%'}}>
                <a href='#'>
                  <div class="card-body">
                    <div className="row">
                      <div className="col-5">
                        <Image className="logo" src={gofarm} alt="GoFarm" width={100}/>
                      </div>
                      <div className="col-7">
                        <h2 className="t_putih p-bold">Go Farm</h2>
                        <p className="t_putih desk p-regular">sdasda</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-4">
              <div class="card bg-hijaumuda" style={{width: '100%'}}>
                <a href='#'>
                  <div class="card-body">
                    <div className="row">
                      <div className="col-5">
                        <Image className="logo" src={gofarm} alt="GoMart" width={100}/>
                      </div>
                      <div className="col-7">
                        <h2 className="t_putih p-bold">Go Mart</h2>
                        <p className="t_putih desk p-regular">sdasda</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-4">
              <div class="card bg-hijau" style={{width: '100%'}}>
                <a href='#'>
                  <div class="card-body">
                    <div className="row">
                      <div className="col-5">
                        <Image className="logo" src={gofarm} alt="TalkFarm" width={100}/>
                      </div>
                      <div className="col-7">
                        <h2 className="t_putih p-bold">Talk Farm</h2>
                        <p className="t_putih desk p-regular">sdasda</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

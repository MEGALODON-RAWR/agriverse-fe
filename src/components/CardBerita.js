import Image from "next/image";

export default function CardBerita({ berita }) {
    return (
        <div className="row mt-20 text-justify">
            {berita?.data.data.map((item, index) => {
                const tubnail = item.isi.substring(0, 350);
                const tubnail_judul = item.judul.substring(0, 60);
                return (

                    <div className="col-3">
                    <div class="card card-artikel" style={{ width: "18rem;" }}>
                        <Image className="img-artikel" src={item.image} alt="artikel2" width={500} height={200} />
                        <div class="card-body">
                        <h6 class="card-title p-medium fs-15">
                            {tubnail_judul}
                        </h6>
                        <p class="card-text fs-12">
                            {tubnail}
                        </p>
                        <a
                            href="isi-berita"
                            class="btn-hijau float-end text-center fs-12"
                            style={{
                            width: "90px",
                            height: "38px",
                            padding: "10px",
                            fontWeight: "600",
                            }}
                        >
                            View More
                        </a>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}
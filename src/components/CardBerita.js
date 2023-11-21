import Image from "next/image";

export default function CardBerita({ berita }) {
  return (
    <>
      {berita?.data.map((item, index) => {
        const tubnail = item.isi.substring(0, 350);
        const tubnail_judul = item.judul.substring(0, 60);
        return (
          <div className="col-3" key={index}>
            <div className="card card-artikel" style={{ width: "18rem;" }}>
              <Image
                className="img-artikel"
                src={item.image}
                alt="artikel2"
                width={500}
                height={200}
              />
              <div className="card-body">
                <h6 className="card-title p-medium fs-15">{tubnail_judul}</h6>
                <p className="card-text fs-12">{tubnail}</p>
                <a
                  href={"/berita/" + item.id}
                  className="btn-hijau float-end text-center fs-12"
                  style={{
                    width: "90px",
                    height: "38px",
                    padding: "10px",
                    fontWeight: "600",
                  }}
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

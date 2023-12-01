import Image from "next/image";
import { useRouter } from "next/router";
import like from "@/images/like.png";
import komen from "@/images/komen.png";
import share from "@/images/share.png";

export default function CardForum() {
  return (
    <>
      <div className="col-12 card-forum">
        <div className="row">
          <div className="col-2">Profile</div>
          <div className="col-2">
            <h5 className="p-medium">Maudy Ayunda</h5>
            <h6 className="p-regular text-secondary">Diperbarui 4 Mei</h6>
          </div>

          <div className="col-12 mt-20">
            <h5 className="p-semibold">
              Kenapa daun tanaman tomat saya berwarna kuning belang belang dan
              juga melengkung?
            </h5>
          </div>

          <div className="col-12">
            <p className="p-regular fs-17">
              Biasanya tanaman ini terkena virus mosaik, virus ini menyerang di
              saat cuaca panas. Untuk mengatasinya, buang dan hancurkan tanaman,
              akar, dan semuanya yang terinfeksi serta hindari menanam tanaman
              di area yang sama selama dua tahun. Karena virus ini terbawa dari
              tembakau, sebaiknya bagi perokok mencuci tangan terlebih dahulu
              sebelum menangani tanaman.
            </p>
            <hr />
          </div>
        </div>
        <div className="col-12 d-flex">
          <Image className="icon-forum" src={like} alt="Bak" />
          <span className="ml-2">225</span>

          <Image className="icon-forum" src={komen} alt="Bak" />
          <span className="ml-2">124</span>

          <Image className="icon-forum" src={share} alt="Bak" />
        </div>
      </div>
    </>
  );
}

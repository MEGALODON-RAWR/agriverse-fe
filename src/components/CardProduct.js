import Image from "next/image";
import cart from "../images/cart.png";
import { useRouter } from "next/router";

export default function CardProduct({ product }) {
  const router = useRouter();
  const handleDetail = () => {
    router.push(`/gomart/${product.id}`);
  };

  return (
    <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center">
    <div class="card card-produk" style={{ width: "100%;" }} onClick={handleDetail}>

      <Image
        className="img-produk"
        src={product.image}
        alt="netpot"
        width={300}
        height={300}
        />
      <div class="card-body-produk">
        <div className="row">
          <div className="col-10">
            <h6 class="card-nama-produk p-medium fs-30">{product.name}</h6>
            <p class="card-harga fs-20">{product.price}</p>
          </div>
          <div className="col-2 cart-produk">
            <a href="gomart/detail-produk">
              <Image src={cart} alt="cart" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

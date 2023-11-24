import Image from "next/image";
import cart from "../images/cart.png";
import { useRouter } from "next/router";
import NumberWithCommas from "@/lib/NumberWithComma";
import { Box } from "@chakra-ui/react";

export default function CardProduct({ product }) {
  const router = useRouter();
  const handleDetail = () => {
    router.push(`/gomart/${product.id}`);
  };

  const handleCart = () => {
    router.push(`/keranjang`);
  };

  return (
    <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center">
      <div class="card card-produk" style={{ width: "100%;" }}>
        <Image
          className="img-produk"
          src={product.image}
          alt="netpot"
          width={300}
          height={300}
          onClick={handleDetail}
        />
        <div class="card-body-produk">
          <div className="row">
            <div className="col-10">
              <Box as="button" onClick={handleDetail}>
                <h6 class="card-nama-produk p-medium fs-30">{product.name}</h6>
                <p class="card-harga fs-20">
                  Rp {NumberWithCommas(product.price)}
                </p>
              </Box>
            </div>
            <div className="col-2 cart-produk">
              <button onClick={handleCart}>
                <Image src={cart} alt="cart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { NextPage } from "next";
import { getPrices } from "../../api/priceApi";

type Props = {};



const Product: NextPage<Props> = () => {
  const prices = getPrices(["ABC123"], "QWE");
  console.log("got prices", prices)
  return <div>PRICE CALCULATOR PRODUCT</div>;
};

export default Product;

import ProductCard from "components/ProductCard";
import type { NextPage } from "next";

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <ProductCard sku="ABC123"></ProductCard>
      <ProductCard sku="qwe321"></ProductCard>
      <ProductCard sku="54645"></ProductCard>
      <ProductCard sku="123"></ProductCard>
      <ProductCard sku="3424"></ProductCard>
    </div>
  );
};

export default Home;

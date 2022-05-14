import { getAllPrices } from "api/priceApi";
import ProductCard from "components/ProductCard";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { IPrice } from "types/price";

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ prices }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {prices && prices.map((price, index) => (
        <ProductCard sku={price.sku} key={`product-card-${index}`}></ProductCard>
      )
      )}
    </div>
  );
};

type Props = { prices: IPrice[] };

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const prices = await getAllPrices();

  return {
    props: { prices },
  };
};

export default Home;

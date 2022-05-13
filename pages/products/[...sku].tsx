import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getPrices } from "api/priceApi";
import { IPrice } from "types/price";
import Price from "components/Price";

const Product: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ prices }) => {
  return (
    <div>
      {prices &&
        prices.map((price, index) => (
          <Price key={`price-${index}`} {...price} />
        ))}
    </div>
  );
};

type Props = { prices: IPrice[] };

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const sku = params?.sku as string;
  if (!sku) {
    return {
      notFound: true,
    };
  }

  const prices = getPrices([sku], "");

  return {
    props: { prices },
  };
};

export default Product;

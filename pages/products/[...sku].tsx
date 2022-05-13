import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getPrices } from "api/priceApi";
import { Price } from "types/price";

const Product: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ prices }) => {
  return (
    <div>
      PRICEs:{" "}
      {prices &&
        prices.map(
          (
            {
              recommendedRetailPrice,
              priceAmount,
              currency,
              discount,
              discountAmount,
            },
            index
          ) => (
            <p key={`price-$index`}>
              {`Pris: ${priceAmount} ${currency}`}
              <br />
              {`Rek: ${recommendedRetailPrice} ${currency}`}
              <br />
              {`Rabatt: ${discountAmount} ${currency}`}
              <br />
              {`Rabatt %: ${discount}`}
              <br />
            </p>
          )
        )}
    </div>
  );
};

type Props = { prices: Price[] };

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

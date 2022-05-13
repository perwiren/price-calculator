import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getPrices } from "api/priceApi";
import { IPrice } from "types/price";
import Price from "components/Price";
import ProductPlaceHolderSvg from "/public/product-placeholder.svg";

const Product: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ prices }) => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="grow flex items-center justify-center w-1/3 bg-slate-50 overflow-hidden">
          <ProductPlaceHolderSvg />
        </div>
        <div className="flex flex-wrap w-full md:w-2/3">
          {prices &&
            prices.map((price, index) => (
              <div
                key={`price-${index}`}
                className="w-[calc(33.3333%-10px)] m-[5px]"
              >
                <Price {...price} />
              </div>
            ))}
        </div>
      </div>
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

  const prices = await getPrices([sku], "");

  return {
    props: { prices },
  };
};

export default Product;

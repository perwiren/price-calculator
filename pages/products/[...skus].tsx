import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getPrices } from "api/priceApi";
import { IPrice } from "types/price";
import Price from "components/Price";
import ProductPlaceHolderSvg from "public/product-placeholder.svg";

const Product: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ prices }) => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="md:w-1/3 max-w-[300px] h-[300px] pb-[0.5rem]">
          <div className="flex items-center justify-center overflow-hidden w-full h-full bg-slate-50">
            <ProductPlaceHolderSvg className="stroke-blue-500" />
          </div>
        </div>
        <div className="md:w-2/3 grow flex flex-wrap">
          {prices &&
            prices.map((price, index) => (
              <div
                key={`price-${index}`}
                className="w-[calc(33.3333%-0.5rem)] ml-[0.5rem] mb-[0.5rem] bg-slate-50"
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
  if (!params?.skus) {
    return {
      notFound: true,
    };
  }

  const skus = Array.isArray(params.skus)
    ? params.skus
    : Array.from(params.skus);
  const prices = await getPrices(skus, "");
  if (!prices || prices.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { prices },
  };
};

export default Product;

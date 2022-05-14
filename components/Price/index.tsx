import { IPrice } from "types/price";

const Price: React.FC<IPrice> = ({
  sku,
  recommendedRetailPrice,
  priceAmount,
  currency = "SEK",
  discount,
  discountAmount,
}) => (
  <div className="min-h-full w-full p-2">
    <h4 className="mb-1">{sku}</h4>
    <p
      className={`mb-1 ${discountAmount && "line-through"}`}
    >{`${recommendedRetailPrice} ${currency}`}</p>
    <p className={`mb-1 ${discountAmount && "text-red-500"}`}>
    {`${priceAmount} ${currency}`}
    </p>
    {!!discountAmount && (
      <p className="mb-1">{`${discountAmount} ${currency}`} avdraget</p>
    )}
    {!!discount && !!discountAmount && (
      <p className="mb-1">{`${discount}% i rabatt`}</p>
    )}
  </div>
);

export default Price;

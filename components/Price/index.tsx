import { IPrice } from "types/price";

const Price: React.FC<IPrice> = ({
  sku,
  recommendedRetailPrice,
  priceAmount,
  currency,
  discount,
  discountAmount,
}) => (
  <div className="min-h-full w-full p-2">
    <h4 className="mb-1">{sku}</h4>
    <p
      className={`mb-1 ${discountAmount && "line-through"}`}
    >{`${priceAmount} ${currency}`}</p>
    {!!discountAmount && (
      <p className="mb-1">{`${discountAmount} ${currency}`}</p>
    )}
    <p className="mb-1">
      {recommendedRetailPrice && recommendedRetailPrice}
    </p>
    {!!discount && !!discountAmount && (
      <p className="mb-1">{`${discount}% i rabatt`}</p>
    )}
  </div>
);

export default Price;

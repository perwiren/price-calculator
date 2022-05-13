import { IPrice } from "types/price";

const Price: React.FC<IPrice> = ({
  recommendedRetailPrice,
  priceAmount,
  currency,
  discount,
  discountAmount,
}) => (
  <div className="bg-slate-200 m-1 inline-block">
    <p
      className={`p-2 mb-2 ${discountAmount && "line-through"}`}
    >{`${priceAmount} ${currency}`}</p>
    {!!discountAmount && (
      <p className="p-2 mb-2">{`${discountAmount} ${currency}`}</p>
    )}
    <p className="p-2 mb-2">
      {recommendedRetailPrice && recommendedRetailPrice}
    </p>
    {!!discount && !!discountAmount && (
      <p className="p-2 mb-2">{`${discount}% i rabatt`}</p>
    )}
  </div>
);

export default Price;

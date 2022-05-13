import { IPrice } from "./price";

export interface IProduct {
    sku: string;
    name: string;
    price: IPrice;
}
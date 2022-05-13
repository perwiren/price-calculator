import { Price } from "./price";

export interface Product {
    sku: string;
    name: string;
    price: Price;
}
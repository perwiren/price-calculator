import { mockPrices } from "../data/mocks/mockPrices";
import { IPrice } from "../types/price";

export const getPrices = (skus: string[], priceCode: string): IPrice[] => {
    return mockPrices;
}
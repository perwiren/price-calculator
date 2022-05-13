import { mockPrices } from "../data/mocks/mockPrices";
import { Price } from "../types/price";

export const getPrices = (skus: string[], priceCode: string): Price[] => {
    return mockPrices;
}
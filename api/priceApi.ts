import { mockPrices } from "../data/mocks/mockPrices";
import { Price } from "../interfaces/price";

export const getPrices = (skus: string[], priceCode: string): Price[] => {
    return mockPrices;
}
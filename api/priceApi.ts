import { mockPrices } from "../data/mocks/mockPrices";
import { IPrice } from "../types/price";

export const getPrices = async (skus: string[], priceCode: string): Promise<IPrice[]> => {
    // try {
    //     const result = await fetch("/", { method: "POST" });
    //     const prices = await result.json();
    //     return prices;
    // } catch (e) {
    //     return Promise.reject(e);
    // }
    return mockPrices;
}
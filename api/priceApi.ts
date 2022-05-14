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
    return mockPrices.filter(mp => skus.some(sku => sku === mp.sku));
}

export const getAllPrices = async (): Promise<IPrice[]> => {
    try {
        const result = await fetch("https://dometicservices.azurewebsites.net/", { method: "GET" });
        const prices = await result.json();
        return prices;
    } catch (e) {
        return Promise.reject(e);
    }
}
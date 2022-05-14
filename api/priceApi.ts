import { mockPrices } from "../data/mocks/mockPrices";
import { IPrice } from "../types/price";

const URL = "https://dometicservices.azurewebsites.net/";

export const getPrices = async (skus: string[], priceCode: string): Promise<IPrice[]> => {
    try {
        const payload =
        {
            method: "POST", 
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(
                {
                    skus: skus,
                    priceCode: "CG1"
                })
        };
        console.log(payload)
        const result = await fetch(URL, payload);
        const prices = await result.json();
        console.log('prices', prices)
        return prices;
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getAllPrices = async (): Promise<IPrice[]> => {
    try {
        const result = await fetch(URL, { method: "GET" });
        const prices = await result.json();
        return prices;
    } catch (e) {
        return Promise.reject(e);
    }
}
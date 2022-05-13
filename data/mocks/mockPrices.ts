import { Price } from "../../interfaces/price";

export const mockPrice1 = {
    sku: "CBA321",
    currency: "SEK",
    recommendedRetailPrice: 199,
    priceAmount: 199,
    discount: 0,
    discountAmount: 0
} as Price;

export const mockPrice2 = {
    sku: "QWERTY",
    currency: "SEK",
    recommendedRetailPrice: 500,
    priceAmount: 300,
    discount: 40,
    discountAmount: 200
} as Price;

export const mockPrice3 = {
    sku: "WQEER123",
    currency: "NOK",
    recommendedRetailPrice: 100,
    priceAmount: 60,
    discount: 40,
    discountAmount: 40
} as Price;

export const mockPrice4 = {
    sku: "ABC123",
    currency: "EUR",
    recommendedRetailPrice: 50,
    priceAmount: 45,
    discount: 10,
    discountAmount: 5
} as Price;

export const mockPrice5 = {
    sku: "QWE321",
    currency: "SEK",
    recommendedRetailPrice: 5000,
    priceAmount: 4000,
    discount: 20,
    discountAmount: 1000
} as Price;

export const mockPrices = [mockPrice1, mockPrice2, mockPrice3, mockPrice4, mockPrice5];
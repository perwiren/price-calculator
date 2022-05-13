import { IPrice } from "../../types/price";

export const mockPrice1: IPrice = {
    sku: "CBA321",
    currency: "SEK",
    recommendedRetailPrice: 199,
    priceAmount: 199,
    discount: 0,
    discountAmount: 0
};

export const mockPrice2: IPrice = {
    sku: "QWERTY",
    currency: "SEK",
    recommendedRetailPrice: 500,
    priceAmount: 300,
    discount: 40,
    discountAmount: 200
};

export const mockPrice3: IPrice = {
    sku: "WQEER123",
    currency: "NOK",
    recommendedRetailPrice: 100,
    priceAmount: 60,
    discount: 40,
    discountAmount: 40
};

export const mockPrice4: IPrice = {
    sku: "ABC123",
    currency: "EUR",
    recommendedRetailPrice: 50,
    priceAmount: 45,
    discount: 10,
    discountAmount: 5
};

export const mockPrice5: IPrice = {
    sku: "QWE321",
    currency: "SEK",
    recommendedRetailPrice: 5000,
    priceAmount: 4000,
    discount: 20,
    discountAmount: 1000
};

export const mockPrices = [mockPrice1, mockPrice2, mockPrice3, mockPrice4, mockPrice5];
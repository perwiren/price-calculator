import { IProduct } from "../../types/product";
import { mockPrice1, mockPrice2, mockPrice3, mockPrice4, mockPrice5 } from "./mockPrices";

export const mockProducts: IProduct[] = [
    {
        name: "En nice produkt",
        sku: "ABC123",
        price: mockPrice1
    },
    {
        name: "En ful produkt",
        sku: "QWE987",
        price: mockPrice2
    },
    {
        name: "Kudde",
        sku: "ZXC321",
        price: mockPrice3
    },
    {
        name: "Lampa",
        sku: "QWERTY",
        price: mockPrice4
    },
    {
        name: "Bord",
        sku: "123456789",
        price: mockPrice5
    },
];
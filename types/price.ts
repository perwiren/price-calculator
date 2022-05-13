export interface Price {
    sku: string;
    recommendedRetailPrice: number;
    priceAmount: number;
    discount: number;
    discountAmount: number;
    currency: string;
}
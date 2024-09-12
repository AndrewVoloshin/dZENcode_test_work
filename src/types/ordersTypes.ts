export type Price = {
    value: number;
    symbol: string;
    isDefault: number;
};

export type Product = {
    id: number;
    serialNumber: number;
    isNew: number;
    photo: string;
    title: string;
    type: string;
    specification: string;
    guarantee: {
        start: string;
        end: string;
    };
    price: Price[];
    order: number;
    date: string;
};

export type Order = {
    id: number;
    title: string;
    date: string;
    description: string;
};

export type OrderTotalProducts = {
    [orderId: number]: number
};

export type OrderSums = {
    [orderId: number]: {
        USD: number;
        UAH: number;
    };
};

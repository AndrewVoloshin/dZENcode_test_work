declare module '@/data/data.js' {
    export const orders: Array<{
        id: number;
        title: string;
        date: string;
        description: string;
    }>;
}

declare module '@/data/data.js' {
    export const products: Array<{
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
        price: Array<{
            value: number;
            symbol: string;
            isDefault: number;
        }>;
        order: number;
        date: string;
    }>;
}

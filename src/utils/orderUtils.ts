import type { Product, OrderSums, Order, OrderTotalProducts } from '@/types/ordersTypes';

export function calculateOrderSums(products: Product[]): OrderSums {
    const orderSums: OrderSums = {};

    products.forEach(product => {
        const orderId = product.order;

        if (!orderSums[orderId]) {
            orderSums[orderId] = {
                USD: 0,
                UAH: 0
            };
        }

        product.price.forEach(price => {
            if (price.symbol === 'USD') {
                orderSums[orderId].USD += price.value;
            } else if (price.symbol === 'UAH') {
                orderSums[orderId].UAH += price.value;
            }
        });
    });

    return orderSums;
}

export function countOrderProducts(orders: Order[], products: Product[]) {
    const countOrderProducts: OrderTotalProducts = {}

    orders.forEach(order => {
        let countProduct = 0

        products.forEach(product => {
            if (product.order === order.id) ++countProduct
        })

        countOrderProducts[order.id] = countProduct
    });

    return countOrderProducts
}



<script setup lang="ts">
import { ref, computed } from 'vue';
import { orders as importedOrders, products as importedProducts } from '@/data/data.js';
import { calculateOrderSums, countOrderProducts } from '@/utils/orderUtils';
import { formatDate } from '@/utils/formatDate';


const orders = ref(importedOrders);
const products = ref(importedProducts);


const orderSums = computed(() => calculateOrderSums(products.value));
console.log(orderSums);

const orderTotalProducts = computed(() => countOrderProducts(orders.value, products.value));
console.log(orderTotalProducts.value, 'orderTotalProducts');


function deleteOrder(index: number) {
    orders.value.splice(index, 1);
}

</script>

<template>
    <div>
        <table class="table">
            <tbody>
                <tr v-for="(order, index) in orders"
                    :key="order.id">
                    <td>{{ order.description }}</td>
                    <td>{{ order.title }}</td>


                    <td class="icon-text-cell">
                        <i class="fa-solid fa-rectangle-list icon-circle"></i>
                        {{ orderTotalProducts[order.id]}} Products
                    </td>

                    <td>
                        <span class="d-block text-center"> {{ formatDate(order.date).part }}</span>
                        <span class="d-block text-center">{{ formatDate(order.date).full }}</span>

                    </td>

                    <td>
                        <span class="d-block text-center">
                            {{ (orderSums[order.id]?.USD ?? 'N/A') + ' $' }}
                        </span>
                        <span class="d-block text-center">
                            {{ orderSums[order.id]?.UAH + ' UAH' || 'N/A' }}
                        </span>
                    </td>
                    <td>
                        <button @click="deleteOrder(index)"
                                class="delete-btn">
                            <i class="fa-regular fa-trash-can"
                               style="color: #636d73;"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;

    tr {
        background: white;
    }
}

.table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    border-left: none;
    border-right: none;

    &:first-child {
        border-left: 1px solid #ddd;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    &:last-child {
        border-right: 1px solid #ddd;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
}

.icon-text-cell {
    display: flex;
    align-items: center;
    gap: 8px;
}

.icon-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ddd;
    color: #636d73;
}
</style>

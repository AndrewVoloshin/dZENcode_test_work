<script setup lang="ts">
import { ref, computed } from 'vue';
import { orders as importedOrders, products as importedProducts } from '@/data/data.js';
import { calculateOrderSums, countOrderProducts } from '@/utils/orderUtils';
import { useOrderStore } from '@/stores/orderStore';
import { formatDate } from '@/utils/formatDate';

const orders = ref(importedOrders);
const products = ref(importedProducts);

const orderStore = useOrderStore();

const orderSums = computed(() => calculateOrderSums(products.value));

const orderTotalProducts = computed(() => countOrderProducts(orders.value, products.value));

function deleteOrder(orderId: number) {
    orders.value.splice(orderId, 1);
}

function openModalProducts(orderId: number) {
    orderStore.openModalProducts(orderId);
}
</script>

<template>
    <div>
        <table :class="['table', { 'table-small': !orderStore.bigSize }]">
            <tbody>
                <tr v-for="(order, index) in orders"
                    :key="order.id">
                    <td v-if="orderStore.bigSize">{{ order.description }}</td>
                    <!-- <td v-if="bigSize">{{ order.title }}</td> -->


                    <td>
                        <div class="icon-text-cell"
                             @click="openModalProducts(order.id)">

                            <i class="fa-solid fa-rectangle-list icon-circle"></i>
                            <div>
                                <span class="d-block "> {{ orderTotalProducts[order.id] }}
                                </span>
                                <span class="d-block">Products</span>
                            </div>
                        </div>
                    </td>

                    <td>
                        <span class="d-block text-center"> {{ formatDate(order.date).part }}</span>
                        <span class="d-block text-center">{{ formatDate(order.date).full }}</span>

                    </td>

                    <td v-if="orderStore.bigSize">
                        <span class="d-block text-center">
                            {{ (orderSums[order.id]?.USD ?? 'N/A') + ' $' }}
                        </span>
                        <span class="d-block text-center">
                            {{ orderSums[order.id]?.UAH + ' UAH' || 'N/A' }}
                        </span>
                    </td>
                    <td v-if="orderStore.bigSize">
                        <button @click="deleteOrder(index)"
                                class="delete-btn">
                            <i class="fa-regular fa-trash-can"
                               style="color: #636d73;"></i>
                        </button>
                    </td>

                    <td :class="[{ 'cell-chevron': order.id === orderStore.choosenOrder }]"
                        v-if="!orderStore.bigSize">
                        <div class="cell-chevron__container">
                            <img src="/src/assets/chevron-right-solid.svg"
                                 alt="chevron" />
                        </div>
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

.table-small {
    width: 410px;
}

.table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    border-left: none;
    border-right: none;
    vertical-align: middle;

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

.cell-chevron {
    background-color: #d0d8db;
    text-align: center;
}

.cell-chevron__container {
    position: relative;
    width: 12px;
    height: 12px;
    margin: 0 auto;

    & img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
}
</style>

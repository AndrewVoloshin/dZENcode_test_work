// stores/orderStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { orders as importedOrders, products as importedProducts } from '@/data/data.js';

export const useOrderStore = defineStore('order', () => {

  const orders = ref(importedOrders);
  const products = ref(importedProducts);
  
  const bigSize = ref(true);
  const choosenOrder = ref<number | null>(null);
  const displayOrderProductTable = ref(false);


  function resetModal() {
    bigSize.value = true;
    choosenOrder.value = null;
  }

  return {
    orders,
    products,
    bigSize,
    choosenOrder,
    displayOrderProductTable,
    resetModal,
  };
});

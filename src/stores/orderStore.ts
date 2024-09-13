// stores/orderStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrderStore = defineStore('order', () => {
  const bigSize = ref(true);
  const choosenOrder = ref<number | null>(null);

  function openModalProducts(orderId: number) {
    bigSize.value = false;
    choosenOrder.value = orderId;
  }

  function resetModal() {
    bigSize.value = true;
    choosenOrder.value = null;
  }

  return {
    bigSize,
    choosenOrder,
    openModalProducts,
    resetModal,
  };
});

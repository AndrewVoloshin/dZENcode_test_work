<script setup lang="ts">
import OrderTable from '../components/OrdersTable.vue'
import OrderProductsTable from '../components/OrderProductsTable.vue'

</script>

<template>
  <div class="order-container">
    <h2>Orders</h2>
    <div class="d-flex gap-3">
      <OrderTable />
      <OrderProductsTable />
    </div>

  </div>

</template>


<style scoped>
.order-container {
  padding: 50px 0 0 40px;
}
</style>
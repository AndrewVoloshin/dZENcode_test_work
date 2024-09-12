<script setup lang="ts">
import OrderTable from '../components/OrderTable.vue'

</script>

<template>
  <div class="order-container">
    <h2>Orders</h2>
    <OrderTable />
  </div>
</template>


<style scoped>
.order-container {
  padding: 50px 0 0 40px;
}
</style>
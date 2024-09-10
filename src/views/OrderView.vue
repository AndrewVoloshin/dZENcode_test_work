<script setup lang="ts">
import OrderItem from '../components/OrderItem.vue'

</script>

<template>
  <div class="order-container">
    <h2>Orders</h2>
    <OrderItem />
  </div>
</template>


<style scoped>
.order-container {
  padding: 50px 0 0 40px;
}
</style>
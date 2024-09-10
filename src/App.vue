<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationMenu from './components/NavigationMenu.vue'
import TopMenu from './components/TopMenu.vue'

</script>

<template>
  <TopMenu />
  <NavigationMenu />
  <main class="main-container">
    <RouterView />
  </main>

</template>

<style scoped>
.main-container {
  height: 5000px;
  margin: 58px 0 0 200px;
  background: #eff3f6;
}
</style>

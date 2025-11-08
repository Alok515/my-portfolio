<script setup lang="ts">
  import AppNavBar from './components/AppNavBar.vue';
  import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-900 text-white">
    <AppNavBar />

    <main class="grow container mx-auto p-4">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<style>
/* Optional: Add a subtle transition for route changes */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
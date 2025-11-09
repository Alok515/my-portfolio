<template>
  <footer class="bg-gray-800 text-white p-4 text-center">
    <p>&copy; {{ year }} Alok Kumar Singh. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
    const year = new Date().getFullYear();
</script>
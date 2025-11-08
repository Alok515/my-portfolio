<template>
  <footer class="bg-gray-800 text-white p-4 text-center">
    <p>&copy; {{ year }} Your Name. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
    const year = new Date().getFullYear();
</script>
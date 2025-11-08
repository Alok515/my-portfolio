<template>
  <nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <span class="text-xl font-bold">My Portfolio</span>
      <div class="space-x-4">
        <router-link v-for="page in navArray" :key="page.name" :to="page.path" class="hover:text-gray-300">{{ page.name
          }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navArray = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Contact',
    path: '/contacts'
  }
]
</script>

<style scoped>
.router-link-active {
  color: #aaa;
  border-bottom: #999 1px solid;
  text-shadow: #999 1px 1px 1px;
}
</style>
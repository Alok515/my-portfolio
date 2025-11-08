<template>
  <nav class="sticky top-0 z-50 w-full 
           bg-white/10 backdrop-blur-md shadow-md
           border-b border-white/10">
    <div class="container mx-auto flex justify-between items-center p-4 text-white">
      <router-link to="/" class="text-2xl font-bold hover:opacity-80 transition-opacity">
        MyPortfolio
      </router-link>

      <div class="hidden md:flex space-x-6 active-nav">
        <router-link v-for="page in navArray" :key="page.name" :to="page.path" class="hover:text-indigo-300">{{
          page.name }}</router-link>
      </div>

      <div class="md:hidden">
        <button @click="uiStore.toggleMobileMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="uiStore.isMobileMenuOpen" class="md:hidden bg-black/20 backdrop-blur-lg">
      <router-link v-for="page in navArray" :key="page.name" :to="page.path" class="block p-4 hover:bg-indigo-700"
        @click="uiStore.toggleMobileMenu">{{ page.name }}</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useUiStore } from '@/store/ui';

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
];

const uiStore = useUiStore();
</script>

<style scoped>
.active-nav > .router-link-active {
  color: #aaa;
  border-bottom: #999 1px solid;
  text-shadow: #999 1px 1px 1px;
}
</style>
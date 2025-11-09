<template>
  <div>
    <div class="flex items-center justify-center min-h-[55vh]">
      <div class="text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm Alok Kumar Singh
        </h1>

        <p class="text-xl md:text-2xl text-indigo-200 mb-8">
          Full-Stack Developer | Vue.js | NestJS | TypeScript
        </p>

        <div class="flex justify-center space-x-4">
          <PrimaryButton @click="goToProjects">
            View My Work
          </PrimaryButton>
          <router-link to="/contacts">
            <button class="px-6 py-2 rounded-lg font-semibold text-white
                   border-2 border-white/50
                   hover:bg-white/10 transition-all">
              Get In Touch
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center flex-col">
      <h3 class="font-medium mb-2">My Skills</h3>
      <Skils />
    </div>
  </div>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { PrimaryButton } from '@/components'
import { Skils } from '@/components'

const router = useRouter()

function goToProjects() {
  router.push('/projects')
}
</script>
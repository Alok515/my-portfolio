<template>
  <div class="space-y-12">
    <h1 class="text-4xl font-bold text-center">About Me</h1>

    <GlassCard>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        <div class="flex justify-center md:col-span-1">
          <div 
            class="w-48 h-48 rounded-full bg-linear-to-br from-indigo-500 to-purple-600
                   flex items-center justify-center text-white text-lg font-bold
                   border-4 border-white/20 shadow-lg"
          >
            <img src="../assets/port!.png" alt="Alok Kumar Singh" class="rounded-full">
          </div>
          </div>

        <div class="md:col-span-2">
          <h2 class="text-3xl font-bold mb-4">Who I Am</h2>
          <p class="text-lg text-indigo-100 mb-4">
            I am a passionate Full-Stack Developer with a love for building
            scalable, efficient, and beautiful web applications. My expertise
            lies in the modern JavaScript ecosystem.
          </p>
          <p class="text-lg text-indigo-100">
            From crafting responsive frontends with <span class="font-bold">Vue.js</span> to engineering
            robust microservice backends with <span class="font-bold">Nest.js</span>, I thrive on
            bringing complex ideas to life. This portfolio is a showcase
            of my journey and capabilities.
          </p>
        </div>
      </div>
    </GlassCard>

    </div>
</template>

<script setup lang="ts">
// Use our clean import from components/index.ts
import { GlassCard } from '@/components'
</script>
<template>
  <div class="space-y-12">
    <h1 class="text-4xl font-bold text-center">My Work</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <GlassCard v-for="project in projectList" :key="project.id">
        <div class="flex flex-col h-full">
          
          <img :src="project.imageUrl" alt="Project Image" class="rounded-lg mb-4 object-cover h-48 w-full">
          
          <h2 class="text-2xl font-bold mb-2">{{ project.title }}</h2>
          
          <p class="text-indigo-100 mb-4 grow">{{ project.description }}</p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="bg-indigo-700/50 text-indigo-100 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
          
          <div class="flex space-x-4 mt-auto">
            <a 
              v-if="project.githubUrl" 
              :href="project.githubUrl" 
              target="_blank"
              class="font-medium hover:text-indigo-300 transition-colors"
            >
              View Code
            </a>
            <a 
              v-if="project.projectUrl" 
              :href="project.projectUrl" 
              target="_blank"
              class="font-medium hover:text-indigo-300 transition-colors"
            >
              Live Site
            </a>
          </div>

        </div>
      </GlassCard>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GlassCard } from '@/components';
import { projects as mockProjects, type Project } from '@/data/projects';

// We use ref so it's reactive. Later, we can fill this from an API.
const projectList = ref<Project[]>(mockProjects);
</script>
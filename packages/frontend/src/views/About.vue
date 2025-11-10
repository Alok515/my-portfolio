<template>
    <div class="space-y-12">
        <h1 class="text-4xl font-bold text-center">About Me</h1>

        <GlassCard>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                <div class="flex justify-center md:col-span-1">
                    <div class="relative w-48 h-48">

                        <div v-if="!isImageLoaded" class="absolute inset-0 w-48 h-48 rounded-full 
                     bg-linear-to-br from-indigo-500 to-purple-600
                     flex items-center justify-center text-white text-lg font-bold
                     border-4 border-white/20 shadow-lg animate-pulse">
                            Loading...
                        </div>

                        <img src="@/assets//port!.png" alt="Profile Picture" class="absolute inset-0 w-48 h-48 rounded-full object-cover shadow-lg
                     transition-opacity duration-700 ease-in-out" :class="isImageLoaded ? 'opacity-100' : 'opacity-0'"
                            @load="isImageLoaded = true">
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
                        robust microservice backends with <span class="font-bold">NestJS</span>, I thrive on
                        bringing complex ideas to life. This portfolio is a showcase
                        of my journey and capabilities.
                    </p>

                    <div class="mt-6">
                        <PrimaryButton @click="showResumeModal = true">
                            Request My Resume
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </GlassCard>
        <div v-if="showResumeModal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
            <GlassCard class="w-full max-w-lg">
                <h2 class="text-2xl font-bold mb-4">Request Resume</h2>
                <p class="mb-4">Enter your email, and I'll send you my resume right away.</p>

                <div v-if="requestMessage" :class="isError ? 'text-red-300' : 'text-green-300'" class="mb-4">
                    {{ requestMessage }}
                </div>

                <form v-if="!requestSuccess" @submit.prevent="handleResumeRequest" class="space-y-4">
                    <input type="email" v-model="requesterEmail" placeholder="your.email@example.com" class="w-full p-3 rounded-lg bg-white/10 border border-white/20 
                 focus:outline-none focus:ring-2 focus:ring-indigo-400" required>
                    <div class="flex justify-end space-x-4">
                        <button type="button" @click="showResumeModal = false" class="text-indigo-200 hover:text-white">
                            Cancel
                        </button>
                        <PrimaryButton type="submit" :disabled="isLoading">
                            {{ isLoading ? 'Sending...' : 'Send' }}
                        </PrimaryButton>
                    </div>
                </form>
            </GlassCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { GlassCard, PrimaryButton } from '@/components'; // Import PrimaryButton

const isImageLoaded = ref(false);

const API_URL = 'http://localhost:3000/api/v1'; // Base API URL
const showResumeModal = ref(false);
const requesterEmail = ref('');
const isLoading = ref(false);
const requestMessage = ref('');
const isError = ref(false);
const requestSuccess = ref(false);

async function handleResumeRequest() {
  isLoading.value = true;
  isError.value = false;
  requestMessage.value = '';

  try {
    await axios.post(`${API_URL}/contact/request-resume`, { email: requesterEmail.value });
    
    isLoading.value = false;
    requestSuccess.value = true;
    requestMessage.value = "Success! My resume is on its way to your inbox.";
    
    // Close modal after a delay
    setTimeout(() => {
      showResumeModal.value = false;
      requestSuccess.value = false;
      requesterEmail.value = '';
      requestMessage.value = '';
    }, 3000);

  } catch (error) {
    isLoading.value = false;
    isError.value = true;
    requestMessage.value = 'An error occurred. Please try again.';
  }
}
</script>
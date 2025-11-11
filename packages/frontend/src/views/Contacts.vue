<template>
  <div class="flex justify-center items-center py-12">
    <GlassCard class="w-full max-w-2xl">
      <h1 class="text-4xl font-bold text-center mb-8">Get In Touch</h1>
      
      <div v-if="successMessage">
        <p class="text-center text-lg text-green-300 p-4 bg-green-900/50 rounded-lg">
          {{ successMessage }}
        </p>
      </div>
      
      <form v-else @submit.prevent="handleSubmit" class="space-y-6">
        
        <div>
          <label for="name" class="block text-sm font-medium text-indigo-100 mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name"
            class="w-full p-3 rounded-lg bg-white/10 border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
            :disabled="isLoading"
          >
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-indigo-100 mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email"
            class="w-full p-3 rounded-lg bg-white/10 border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
            :disabled="isLoading"
          >
        </div>
        
        <div>
          <label for="message" class="block text-sm font-medium text-indigo-100 mb-2">Message</label>
          <textarea 
            id="message" 
            rows="5" 
            v-model="formData.message"
            class="w-full p-3 rounded-lg bg-white/10 border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
            :disabled="isLoading"
          ></textarea>
        </div>

        <div v-if="errorMessage">
          <p class="text-center text-red-300 p-3 bg-red-900/50 rounded-lg">
            {{ errorMessage }}
          </p>
        </div>
        
        <div class="text-center">
          <PrimaryButton type="submit" :disabled="isLoading">
            {{ isLoading ? 'Sending...' : 'Send Message' }}
          </PrimaryButton>
        </div>
      </form>
    </GlassCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { GlassCard, PrimaryButton } from '@/components';

// This is your backend API URL.
const API_URL = `${import.meta.env.VITE_API_URL}/api/v1/contact` || 'http://localhost:3000/api/v1/contact';

// Form data
const formData = ref({
  name: '',
  email: '',
  message: '',
});

// State management for the form
const isLoading = ref(false);
const errorMessage = ref<string | null>(null);
const successMessage = ref<string | null>(null);

async function handleSubmit() {
  // Reset previous states
  isLoading.value = true;
  errorMessage.value = null;
  successMessage.value = null;

  try {
    // Send the POST request to the NestJS backend
    const response = await axios.post(API_URL, formData.value);

    if (response.status !== 200) {
      throw new Error('Failed to send message');
    }
    // Handle success
    successMessage.value = 'Message sent successfully! I will get back to you soon.';
    isLoading.value = false;
    
    // Clear the form
    formData.value = { name: '', email: '', message: '' };

  } catch (error: any) {
    // Handle errors
    isLoading.value = false;
    
    if (axios.isAxiosError(error) && error.response) {
      // This is an error from backend
      const messages = error.response.data.message;
      if (Array.isArray(messages)) {
        // Format validation errors nicely
        errorMessage.value = messages.join('; ');
      } else {
        errorMessage.value = messages || 'An unknown error occurred.';
      }
    } else {
      // This is a network error or something else
      errorMessage.value = 'Could not connect to the server. Please try again later.';
      console.error('Contact form error:', error);
    }
  }
}
</script>
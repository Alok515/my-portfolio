<template>
  <div class="flex justify-center items-center py-12">
    <GlassCard class="w-full max-w-2xl">
      <h1 class="text-4xl font-bold text-center mb-8">Get In Touch</h1>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        
        <div>
          <label for="name" class="block text-sm font-medium text-indigo-100 mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name"
            class="w-full p-3 rounded-lg bg-white/10 border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
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
          ></textarea>
        </div>
        
        <div class="text-center">
          <PrimaryButton type="submit">
            Send Message
          </PrimaryButton>
        </div>

      </form>
    </GlassCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GlassCard, PrimaryButton } from '@/components';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

function handleSubmit() {
  // We'll add the API call here on Day 9
  console.log('Form submitted (Static):', formData.value);
  alert('Form submitted! (This will send an email later)');
  
  // Clear the form
  formData.value = { name: '', email: '', message: '' };
}
</script>
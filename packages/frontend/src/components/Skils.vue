<script setup lang="ts">
    import { skills } from '@/data/skills';
    import GlassCard from './GlassCard.vue';

    function openInNewTab(url: string) {
        window.open(url, '_blank');
    }
</script>

<template>
    <div class="grid grid-cols-4 gap-8">
        <GlassCard v-for="skill in skills" :key="skill.name" class="hover:shadow-indigo-700 cursor-pointer" @click="openInNewTab(skill.url)">
            <div class="flex justify-center items-center">
                <!-- lazy load the image -->
                <img :src="skill.logoUrl" :alt="skill.name" class="w-12 h-12">
                <!-- <h3 class="text-lg font-semibold mt-2">{{ skill.name }}</h3> -->
            </div>
        </GlassCard>
    </div>
</template>


<script setup>
import UCard from '../../components/UCard.vue'

const themes = ['light', 'dark']
</script>

<template>
    <div class="grid grid-cols-2 gap-0 min-h-screen">
        <div v-for="theme in themes" :class="`theme-${theme}`" class="p-12 bg-bg-body space-y-3 h-full">
            <UCard class="p-4 h-full">
                <slot></slot>
            </UCard>
        </div>
    </div>
</template>

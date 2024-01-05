<script lang="ts" setup>
import { store } from '@/examples/store/store'
import UChip from '../../components/UChip.vue'
</script>

<template>
    <div class="flex gap-4">
        <UChip>Default</UChip>
        <UChip v-for="color in store.colors" :color="color" class="capitalize">{{ color }}</UChip>
    </div>
</template>

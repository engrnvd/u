<script lang="ts" setup>
import UChip from '../../components/UChip.vue'
import { reactive } from 'vue'

const variants = reactive(['primary', 'secondary', 'success', 'info', 'danger'])

</script>

<template>
    <div class="d-flex gap-4">
        <UChip>Default</UChip>
        <UChip v-for="color in variants" :color="color">{{ color }}</UChip>
    </div>
</template>

<script lang="ts" setup>
import type { TextColorVariant } from '../types/misc-types'

const p = withDefaults(defineProps<{
    color?: TextColorVariant,
}>(), {
    color: 'muted',
})
</script>

<template>
    <label :class="`block text-${color} text-sm`">
        <slot></slot>
    </label>
</template>

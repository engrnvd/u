<script lang="ts" setup>
import type { TextColorVariant } from '../types/misc-types'

const p = withDefaults(defineProps<{
    color?: TextColorVariant,
}>(), {
    color: 'muted',
})
</script>

<template>
    <div :class="`block text-${color} text-xs my-1`">
        <slot></slot>
    </div>
</template>

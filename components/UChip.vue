<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import { getTextClass } from '../composables/getTextClass'
import type { ColorVariant } from '../types/misc-types'

const props = withDefaults(defineProps<{
    color?: ColorVariant,
}>(), {
    color: 'neutral',
})
const textClass = computed(() => getTextClass(props.color))

</script>

<template>
    <div v-ripple :class="`bg-${color} ${textClass} ${color === 'neutral' && 'ripple-dark'}`"
         class="all-center has-hover cursor-pointer rounded-full px-4 py-2 w-fit shrink-0">
        <slot></slot>
    </div>
</template>


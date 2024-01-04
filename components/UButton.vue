<script lang="ts" setup>
import LoadingIcon from '@/icons/Loading.vue'
import type { ColorVariant } from '@/types/misc-types'
import { computed } from 'vue'

const p = withDefaults(defineProps<{
    color?: ColorVariant,
    icon?: boolean,
    loading?: boolean,
    disabled?: boolean,
    hasBorder?: boolean,
    transparent?: boolean,
}>(), {
    color: 'primary',
    icon: false,
    loading: false,
    disabled: false,
    hasBorder: false,
})

const textClass = computed(() => {
    if (p.color === 'neutral' || p.color === 'warn') return 'text-text'
    if (p.transparent) return `text-${p.color}`
    return 'text-light'
})

const classes = computed(() => ({
    [textClass.value]: true,
    [`bg-${p.color}`]: !p.transparent,
    [`hover:bg-${p.color} text-${p.color}`]: p.transparent,
    'ripple-dark': p.color === 'neutral' || p.transparent,
    'rounded-md px-4 py-2': !p.icon,
    'size-[2em] rounded-full justify-center': p.icon,
    [`hover:bg-${p.color}-light hover:text-light`]: p.icon && p.color !== 'neutral',
}))

</script>

<template>
    <button
        v-ripple
        :class="classes"
        :disabled="loading || disabled"
        class="inline-flex has-hover items-center text-sm font-semibold uppercase tracking-widest transition duration-150 ease-in-out focus:outline-none active:shadow-none disabled:cursor-not-allowed disabled:bg-neutral-darker disabled:shadow-none">
        <slot v-if="!loading"/>
        <LoadingIcon v-else class="animate-spin"/>
    </button>
</template>

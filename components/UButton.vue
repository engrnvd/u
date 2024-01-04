<script lang="ts" setup>
import LoadingIcon from '@/icons/Loading.vue'
import type { ColorVariant } from '@/types/misc-types'
import { computed } from 'vue'

const p = withDefaults(defineProps<{
    variant?: ColorVariant,
    icon?: boolean,
    loading?: boolean,
    disabled?: boolean,
}>(), {
    variant: 'primary',
    icon: false,
    loading: false,
    disabled: false,
})

const colorClasses = {
    primary: `bg-primary text-light`,
    neutral: `bg-neutral hover:bg-neutral-dark text-text`,
    danger: `bg-danger hover:bg-danger-dark text-light`,
    success: `bg-success hover:bg-success-dark text-light`,
    warn: `bg-warn hover:bg-warn-dark text-text`,
}

// for tailwind:
// bg-neutral-darker hover:bg-primary hover:bg-success hover:bg-danger hover:bg-warn hover:bg-neutral text-primary text-danger text-warn text-success
const classes = computed(() => ({
    [colorClasses[p.variant]]: !p.icon,
    'rounded-md px-4 py-2 shadow': !p.icon,
    'size-[2em] rounded-full justify-center bg-transparent': p.icon,
    [`hover:bg-${p.variant} hover:text-light text-${p.variant}`]: p.icon && p.variant !== 'neutral',
    [`text-text hover:bg-neutral-darker`]: p.icon && p.variant === 'neutral',
}))

</script>

<template>
    <button
        :class="classes"
        :disabled="loading || disabled"
        class="clickable inline-flex items-center text-sm font-semibold uppercase tracking-widest transition duration-150 ease-in-out focus:outline-none active:shadow-none disabled:cursor-not-allowed disabled:bg-neutral-darker disabled:shadow-none">
        <slot v-if="!loading"/>
        <LoadingIcon v-else class="animate-spin"/>
    </button>
</template>

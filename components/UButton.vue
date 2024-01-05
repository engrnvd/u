<script lang="ts" setup>
import { getTextClass } from '@/composables/getTextClass'
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

const textClass = computed(() => getTextClass(p.color, p.transparent, p.loading))

const classes = computed(() => ({
    [textClass.value]: true,
    [`bg-${p.color} hover:bg-${p.color}-dark`]: !p.transparent,
    [`hover:bg-${p.color}-lighter text-${p.color}`]: p.transparent,
    'ripple-dark': p.color === 'neutral' || p.transparent,
    'rounded-md px-4 py-2': !p.icon,
    'size-[2em] rounded-full justify-center': p.icon,
}))

</script>

<template>
    <button
        v-ripple
        :class="classes"
        :disabled="loading || disabled"
        class="inline-flex items-center justify-center text-sm font-semibold uppercase tracking-widest transition duration-150 ease-in-out focus:outline-none active:shadow-none disabled:cursor-not-allowed disabled:bg-neutral-darker disabled:shadow-none disabled:text-muted relative">
        <span :class="{'opacity-0': loading}"><slot/></span>
        <span v-if="loading" class="absolute inset-0 all-center">
            <LoadingIcon class="animate-spin absolute"/>
        </span>
    </button>
</template>

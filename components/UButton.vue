<script lang="ts" setup>
import { computed } from 'vue'
import { getTextClass } from '../composables/getTextClass'
import LoadingIcon from '../icons/Loading.vue'
import type { ColorVariant } from '../types/misc-types'

const p = withDefaults(defineProps<{
    color?: ColorVariant,
    icon?: boolean,
    loading?: boolean,
    disabled?: boolean,
    transparent?: boolean,
    tag?: any,
}>(), {
    color: 'primary',
    icon: false,
    loading: false,
    disabled: false,
    tag: 'button',
})

const textClass = computed(() => getTextClass(p.color, p.transparent, p.loading))

const classes = computed(() => ({
    [textClass.value]: true,
    [`bg-${p.color} hover:bg-${p.color}-dark`]: !p.transparent,
    [`hover:bg-${p.color}-lighter`]: p.transparent,
    'ripple-dark': p.color === 'neutral' || p.transparent,
    'rounded-md px-4 py-2 min-w-20': !p.icon,
    'size-[2em] rounded-full justify-center': p.icon,
}))

</script>

<template>
    <component :is="tag"
               v-ripple
               :class="classes"
               :disabled="loading || disabled"
               class="relative all-center text-sm font-semibold uppercase leading-4 tracking-widest transition duration-150 ease-in-out focus:outline-none active:shadow-none disabled:bg-neutral-darker disabled:text-muted disabled:cursor-not-allowed disabled:shadow-none hover:filter-none">
        <span :class="{'opacity-0': loading}" class="all-center"><slot/></span>
        <span v-if="loading" class="absolute inset-0 all-center">
            <LoadingIcon class="absolute animate-spin"/>
        </span>
    </component>
</template>

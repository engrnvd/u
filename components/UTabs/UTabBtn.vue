<script lang="ts" setup>
import { computed } from 'vue'

let p = defineProps<{
    item: any,
    selected: boolean,
    index: number,
}>()

let classes = computed(() => ({
    'border-b-transparent text-text': p.selected,
    'cursor-pointer has-hover text-primary': !p.selected,
    'border-l-0': p.index > 0,
}))
</script>

<template>
    <div :class="classes"
         class="rounded-tl rounded-tr border px-6 py-2 font-bold select-none">
        <slot></slot>
    </div>
</template>

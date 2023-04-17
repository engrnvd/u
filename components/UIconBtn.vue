<script lang="ts" setup>
import UButton from './UButton.vue'
import { defineProps } from 'vue'

defineProps({
    tooltip: String,
    inline: { type: Boolean, default: false },
})
</script>

<template>
    <UButton
        class="u-icon-btn"
        :class="{inline: inline}"
        v-tooltip="tooltip"
        compact icon secondary transparent
        v-bind="{...$props, ...$attrs}">
        <slot/>
    </UButton>
</template>

<style lang="scss" scoped>

.u-icon-btn {
    &.inline {
        font-size: 1em;
        --form-element-height: 1.5em;
    }
}

</style>

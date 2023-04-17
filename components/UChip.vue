<script lang="ts" setup>
import { defineProps } from 'vue'

const props = withDefaults(defineProps<{
    color?: '' | 'primary' | 'secondary' | 'info' | 'danger',
}>(), {
    color: '',
})

</script>

<template>
    <div
        v-ripple :class="color"
        class="all-center px-4 u-chip">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@import "../styles/variables";
@import "../styles/functions";

.u-chip {
    width: fit-content;
    height: 2.5rem;
    background-color: var(--gray);
    border-radius: calc(var(--form-element-height) / 2);
    color: var(--main-text-color);
    cursor: pointer;
    flex-shrink: 0;

    &:hover, &:focus {
        background-color: var(--gray-hover);
    }

    @each $color, $value in $theme-colors {
        &.#{$color} {
            background-color: var(--#{$color});
            color: contrastColor($value);

            &:hover {
                background-color: var(--#{$color}-dark);
            }
        }
    }
}
</style>

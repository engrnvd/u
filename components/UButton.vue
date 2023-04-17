<script lang="ts" setup>
import { defineProps } from 'vue'
import ULoading from './ULoading.vue'

defineProps({
    flat: Boolean,
    outline: Boolean,
    icon: Boolean,
    transparent: Boolean,
    secondary: Boolean,
    success: Boolean,
    warning: Boolean,
    danger: Boolean,
    loading: Boolean,
    disabled: Boolean,
    compact: Boolean,
})
</script>

<template>
    <button :disabled="disabled || loading" v-ripple class="u-btn" :class="{
        primary: !secondary,
        flat,
        outline,
        icon,
        transparent,
        secondary,
        success,
        warning,
        danger,
        compact,
    }">
        <ULoading v-if="loading"/>
        <slot v-else></slot>
    </button>
</template>

<style lang="scss">
@import "../styles/variables";
@import "../styles/functions";

@mixin btn-transparent($color, $value) {
    background-color: transparent;
    border: none;
    @if ($color == secondary) {
        color: var(--main-text-color);
    } @else {
        color: var(--#{$color});
    }
    box-shadow: none;

    &:hover {
        background-color: var(--#{$color}-light);
        color: contrastColor($value);
    }

    .ripple {
        background-color: var(--ripple-dark) !important;
    }
}

@mixin btn-outline($color, $value) {
    background-color: transparent;
    border: 2px solid var(--#{$color});
    @if ($color == secondary) {
        color: var(--main-text-color);
        border: 2px solid var(--main-text-color);
    } @else {
        color: var(--#{$color});
        border: 2px solid var(--#{$color});
    }
    box-shadow: none;

    &:hover {
        background-color: var(--#{$color});
        color: contrastColor($value);
        border-color: var(--#{$color});
    }
}

@mixin btn-variants {
    @each $color, $value in $theme-colors {
        @if ($color != light and $color != dark) {
            &.#{$color} {
                background-color: var(--#{$color});
                color: contrastColor($value);
                border: none;
                @if ($color == secondary) {
                    --ripple-light: var(--ripple-dark);
                }

                &:hover, &:focus {
                    background-color: var(--#{$color}-dark);
                }

                &.outline {
                    @include btn-outline($color, $value);
                }

                &.transparent {
                    @include btn-transparent($color, $value);
                }
            }
        }
    }
}

.u-btn {
    padding: 0 1em;
    height: var(--form-element-height);
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    outline: none;
    min-width: 8em;
    border-radius: var(--form-element-border-radius);
    box-shadow: var(--shadow-0);
    line-height: 1;
    text-transform: uppercase;

    &:disabled {
        cursor: not-allowed;
        background-color: var(--disabled-bg) !important;
        color: var(--disabled-text-color) !important;
        box-shadow: none;
    }

    &:active {
        box-shadow: none;
    }

    &.flat {
        box-shadow: none;
    }

    &.compact {
        font-size: 0.9em;
        --form-element-height: 2rem;
    }

    &.icon {
        width: var(--form-element-height);
        height: var(--form-element-height);
        padding: 0;
        min-width: initial;
        border-radius: 50%;
        font-size: 1.5em;

        &.compact {
            font-size: 1.25em;
        }

        &:disabled {
            background-color: transparent !important;
        }

        .u-loading {
            --dot-size: 0.3em;
            --dot-spacing: 0.05em;
        }
    }

    @include btn-variants
}

</style>

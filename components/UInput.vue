<script lang="ts" setup>
import { inputEmits, inputProps } from '../helpers/input-helper'
import { defineProps } from 'vue'

defineProps({
    ...inputProps
})

const emit = defineEmits([...inputEmits])

</script>

<template>
    <div class="u-input-container" :class="{'has-error': errors.length}">
        <div class="u-form-group">
            <slot>
                <input
                    class="u-input"
                    :type="type"
                    :placeholder="label"
                    :value="modelValue"
                    @input="e => emit('update:modelValue', e.target.value)">
                <label v-if="label">{{ label }}</label>
            </slot>
        </div>
        <div class="text-small p-2" v-for="error in errors">{{ error }}</div>
        <div class="text-small p-2" v-if="helpText && !errors.length">{{ helpText }}</div>
    </div>
</template>

<style lang="scss">
:root {
    --u-input-padding: 0.75em;
    --u-input-border-width: 2px;
    --u-input-color: var(--primary);
    --u-input-text-color: var(--main-text-color);
    --u-input-border-color: var(--border-color);
}

.u-input-container {
    &.has-error {
        --u-input-color: var(--danger);
        --u-input-text-color: var(--danger);
        --u-input-border-color: var(--danger);
    }

    color: var(--u-input-text-color);

    .u-form-group {
        position: relative;

        .u-input {
            border: var(--u-input-border-width) solid var(--u-input-border-color);
            border-radius: var(--form-element-border-radius);
            height: var(--form-element-height);
            padding: var(--u-input-padding);
            outline: none;
            background-color: var(--bg);
            transition: border-color 0.2s ease-out;
            color: var(--u-input-text-color);
            width: 100%;

            &::placeholder {
                color: transparent;
            }

            &:focus {
                border-color: var(--u-input-color);

                & + label {
                    color: var(--u-input-color);
                }
            }

            &:focus, &:not(:placeholder-shown) {
                & + label {
                    transform: translateY(-1.7em) scale(0.8);
                    background-color: var(--bg);
                    display: inline-block;
                    padding-inline: 0.25em;
                }
            }
        }

        label {
            position: absolute;
            top: 50%;
            color: var(--muted);
            left: var(--u-input-padding);
            transform: translateY(-50%);
            transition: transform 0.2s ease-out, color 0.5s ease-out, background-color 0.2s ease-out;
            transform-origin: 0 0;
            pointer-events: none;
            font-weight: normal;
        }
    }
}

</style>

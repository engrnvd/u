<script lang="ts" setup>
import UInput from './UInput.vue'
import { inputEmits, inputProps } from '../helpers/input-helper'
import { computed, defineProps } from 'vue'

const props = defineProps({
    ...inputProps
})

const emit = defineEmits([...inputEmits])

const _value = computed({
    get: () => props.modelValue,
    set: v => emit('update:modelValue', v)
})

</script>

<template>
    <UInput v-bind="$props" class="u-switch" @click.prevent="_value = !_value">
        <div class="switch" :class="{on: _value, off: !_value}">
            <span class="slider"></span>
        </div>
        <div v-if="label">{{ label }}</div>
    </UInput>
</template>

<style lang="scss">
.u-switch {
    --size: 1.75em;
    --border: 3px;
    --slider-size: calc(var(--size) - var(--border) * 2);

    .u-form-group {
        display: flex;
        align-items: center;
        gap: 0.5em;

        .switch {
            position: relative;
            width: calc(var(--slider-size) * 2 + var(--border) * 2);
            height: var(--size);

            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: var(--gray);
                transition: transform 0.2s ease-out;
                border-radius: var(--size);

                &:hover {
                    background-color: var(--gray-hover);
                }

                &:before {
                    position: absolute;
                    content: "";
                    height: var(--slider-size);
                    width: var(--slider-size);
                    left: var(--border);
                    bottom: var(--border);
                    background-color: rgba(255, 255, 255, 0.9);
                    transition: transform 0.2s ease-out;
                    border-radius: 50%;
                }
            }

            &.on {
                .slider {
                    background-color: var(--primary);

                    &:hover {
                        background-color: var(--primary-dark);
                    }

                    &:before {
                        transform: translateX(var(--slider-size));
                    }
                }
            }
        }
    }
}
</style>

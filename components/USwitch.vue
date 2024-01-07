<script lang="ts" setup>
import { defineProps } from 'vue'
import { inputEmits, inputProps } from '../helpers/input-helper'
import UFormElement from './UFormElement.vue'
import UInputLabel from './UInputLabel.vue'

const props = defineProps({
    ...inputProps
})

const emit = defineEmits([...inputEmits])

</script>

<template>
    <UFormElement :errors="errors" :help-text="helpText">
        <div class="u-switch relative flex items-center group space-x-2"
             @click.prevent="emit('update:modelValue', !modelValue)">
            <div :class="{'bg-primary': modelValue}"
                 class="switch relative cursor-pointer transition bg-neutral-darker has-hover">
                <div :class="{on: modelValue}" class="slider absolute bg-bg transition rounded-full"></div>
            </div>
            <UInputLabel v-if="label" class="select-none" color="text">{{ label }}</UInputLabel>
        </div>
    </UFormElement>
</template>

<style lang="scss">
.u-switch {
    --size: 1.5rem;
    --border: 3px;
    --slider-size: calc(var(--size) - var(--border) * 2);

    .switch {
        width: calc(var(--slider-size) * 2 + var(--border) * 2);
        height: var(--size);
        border-radius: var(--size);

        .slider {
            height: var(--slider-size);
            width: var(--slider-size);
            left: var(--border);
            bottom: var(--border);

            &.on {
                transform: translateX(var(--slider-size));
            }
        }
    }
}
</style>

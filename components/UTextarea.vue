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
    <UInput v-bind="$props" class="u-textarea">
        <textarea
            class="u-input"
            v-model="_value"
            :placeholder="label"
            rows="3"
        ></textarea>
        <label v-if="label">{{ label }}</label>
    </UInput>
</template>

<style lang="scss">
.u-textarea {
    .u-form-group {
        label {
            top: var(--u-input-padding);
            transform: translateY(0%);
        }

        .u-input {
            min-height: 6em;

            &:focus, &:not(:placeholder-shown) {
                & + label {
                    transform: translateY(-1.05em) scale(0.8);
                }
            }
        }
    }
}
</style>

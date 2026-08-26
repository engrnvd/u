<script lang="ts" setup>
import { inputEmits, inputProps } from '../helpers/input-helper'
import UFormElement from './UFormElement.vue'

const props = defineProps({
    ...inputProps
})
const emit = defineEmits([...inputEmits])
</script>

<template>
    <UFormElement :errors="errors" :help-text="helpText" class="u-textarea">
        <textarea
            :disabled="$attrs['disabled'] as boolean | undefined"
            :placeholder="$attrs['placeholder'] as string | undefined"
            :value="modelValue"
            class="u-field-styles py-2 w-full min-h-24"
            rows="3"
            @input="e => emit('update:modelValue', (e.target as HTMLTextAreaElement).value)"
        ></textarea>
    </UFormElement>
</template>

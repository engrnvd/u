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
            :disabled="$attrs['disabled']"
            :placeholder="$attrs['placeholder']"
            :value="modelValue"
            class="u-field-styles py-field-y w-full min-h-24"
            rows="3"
            @input="e => emit('update:modelValue', e.target.value)"
        ></textarea>
    </UFormElement>
</template>

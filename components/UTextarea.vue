<script lang="ts" setup>
import UFormElement from '@/components/UFormElement.vue'
import { inputEmits, inputProps } from '@/helpers/input-helper'
import { defineProps } from 'vue'

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
            class="rounded-md border-2 focus:border-primary outline-none ring-0 bg-bg px-4 py-2 w-full min-h-24"
            rows="3"
            @input="e => emit('update:modelValue', e.target.value)"
        ></textarea>
    </UFormElement>
</template>

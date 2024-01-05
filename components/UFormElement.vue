<script lang="ts" setup>
import UInput from '@/components/UInput.vue'
import UInputError from '@/components/UInputError.vue'
import UInputHelpText from '@/components/UInputHelpText.vue'
import UInputLabel from '@/components/UInputLabel.vue'
import { inputEmits, inputProps } from '@/helpers/input-helper'
import { defineProps } from 'vue'

defineProps({
    ...inputProps,
})

const emit = defineEmits([...inputEmits])

</script>

<template>
    <div>
        <UInputLabel v-if="label" class="mb-1">{{ label }}</UInputLabel>
        <slot>
            <UInput
                :class="{'!border-danger': errors.length}"
                :disabled="$attrs['disabled']"
                :model-value="modelValue"
                :placeholder="$attrs['placeholder']"
                :type="$attrs['type']"
                class="w-full"
                @update:model-value="v => emit('update:modelValue', v)"
            />
        </slot>
        <UInputError v-for="error in errors">{{ error }}</UInputError>
        <UInputHelpText v-if="helpText && !errors.length">{{ helpText }}</UInputHelpText>
    </div>
</template>

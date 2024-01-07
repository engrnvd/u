<script lang="ts" setup>
import { defineProps } from 'vue'
import { inputEmits, inputProps } from '../helpers/input-helper'
import CheckboxBlankOutlineIcon from '../icons/CheckboxBlankOutline.vue'
import CheckboxMarkedOutlineIcon from '../icons/CheckboxMarkedOutline.vue'
import UButton from './UButton.vue'
import UFormElement from './UFormElement.vue'
import UInputLabel from './UInputLabel.vue'

const props = defineProps({
    ...inputProps
})

const emit = defineEmits([...inputEmits])

function onClick(e) {
    emit('update:modelValue', !props.modelValue)
}

</script>

<template>
    <UFormElement :errors="errors" :help-text="helpText">
        <div class="flex items-center relative group space-x-2" @click.prevent="onClick">
            <UButton
                :color="modelValue ? 'primary' : 'neutral'"
                class="group-focus-within:border-primary group-focus-within:border"
                icon transparent>
                <div class="flex items-center text-xl">
                    <CheckboxMarkedOutlineIcon v-if="modelValue"/>
                    <CheckboxBlankOutlineIcon v-else/>
                </div>
            </UButton>
            <UInputLabel v-if="label" class="select-none" color="text">
                <slot>{{ label }}</slot>
            </UInputLabel>
        </div>
    </UFormElement>
</template>

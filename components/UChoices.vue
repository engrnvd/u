<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import { inputEmits, inputProps } from '../helpers/input-helper'
import UChip from './UChip.vue'
import UFormElement from './UFormElement.vue'

const props = defineProps({
    ...inputProps,
    choices: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: false },
    labelKey: { type: String, required: false, default: null },
})
const emit = defineEmits([...inputEmits])

const _value = computed({
    get: () => props.modelValue || (props.multiple ? [] : null),
    set: v => emit('update:modelValue', v)
})

function isSelected(choice) {
    if (!props.multiple) return _value.value === choice
    return _value.value.includes(choice)
}

function onClick(choice) {
    if (!props.multiple) {
        _value.value = choice
        return
    }
    if (isSelected(choice)) {
        _value.value = _value.value.filter(c => c !== choice)
    } else {
        _value.value = [..._value.value, choice]
    }
}

</script>

<template>
    <UFormElement :errors="errors" :help-text="helpText" class="u-choices">
        <div class="choices-list flex items-center flex-wrap gap-2">
            <UChip
                v-for="choice in choices"
                :color="isSelected(choice) ? 'primary' : undefined"
                @click="onClick(choice)">
                {{ labelKey ? choice[labelKey] : choice }}
            </UChip>
        </div>
    </UFormElement>
</template>

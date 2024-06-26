<script lang="ts" setup>
import UChip from './UChip.vue'
import UInput from './UInput.vue'
import {inputEmits, inputProps} from '../helpers/input-helper'
import {computed, defineProps} from 'vue'

const props = defineProps({
    ...inputProps,
    choices: {type: Array, default: () => []},
    multiple: {type: Boolean, default: false},
    labelKey: {type: String, required: false, default: null},
    disableFn: {type: Function, default: null}
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

function isDisabled(choice) {
    if (props.disableFn && typeof props.disableFn === 'function') {
        return props.disableFn(choice)
    }
    return false
}

function onClick(choice) {
    if (isDisabled(choice)) return;
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
    <UInput v-bind="$props" class="u-choices">
        <div v-if="label" class="u-choices-label mb-2 text-small">{{ label }}</div>
        <div class="choices-list d-flex align-items-center flex-wrap gap-2">
            <UChip
                :style="{cursor: isDisabled(choice) ? 'not-allowed' : 'pointer'}"
                v-for="choice in choices"
                @click="onClick(choice)"
                :color="isSelected(choice) ? 'primary' :  isDisabled(choice) ? 'disabled' : ''">
                {{ labelKey ? choice[labelKey] : choice }}
            </UChip>
        </div>
    </UInput>
</template>

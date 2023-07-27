<script lang="ts" setup>
import UMenuItem from './UMenuItem.vue'
import CheckBoldIcon from '../icons/CheckBold.vue'
import MenuDownIcon from '../icons/MenuDown.vue'
import UDropdown from './UDropdown.vue'
import UInput from './UInput.vue'
import { inputEmits, inputProps } from '../helpers/input-helper'
import { computed, defineProps, ref } from 'vue'

const props = defineProps({
    ...inputProps,
    options: { type: Array, default: () => [] },
    valueField: { type: String, required: false },
    labelField: { type: String, required: false },
    labelFn: { type: Function, required: false },
})

const query = ref('')
let uSelectEl = ref()
const filteredItems = computed(() => props.options.filter(o => getLabel(o).toLowerCase().includes(query.value.toLowerCase())))
const selectedOption = computed(() => props.options.find(o => o === props.modelValue || o[props.valueField] === props.modelValue))

function getLabel(option) {
    if (props.labelFn) return props.labelFn(option)
    if (props.labelField) return option[props.labelField]
    return option
}

function select(option) {
    query.value = ''
    if (props.valueField) {
        emit('update:modelValue', option[props.valueField])
        return
    }
    emit('update:modelValue', option)
}

async function clear() {
    emit('update:modelValue', '')
    setTimeout(() => {
        uSelectEl.value.ddEl.querySelector('input').focus()
    }, 50)
}

function selectedOptionEdited(e) {
    if (e.key === 'Backspace') clear()
}

const emit = defineEmits([...inputEmits])
</script>

<template>
    <UDropdown class="u-select" ref="uSelectEl">
        <UInput
            :class="{'has-error': errors.length}"
            v-if="modelValue && !query"
            :model-value="modelValue"
            :label="label"
            @keydown="selectedOptionEdited"
        />
        <UInput :class="{'has-error': errors.length}" v-else v-model="query" :label="label"/>

        <div class="text-small text-danger p-2" v-for="error in errors">{{ error }}</div>

        <div class="controls d-flex align-items-center gap-2">
            <MenuDownIcon class="caret-icon"/>
        </div>

        <template #content>
            <div class="py-2 u-select-options">
                <UMenuItem v-for="option in filteredItems" @click="select(option)">
                    <div class="flex-grow-1">{{ getLabel(option) }}</div>
                    <CheckBoldIcon class="text-primary" v-if="selectedOption === option"/>
                </UMenuItem>
            </div>
        </template>
    </UDropdown>
</template>

<style lang="scss">
.u-select {
    position: relative;

    .u-select-options, .u-dropdown-content {
        width: 100%;
    }

    input.u-input {
        border: none;
    }

    .controls {
        position: absolute;
        right: 0.25em;
        top: 0.5em;
        font-size: 1.5rem;
        color: var(--muted);
    }

    &.opened {
        .controls {
            color: var(--primary);
        }
    }
}
</style>

<script lang="ts" setup>
import UFormElement from '@/components/UFormElement.vue'
import { computed, defineProps, ref } from 'vue'
import { inputEmits, inputProps } from '../helpers/input-helper'
import CheckBoldIcon from '../icons/CheckBold.vue'
import MenuDownIcon from '../icons/MenuDown.vue'
import UDropdown from './UDropdown.vue'
import UInput from './UInput.vue'
import UMenuItem from './UMenuItem.vue'

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

let caretColor = computed(() => {
    if (props.errors.length) return 'text-danger'
    if (uSelectEl.value?.open) return 'text-primary'
    return 'text-muted'
})

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
    <UDropdown ref="uSelectEl">
        <UFormElement :errors="uSelectEl?.open ? [] : errors">
            <div class="relative">
                <UInput
                    v-if="modelValue && !query"
                    :class="{'!border-danger': errors.length}"
                    :label="label"
                    :model-value="getLabel(modelValue)"
                    class="w-full"
                    @keydown="selectedOptionEdited"
                />
                <UInput
                    v-else
                    v-model="query"
                    :class="{'!border-danger': errors.length}"
                    :label="label"
                    class="w-full"
                />

                <div :class="caretColor" class="all-center absolute right-0 top-0 h-full px-2 text-xl">
                    <MenuDownIcon/>
                </div>
            </div>
        </UFormElement>

        <template #content>
            <TransitionGroup class="py-2 w-full relative overflow-hidden" name="list" tag="div">
                <div v-for="option in filteredItems" :key="option" class="overflow-hidden">
                    <UMenuItem @click="select(option)">
                        <div class="flex-grow">{{ getLabel(option) }}</div>
                        <CheckBoldIcon v-if="selectedOption === option" class="text-primary"/>
                    </UMenuItem>
                </div>
            </TransitionGroup>
        </template>
    </UDropdown>
</template>

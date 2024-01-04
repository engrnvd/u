<script setup lang="ts">
import ArrowRightIcon from '../icons/ChevronRight.vue'
import { onMounted, ref, watch } from 'vue'
import UCard from './UCard.vue'

const props = defineProps<{
    modelValue: any,
    label?: string,
    value: any,
}>()
const emit = defineEmits(['update:modelValue'])
const bodyEl = ref()

function toggle() {
    let emittedValue = props.modelValue === props.value ? null : props.value
    emit('update:modelValue', emittedValue)
}

function updateHeight() {
    setTimeout(() => {
        if (props.modelValue === props.value) {
            bodyEl.value.style.height = `${bodyEl.value.scrollHeight}px`
        } else {
            bodyEl.value.style.height = 0
        }
    })
}

watch(() => props.modelValue, updateHeight)
onMounted(updateHeight)

defineExpose({ updateHeight })
</script>

<template>
    <UCard class="overflow-hidden my-2 bg-bg text-text border">
        <div
            class="clickable px-4 py-3 bg-neutral-light items-center flex justify-between cursor-pointer"
            @click="toggle">
            <div>
                <slot name="header">{{ label || value }}</slot>
            </div>
            <ArrowRightIcon class="transition-transform duration-300" :class="{'rotate-90': modelValue === value}"/>
        </div>
        <div ref="bodyEl" class="relative transition-[height] duration-300">
            <slot></slot>
        </div>
    </UCard>
</template>


<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import ArrowRightIcon from '../icons/ChevronRight.vue'
import UCard from './UCard.vue'

const props = defineProps<{
    modelValue: any,
    label?: string,
    value: any,
    accordionClasses?: any,
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
            :class="{'text-primary': modelValue === value, ...accordionClasses}"
            class="clickable font-bold px-4 py-3 bg-neutral-light items-center flex justify-between cursor-pointer"
            @click="toggle">
            <div>
                <slot name="header">{{ label || value }}</slot>
            </div>
            <ArrowRightIcon :class="{'rotate-90': modelValue === value}"
                            class="transition-transform duration-300 text-xl"/>
        </div>
        <div ref="bodyEl" class="relative transition-[height] duration-300">
            <slot></slot>
        </div>
    </UCard>
</template>


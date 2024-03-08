<script setup lang="ts">
import ArrowRightIcon from '../icons/ChevronRight.vue'
import { onMounted, ref, watch } from 'vue'

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
    if (props.modelValue === props.value) {
        bodyEl.value.style.height = `${bodyEl.value.scrollHeight}px`
    } else {
        bodyEl.value.style.height = 0
    }
}

watch(() => props.modelValue, updateHeight)
onMounted(() => {
    const observer = new MutationObserver(mutationsList => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Content of the div has changed, perform actions as needed
                // You may also check for specific changes like node addition/removal
                // and then respond accordingly
                updateHeight();
            }
        }
    });

    observer.observe(bodyEl.value, {
        childList: true,
        subtree: true
    });
})
defineExpose({ updateHeight })
</script>

<template>
    <div class="u-accordion card">
        <div class="header clickable p-3 align-items-center d-flex justify-content-between align-items-center"
             :class="{'border-b1': modelValue === value}"
             @click="toggle">
            <div>
                <slot name="header">{{ label || value }}</slot>
            </div>
            <ArrowRightIcon class="icon" :class="{'opened': modelValue === value}"/>
        </div>
        <div ref="bodyEl" class="body">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.u-accordion {
    border-radius: var(--border-radius);
    overflow: hidden;
    margin: 0.5em 0;

    .header {
        .icon {
            transition: transform 0.25s;

            &.opened {
                transform: rotate(90deg);
            }
        }
    }

    .body {
        position: relative;
        padding: 0;
        height: 0;
        transition: height 0.25s;
    }
}
</style>

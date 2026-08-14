<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const p = withDefaults(defineProps<{
    modelValue: any,
}>(), {})

defineEmits(['update:modelValue'])

const input = ref(null)

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus()
    }
})

defineExpose({ focus: () => input.value.focus() })
</script>

<template>
    <input
        ref="input"
        :value="modelValue"
        class="u-field-styles h-field"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
</template>

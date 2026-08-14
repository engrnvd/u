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
        class="rounded-md border-2 focus:border-primary outline-none ring-0 bg-bg px-field-x py-field-y"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
</template>

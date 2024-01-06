<script lang="ts" setup>

import UTabBtn from '@/components/UTabs/UTabBtn.vue'

type ModelType = string | number | Object

let p = defineProps<{
    modelValue: ModelType,
    items: ModelType[],
    titleField?: string,
}>()

let emit = defineEmits(['update:modelValue'])

</script>

<template>
    <div class="flex">
        <UTabBtn
            v-for="(item, index) in items"
            :index="index"
            :item="item"
            :selected="modelValue === item"
            @click="emit('update:modelValue', item)">
            {{ item[titleField] || item }}
        </UTabBtn>
        <div class="flex-grow border-b flex items-center">
            <slot name="end"></slot>
        </div>
    </div>
    <div class="p-4 border border-t-0 rounded-bl rounded-br">
        <slot></slot>
    </div>
</template>

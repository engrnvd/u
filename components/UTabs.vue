<script lang="ts" setup>

import UTabBtn from './UTabs/UTabBtn.vue'

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
            <slot :index="index" :item="item" :selected="modelValue === item" name="tab">
                <div class="px-6 py-2 font-bold">{{ item[titleField] || item }}</div>
            </slot>
        </UTabBtn>
        <div class="flex-grow border-b flex items-center">
            <slot name="end"></slot>
        </div>
    </div>
    <div class="p-4 border border-t-0 rounded-bl rounded-br" v-bind="$attrs">
        <slot></slot>
    </div>
</template>

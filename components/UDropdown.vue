<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue'
import { useOutsideClick } from '../composables/useOutsideClick'

type Trigger = 'click' | 'hover'

const props = withDefaults(defineProps<{
    modelValue?: any,
    left?: boolean,
    right?: boolean,
    down?: boolean,
    up?: boolean,
    autoClose?: boolean,
    trigger?: Trigger
}>(), {
    autoClose: true,
    trigger: 'click',
})

const ddEl = ref()
const _open: { value: boolean } = ref(false)
const open = computed({
    get() {
        return props.modelValue !== undefined ? props.modelValue : _open.value
    },
    set(v: boolean) {
        props.modelValue !== undefined ? emit('update:modelValue', v) : _open.value = v
    },
})

function close() {
    if (!open.value) return
    open.value = false
    emit('closed')
}

useOutsideClick(ddEl, close)

function show(trigger: Trigger) {
    if (props.trigger === trigger) open.value = true
}

function onMouseLeave() {
    if (props.trigger === 'hover') close()
}

defineExpose({ ddEl, open })

let emit = defineEmits(['closed', 'update:modelValue'])

</script>

<template>
    <div ref="ddEl" :class="{[`trigger-${trigger}`]: true, opened: open}" class="u-dropdown relative inline-block">
        <div
            :class="{'cursor-pointer': trigger === 'click'}"
            class="u-dropdown-btn"
            @click="show('click')"
            @mouseenter="show('hover')"
            @mouseleave="onMouseLeave"
        >
            <slot></slot>
        </div>
        <Transition :name="`slide-${up ? 'up' : 'down'}`">
            <div
                v-if="open"
                :class="{left, right, down, up, 'right-0': left}"
                class="u-dropdown-content shadow min-w-full rounded absolute bg-bg z-20"
                @click="() => { if (autoClose) close() }">
                <slot name="content"></slot>
            </div>
        </Transition>
    </div>
</template>

<style lang="scss">
.u-dropdown {
    $offset: calc(100% + 0.25rem);

    .u-dropdown-content {
        top: $offset;

        &.up {
            top: unset;
            bottom: $offset;
        }
    }
}

</style>

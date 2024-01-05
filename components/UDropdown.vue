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
    <div ref="ddEl" :class="{[`trigger-${trigger}`]: true, opened: open}" class="u-dropdown">
        <div
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
                :class="{left, right, down, up}"
                class="u-dropdown-content shadow min-w-full rounded"
                @click="() => { if (autoClose) close() }">
                <slot name="content"></slot>
            </div>
        </Transition>
    </div>
</template>

<style lang="scss">
.u-dropdown {
    position: relative;
    display: inline-block;
    $offset: calc(100% + 0.25rem);

    .u-dropdown-btn {
        &.trigger-click {
            cursor: pointer;
        }
    }

    .u-dropdown-content {
        position: absolute;
        background-color: var(--bg);
        z-index: 9;
        top: $offset;

        &.left {
            right: 0;
        }

        &.up {
            top: unset;
            bottom: $offset;
        }
    }
}

</style>

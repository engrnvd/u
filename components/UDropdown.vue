<script lang="ts" setup>
import { useOutsideClick } from '../composables/useOutsideClick'
import { defineProps, ref } from 'vue'

type Trigger = 'click' | 'hover'

const props = withDefaults(defineProps<{
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
const open = ref(false)

function close() {
    open.value = false
}

useOutsideClick(ddEl, close)

function show(trigger: Trigger) {
    if (props.trigger === trigger) open.value = true
}

function onMouseLeave() {
    if (props.trigger === 'hover') close()
}

defineExpose({ ddEl })

</script>

<template>
    <div class="u-dropdown" :class="{[`trigger-${trigger}`]: true, opened: open}" ref="ddEl">
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
                :class="{left, right, down, up}"
                class="u-dropdown-content shadow-0"
                @click="() => { if (autoClose) close() }"
                v-if="open">
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
        border-radius: var(--form-element-border-radius);
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

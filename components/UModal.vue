<script setup lang="ts">
import CloseIcon from '../icons/Close.vue'
import UButton from './UButton.vue'

export interface UModalProps {
    title?: string,
    modelValue?: boolean,
    okTitle?: string,
    cancelTitle?: string,
    dontCloseOnOk?: boolean,
    dontCloseOnCancel?: boolean,
    okDisabled?: boolean,
    okLoading?: boolean,
    okOnly?: boolean,
    cancelOnly?: boolean,
    noFooter?: boolean,
    size?: 'sm' | 'md' | 'lg' | 'xlg',
    bodyClass?: string,
}

const p = withDefaults(defineProps<UModalProps>(), {
    okTitle: 'Ok',
    cancelTitle: 'Cancel',
    size: 'md',
    noFooter: false,
    cancelOnly: false,
    dontCloseOnOk: false,
    dontCloseOnCancel: false,
    okDisabled: false,
    okLoading: false,
    okOnly: false,
})

const emit = defineEmits(['ok', 'cancel', 'update:modelValue'])

function ok() {
    emit('ok')
    if (!p.dontCloseOnOk) hideModal()
}

function cancel() {
    emit('cancel')
    if (!p.dontCloseOnCancel) hideModal()
}

function hideModal() {
    emit('update:modelValue', false)
}

</script>

<template>
    <transition name="fade">
        <div class="apm-modal-parent all-center" v-show="modelValue">
            <transition name="slide-down">
                <div v-if="modelValue" class="apm-modal shadow" :class="`modal-${size}`">
                    <div class="apm-modal-header">
                        <slot name="header">
                            <h2 class="m-0">{{ title }}</h2>
                        </slot>
                    </div>
                    <div class="apm-modal-body" :class="bodyClass">
                        <slot></slot>
                    </div>
                    <div v-if="!noFooter" class="apm-modal-footer d-flex gap-4">
                        <slot name="footer">
                            <UButton @click="ok" v-if="!cancelOnly || okOnly" :loading="okLoading"
                                     :disabled="okDisabled">
                                {{ okTitle }}
                            </UButton>
                            <UButton secondary v-if="!okOnly || cancelOnly" @click="cancel">{{ cancelTitle }}</UButton>
                        </slot>
                    </div>
                    <a href="" class="close-modal-btn text-muted" @click.prevent="cancel">
                        <CloseIcon/>
                    </a>
                </div>
            </transition>
            <div class="modal-backdrop" @click="cancel"></div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.apm-modal-parent {
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
}

.modal-backdrop {
    min-width: 100%;
    min-height: 100%;
    background-color: rgba(33, 33, 33, 0.85);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}

.apm-modal {
    background-color: var(--bg);
    width: 32rem;
    max-width: 96vw;
    border-radius: var(--border-radius);
    position: relative;

    &.modal-sm {
        width: 28rem;
    }

    &.modal-lg {
        width: 56rem;
    }

    &.modal-xlg {
        width: 72rem;
    }

    .close-modal-btn {
        position: absolute;
        right: 1em;
        top: 1em;
        font-size: 1.25em;
    }

    .apm-modal-footer {
        padding: 0 3em 3em;
    }
}

.apm-modal-header {
    padding: 3em 3em 0;
}

.apm-modal-body {
    padding: 3em;
    max-height: calc(100vh - 14em);
    overflow: auto;
}
</style>

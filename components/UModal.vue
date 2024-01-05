<script lang="ts" setup>
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

let sizes = {
    'sm': 'w-[28rem]',
    'md': 'w-[32rem]',
    'lg': 'w-[56rem]',
    'xl': 'w-[72rem]',
}

</script>

<template>
    <transition name="fade">
        <div v-show="modelValue" class="all-center w-screen h-screen fixed left-0 top-0 z-50">
            <transition name="slide-down">
                <div v-if="modelValue" :class="sizes[size]"
                     class="shadow bg-bg max-w-[96vw] max-h-[96vh] relative rounded overflow-hidden flex flex-col"
                     v-bind="$attrs">
                    <div class="p-6">
                        <slot name="header">
                            <h2 class="m-0">{{ title }}</h2>
                        </slot>
                    </div>
                    <div :class="bodyClass" class="px-6 py-2 overflow-auto flex-grow">
                        <slot></slot>
                    </div>
                    <div v-if="!noFooter" class="flex p-6 gap-4">
                        <slot name="footer">
                            <UButton
                                v-if="!cancelOnly || okOnly"
                                :disabled="okDisabled"
                                :loading="okLoading"
                                @click="ok">
                                {{ okTitle }}
                            </UButton>
                            <UButton v-if="!okOnly || cancelOnly" color="neutral" @click="cancel">
                                {{ cancelTitle }}
                            </UButton>
                        </slot>
                    </div>
                    <a class="absolute right-4 top-4 text-muted text-lg" href="" @click.prevent="cancel">
                        <CloseIcon/>
                    </a>
                </div>
            </transition>
            <div class="absolute inset-0 z-[-1] bg-overlay" @click="cancel"></div>
        </div>
    </transition>
</template>


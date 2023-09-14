<template>
    <UModal
        v-model="confirmModalProps.open"
        @ok="onOk"
        @cancel="onCancel"
        :class="confirmModalProps.classes"
        v-bind="uModalProps">
        <div v-html="confirmModalProps.message"></div>
    </UModal>
</template>
<script lang="ts">
import { UModalProps } from '../../components/UModal.vue'
import { ConfirmModalProps } from '../../types/misc-types'
import UModal from '../../components/UModal.vue'

export default {
    name: 'ConfirmModal',
    components: { UModal },
    data: () => ({
        uModalProps: {
            title: '',
            okTitle: 'Yes',
            cancelTitle: 'No',
        } as UModalProps,
        confirmModalProps: {
            open: false,
            message: '',
            classes: ['confirm-modal'],
            onClose: null,
        } as ConfirmModalProps,
    }),
    methods: {
        setData(dataProps: ConfirmModalProps & UModalProps = {}) {
            for (let prop in dataProps) {
                if (this.confirmModalProps.hasOwnProperty(prop)) this.confirmModalProps[prop] = dataProps[prop]
                else this.uModalProps[prop] = dataProps[prop]
            }
        },
        onOk() {
            if (this.confirmModalProps.onClose) this.confirmModalProps.onClose(true)
        },
        onCancel() {
            if (this.confirmModalProps.onClose) this.confirmModalProps.onClose(false)
        },
    },
}
</script>

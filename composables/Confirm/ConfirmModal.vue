<template>
    <UModal
        :title="title"
        v-model="open"
        :ok-title="okTitle"
        :cancel-title="cancelTitle"
        @ok="onOk"
        @cancel="onCancel"
        :class="classes"
    >
        <div v-html="message"></div>
    </UModal>
</template>

<script>
import UModal from "../../components/UModal.vue"

export default {
    name: "ConfirmModal",
    components: { UModal },
    data: () => ({
        title: '',
        open: false,
        message: '',
        okTitle: 'Yes',
        cancelTitle: 'No',
        onClose: null,
        classes: ['confirm-modal'],
    }),
    methods: {
        setData(dataProps = {}) {
            for (let prop in dataProps) {
                this[prop] = dataProps[prop]
            }
        },
        onOk() {
            if (this.onClose) this.onClose(true)
        },
        onCancel() {
            if (this.onClose) this.onClose(false)
        },
    },
}
</script>

<style scoped>
</style>

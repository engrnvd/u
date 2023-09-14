<script lang="ts" setup>
import UButton from '../../components/UButton.vue'
import { useConfirm } from '../../composables/Confirm/index'

async function confirm1() {
    const yes = await useConfirm('Destroy everything', 'Are you sure about this?')
    if (yes) {
        document.body.style.transition = 'all 3s ease'
        document.body.style.transitionDelay = '1s'
        document.body.style.filter = 'grayscale(1)'
        document.body.style.opacity = '0'
    }
}

async function confirm2() {
    const yes = await useConfirm('Free Samosay', 'Would you like some free Samosay?', {
        okTitle: 'Absolutely',
        cancelTitle: 'Not at the moment'
    })
    if (yes) {
        document.body.innerHTML = '<img src="https://images.unsplash.com/photo-1601050690294-397f3c324515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>'
    }
}
</script>

<template>
    <div class="d-flex flex-column gap-4" style="max-width: 300px">
        <UButton @click="confirm1">Delete Everything</UButton>
        <UButton @click="confirm2">Free Samosay</UButton>
    </div>
</template>

<style scoped lang="scss">
</style>

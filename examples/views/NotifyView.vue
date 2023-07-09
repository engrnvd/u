<script lang="ts" setup>

import UButton from '../../components/UButton.vue'
import { useNotify } from '../../composables/Notifiy/index'

const notify = useNotify()

</script>

<template>
    <div class="d-flex flex-column gap-4" style="max-width: 300px">
        <UButton
            @click="notify.showMessage('primary', 'This is the title', 'This the message of this particular notification')">
            primary
        </UButton>
        <UButton success
                 @click="notify.success('This is the title', 'This the message of this particular notification')">
            Success
        </UButton>
        <UButton danger @click="notify.error('This is the title', 'This the message of this particular notification')">
            Error
        </UButton>
        <UButton info @click="notify.info('This is the title', 'This the message of this particular notification')">
            info
        </UButton>
        <UButton success
                 @click="notify.success('Forever', 'Unless you click me', {permanent: true})">
            Permanent
        </UButton>
        <UButton danger
                 @click="notify.error('Forever', 'Unless you click me', {permanent: true})">
            Permanent
        </UButton>
        <UButton info
                 @click="notify.info('Forever', 'Unless you click me', {permanent: true})">
            Permanent
        </UButton>
        <UButton primary
                 @click="notify.showMessage('primary', 'Forever', 'Unless you click me', {permanent: true})">
            Permanent
        </UButton>
        <UButton secondary
                 @click="notify.success('Quick!', 'Ima go...', {duration: 500})">
            Custom Duration
        </UButton>
    </div>
</template>

<style scoped lang="scss">
</style>

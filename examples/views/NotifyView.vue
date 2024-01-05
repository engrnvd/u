<script lang="ts" setup>
import { useNotify } from '@/composables/Notifiy'
import { store } from '@/examples/store/store'
import UButton from '../../components/UButton.vue'

const notify = useNotify()
</script>

<template>
    <div class="flex flex-col gap-4 max-w-xs">
        <UButton
            v-for="color in store.colors"
            :color="color"
            @click="notify.showMessage(color, 'I will go away', 'This the message of this certain notification')">
            {{ color }}
        </UButton>

        <UButton
            color="neutral"
            @click="notify.success('I will be here 4ever', 'Click to close.', {permanent: true})">
            permanent
        </UButton>

        <UButton color="neutral" @click="notify.success('Quick!', 'Ima go...', {duration: 800})">
            Custom Duration
        </UButton>
    </div>
</template>


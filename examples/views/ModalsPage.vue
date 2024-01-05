<script lang="ts" setup>
import UButton from '@/components/UButton.vue'
import UModal from '@/components/UModal.vue'
import { reactive } from 'vue'

let sizes = reactive({
    'sm': { open: false },
    'md': { open: false },
    'lg': { open: false },
    'xl': { open: false },
})
</script>

<template>
    <div class="space-y-4">
        <div v-for="(modal, size) in sizes">
            <UModal v-model="modal.open" :size="size" :title="`Modal ${size}`">
                This is a {{ size }} modal.
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur at commodi esse eveniet
                    fugit, impedit natus nisi numquam officia omnis perspiciatis possimus quis quo reiciendis repellat
                    reprehenderit repudiandae similique!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet, blanditiis dolore dolorem
                    doloremque ducimus incidunt iste iure labore laudantium nostrum officiis possimus quo, reiciendis,
                    rerum tempora ullam ut voluptatibus.</p>
            </UModal>
            <UButton @click="modal.open = true">
                Open {{ size }} modal
            </UButton>
        </div>
    </div>
</template>

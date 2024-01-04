<script setup lang="ts">
import ThemedContainer from '@/examples/views/ThemedContainer.vue'
import { capitalize } from '@vue/shared'
import UCard from '../components/UCard.vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

let router = useRouter()
const routes = router.getRoutes().map(r => r.path)
const route = useRoute()
</script>

<template>
    <div class="h-screen flex overflow-hidden bg-bg-body">
        <UCard class="m-4 shadow">
            <RouterLink class="flex py-3 px-4 has-hover" v-for="route in routes" :to="route" :key="route">
                {{ capitalize(route.replace(/\//, '')) }}
            </RouterLink>
        </UCard>
        <div class="flex flex-grow overflow-y-auto overflow-x-hidden">
            <main :class="route.name" class="flex-grow flex flex-col">
                <ThemedContainer>
                    <RouterView/>
                </ThemedContainer>
            </main>
        </div>
    </div>

</template>

<style lang="scss">
.router-link-active {
    color: var(--muted);
    border-bottom: none;
}
</style>

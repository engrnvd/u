<script lang="ts" setup>
import ThemedContainer from '@/examples/views/ThemedContainer.vue'
import { uTheme } from '@/store/uTheme.store'
import { capitalize } from '@vue/shared'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import UCard from '../components/UCard.vue'

let router = useRouter()
const routes = router.getRoutes().map(r => r.path)
const route = useRoute()
</script>

<template>
    <div :class="`theme-${uTheme.value}`" class="h-screen flex overflow-hidden bg-bg-body">
        <UCard class="m-4 shadow overflow-hidden shrink-0">
            <RouterLink v-for="route in routes" :key="route" :to="route" class="flex py-3 px-4 has-hover">
                {{ capitalize(route.replace(/\//, '')) || 'Home' }}
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

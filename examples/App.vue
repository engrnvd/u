<script setup lang="ts">
import { capitalize } from '@vue/shared'
import { RouterLink, useRoute, useRouter } from 'vue-router'

let router = useRouter()
const routes = router.getRoutes().map(r => r.path)
const route = useRoute()
</script>

<template>
    <div class="main-container d-flex">
        <div class="card">
            <RouterLink class="d-flex py-3 px-4 has-hover" v-for="route in routes" :to="route" :key="route">
                {{ capitalize(route.replace(/\//, '')) }}
            </RouterLink>
        </div>
        <div class="d-flex flex-grow-1 content-container p-4">
            <main :class="route.name" class="flex-grow-1 main-content d-flex flex-column">
                <RouterView/>
            </main>
        </div>
    </div>
</template>

<style lang="scss">
.router-link-active {
    color: var(--muted);
    border-bottom: none;
}

.main-container {
    height: 100vh;
    overflow: hidden;

    .content-container {
        overflow-y: auto;
        overflow-x: hidden;
    }
}
</style>

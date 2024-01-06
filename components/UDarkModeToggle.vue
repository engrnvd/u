<script lang="ts" setup>
import { uTheme } from '../store/uTheme.store'
import UButton from './UButton.vue'
</script>

<template>
    <UButton color="neutral" href="#" icon transparent @click.prevent="uTheme.toggleDark()">
        <svg class="size-5" viewBox="0 0 20 20">
            <path :class="uTheme.value"
                  class="transition-all duration-1000 fill-text"
                  d="M20 12.2788C18.7996 12.7884 17.4831 13.0697 16.1023 13.0697C10.4856 13.0697 5.93241 8.41553 5.93241 2.67426C5.93241 1.74965 6.0505 0.85328 6.2721 0C2.58966 1.56322 0 5.27476 0 9.60455C0 15.3458 4.5532 20 10.1698 20C14.882 20 18.8456 16.7241 20 12.2788Z"
            ></path>
        </svg>
    </UButton>
</template>

<style scoped>
path.dark {
    d: path("M17.7818 7.33875L20 9.99522L17.7818 12.6517L18.0909 16.1682L14.8091 16.9517L13.0909 19.9904L10 18.5953L6.90909 20L5.19091 16.9613L1.90909 16.1777L2.21818 12.6517L0 9.99522L2.21818 7.32919L1.90909 3.81271L5.19091 3.0387L6.90909 0L10 1.39513L13.0909 0L14.8091 3.0387L18.0909 3.82226L17.7818 7.33875Z");
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import URating from '../../components/URating.vue'

const rating = ref(3)
</script>

<template>
    Rating
    <URating v-model="rating"/>

    Read-only
    <URating :model-value="3" readonly/>
</template>

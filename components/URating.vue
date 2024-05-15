<script lang="ts" setup>
import Star from '../icons/Star.vue'

const props = withDefaults(defineProps<{
    readonly: boolean,
}>(), {
    readonly: false,
})

const model = defineModel()
const stars = [1, 2, 3, 4, 5]

function onClick(star) {
    if (props.readonly) return
    model.value = star
}
</script>

<template>
    <div class="all-center">
        <Star
            v-for="star in stars"
            :class="{'text-yellow-500': star <= model}"
            class="cursor-pointer"
            @click="onClick(star)"
        />
    </div>
</template>

<script setup>
import UAccordion from "../../components/UAccordion.vue"
import { ref } from "vue"

const examples = [
    {
        label: 'Shoe Store',
        desc: `A online store selling shoes`
    },
    {
        label: 'Trucking Business',
        desc: `Website for a trucking business
that provides logistics, transportation
and storage services to various
industries in Texas and Louisiana`
    },
    {
        label: 'List of pages',
        desc: `Pages:
1. Home
2. About
3. Contact Us
4. Projects
5. News
6. Services
7. Careers
8. Team`
    },
]
const selected = ref(examples[1].label)

</script>

<template>
    <UAccordion
        v-for="(example, idx) in examples"
        :label="example.label"
        :value="example.label"
        v-model="selected"
    >
        <pre class="p-4">{{ example.desc }}</pre>
    </UAccordion>

    <div class="my-5">
        Selected: {{ selected }}
    </div>
</template>

<style scoped lang="scss">

</style>

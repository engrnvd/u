<script setup>
import UAccordion from "../../components/UAccordion.vue"
import { reactive, ref } from "vue"

const examples = reactive([
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
])
const selected = ref(examples[1].label)
const acc = ref()

const standaloneOpen = ref(false)
const standaloneBody = ref('a\nb\c\n')

async function update() {
    standaloneBody.value += '\nlorem ipsum'
    acc.value.updateHeight()
}

</script>

<template>
    <UAccordion
        v-for="(example, idx) in examples"
        :value="example.label"
        v-model="selected"
    >
        <pre class="p-4">{{ example.desc }}</pre>
    </UAccordion>

    <div class="my-6">
        Selected: {{ selected }}
    </div>

    <UAccordion
        ref="acc"
        v-model="standaloneOpen"
        :value="true"
        label="Standalone Accordion"
    >
        <div class="p-4">
            <pre class="p-4">{{ standaloneBody }}</pre>
            <a href="#" @click.prevent="update">Add</a>
        </div>
    </UAccordion>
</template>

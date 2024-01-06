<script lang="ts" setup>
import UButton from '@/components/UButton.vue'
import UTabs from '@/components/UTabs.vue'
import PlusIcon from '@/icons/Plus.vue'
import { reactive } from '@/node_modules/vue'
import { ref } from 'vue'

const people = reactive([{ id: 1, name: 'Naveed' }, { id: 2, name: 'Nadia' }, { id: 3, name: 'Ayeza' }])

let morePeople = {
    4: { id: 4, name: 'Fatima' },
    5: { id: 5, name: 'Aazan' },
}

let selected = ref(people[1])

</script>

<template>
    <UTabs v-model="selected" :items="people" title-field="name">
        <div class="p-4">
            Selected: {{ selected }}
        </div>

        <template #end>
            <UButton
                v-if="morePeople[people.length + 1]"
                class="ml-2" color="neutral"
                icon transparent
                @click="people.push(morePeople[people.length + 1])">
                <PlusIcon class="text-xl"/>
            </UButton>
        </template>
    </UTabs>
</template>

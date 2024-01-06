<script lang="ts" setup>
import UButton from '@/components/UButton.vue'
import UTabs from '@/components/UTabs.vue'
import CloseIcon from '@/icons/Close.vue'
import PlusIcon from '@/icons/Plus.vue'
import { reactive } from '@/node_modules/vue'
import { ref } from 'vue'

const people = reactive([{ id: 1, name: 'Naveed' }, { id: 2, name: 'Nadia' }, { id: 3, name: 'Ayeza' }])

let morePeople = [{ id: 5, name: 'Aazan' }, { id: 4, name: 'Fatima' }]

let selected = ref(people[1])

let simple = ref('First')
</script>

<template>
    <UTabs
        v-model="simple"
        :items="['First', 'Second', 'Third']"
        class="mb-12">
        Simple tabs: {{ simple }}
    </UTabs>

    <UTabs v-model="selected" :items="people" title-field="name">
        <div class="p-4">
            Selected: {{ selected }}
        </div>

        <template #tab="{item, selected, index}">
            <div class="group relative px-6 py-2 z-20">
                <div class="mr-2">{{ item.name }}</div>

                <a v-if="people.length > 1 && index === people.length - 1"
                   class="ml-2 zooms-in all-center text-muted z-30 absolute right-2 top-3 opacity-0 group-hover:opacity-100"
                   href="#"
                   @click.prevent.stop="morePeople.push(people.pop())">
                    <CloseIcon/>
                </a>
            </div>
        </template>

        <template #end>
            <UButton
                v-if="morePeople.length"
                class="ml-2" color="neutral"
                icon transparent
                @click="people.push(morePeople.pop())">
                <PlusIcon class="text-xl"/>
            </UButton>
        </template>
    </UTabs>
</template>

<script lang="ts" setup>
import UButton from '@/components/UButton.vue'
import TrashCanIcon from '@/icons/TrashCan.vue'
import { reactive, ref } from 'vue'

let items = reactive([
    { t: 'fade', open: true },
    { t: 'slide-down', open: true },
    { t: 'slide-up', open: true },
    { t: 'zoom-in', open: true },
    { t: 'list', open: true }
])

const getInitialItems = () => [1, 2, 3, 4, 5]
const list = ref(getInitialItems())
let id = list.value.length + 1

function insert() {
    const i = Math.round(Math.random() * list.value.length)
    list.value.splice(i, 0, id++)
}

function reset() {
    list.value = getInitialItems()
    id = list.value.length + 1
}

function shuffle() {
    list.value = list.value.toSorted(i => Math.random() > 0.5 ? 1 : -1)
}

function remove(item) {
    const i = list.value.indexOf(item)
    if (i > -1) {
        list.value.splice(i, 1)
    }
}
</script>

<template>
    <div>
        <div v-for="item in items" :key="item.t">
            <h3 class="capitalize">{{ item.t }}</h3>
            <div v-if="item.t !== 'list'" class="flex items-center gap-4 my-3 w-full h-16">
                <UButton
                    class="h-fit"
                    color="neutral"
                    @click="item.open = !item.open"
                >Toggle
                </UButton>
                <Transition :name="item.t">
                    <div v-if="item.open" class="w-52 bg-primary-dark rounded all-center text-light text-center p-5">
                        {{ item.t }}
                    </div>
                </Transition>
            </div>
            <div v-else>
                <div class="flex gap-4">
                    <UButton @click="insert">insert at random index</UButton>
                    <UButton @click="reset">reset</UButton>
                    <UButton @click="shuffle">shuffle</UButton>
                </div>

                <TransitionGroup class="p-4 relative" name="list" tag="div">
                    <div v-for="item in list" :key="item"
                         class="flex items-center w-40 gap-4 bg-primary-lighter text-center p-4 my-2 rounded">
                        <div class="flex-grow">{{ item }}</div>
                        <UButton color="danger" icon transparent @click="remove(item)">
                            <TrashCanIcon/>
                        </UButton>
                    </div>
                </TransitionGroup>
            </div>
        </div>
    </div>
</template>

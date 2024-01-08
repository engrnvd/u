<script lang="ts" setup>
import { randomArrayItem } from 'nvd-js-helpers/misc'
import { reactive, ref } from 'vue'
import UButton from '../../components/UButton.vue'
import UDropdown from '../../components/UDropdown.vue'
import ArrowDownLeftIcon from '../../icons/ArrowDownLeft.vue'
import ArrowDownRightIcon from '../../icons/ArrowDownRight.vue'
import ArrowTopLeftIcon from '../../icons/ArrowTopLeft.vue'
import ArrowTopRightIcon from '../../icons/ArrowTopRight.vue'

const options = ['🍎', '🍐', '🍊', '🍋', '🍒', '🍑', '🍓', '🍅', '🍍']

let dd1 = ref()
let state = reactive({
    dd2: true
})

function onClose() {
    console.log('closed!')
}
</script>

<template>
    <div v-if="dd1" class="mb-8">
        <UButton @click="dd1.open = true">Open</UButton>
    </div>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 h-96">
        <div class="flex gap-8">
            <div>
                <UDropdown ref="dd1" @closed="onClose">
                    <UButton icon transparent>
                        <ArrowDownRightIcon/>
                    </UButton>
                    <template #content>
                        <div class="p-4">
                            <div v-for="n in 4" class="my-2">{{ randomArrayItem(options) }}</div>
                        </div>
                    </template>
                </UDropdown>
            </div>
        </div>
        <div class="flex gap-8">
            <div>
                <UDropdown v-model="state.dd2" left>
                    <UButton icon transparent>
                        <ArrowDownLeftIcon/>
                    </UButton>
                    <template #content>
                        <div class="p-4">
                            <div v-for="n in 4" class="my-2">{{ randomArrayItem(options) }}</div>
                        </div>
                    </template>
                </UDropdown>
            </div>
        </div>
        <div>
            <UDropdown up>
                <UButton icon transparent>
                    <ArrowTopRightIcon/>
                </UButton>
                <template #content>
                    <div class="p-4">
                        <div v-for="n in 4" class="my-2">{{ randomArrayItem(options) }}</div>
                    </div>
                </template>
            </UDropdown>
        </div>
        <div>
            <UDropdown left up>
                <UButton icon transparent>
                    <ArrowTopLeftIcon/>
                </UButton>
                <template #content>
                    <div class="p-4">
                        <div v-for="n in 4" class="my-2">{{ randomArrayItem(options) }}</div>
                    </div>
                </template>
            </UDropdown>
        </div>
    </div>
</template>


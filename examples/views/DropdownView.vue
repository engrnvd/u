<script lang="ts" setup>

import { reactive, ref } from 'vue'
import ArrowDownLeftIcon from '../../icons/ArrowDownLeft.vue'
import ArrowDownRightIcon from '../../icons/ArrowDownRight.vue'
import ArrowTopLeftIcon from '../../icons/ArrowTopLeft.vue'
import ArrowTopRightIcon from '../../icons/ArrowTopRight.vue'
import { randomArrayItem } from 'nvd-js-helpers/misc'
import UDropdown from '../../components/UDropdown.vue'
import UIconBtn from '../../components/UIconBtn.vue'
import UButton from '../../components/UButton.vue'

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
    <div class="grid">
        <div class="d-flex gap-8">
            <div>
                <UDropdown ref="dd1" @closed="onClose">
                    <UIconBtn>
                        <ArrowDownRightIcon/>
                    </UIconBtn>
                    <template #content>
                        <div class="p-4">
                            <div class="my-2" v-for="n in 4">{{ randomArrayItem(options) }}</div>
                        </div>
                    </template>
                </UDropdown>
            </div>
            <div v-if="dd1">
                <UButton @click="dd1.open = true">Open</UButton>
            </div>
        </div>
        <div class="d-flex gap-8">
            <UButton @click="state.dd2 = !state.dd2">toggle</UButton>
            <div>
                <UDropdown left v-model="state.dd2">
                    <UIconBtn>
                        <ArrowDownLeftIcon/>
                    </UIconBtn>
                    <template #content>
                        <div class="p-4">
                            <div class="my-2" v-for="n in 4">{{ randomArrayItem(options) }}</div>
                        </div>
                    </template>
                </UDropdown>
            </div>
        </div>
        <div>
            <UDropdown up>
                <UIconBtn>
                    <ArrowTopRightIcon/>
                </UIconBtn>
                <template #content>
                    <div class="p-4">
                        <div class="my-2" v-for="n in 4">{{ randomArrayItem(options) }}</div>
                    </div>
                </template>
            </UDropdown>
        </div>
        <div>
            <UDropdown left up>
                <UIconBtn>
                    <ArrowTopLeftIcon/>
                </UIconBtn>
                <template #content>
                    <div class="p-4">
                        <div class="my-2" v-for="n in 4">{{ randomArrayItem(options) }}</div>
                    </div>
                </template>
            </UDropdown>
        </div>
    </div>
</template>

<style scoped lang="scss">

.grid {
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: calc(100vh - 16rem);
}

</style>

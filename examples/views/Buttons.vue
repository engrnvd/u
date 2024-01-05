<script lang="ts" setup>
import { store } from '@/examples/store/store'
import { reactive } from 'vue'
import UButton from '../../components/UButton.vue'
import AccountIcon from '../../icons/Account.vue'

const variants = store.colors
const types = ['', 'icon']
const alts = reactive(['solid', 'transparent', 'outline'])

</script>

<template>
    <div>
        <div v-for="type in types">
            <div v-for="alt in alts" class="mb-5 pb-4">
                <h2>{{ type }} {{ alt }}</h2>
                <div class="flex gap-4 w-fit">
                    <div v-for="color in variants">
                        <UButton
                            :class="{[`border border-${color}`]: alt === 'outline'}"
                            :color="color"
                            :icon="type === 'icon'"
                            :transparent="alt !== 'solid'">
                            <AccountIcon v-if="type === 'icon'"/>
                            <span v-else>{{ color }}</span>
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-5">
            <h2>disabled</h2>
            <div class="flex gap-4">
                <div v-for="color in variants">
                    <UButton :[color]="true" disabled>
                        {{ color }}
                    </UButton>
                </div>
            </div>
        </div>
        <div>
            <h2>loading</h2>
            <div class="flex gap-4">
                <div v-for="color in variants">
                    <UButton :[color]="true" loading>
                        {{ color }}
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>

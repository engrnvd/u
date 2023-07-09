<script lang="ts" setup>
import { reactive } from 'vue'
import AccountIcon from '../../icons/Account.vue'
import UButton from '../../components/UButton.vue'

const variants = reactive([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
])
const types = ['button', 'icon']
const alts = reactive(['solid', 'transparent', 'flat', 'outline', 'compact'])

</script>

<template>
    <div>
        <div v-for="type in types">
            <div v-for="alt in alts" class="mb-5 pb-4">
                <h2>{{ type }} {{ alt }}</h2>
                <div class="d-flex gap-4">
                    <div v-for="color in variants">
                        <UButton :[color]="true" :[alt]="true" :[type]="true" v-tooltip="color">
                            <AccountIcon v-if="type === 'icon'"/>
                            <span v-else>{{ color }}</span>
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2>loading</h2>
            <div class="d-flex gap-4">
                <div v-for="color in variants">
                    <UButton :[color]="true" loading>
                        {{ color }}
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>

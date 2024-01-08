<template>
    <div :class="{'notification-container-empty' : items.length===0}"
         class="fixed top-0 right-0 z-50 max-h-screen px-4">
        <TransitionGroup class="relative" name="list-slide" tag="div">
            <div v-for="item in items" :key="item.id"
                 class="mt-4 w-64 cursor-pointer overflow-hidden rounded text-xs bg-bg"
                 @click="removeItem(item)">
                <div
                    :class="{[`bg-${item.options.type}`]: true, [getTextClass(item.options.type)]: true}"
                    class="flex w-full items-center p-4 shadow space-x-2">
                    <div class="text-2xl all-center">
                        <CheckCircleIcon v-if="item.options.type === 'success'"/>
                        <AlertCircleIcon v-else-if="item.options.type === 'danger'"/>
                        <InformationIcon v-else/>
                    </div>
                    <div class="flex-grow">
                        <h4 v-if="item.title" class="mb-1">{{ item.title }}</h4>
                        <div v-if="item.message" v-html="item.message"/>
                    </div>
                </div>
            </div>
        </TransitionGroup>
    </div>
</template>

<script lang="ts">
import AlertCircleIcon from '../../icons/AlertCircle.vue'
import CheckCircleIcon from '../../icons/CheckCircle.vue'
import InformationIcon from '../../icons/Information.vue'
import type { ColorVariant } from '../../types/misc-types'
import { getTextClass } from '../getTextClass'

export default {
    components: { InformationIcon, AlertCircleIcon, CheckCircleIcon },
    data: () => ({
        items: [],
    }),
    methods: {
        getTextClass,
        addItem(type: ColorVariant, title, message, options = {}) {
            // its no fun when the same popup appears more than once
            if (this.items.find(i => i.options?.type === type && i.title === title && i.message === message)) return

            const item = {
                id: Date.now() + Math.random(),
                message,
                title,
                options: {
                    type,
                    duration: 5000,
                    permanent: false,
                    ...options
                }
            }

            this.items.push(item)

            if (!item.options.permanent) {
                setTimeout(() => {
                    this.removeItem(item)
                }, item.options.duration)
            }
        },
        removeItem(item) {
            this.items = this.items.filter(i => i.id !== item.id)
        },
    }
}
</script>

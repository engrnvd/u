<script lang="ts" setup>
import UInputHelpText from '@/components/UInputHelpText.vue'
import AlertIcon from '@/icons/Alert.vue'
import TrayArrowUpIcon from '@/icons/TrayArrowUp.vue'
import { computed, ref } from 'vue'
import PlusIcon from '../icons/Plus.vue'
import accepted from '../utils/accepted-file-type'
import UFileTile from './UFileTile.vue'

const props = withDefaults(defineProps<{
    files: File[],
    accept?: any,
    beforeChange?: ((file: File) => void | Promise<void>) | null,
    disabled?: boolean,
    max?: number,
}>(), {
    files: () => [],
    accept: null,
    beforeChange: null,
    disabled: false,
    max: Infinity,
})

let dragActive = ref(false)
let wrongType = ref(false)
let emptyLayer = ref(null)
let dropzoneLayer = ref(null)
let inputElement = ref(null)

function checkTypesEarly(e) {
    wrongType.value = [...e.dataTransfer.items].some(file => !accepted(props.accept, file))
}

async function acceptUpload(e) {
    const incomingFiles = Array.from((e.dataTransfer || e.target).files)
    await Promise.all(
        incomingFiles.map(async (file: File) => {
            try {
                if (typeof props.beforeChange === 'function') {
                    await props.beforeChange(file)
                }
            } catch (e) {
                return
            }

            if (accepted(props.accept, file) && props.files.length < props.max) {
                props.files.push(file)
            }
        })
    )

    setTimeout(() => (wrongType.value = false), 1000)
    emit('change', { files: props.files, nativeEvent: e })
    inputElement.value.value = ''
    dragActive.value = false
}

function deleteFile({ detail: thatFile }) {
    props.files.splice(props.files.indexOf(thatFile), 1)
    emit('change', { files: props.files })
}

function blockOnTiles(e) {
    if (![emptyLayer.value, dropzoneLayer.value, inputElement.value].includes(e.target)) {
        e.preventDefault()
        return
    }

    inputElement.value.click()
    inputElement.value.focus()
}

function onDragEnter() {
    dragActive.value = true
}

function onDragLeave() {
    dragActive.value = false
    wrongType.value = false
}

const emit = defineEmits(['change'])

let canAddFiles = computed(() => !props.disabled && props.files.length < props.max)
</script>

<template>
    <div
        :class="{'!text-danger !border-danger': wrongType, 'cursor-not-allowed': !canAddFiles}"
        class="relative overflow-hidden rounded-md border-2 p-4 group text-muted focus-within:border-primary"
        @click="blockOnTiles"
    >
        <input
            ref="inputElement"
            :accept="accept"
            :disabled="!canAddFiles"
            class="absolute h-0 w-0"
            multiple
            type="file"
            v-bind="{...$attrs}"
            @change="acceptUpload"
        />
        <div v-if="!files?.length" ref="emptyLayer" class="z-10 flex flex-col items-center gap-2">
            <slot :dragActive="dragActive" :wrongType="wrongType" name="empty-layer">
                <TrayArrowUpIcon class="text-2xl"/>
                <div class="flex-grow font-bold text-center">
                    <div v-if="disabled">File upload unavailable</div>
                    <div v-else-if="wrongType">Incorrect file type</div>
                    <div v-else>
                        <div class="text-semi-muted">Drag and drop files{{ max > 1 ? 's' : '' }} here</div>
                        <div class="font-normal text-sm">
                            or choose file{{ max > 1 ? 's' : '' }} from device
                        </div>
                    </div>
                </div>
            </slot>
        </div>
        <div
            v-if="canAddFiles"
            ref="dropzoneLayer"
            v-ripple
            :class="{accepting: dragActive}"
            class="absolute inset-0 z-20 cursor-pointer p-4 has-hover ripple-dark"
            @dragenter="onDragEnter"
            @dragleave="onDragLeave"
            @dragover.prevent.stop="checkTypesEarly"
            @drop.prevent.stop="acceptUpload"
        >
        </div>

        <div class="flex items-center space-x-4">
            <div class="z-30 flex-grow">
                <UFileTile
                    v-for="file in files"
                    :file="file"
                    class="z-30 my-2"
                    @delete="deleteFile"
                />
                <UInputHelpText v-if="files.length >= max" class="flex items-center space-x-1">
                    <AlertIcon class="text-warn"/>
                    <div>Max {{ max }} files allowed</div>
                </UInputHelpText>
            </div>
            <div v-if="files.length && files.length < max" class="text-2xl">
                <slot name="more-icon">
                    <PlusIcon class="plus"/>
                </slot>
            </div>
        </div>
    </div>
</template>


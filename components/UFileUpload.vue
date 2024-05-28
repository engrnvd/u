<script lang="ts" setup>
import PaperclipIcon from '../icons/Paperclip.vue'
import PlusIcon from '../icons/Plus.vue'
import { ref } from 'vue'
import accepted from '../utils/accepted-file-type'
import UFileTile from './UFileTile.vue'

const props = withDefaults(defineProps<{
    files: File[],
    accept?: any,
    beforeChange?: ((file: File) => void | Promise<void>) | null,
    disabled?: boolean,
    max?: number,
    multiple?: boolean,
}>(), {
    files: () => [],
    accept: null,
    beforeChange: null,
    disabled: false,
    max: Infinity,
    multiple: true,
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
}

function onDragEnter() {
    dragActive.value = true
}

function onDragLeave() {
    dragActive.value = false
    wrongType.value = false
}

const emit = defineEmits(['change'])
</script>

<template>
    <div class="file-dropzone"
         :class="{'has-content': files && files.length, 'wrong-type': wrongType, disabled: disabled || files.length>= max}"
         @click="blockOnTiles"
    >
        <input
            v-show="false"
            type="file"
            :multiple="multiple"
            @change="acceptUpload"
            ref="inputElement"
            :accept="accept"
            :disabled="disabled || files.length>= max"
            v-bind="{...$attrs}"
        />
        <div class="empty-layer d-flex align-items-center gap-2" ref="emptyLayer">
            <slot name="empty-layer" :wrongType="wrongType" :dragActive="dragActive">
                <PaperclipIcon/>
                <div class="flex-grow-1">
                    <i v-if="disabled">file upload unavailable</i>
                    <i v-else-if="wrongType">incorrect file type</i>
                    <i v-else-if="dragActive">release to upload</i>
                    <i v-else>drag &amp; drop here or click to upload files</i>
                </div>
            </slot>
        </div>
        <div
            class="dropzone-layer"
            ref="dropzoneLayer"
            :class="{accepting: dragActive}"
            @dragover.prevent.stop="checkTypesEarly"
            @dragenter="onDragEnter"
            @dragleave="onDragLeave"
            @drop.prevent.stop="acceptUpload"
        >
            <div v-if="files.length && files.length < max" class="more-icon">
                <slot name="more-icon">
                    <PlusIcon class="plus"/>
                </slot>
            </div>
        </div>
        <UFileTile
            v-for="file in files"
            :file="file"
            @delete="deleteFile"
        />
    </div>
</template>

<style lang="scss" scoped>

.file-dropzone {
    color: var(--muted);
    border: var(--u-input-border-width) solid var(--u-input-border-color);
    border-radius: var(--form-element-border-radius);
    display: block;
    margin: 2em 0 0.5em;
    position: relative;
    overflow: hidden;

    &:focus-within {
        border-color: var(--primary);
    }

    &.disabled {
        color: var(--disabled-text-color);
    }

    .empty-layer {
        z-index: 1;
        padding: 1.5em var(--u-input-padding);
    }

    .dropzone-layer {
        align-items: center;
        cursor: pointer;
        display: flex;
        height: 100%;
        justify-content: flex-end;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 2;

        &:hover {
            background: rgba(0, 0, 0, 0.05);
        }

        &.accepting {
            background: rgba(0, 0, 0, 0.05);
        }

        .more-icon {
            font-size: 2em;
            padding-right: 0.5rem;
        }
    }

    input:focus ~ .dropzone-layer {
        background: rgba(0, 0, 0, 0.05);
    }

    &.disabled .dropzone-layer {
        background: none;
        cursor: not-allowed;
    }

    &.has-content {
        display: grid;
        gap: 0.5em;
        grid-template-columns: repeat(auto-fill, 12em);
        padding: 1em;

        .empty-layer {
            display: none;
        }
    }

    &.wrong-type {
        color: var(--danger);

        .dropzone-layer {
            &:hover {
                background: var(--danger-lighter);
            }

            &.accepting {
                background: var(--danger-lighter);
            }
        }
    }
}
</style>

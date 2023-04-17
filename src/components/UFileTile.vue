<script lang="ts" setup>
import TrashCanIcon from '../icons/TrashCan.vue'
import UIconBtn from './UIconBtn.vue'
import formatFileSize from '../utils/format-file-size'
import formatFileType from '../utils/format-file-type'

const props = defineProps<{
    file: File,
}>()

const emit = defineEmits(['delete'])
</script>

<template>
    <div class="file-tile p-3 d-flex align-items-center text-small">
        <div class="flex-grow-1">
            <div class="filename mb-1" :title="file.name">{{ file.name }}</div>
            <div class="properties text-small text-muted">
                {{ formatFileSize(file.size) }}
                •
                {{ formatFileType(file.name) }}
            </div>
        </div>
        <UIconBtn class="flex-shrink-0" danger @click="emit('delete', file)">
            <TrashCanIcon/>
        </UIconBtn>
    </div>
</template>

<style lang="scss" scoped>

.file-tile {
    background: var(--bg);
    color: var(--main-text-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-1);
    z-index: 100;
}
</style>

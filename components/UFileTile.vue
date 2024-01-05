<script lang="ts" setup>
import TrashCanIcon from '../icons/TrashCan.vue'
import formatFileSize from '../utils/format-file-size'
import formatFileType from '../utils/format-file-type'
import UIconBtn from './UIconBtn.vue'

const props = defineProps<{
    file: File,
}>()

const emit = defineEmits(['delete'])
</script>

<template>
    <div class="bg-bg text-text rounded shadow p-3 flex items-center text-sm">
        <div class="flex-grow">
            <div :title="file.name" class="mb-1 truncate w-56">{{ file.name }}</div>
            <div class="text-xs text-muted">
                {{ formatFileSize(file.size) }}
                •
                {{ formatFileType(file.name) }}
            </div>
        </div>
        <UIconBtn class="shrink-0" danger @click="emit('delete', file)">
            <TrashCanIcon/>
        </UIconBtn>
    </div>
</template>


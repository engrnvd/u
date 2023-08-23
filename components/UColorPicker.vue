<script setup lang="ts">
import UDropdown from './UDropdown.vue'
import { useStorage } from 'nvd-use-storage'
import CloseIcon from '../icons/Close.vue'
import { computed, watchEffect } from 'vue'
import UMenuItem from '../components/UMenuItem.vue'
import ColorOffIcon from '../icons/InvertColorsOff.vue'

const classicColors = [
    '#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#efefef', '#f3f3f3', '#ffffff',
    '#980000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff',
    '#e6b8af', '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#c9daf8', '#cfe2f3', '#d9d2e9', '#ead1dc',
    '#dd7e6b', '#ea9999', '#f9cb9c', '#ffe599', '#b6d7a8', '#a2c4c9', '#a4c2f4', '#9fc5e8', '#b4a7d6', '#d5a6bd',
    '#cc4125', '#e06666', '#f6b26b', '#ffd966', '#93c47d', '#76a5af', '#6d9eeb', '#6fa8dc', '#8e7cc3', '#c27ba0',
    '#a61c00', '#cc0000', '#e69138', '#f1c232', '#6aa84f', '#45818e', '#3c78d8', '#3d85c6', '#674ea7', '#a64d79',
    '#85200c', '#990000', '#b45f06', '#bf9000', '#38761d', '#134f5c', '#1155cc', '#0b5394', '#351c75', '#741b47',
    '#5b0f00', '#660000', '#783f04', '#7f6000', '#274e13', '#0c343d', '#1c4587', '#073763', '#20124d', '#4c1130',
]

const recentColors = useStorage('recent-colors-pallet', [])
// props
const props = withDefaults(defineProps<{
    modelValue?: string,
    variant?: 'default' | 'classic',
    colors?: string[],
}>(), {
    variant: 'default',
    colors: [
        '#e66e63', '#f47ea2', '#f48a68', '#c2915d',
        '#d25ae6', '#a37cf2', '#7086f9', '#2196f3',
        '#03a9f4', '#00b3a1', '#4caf50', '#83b337',
        '#c6c127', '#d8b330', '#adb5bd', '#83a1b0',
    ],
})

const colorsToShow = computed(() => props.variant === 'default' ? props.colors : classicColors)

// event
const emit = defineEmits(['update:modelValue'])

// methods
function selectColor(color) {
    emit('update:modelValue', color)
}

function removeColor(color) {
    recentColors.value.splice(recentColors.value.indexOf(color), 1)
}

watchEffect(() => {
    if (props.modelValue && !colorsToShow.value.includes(props.modelValue) && !recentColors.value.includes(props.modelValue)) {
        recentColors.value.push(props.modelValue)
    }
})

</script>

<template>
    <UDropdown :auto-close="false" class="apm-color-picker" :class="variant" v-bind="$attrs">
        <slot>
            <a class="apc-button"
               href="#"
               :style="{backgroundColor: modelValue || 'transparent'}">
            </a>
        </slot>
        <template #content>
            <div class="apc-dropdown">
                <UMenuItem
                    class="w100 mb-3 menu-item"
                    @click="selectColor('')"
                    v-if="variant === 'classic'">
                    <ColorOffIcon/>
                    Reset
                </UMenuItem>
                <div class="color-list mb-3">
                    <div class="color-item"
                         v-for="color in colorsToShow" :key="color"
                         :style="{backgroundColor: color}"
                         :class="{selected: color === modelValue}"
                         @click="selectColor(color)"
                    ></div>
                </div>

                <template v-if="recentColors.length">
                    <hr class="my-2">

                    <div class="text-muted font-weight-bold text-small mb-2">Recent</div>
                    <div class="color-list mb-3">
                        <div class="color-item"
                             v-for="color in recentColors" :key="color"
                             :style="{backgroundColor: color}"
                             :class="{selected: color === modelValue}"
                             @click="selectColor(color)"
                        >
                            <a v-if="color !== modelValue"
                               @click.prevent.stop="removeColor(color)"
                               class="remove-color-btn text-small all-center">
                                <CloseIcon/>
                            </a>
                        </div>
                    </div>
                </template>

                <input
                    class="color-input"
                    type="color"
                    :value="modelValue || '#adb5bd'"
                    @change="e => selectColor(e.target.value)"
                >
            </div>
        </template>
    </UDropdown>
</template>

<style scoped lang="scss">
.apm-color-picker {
    --size: 1em;
    max-width: var(--size);

    &.classic {
        .apc-dropdown {
            width: 16.4rem;

            .menu-item {
                padding: 0.5em !important;
                gap: 0.5em !important;
            }

            .color-list {
                gap: 0.2em;

                .color-item {
                    width: 1.25rem;
                    height: 1.25rem;
                    border: 1px solid var(--border-color);
                }
            }
        }
    }

    .apc-button {
        display: inline-block;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        line-height: 1;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    }

    .apc-dropdown {
        width: 9.5rem;
        padding: 1em;

        .color-input {
            width: 100%;
        }

        .color-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5em;

            .color-item {
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                cursor: pointer;
                transition: transform 0.15s ease-out;
                position: relative;

                &:hover {
                    transform: scale(1.25);

                    .remove-color-btn {
                        display: flex;
                    }
                }

                &.selected {
                    &::before {
                        content: '';
                        position: absolute;
                        width: calc(100% + 4px);
                        height: calc(100% + 4px);
                        left: 50%;
                        top: 50%;
                        transform: translateX(-50%) translateY(-50%);
                        border-radius: 50%;
                        border: 2px solid #777;
                    }
                }

                .remove-color-btn {
                    position: absolute;
                    right: -0.5em;
                    top: -0.5em;
                    background-color: var(--bg);
                    border-radius: 50%;
                    display: none;
                }
            }
        }
    }
}

</style>

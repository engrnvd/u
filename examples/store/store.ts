import type { ColorVariant } from '@/types/misc-types'
import { reactive } from 'vue'

export const store = reactive({
  themes: ['light', 'dark'],
  colors: ['primary', 'neutral', 'success', 'danger', 'warn'] as ColorVariant[],
  colorVariants: ['-lighter', '-light', '', '-dark', '-darker'],
  textColors: ['primary', 'danger', 'warn-dark', 'success-dark', 'text', 'muted', 'semi-muted'],
})

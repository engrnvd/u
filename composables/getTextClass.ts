import type { ColorVariant } from '../types/misc-types'

export function getTextClass(color: ColorVariant, transparent: boolean = false, loading: boolean = false) {
  if (color === 'neutral' || color === 'warn' || loading) return 'text-text'
  if (transparent) return `text-${color}`
  return 'text-light'
}

import { useStorage } from '@vueuse/core'
import { reactive } from 'vue'

export const uTheme = reactive({
  value: useStorage('u-theme', 'light') as unknown as string,
  set(value: string) {
    this.value = value
  },
  toggleDark() {
    if (this.value === 'dark') this.set('light')
    else this.set('dark')
  },
})

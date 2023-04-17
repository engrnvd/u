import { onBeforeUnmount, onMounted } from 'vue'
import type { Ref } from 'vue'

export function useOutsideClick(elRef: Ref<any>, fn: Function) {
  function outsideClick(e: MouseEvent) {
    if (!elRef.value.contains(e.target)) fn(e)
  }

  onMounted(() => {
    document.addEventListener('click', outsideClick, true)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', outsideClick, true)
  })
}

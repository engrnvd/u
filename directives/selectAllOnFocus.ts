function selectAll(e) {
  const el = e.target
  if (el.value?.length) {
    try {
      el.setSelectionRange(0, el.value.length)
    } catch (e) {
    }
  }
}

export const vSelectAllOnFocus = {
  mounted: (el: any) => {
    el.addEventListener('focus', selectAll)
  },
  unmounted: (el: any) => {
    el.removeEventListener('focus', selectAll)
  },
}



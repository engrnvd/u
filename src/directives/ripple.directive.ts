function createRipple(event: any) {
  const button = event.currentTarget
  const rect = button.getBoundingClientRect()
  const { position, overflow } = getComputedStyle(button)
  position === 'absolute' || (button.style.position = 'relative')
  button.style.overflow = 'hidden'

  const circle = document.createElement('span')
  const diameter = Math.max(rect.width, rect.height)
  const radius = diameter / 2

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - rect.x - radius}px`
  circle.style.top = `${event.clientY - rect.y - radius}px`
  circle.classList.add('ripple')

  const ripple = button.querySelector('.ripple')

  if (ripple) {
    ripple.remove()
    clearTimeout(button.$timeout)
  }

  button.appendChild(circle)

  // fix: reset the overflow AFTER the ripple is done animating
  const { animationDuration } = getComputedStyle(circle)
  button.$timeout = setTimeout(() => button.style.overflow = overflow, parseFloat(animationDuration) * 1000)
}

export const vRipple = {
  mounted: (el: any) => {
    el.style.cursor = 'pointer'
    el.addEventListener('click', createRipple)
  },
  unmounted: (el: any) => {
    el.removeEventListener('click', createRipple)
  },
}

const EdgeOffset = 5
const TooltipOffset = 5

function updateTooltip(e) {
  const el = e.currentTarget
  const tooltip = el.querySelector('.u-tooltip')
  let eRect = el.getBoundingClientRect()
  let tRect = tooltip.getBoundingClientRect()
  let vWidth = window.innerWidth
  let left = eRect.width / 2 - tRect.width / 2
  let top = 0 - (tRect.height + TooltipOffset)

  if (eRect.left - (tRect.width + eRect.width) / 2 < EdgeOffset) { // too close to the left edge
    left = eRect.width + TooltipOffset
    top = (eRect.height - tRect.height) / 2
  }

  if (eRect.top - tRect.height < EdgeOffset) { // too close to top edge
    top = eRect.height + TooltipOffset
  }

  if ((eRect.left + (tRect.width + eRect.width) / 2 + EdgeOffset) >= vWidth) { // too close to right edge
    left = 0 - tRect.width - TooltipOffset
    top = (eRect.height - tRect.height) / 2
  }

  tooltip.style.left = left + 'px'
  tooltip.style.top = top + 'px'
}

function createTooltip(el, value) {
  let tooltip = el.querySelector('.u-tooltip')

  if (!tooltip) {
    tooltip = document.createElement('span')
    el.appendChild(tooltip)
    tooltip.classList.add('u-tooltip')
  }

  if (!value) {
    el.removeEventListener('mouseenter', updateTooltip)
    tooltip.remove()
    return
  }

  tooltip.innerText = value
  getComputedStyle(el).position === 'absolute' || (el.style.position = 'relative')

  if (!el.classList.contains('u-tooltip-parent')) {
    el.classList.add('u-tooltip-parent')
    el.addEventListener('mouseenter', updateTooltip)
  }
}

export const vTooltip = {
  mounted: (el: any, { value }) => {
    createTooltip(el, value)
  },
  updated: (el, { value }) => {
    createTooltip(el, value)
  },
  unmounted: (el) => {
    el.removeEventListener('mouseenter', updateTooltip)
  }
}

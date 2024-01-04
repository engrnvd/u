import type { App } from 'vue'
import { vRipple } from './directives/ripple.directive'
import { vSelectAllOnFocus } from './directives/selectAllOnFocus'
import { vTooltip } from './directives/tooltip.directive'

export default {
  install(app: App, options = {}) {
    app.directive('tooltip', vTooltip)
    app.directive('ripple', vRipple)
    app.directive('select-all-on-focus', vSelectAllOnFocus)
  }
}

import type { ColorVariant } from '../../types/misc-types'
import { useDynamicComponent } from '../useDynamicComponent'
import Notify from './Notify.vue'

const { component } = useDynamicComponent(Notify)

export interface NotifyOptions {
  permanent?: boolean,
  duration?: number,
}

export function useNotify() {
  function showMessage(type: ColorVariant = 'success', title: string, message: string, options: NotifyOptions = {}) {
    // @ts-ignore
    component.addItem(type, title, message, options)
  }

  function success(title: string, message: string, options: NotifyOptions = {}) {
    showMessage('success', title, message, options)
  }

  function error(title: string, message: string, options: NotifyOptions = {}) {
    showMessage('danger', title, message, options)
  }

  function warning(title: string, message: string, options: NotifyOptions = {}) {
    showMessage('warn', title, message, options)
  }

  return {
    showMessage,
    success,
    error,
    warning,
  }
}


import { UModalProps } from '../../components/UModal.vue'
import { ConfirmModalProps } from '../../types/misc-types'
import { vRipple } from '../../directives/ripple.directive'
import { useDynamicComponent } from '../useDynamicComponent'
import ConfirmModal from './ConfirmModal.vue'

type ConfirmOptions = UModalProps & ConfirmModalProps

const { app, component } = useDynamicComponent(ConfirmModal)
// @ts-ignore
app.directive('ripple', vRipple)

export function useConfirm(title: string, message: string, options: ConfirmOptions = {
  okTitle: 'Yes',
  cancelTitle: 'No',
  classes: []
}) {
  return new Promise(resolve => {
    // @ts-ignore
    component.setData({
      ...options,
      title,
      message,
      open: true,
      onClose(ok: boolean) {
        resolve(ok)
      }
    })
  })
}

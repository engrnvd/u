export interface ConfirmModalProps {
  open?: boolean,
  message?: string,
  classes?: string[],
  onClose?: Function,
}

export type ColorVariant = 'primary' | 'danger' | 'neutral' | 'warning' | 'success'

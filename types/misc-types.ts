export interface ConfirmModalProps {
  open?: boolean,
  message?: string,
  classes?: string[],
  onClose?: Function,
}

export type ColorVariant = 'primary' | 'danger' | 'neutral' | 'warn' | 'success'
export type TextColorVariant = ColorVariant | 'text' | 'muted' | 'semi-muted' | 'light' | 'dark'

export const inputProps = {
  modelValue: {},
  label: String,
  helpText: String,
  errors: { type: Array, default: () => [] },
  type: { type: String, default: 'text' },
}

export const inputEmits = ['update:modelValue']


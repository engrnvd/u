export const inputProps = {
  modelValue: {},
  label: String,
  helpText: String,
  errors: { type: Array, default: () => [] },
}

export const inputEmits = ['update:modelValue']


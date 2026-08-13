export const inputProps = {
  modelValue: null,
  label: String,
  helpText: String,
  errors: { type: undefined, default: () => [] },
}

export const inputEmits = ['update:modelValue']


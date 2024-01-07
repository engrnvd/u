export const inputProps = {
  modelValue: {},
  label: String,
  helpText: String,
  errors: { type: undefined, default: () => [] },
}

export const inputEmits = ['update:modelValue']


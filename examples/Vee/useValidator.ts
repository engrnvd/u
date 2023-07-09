import { reactive, watch } from 'vue'
import { Validator } from './validator'

export function useValidator(form: Object, fn: Function) {
  const v = reactive(new Validator(form))
  fn(v)

  for (const field in v.rules) {
    // @ts-ignore
    watch(() => form[field], () => {
      v.validateField(field)
    })
  }

  return v
}

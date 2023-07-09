import type { Validator } from '../validator'

export function emailRule(field) {
  return [field, '', (v: Validator) => {
    const value = v.form[field]
    if (!value) return
    if (value.toString().match(/.+\.con$/)) {
      v.setError(field, `"${value}" is not valid. Did you mean "${value.replace(/\.con$/, '.com')}"?`)
    }
    if (!value.toString().match(/^.+\@.+\..+$/)) {
      v.setError(field, `${value} is not a valid email.`)
    }
    return true
  }]
}

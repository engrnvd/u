import { _titleCase } from 'nvd-js-helpers/string-helper'

export function requiredRule(field) {
  return [
    field,
    `${_titleCase(field)} is required`,
    v => !!v.form[field]
  ]
}

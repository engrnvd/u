import { _titleCase } from 'nvd-js-helpers/string-helper'

export function minLengthRule(field, minChars) {
  return [
    field,
    `${_titleCase(field)} must have at least ${minChars} characters`,
    v => v.form[field]?.length >= minChars
  ]
}

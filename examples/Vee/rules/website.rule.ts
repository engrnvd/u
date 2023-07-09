import type { Validator } from '../validator'

export function websiteRule(field) {
  return [field, '', (v: Validator) => {
    const value = v.form[field]
    if (!value) return true
    if (!value.toString().match(/^(http)?s?(:\/\/)?(www\.)?(((?!-))(xn--|_)?[a-z0-9-]{0,61}[a-z0-9]{1,1}\.)*(xn--)?([a-z0-9][a-z0-9\-]{0,60}|[a-z0-9-]{1,30}\.[a-z]{2,})\/?$/)) {
      v.setError(field, `${value} is not a valid website`)
    }
    return true
  }]
}

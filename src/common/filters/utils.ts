import { ORDER } from './constants'
import type { FiltersURL, Value } from './types'

const getSingleValue = (value: Value) => {
  const valueIsArray = Array.isArray(value)

  if (valueIsArray) return value[0] || ''
  return value
}

const decodeUrlParams = (searchParams: URLSearchParams): Record<string, string | string[]> => {
  const decodedParams: Record<string, string | string[]> = {}

  for (const [k, v] of searchParams.entries()) {
    if (k in decodedParams) {
      const prev = decodedParams[k]
      const prevIsArray = Array.isArray(prev)
      decodedParams[k] = prevIsArray ? [...prev, v] : [prev, v]
    } else {
      decodedParams[k] = v
    }
  }

  return decodedParams
}

const setUrlParams = (prev: URLSearchParams, patch: Record<string, Value>) => {
  const searchParams = new URLSearchParams(prev)

  for (const key of Object.keys(patch)) {
    searchParams.delete(key)

    const value = patch[key]
    if (Array.isArray(value)) {
      value.forEach((v) => searchParams.append(key, String(v)))
    } else if (value === null || value === undefined || value === '') {
      searchParams.delete(key)
    } else {
      searchParams.set(key, String(value))
    }
  }

  const ordered = new URLSearchParams()

  for (const key of ORDER) {
    const values = searchParams.getAll(key)
    if (!values.length) continue
    values.forEach((v) => ordered.append(key, v))
  }

  for (const [k, v] of searchParams.entries()) {
    if (!ORDER.includes(k as FiltersURL)) {
      ordered.append(k, v)
    }
  }

  return ordered
}

export { getSingleValue, decodeUrlParams, setUrlParams }

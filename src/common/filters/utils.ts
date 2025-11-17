import type { Value } from './types'

const getSingleValue = (value: Value) => {
  const valueIsArray = Array.isArray(value)

  if (valueIsArray) return value[0] || ''
  return value
}

const decodeUrlParams = (searchParams: URLSearchParams) => {
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

// TODO: understand this function
const makeSetUrlParams = (order: string[]) => (prev: URLSearchParams, patch: Record<string, Value>) => {
  const searchParams = new URLSearchParams(prev)

  for (const key of Object.keys(patch)) {
    const val = patch[key]
    searchParams.delete(key)
    if (Array.isArray(val)) {
      val.forEach((v) => searchParams.append(key, String(v)))
    } else if (val === null || val === undefined || val === '') {
      // no reinsertar -> elimina
    } else {
      searchParams.set(key, String(val))
    }
  }

  const ordered = new URLSearchParams()
  for (const k of order) {
    const values = searchParams.getAll(k)
    if (!values.length) continue
    values.forEach((v) => ordered.append(k, v))
  }

  for (const [k, v] of searchParams.entries()) {
    if (!order.includes(k)) ordered.append(k, v)
  }

  return ordered
}

export { getSingleValue, decodeUrlParams, makeSetUrlParams }

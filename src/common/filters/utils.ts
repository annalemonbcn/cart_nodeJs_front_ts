import type { Value } from './types'

const getSingleValue = (v: Value) => (Array.isArray(v) ? v[0] ?? '' : v)

const decodeUrlParams = (sp: URLSearchParams) => {
  const out: Record<string, string | string[]> = {}
  for (const [k, v] of sp.entries()) {
    if (k in out) {
      const prev = out[k]
      out[k] = Array.isArray(prev) ? [...prev, v] : [prev as string, v]
    } else {
      out[k] = v
    }
  }
  return out
}

const makeSetUrlParams = (order: string[]) => (prev: URLSearchParams, patch: Record<string, Value>) => {
  const sp = new URLSearchParams(prev)

  for (const key of Object.keys(patch)) {
    const val = patch[key]
    sp.delete(key)
    if (Array.isArray(val)) {
      val.forEach((v) => sp.append(key, String(v)))
    } else if (val === null || val === undefined || val === '') {
      // no reinsertar -> elimina
    } else {
      sp.set(key, String(val))
    }
  }

  const ordered = new URLSearchParams()
  for (const k of order) {
    const values = sp.getAll(k)
    if (!values.length) continue
    values.forEach((v) => ordered.append(k, v))
  }

  for (const [k, v] of sp.entries()) {
    if (!order.includes(k)) ordered.append(k, v)
  }

  return ordered
}

export { getSingleValue, decodeUrlParams, makeSetUrlParams }

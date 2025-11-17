import { params, type Params } from './types'

const PARAMS_SET: ReadonlySet<string> = new Set(params as readonly string[])
const isParamKey = (key: string): key is Params => PARAMS_SET.has(key)

const searchParamsToParamsRecord = (input: Record<string, string | string[]>): Partial<Record<Params, string>> => {
  const out: Partial<Record<Params, string>> = {}

  for (const [k, v] of Object.entries(input)) {
    if (!isParamKey(k)) continue

    const valueIsArray = Array.isArray(v)
    if (!valueIsArray) out[k] = v
    else out[k] = v[0] || ''
  }

  return out
}

export { searchParamsToParamsRecord }

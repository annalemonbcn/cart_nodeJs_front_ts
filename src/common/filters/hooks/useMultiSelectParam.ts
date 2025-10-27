import { useEffect, useMemo, useCallback } from 'react'
import { useFiltersState } from './useFiltersState'
import { normalizeWithAll, splitCsv, toCsv, toggleWithAll } from '../multiselect'

type MultiSelectParamProps = {
  param: string
  allKey?: string | null
  defaultCsv?: string
  normalizeCase?: 'lower' | 'none'
}

const useMultiSelectParam = ({
  param,
  allKey = 'all',
  defaultCsv = '',
  normalizeCase = 'lower'
}: MultiSelectParamProps) => {
  const { getStateValue, setStateValue, registerState } = useFiltersState()

  useEffect(() => {
    if (defaultCsv) registerState(param, defaultCsv)
  }, [registerState, param, defaultCsv])

  const selected = useMemo(() => {
    const raw = String(getStateValue(param, defaultCsv) ?? defaultCsv)
    const arr = splitCsv(raw)
    const norm = normalizeCase === 'lower' ? arr.map((s) => s.toLowerCase()) : arr
    if (allKey) return normalizeWithAll(norm, allKey)
    return Array.from(new Set(norm))
  }, [getStateValue, param, defaultCsv, allKey, normalizeCase])

  const write = useCallback(
    (list: string[]) => {
      const norm = normalizeCase === 'lower' ? list.map((s) => s.toLowerCase()) : list
      if (allKey) {
        setStateValue(param, toCsv(normalizeWithAll(norm, allKey)))
      } else {
        setStateValue(param, norm.length ? toCsv(Array.from(new Set(norm))) : '')
      }
    },
    [setStateValue, param, allKey, normalizeCase]
  )

  const toggle = useCallback(
    (slug: string) => {
      const val = normalizeCase === 'lower' ? slug.toLowerCase() : slug
      if (allKey) {
        write(toggleWithAll(selected, val, allKey))
      } else {
        const set = new Set(selected)
        if (set.has(val)) {
          set.delete(val)
        } else {
          set.add(val)
        }
        write([...set])
      }
    },
    [selected, write, allKey, normalizeCase]
  )

  const isActive = useCallback(
    (slug: string) => {
      const val = normalizeCase === 'lower' ? slug.toLowerCase() : slug
      return selected.includes(val)
    },
    [selected, normalizeCase]
  )

  const reset = useCallback(() => {
    if (allKey) {
      write([allKey])
    } else {
      write([])
    }
  }, [write, allKey])

  return { selected, toggle, isActive, write, reset }
}

export { useMultiSelectParam }

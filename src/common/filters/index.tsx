import { createContext, useMemo } from 'react'
import type { FiltersStateProps, Value } from './types'
import type { PropsWithChildren } from '@/variables/types/global.types'
import { useSearchParams } from 'react-router-dom'
import { decodeUrlParams, getSingleValue, makeSetUrlParams } from './utils'
import { ORDER } from './constants'

const FiltersStateContext = createContext<FiltersStateProps | null>(null)

const FiltersStateProvider = ({ children }: PropsWithChildren) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const decodedSearchParams = useMemo(() => decodeUrlParams(searchParams), [searchParams])
  const setUrlParams = useMemo(() => makeSetUrlParams(ORDER), [])

  const registerState = (path: string, value: Value, force = false) => {
    const isInitialized = decodedSearchParams[path] !== undefined
    if (!force && isInitialized) return
    setSearchParams((prev) => setUrlParams(prev, { [path]: getSingleValue(value).toString() }), { replace: true })
  }

  const getStateValue = (path: string, defaultValue?: string) => decodedSearchParams[path] ?? defaultValue

  const setStateValue = (path: string, value: Value) => {
    setSearchParams((prev) => setUrlParams(prev, { [path]: getSingleValue(value).toString() }), { replace: true })
  }

  const setMany = (patch: Record<string, Value>) => {
    const normalized: Record<string, Value> = {}
    for (const k of Object.keys(patch)) {
      const v = patch[k]
      normalized[k] = Array.isArray(v) ? v.map((x) => String(x)) : String(v)
    }
    setSearchParams((prev) => setUrlParams(prev, normalized), { replace: true })
  }

  const getAll = () => decodedSearchParams

  return (
    <FiltersStateContext.Provider value={{ registerState, getStateValue, setStateValue, setMany, getAll }}>
      {children}
    </FiltersStateContext.Provider>
  )
}

export { FiltersStateProvider, FiltersStateContext }

import { type UrlParams } from '@/domain/params/types'

type Filters = UrlParams

type Value = string | number | boolean | (string | number)[]

type FiltersStateProps = {
  registerState: (path: string, value: Value, force?: boolean) => void
  getStateValue: (path: string, defaultValue?: string) => string | string[] | undefined
  setStateValue: (path: string, value: Value) => void
  setMany: (patch: Record<string, Value>) => void
  getAll: () => Record<string, string | string[]>
}

export type { FiltersStateProps, Value, Filters }

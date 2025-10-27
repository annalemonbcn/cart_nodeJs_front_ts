import { useContext } from 'react'
import { FiltersStateContext } from '..'

const useFiltersState = () => {
  const ctx = useContext(FiltersStateContext)
  if (!ctx) throw new Error('useFiltersState must be used within FilterStateProvider')
  return ctx
}

export { useFiltersState }

import type { Option } from '../types'

const useGetBrands = (): Option[] => [
  { value: 'naikis', label: 'Naikis', id: 'naikis' },
  { value: 'adwidas', label: 'Adwidas', id: 'adwidas' },
  { value: 'poma', label: 'Poma', id: 'poma' },
  { value: 'rwebook', label: 'Rwebook', id: 'rwebook' }
]

export { useGetBrands }

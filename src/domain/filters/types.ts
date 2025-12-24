import type { components } from '@/variables/types/openapi'

type FiltersData = components['responses']['FiltersFound']['content']['application/json']['payload']
type PriceRange = FiltersData['prices']

type Size = FiltersData['sizes'][number]

export type { FiltersData, PriceRange, Size }

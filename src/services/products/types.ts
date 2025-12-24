import type { components } from '@/variables/types/openapi'

type ProductOutput = components['schemas']['ProductOutput']
type AllProductsResponse = components['responses']['AllProductsFound']['content']['application/json']

type FiltersResponse = components['responses']['FiltersFound']['content']['application/json']

export type { ProductOutput, AllProductsResponse, FiltersResponse }

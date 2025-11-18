import type { JSX } from 'react'
import { BrandSelector } from './components/brandSelector'
import { CategoriesFilter } from './components/categoriesFilter'
import { ColorsFilter } from './components/colorsFilter'
import { PriceFilter } from './components/priceFilter'
import { SizeFilter } from './components/sizeFilter'
import type { FiltersUI } from '@/common/filters/types'

const getFiltersRender = (filter: FiltersUI) => {
  const filtersRendermap: Record<FiltersUI, JSX.Element> = {
    category: <CategoriesFilter />,
    price: <PriceFilter />,
    brand: <BrandSelector />,
    color: <ColorsFilter />,
    size: <SizeFilter />
  }

  return filtersRendermap[filter]
}

const DEFAULT_FILTERS: FiltersUI[] = ['category', 'price', 'brand', 'color', 'size']

export { getFiltersRender, DEFAULT_FILTERS }

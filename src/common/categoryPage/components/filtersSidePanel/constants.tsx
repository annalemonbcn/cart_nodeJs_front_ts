import type { JSX } from 'react'
import { BrandSelector } from './components/filters/brandSelector'
import { CategoriesFilter } from './components/filters/categoriesFilter'
import { ColorsFilter } from './components/filters/colorsFilter'
import { PriceFilter } from './components/filters/priceFilter'
import { SizeFilter } from './components/filters/sizeFilter'
import type { CleanedFiltersData } from './types'
import type { FiltersUI } from '@/common/filters/types'

const getFiltersRender = (filter: FiltersUI, { categories, prices, brands, colors, sizes }: CleanedFiltersData) => {
  const filtersRendermap: Record<FiltersUI, JSX.Element> = {
    category: <CategoriesFilter categories={categories} />,
    price: <PriceFilter priceRange={prices} />,
    brand: <BrandSelector brands={brands} />,
    color: <ColorsFilter colors={colors} />,
    size: <SizeFilter sizes={sizes} />
  }

  return filtersRendermap[filter]
}

const DEFAULT_FILTERS: FiltersUI[] = ['category', 'price', 'brand', 'color', 'size']

export { getFiltersRender, DEFAULT_FILTERS }

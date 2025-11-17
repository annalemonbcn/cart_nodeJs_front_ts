import type { JSX } from 'react'
import { BrandSelector } from '@/common/filters/components/brandSelector'
import { CategoriesFilter } from '@/common/filters/components/categoriesFilter'
import { ColorsFilter } from '@/common/filters/components/colorFilter'
import { PriceFilter } from '@/common/filters/components/priceFilter'
import { SizeFilter } from '@/common/filters/components/sizeFilter'
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

import { SelectorFilter } from '@/common/filters/components/selectorFilter'

const useGetBrands = () => [
  { value: 'naikis', label: 'Naikis', id: 'naikis' },
  { value: 'adwidas', label: 'Adwidas', id: 'adwidas' },
  { value: 'poma', label: 'Poma', id: 'poma' },
  { value: 'rwebook', label: 'Rwebook', id: 'rwebook' }
]

const BrandSelector = () => {
  const brands = useGetBrands()

  return (
    <SelectorFilter
      options={brands}
      title="Brand"
      filterName="brand"
      noDataText="No brands available for this criteria"
    />
  )
}

export { BrandSelector }

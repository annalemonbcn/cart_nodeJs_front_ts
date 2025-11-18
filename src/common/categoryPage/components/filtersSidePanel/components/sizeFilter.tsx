import { RectangularListFilter } from '@/common/filters/components/rectangularListFilter'

const useGetSizes = () => ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']

const SizeFilter = () => {
  const sizes = useGetSizes()

  return (
    <RectangularListFilter
      list={sizes}
      title="Size"
      filterName="size"
      noDataText="No sizes available for this criteria"
    />
  )
}

export { SizeFilter }

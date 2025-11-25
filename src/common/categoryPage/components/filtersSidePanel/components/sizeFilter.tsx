import { RectangularListFilter } from '@/common/filters/components/rectangularListFilter'

const SizeFilter = ({ sizes }: { sizes: string[] }) => (
  <RectangularListFilter
    list={sizes}
    title="Size"
    filterName="size"
    noDataText="No sizes available for this criteria"
  />
)

export { SizeFilter }

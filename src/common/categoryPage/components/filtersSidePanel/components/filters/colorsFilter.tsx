import { SquareListFilter } from '@/common/filters/components/squareListFilter'

const ColorsFilter = ({ colors }: { colors: string[] }) => (
  <SquareListFilter
    list={colors}
    filterName="color"
    noDataText="No colors available for this criteria"
    title="Colors"
    useAll
  />
)

export { ColorsFilter }

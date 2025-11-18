import { SquareListFilter } from '@/common/filters/components/squareListFilter'

const useGetColors = () => ['all', 'red', 'blue', 'green', 'yellow', 'black', 'white']

const ColorsFilter = () => {
  const colors = useGetColors()

  return (
    <SquareListFilter
      list={colors}
      filterName="color"
      noDataText="No colors available for this criteria"
      title="Colors"
      useAll
    />
  )
}

export { ColorsFilter }

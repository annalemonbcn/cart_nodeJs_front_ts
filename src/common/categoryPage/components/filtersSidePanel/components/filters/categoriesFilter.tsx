import { RectangularListFilter } from '@/common/filters/components/rectangularListFilter'
import { TextListFilter } from '@/common/filters/components/textListFilter'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { theme } from '@/theme'

type CategoriesFilterProps = {
  categories: string[]
}

const CategoriesFilter = ({ categories }: CategoriesFilterProps) => {
  const isMobile = useMediaQuery(theme.mq.js.down('md'))

  if (isMobile)
    return (
      <RectangularListFilter
        filterName="category"
        list={categories}
        title="Categories"
        noDataText="No sizes available for this criteria"
        defaultOpen
        useAll
      />
    )

  return (
    <TextListFilter
      filterName="category"
      title="Categories"
      list={categories}
      noDataText="No categories available for this criteria"
      defaultOpen
    />
  )
}

export { CategoriesFilter }

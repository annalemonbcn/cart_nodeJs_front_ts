import { RectangularListFilter } from '@/common/filters/components/rectangularListFilter'
import { TextListFilter } from '@/common/filters/components/textListFilter'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { theme } from '@/theme'
import type { RectangularListFilterProps } from '@/common/filters/components/rectangularListFilter/types'

const CategoriesFilter = ({ categories }: { categories: string[] }) => {
  const isMobile = useMediaQuery(theme.mq.js.down('md'))

  const commonProps: RectangularListFilterProps = {
    filterName: 'category',
    list: categories,
    title: 'Categories',
    noDataText: 'No categories available for this criteria',
    defaultOpen: true,
    useAll: isMobile ? true : false
  }

  if (isMobile) return <RectangularListFilter {...commonProps} />

  return <TextListFilter {...commonProps} />
}

export { CategoriesFilter }

import { TextListFilter } from '@/common/filters/components/textListFilter'

const CategoriesFilter = ({ categories }: { categories: string[] }) => (
  <TextListFilter
    filterName="category"
    title="Categories"
    list={categories}
    noDataText="No categories available for this criteria"
    defaultOpen
  />
)

export { CategoriesFilter }

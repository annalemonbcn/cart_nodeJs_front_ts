import { TextListFilter } from '@/common/filters/components/textListFilter'

type CategoriesFilterProps = {
  categories: string[]
}

const CategoriesFilter = ({ categories }: CategoriesFilterProps) => (
  <TextListFilter
    filterName="category"
    title="Categories"
    list={categories}
    noDataText="No categories available for this criteria"
    defaultOpen
  />
)

export { CategoriesFilter }

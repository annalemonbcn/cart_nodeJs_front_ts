import { TextListFilter } from '@/common/filters/components/textListFilter'

const useGetCategories = () => ['All', 'Tops', 'Joggers', 'Jeans']

const CategoriesFilter = () => {
  const categories = useGetCategories()

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

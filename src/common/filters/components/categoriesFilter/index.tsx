import { useEffect, useState } from 'react'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import Text from '@/components/text'
import { useFiltersState } from '@/common/filters/hooks'
import { FilterSection } from '@/common/filterSection'

const CategoriesFilter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const mockCategoriesList = ['All', 'Tops', 'Joggers', 'Jeans']

  const { setStateValue, registerState } = useFiltersState()

  useEffect(() => {
    registerState('category', 'all')
  }, [registerState])

  return (
    <FilterSection
      title="Categories"
      isOpen={isOpen}
      toggleOpen={() => setIsOpen(!isOpen)}
      customIcon="/icons/filter.svg"
    >
      <FlexContainer flexDirection="column" gap={tokens.space.md}>
        {mockCategoriesList.map((category) => (
          <div
            key={`category-${category}`}
            onClick={() => {
              setStateValue('category', category.toLowerCase())
            }}
            style={{ cursor: 'pointer' }}
          >
            <Text weight="medium">{category}</Text>
          </div>
        ))}
      </FlexContainer>
    </FilterSection>
  )
}

export { CategoriesFilter }

import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import Text from '@/components/text'
import { FilterSection } from '@/common/filterSection'
import { useMultiSelectParam } from '../../hooks/useMultiSelectParam'
import type { ITextProps } from '@/components/text/types'
import { StyledCategory } from './styles'

const CategoriesFilter = () => {
  const mockCategoriesList = ['All', 'Tops', 'Joggers', 'Jeans']

  const { toggle, isActive, selected, reset } = useMultiSelectParam({ param: 'category', allKey: 'all' })

  return (
    <FilterSection
      title="Categories"
      defaultOpen
      customIcon="/icons/filter.svg"
      numberOfSelected={selected.length}
      onClear={reset}
    >
      <FlexContainer flexDirection="column" gap={tokens.space.md}>
        {mockCategoriesList.map((category) => {
          const slug = category.toLowerCase()
          const active = isActive(slug)

          const textProps: Partial<ITextProps> = {
            weight: active ? 'bold' : 'medium',
            color: active ? 'primary' : 'mediumNeutral'
          }

          return (
            <StyledCategory key={`category-${category}`} onClick={() => toggle(slug)}>
              <Text {...textProps}>{category}</Text>
            </StyledCategory>
          )
        })}
      </FlexContainer>
    </FilterSection>
  )
}

export { CategoriesFilter }

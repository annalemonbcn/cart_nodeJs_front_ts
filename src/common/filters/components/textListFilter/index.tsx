import { FilterSection } from '@/common/filterSection'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { tokens } from '@/variables/styles'
import { StyledCategory } from './styles'
import { useMultiSelectParam } from '../../hooks/useMultiSelectParam'
import type { ITextListFilter } from './types'
import type { ITextProps } from '@/components/text/types'

const TextListFilter = ({
  filterName,
  title,
  list,
  noDataText,
  useAll = true,
  defaultOpen,
  customIcon = '/icons/filter.svg'
}: ITextListFilter) => {
  const { toggle, isActive, selected, reset } = useMultiSelectParam({
    param: filterName,
    allKey: useAll ? 'all' : null,
    defaultCsv: useAll ? 'all' : ''
  })

  const numberOfSelected = selected.filter((item) => item !== 'all').length

  return (
    <FilterSection
      title={title}
      defaultOpen={defaultOpen}
      customIcon={customIcon}
      numberOfSelected={numberOfSelected}
      onClear={reset}
    >
      <FlexContainer flexDirection="column" gap={tokens.space.md}>
        {list.length === 0 && <Text size="s3">{noDataText}</Text>}

        {list.map((textItem) => {
          const slug = textItem.toLowerCase()
          const active = isActive(slug)

          const textProps: Partial<ITextProps> = {
            weight: active ? 'bold' : 'medium',
            color: active ? 'primary' : 'mediumNeutral'
          }

          return (
            <StyledCategory key={`item-${textItem}`} onClick={() => toggle(slug)}>
              <Text {...textProps}>{textItem}</Text>
            </StyledCategory>
          )
        })}
      </FlexContainer>
    </FilterSection>
  )
}

export { TextListFilter }

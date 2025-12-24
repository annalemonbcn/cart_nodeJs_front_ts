import { FilterSection } from '@/common/filterSection'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { capitalize } from '@/utils/string'
import { tokens } from '@/variables/styles'
import { StyledColor, StyledContainer } from './styles'
import { useMultiSelectParam } from '../../hooks/useMultiSelectParam'
import type { ISquareListFilter } from './types'

const SquareListFilter = ({ list, filterName, title, useAll, noDataText }: ISquareListFilter) => {
  const { toggle, isActive, selected, reset } = useMultiSelectParam({
    param: filterName,
    allKey: useAll ? 'all' : null
  })

  const numberOfSelected = selected.filter((item) => item !== 'all').length

  return (
    <FilterSection title={title} numberOfSelected={numberOfSelected} onClear={reset}>
      <StyledContainer>
        {list.length === 0 && <Text size="s3">{noDataText}</Text>}

        {list.map((item) => {
          const slug = item.toLowerCase()
          const active = isActive(slug)

          return (
            <FlexContainer key={`item-${item}`} flexDirection="column" gap={tokens.space.md} alignItems="center">
              <StyledColor onClick={() => toggle(slug)} color={item} isActive={active} />
              <Text size="s3" weight={active ? 'bold' : 'medium'} color={active ? 'darkNeutral' : 'mediumNeutral'}>
                {capitalize(item)}
              </Text>
            </FlexContainer>
          )
        })}
      </StyledContainer>
    </FilterSection>
  )
}

export { SquareListFilter }

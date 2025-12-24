import { FilterSection } from '@/common/filterSection'
import Text from '@/components/text'
import { StyledContainer, StyledSize } from './styles'
import { useMultiSelectParam } from '../../hooks/useMultiSelectParam'
import type { IRectangularListFilter } from './types'

const RectangularListFilter = ({ list, title, filterName, useAll, noDataText }: IRectangularListFilter) => {
  const { toggle, isActive, selected, reset } = useMultiSelectParam({
    param: filterName,
    allKey: useAll ? 'all' : null
  })

  return (
    <FilterSection title={title} numberOfSelected={selected.length} onClear={reset}>
      <StyledContainer>
        {list.length === 0 && <Text size="s3">{noDataText}</Text>}

        {list.map((item) => {
          const slug = item.toLowerCase()
          const active = isActive(slug)

          return (
            <StyledSize key={`size-${item}`} justifyContent="center" onClick={() => toggle(slug)} isActive={active}>
              <Text size="s3" weight={active ? 'bold' : 'medium'} color="darkNeutral">
                {item.toUpperCase()}
              </Text>
            </StyledSize>
          )
        })}
      </StyledContainer>
    </FilterSection>
  )
}

export { RectangularListFilter }

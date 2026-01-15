import { FilterSection } from '@/common/filterSection'
import { Tag } from '@/components/tag'
import Text from '@/components/text'
import { StyledContainer } from './styles'
import { ALL_KEY } from '../../constants'
import { useMultiSelectParam } from '../../hooks/useMultiSelectParam'
import type { RectangularListFilterProps } from './types'

const RectangularListFilter = ({
  list,
  title,
  filterName,
  useAll,
  noDataText,
  defaultOpen
}: RectangularListFilterProps) => {
  const { toggle, isActive, selected, reset } = useMultiSelectParam({
    param: filterName,
    allKey: useAll ? 'all' : null
  })

  const numberOfSelected = selected.filter((item) => item !== 'all').length

  const finalList = useAll ? [ALL_KEY, ...list] : list

  return (
    <FilterSection title={title} numberOfSelected={numberOfSelected} onClear={reset} defaultOpen={defaultOpen}>
      <StyledContainer>
        {list.length === 0 && <Text size="s3">{noDataText}</Text>}

        {finalList.map((item) => {
          const slug = item.toLowerCase()
          const active = isActive(slug)

          return <Tag key={`size-${item}`} variant="white" text={item} onClick={() => toggle(slug)} isActive={active} />
        })}
      </StyledContainer>
    </FilterSection>
  )
}

export { RectangularListFilter }

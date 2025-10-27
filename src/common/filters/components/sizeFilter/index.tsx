import { FilterSection } from '@/common/filterSection'
import { StyledContainer, StyledSize } from './styles'
import Text from '@/components/text'
import { useMultiSelectParam } from '../../hooks/useMultiSelectParam'

const SizeFilter = () => {
  const mockSizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']

  const { toggle, isActive, selected, reset } = useMultiSelectParam({ param: 'size', allKey: null })

  return (
    <FilterSection title="Size" numberOfSelected={selected.length} onClear={reset}>
      <StyledContainer>
        {mockSizes.map((size) => {
          const slug = size.toLowerCase()
          const active = isActive(slug)

          return (
            <StyledSize key={`size-${size}`} justifyContent="center" onClick={() => toggle(slug)} isActive={active}>
              <Text size="s3" weight={active ? 'bold' : 'medium'} color="darkNeutral">
                {size.toUpperCase()}
              </Text>
            </StyledSize>
          )
        })}
      </StyledContainer>
    </FilterSection>
  )
}

export { SizeFilter }

import { FilterSection } from '@/common/filterSection'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { capitalize } from '@/utils/string'
import { tokens } from '@/variables/styles'
import { StyledColor, StyledContainer } from './styles'
import { useMultiSelectParam } from '../../hooks/useMultiSelectParam'

const ColorsFilter = () => {
  const colorsMock = ['all', 'red', 'blue', 'green', 'yellow', 'black', 'white']

  const { toggle, isActive, selected, reset } = useMultiSelectParam({
    param: 'color',
    allKey: 'all',
    defaultCsv: 'all'
  })

  const numberOfSelected = selected.filter((item) => item !== 'all').length

  return (
    <FilterSection title="Colors" numberOfSelected={numberOfSelected} onClear={reset}>
      <StyledContainer>
        {colorsMock.map((color) => {
          const slug = color.toLowerCase()
          const active = isActive(slug)

          return (
            <FlexContainer key={`color-${color}`} flexDirection="column" gap={tokens.space.md} alignItems="center">
              <StyledColor onClick={() => toggle(slug)} color={color} isActive={active} />
              <Text size="s3" weight={active ? 'bold' : 'medium'} color={active ? 'darkNeutral' : 'mediumNeutral'}>
                {capitalize(color)}
              </Text>
            </FlexContainer>
          )
        })}
      </StyledContainer>
    </FilterSection>
  )
}

export { ColorsFilter }

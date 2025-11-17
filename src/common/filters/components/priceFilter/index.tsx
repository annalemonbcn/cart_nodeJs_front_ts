import { useEffect, useState } from 'react'
import PriceRange from '@/common/filters/components/priceRange'
import { useFiltersState } from '@/common/filters/hooks/useFiltersState'
import { FilterSection } from '@/common/filterSection'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { tokens } from '@/variables/styles'
import { StyledContainer } from './styles'
import { type IPriceFilterProps, type IValueRenderProps } from './types'

const ValueRender = ({ value, isActive }: IValueRenderProps) => (
  <StyledContainer justifyContent="center" alignItems="center" isActive={isActive}>
    <Text color="darkNeutral" size="s3" weight={isActive ? 'bold' : 'medium'}>
      ${value}
    </Text>
  </StyledContainer>
)

const PriceFilter = ({ minPrice = 18, maxPrice = 340 }: IPriceFilterProps) => {
  const { registerState, getStateValue, setMany } = useFiltersState()

  useEffect(() => {
    registerState('minPrice', String(minPrice))
    registerState('maxPrice', String(maxPrice))
  }, [registerState, minPrice, maxPrice])

  const valueMin = Number(getStateValue('minPrice', String(minPrice)))
  const valueMax = Number(getStateValue('maxPrice', String(maxPrice)))

  const [localMin, setLocalMin] = useState(valueMin)
  const [localMax, setLocalMax] = useState(valueMax)

  useEffect(() => {
    setLocalMin(valueMin)
    setLocalMax(valueMax)
  }, [valueMin, valueMax])

  const isMinFilterActive = valueMin !== minPrice
  const isMaxFilterActive = valueMax !== maxPrice
  const isFilterActive = isMinFilterActive || isMaxFilterActive

  return (
    <FilterSection
      title="Price"
      defaultOpen
      numberOfSelected={isFilterActive ? 1 : 0}
      onClear={() => setMany({ minPrice: String(minPrice), maxPrice: String(maxPrice) })}
    >
      <FlexContainer flexDirection="column" gap={tokens.space.md}>
        <PriceRange
          min={minPrice}
          max={maxPrice}
          valueMin={localMin}
          valueMax={localMax}
          onChange={(nextMin, nextMax) => {
            setLocalMin(nextMin)
            setLocalMax(nextMax)
          }}
          onChangeCommitted={(nextMin, nextMax) => setMany({ minPrice: String(nextMin), maxPrice: String(nextMax) })}
        />
        <FlexContainer justifyContent="space-between" alignItems="center" gap={tokens.space.md}>
          <ValueRender value={localMin} isActive={isMinFilterActive} />
          <ValueRender value={localMax} isActive={isMaxFilterActive} />
        </FlexContainer>
      </FlexContainer>
    </FilterSection>
  )
}

export { PriceFilter }

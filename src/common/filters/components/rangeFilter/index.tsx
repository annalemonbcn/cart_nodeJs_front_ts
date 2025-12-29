import { useEffect, useState } from 'react'
import PriceRange from '@/common/filters/components/rangeSelector'
import { useFiltersState } from '@/common/filters/hooks/useFiltersState'
import { FilterSection } from '@/common/filterSection'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { StyledContainer } from './styles'
import { type IRangeFilterProps, type IValueRenderProps } from './types'

const ValueRender = ({ value, isActive }: IValueRenderProps) => (
  <StyledContainer justifyContent="center" alignItems="center" isActive={isActive}>
    <Text color="darkNeutral" size="s3" weight={isActive ? 'bold' : 'medium'}>
      ${value}
    </Text>
  </StyledContainer>
)

const RangeFilter = ({ minPrice, maxPrice, noDataText }: IRangeFilterProps) => {
  const { registerState, getStateValue, setMany } = useFiltersState()

  const minPriceStr = String(minPrice)
  const maxPriceStr = String(maxPrice)

  useEffect(() => {
    registerState('minPrice', minPriceStr)
    registerState('maxPrice', maxPriceStr)
  }, [registerState, minPriceStr, maxPriceStr])

  const valueMin = Number(getStateValue('minPrice', minPriceStr))
  const valueMax = Number(getStateValue('maxPrice', maxPriceStr))

  const [[localMin, localMax], setLocalRange] = useState<[number, number]>([valueMin, valueMax])

  useEffect(() => {
    setLocalRange([valueMin, valueMax])
  }, [valueMin, valueMax])

  const isMinFilterActive = valueMin !== minPrice
  const isMaxFilterActive = valueMax !== maxPrice
  const isFilterActive = isMinFilterActive || isMaxFilterActive

  const shouldRenderNoData = minPrice > maxPrice || maxPrice === 0

  const handleClear = () => {
    setMany({ minPrice: minPriceStr, maxPrice: maxPriceStr })
  }

  const handleCommit = (nextMin: number, nextMax: number) => {
    setMany({ minPrice: String(nextMin), maxPrice: String(nextMax) })
  }

  const handleChange = (nextMin: number, nextMax: number) => {
    setLocalRange([nextMin, nextMax])
  }

  return (
    <FilterSection title="Price" defaultOpen numberOfSelected={isFilterActive ? 1 : 0} onClear={handleClear}>
      {shouldRenderNoData && <Text size="s3">{noDataText}</Text>}

      {!shouldRenderNoData && (
        <FlexContainer flexDirection="column" gap="md">
          <PriceRange
            min={minPrice}
            max={maxPrice}
            valueMin={localMin}
            valueMax={localMax}
            onChange={handleChange}
            onChangeCommitted={handleCommit}
          />
          <FlexContainer justifyContent="space-between" alignItems="center" gap="md">
            <ValueRender value={localMin} isActive={isMinFilterActive} />
            <ValueRender value={localMax} isActive={isMaxFilterActive} />
          </FlexContainer>
        </FlexContainer>
      )}
    </FilterSection>
  )
}

export { RangeFilter }

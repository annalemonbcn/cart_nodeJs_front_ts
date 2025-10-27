import { useEffect, useState } from 'react'
import PriceRange from '@/common/filters/components/priceRange'
import { useFiltersState } from '@/common/filters/hooks'
import { FilterSection } from '@/common/filterSection'
import FlexContainer from '@/components/flexContainer'
import { StyledContainer } from './styles'
import Text from '@/components/text'
import { tokens } from '@/variables/styles'

const ValueRender = ({ value }: { value: number }) => (
  <StyledContainer justifyContent="center" alignItems="center">
    <Text color="darkNeutral">${value}</Text>
  </StyledContainer>
)

const PriceFilter = ({ minPrice = 18, maxPrice = 340 }: { minPrice?: number; maxPrice?: number }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { registerState, getStateValue, setMany } = useFiltersState()

  useEffect(() => {
    registerState('minPrice', String(minPrice))
    registerState('maxPrice', String(maxPrice))
  }, [registerState, minPrice, maxPrice])

  const valueMin = Number(getStateValue('minPrice', String(minPrice)))
  const valueMax = Number(getStateValue('maxPrice', String(maxPrice)))

  return (
    <FilterSection title="Price" isOpen={true} toggleOpen={() => setIsOpen(!isOpen)}>
      <PriceRange
        min={minPrice}
        max={maxPrice}
        valueMin={valueMin}
        valueMax={valueMax}
        onChange={(nextMin, nextMax) => setMany({ minPrice: nextMin, maxPrice: nextMax })}
      />
      <FlexContainer justifyContent="space-between" alignItems="center" gap={tokens.space.md}>
        <ValueRender value={valueMin} />
        <ValueRender value={valueMax} />
      </FlexContainer>
    </FilterSection>
  )
}

export { PriceFilter }

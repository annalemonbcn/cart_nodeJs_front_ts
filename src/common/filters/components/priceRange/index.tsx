import { useMemo } from 'react'
import type { PriceRangeProps } from './types'
import { ActiveRange, RangeInput, Track, Wrapper } from './styles'

const PriceRange = ({ min, max, valueMin, valueMax, onChange }: PriceRangeProps) => {
  const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b)
  const toPercent = (v: number) => ((v - min) / (max - min)) * 100

  const leftPct = useMemo(() => toPercent(valueMin), [valueMin, min, max])
  const rightPct = useMemo(() => 100 - toPercent(valueMax), [valueMax, min, max])

  return (
    <Wrapper>
      <Track>
        <ActiveRange leftPct={leftPct} rightPct={rightPct} />
      </Track>

      <RangeInput
        type="range"
        min={min}
        max={max}
        step={1}
        value={valueMin}
        aria-label="Minimum price"
        onChange={(e) => {
          const next = Number(e.target.value)
          onChange(clamp(next, min, valueMax), valueMax)
        }}
      />

      <RangeInput
        type="range"
        min={min}
        max={max}
        step={1}
        value={valueMax}
        aria-label="Maximum price"
        onChange={(e) => {
          const next = Number(e.target.value)
          onChange(valueMin, clamp(next, valueMin, max))
        }}
      />
    </Wrapper>
  )
}

export default PriceRange

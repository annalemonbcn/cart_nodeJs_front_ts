/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react'
import { ActiveRange, RangeInput, Track, Wrapper } from './styles'
import type { RangeSelectorProps } from './types'

const RangeSelector = ({ min, max, valueMin, valueMax, onChange, onChangeCommitted }: RangeSelectorProps) => {
  const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b)
  const toPercent = (v: number) => ((v - min) / (max - min)) * 100

  const leftPct = useMemo(() => toPercent(valueMin), [valueMin, min, max])
  const rightPct = useMemo(() => 100 - toPercent(valueMax), [valueMax, min, max])

  const handleMouseUp = () => {
    if (onChangeCommitted) onChangeCommitted(valueMin, valueMax)
  }

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
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
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
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
      />
    </Wrapper>
  )
}

export default RangeSelector

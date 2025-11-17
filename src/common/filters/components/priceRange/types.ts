type PriceRangeProps = {
  min: number
  max: number
  valueMin: number
  valueMax: number
  onChange: (nextMin: number, nextMax: number) => void
  onChangeCommitted?: (nextMin: number, nextMax: number) => void
}

export type { PriceRangeProps }

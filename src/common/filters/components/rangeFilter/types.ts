interface IRangeFilterProps {
  minPrice: number
  maxPrice: number
  noDataText: string
}

interface IValueRenderProps {
  value: number
  isActive: boolean
}

export type { IRangeFilterProps, IValueRenderProps }

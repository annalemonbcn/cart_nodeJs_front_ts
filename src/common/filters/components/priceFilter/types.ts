interface IPriceFilterProps {
  minPrice?: number
  maxPrice?: number
}

interface IValueRenderProps {
  value: number
  isActive: boolean
}

export type { IPriceFilterProps, IValueRenderProps }

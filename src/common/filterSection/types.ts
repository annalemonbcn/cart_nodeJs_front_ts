import type { PropsWithChildren } from '@/variables/types/global.types'

type FilterSectionBaseProps = {
  title: string
  customIcon?: string
  defaultOpen?: boolean
  numberOfSelected?: number
  onClear?: () => void
}

type IFilterSectionProps = PropsWithChildren<FilterSectionBaseProps>

type IHeaderProps = Pick<IFilterSectionProps, 'title' | 'customIcon' | 'numberOfSelected' | 'onClear'> & {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  isFilterActive: boolean
}

export type { FilterSectionBaseProps, IFilterSectionProps, IHeaderProps }

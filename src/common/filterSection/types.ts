import type { PropsWithChildren } from '@/variables/types/global.types'

type FilterSectionBaseProps = {
  title: string
  customIcon?: string
  defaultOpen?: boolean
  numberOfSelected?: number
  onClear?: () => void
}

type FilterSectionProps = PropsWithChildren<FilterSectionBaseProps>

type HeaderVariant = 'desktop' | 'mobile'

type HeaderProps = Pick<FilterSectionProps, 'title' | 'customIcon' | 'numberOfSelected' | 'onClear'> & {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  isFilterActive: boolean
  variant: HeaderVariant
  onToggle?: () => void
}

type SelectionIndicatorProps = {
  hovered: boolean
  setHovered: (v: boolean) => void
  numberOfSelected?: number
  showClearOnHover?: boolean
  onClick?: (e: React.MouseEvent) => void
}

export type { FilterSectionBaseProps, FilterSectionProps, HeaderProps, HeaderVariant, SelectionIndicatorProps }

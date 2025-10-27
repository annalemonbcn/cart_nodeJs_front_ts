import type { PropsWithChildren } from '@/variables/types/global.types'

interface IFilterSectionProps extends PropsWithChildren {
  title: string
  customIcon?: string
  defaultOpen?: boolean
  numberOfSelected?: number
  onClear?: () => void
}

export type { IFilterSectionProps }

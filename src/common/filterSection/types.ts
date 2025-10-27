import type { PropsWithChildren } from '@/variables/types/global.types'

interface IFilterSectionProps extends PropsWithChildren {
  title: string
  isOpen: boolean
  toggleOpen: () => void
  customIcon?: string
}

type HeadingProps = Omit<IFilterSectionProps, 'children'>

export type { IFilterSectionProps, HeadingProps }

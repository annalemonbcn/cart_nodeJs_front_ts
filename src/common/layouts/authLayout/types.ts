import type { PropsWithChildren } from '@/variables/types/global.types'

interface IAuthLayoutProps extends PropsWithChildren {
  imgSrc: string
  headerText: string
  headerDescription?: string
}

export type { IAuthLayoutProps }

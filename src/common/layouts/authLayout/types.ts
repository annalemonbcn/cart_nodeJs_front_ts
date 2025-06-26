import type { PropsWithChildren } from '@/variables/types'

interface IAuthLayoutProps extends PropsWithChildren {
  imgSrc: string
  headerText: string
  headerDescription?: string
}

export type { IAuthLayoutProps }

import type { PropsWithChildren } from 'react'

interface IAuthLayoutProps extends PropsWithChildren {
  imgSrc: string
  headerText: string
  headerDescription?: string
}

export type { IAuthLayoutProps }

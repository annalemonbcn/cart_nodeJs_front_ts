import type { ReactElement } from 'react'
import type { Noop, PropsWithChildren } from '@/variables/types/global.types'

type HeaderProps = Pick<DrawerProps, 'handleClose'> & PropsWithChildren
// type BodyProps = PropsWithChildren<ComponentProps<typeof StyledBody>>
type BodyProps = PropsWithChildren
type FooterProps = PropsWithChildren

type AllowChildren = BodyProps | FooterProps

interface DrawerProps {
  isOpen: boolean
  handleClose: Noop
  children: ReactElement<AllowChildren> | ReactElement<AllowChildren>[]
}

export type { HeaderProps, DrawerProps, BodyProps, FooterProps }

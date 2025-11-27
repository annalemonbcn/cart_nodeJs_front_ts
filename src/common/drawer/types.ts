import type { ReactElement } from 'react'
import type { Noop, PropsWithChildren } from '@/variables/types/global.types'

type HeaderProps = Pick<DrawerProps, 'handleClose'> & { title?: string }
// type BodyProps = PropsWithChildren<ComponentProps<typeof StyledBody>>
type BodyProps = PropsWithChildren
type FooterProps = PropsWithChildren

type AllowChildren = BodyProps | FooterProps

type SlideFrom = 'left' | 'right'
type MobileWidth = string | number

interface DrawerProps {
  isOpen: boolean
  handleClose: Noop
  children: ReactElement<AllowChildren> | ReactElement<AllowChildren>[]
  slideFrom?: SlideFrom
  mobileWidth?: MobileWidth
}

interface StyledContainerProps {
  slideFrom: SlideFrom
  mobileWidth?: MobileWidth
}

export type { HeaderProps, DrawerProps, BodyProps, FooterProps, SlideFrom, StyledContainerProps }

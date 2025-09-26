import type { PropsWithChildren } from '@/variables/types/global.types'
import type { ComponentProps, ReactElement } from 'react'
import type { StyledModalBody } from './styles'

type ModalWidth = 'sm' | 'md' | 'lg' | 'auto' | 'full'

type AllowChildren = BodyProps | FooterProps

interface IModalBaseProps {
  handleClose: () => void
  isOpen: boolean
  width?: ModalWidth
  children: ReactElement<AllowChildren> | ReactElement<AllowChildren>[]
}

interface HeaderProps {
  title: string
  description?: string
  alignCenter?: boolean
}

type BodyProps = PropsWithChildren<ComponentProps<typeof StyledModalBody>>

type FooterProps = PropsWithChildren

export type { IModalBaseProps, HeaderProps, BodyProps, FooterProps, ModalWidth }

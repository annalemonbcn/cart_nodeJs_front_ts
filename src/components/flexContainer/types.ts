import type { CSSProperties } from 'react'
import type { SpaceToken } from '@/theme'

interface IFlexContainerProps {
  flexDirection?: CSSProperties['flexDirection']
  wrap?: CSSProperties['flexWrap']
  alignContent?: CSSProperties['alignContent']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  gap?: SpaceToken
  rowGap?: SpaceToken
}

export type { IFlexContainerProps }

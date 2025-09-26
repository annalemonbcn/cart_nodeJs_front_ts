interface IFlexContainerProps {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  wrap?: 'nowrap' | 'wrap'
  alignContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'stretch'
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  gap?: string
  rowGap?: string
}

export type { IFlexContainerProps }

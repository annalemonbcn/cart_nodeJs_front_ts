import { StyledInput } from '@/components/input/styles'
import type { IInputProps } from './types'
import { forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, IInputProps>(({ name, type, placeholderText = '', ...rest }, ref) => (
  <StyledInput ref={ref} type={type} id={name} name={name} placeholder={placeholderText} {...rest} />
))

Input.displayName = 'Input'

export default Input

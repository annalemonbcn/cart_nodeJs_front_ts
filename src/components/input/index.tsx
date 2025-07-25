import { StyledInput } from '@/components/input/styles'
import type { IInputProps } from './types'
import { forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ name, type, placeholderText = '', variant = 'primary', fitContent = false, hasError = false, ...rest }, ref) => (
    <StyledInput
      ref={ref}
      type={type}
      id={name}
      name={name}
      placeholder={placeholderText}
      variant={variant}
      fitContent={fitContent}
      hasError={hasError}
      {...rest}
    />
  )
)

Input.displayName = 'Input'

export default Input

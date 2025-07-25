type InputVariant = 'primary' | 'secondary' | 'tertiary'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholderText?: string
  variant?: InputVariant
  fitContent?: boolean
  hasError?: boolean
}

export type { IInputProps, InputVariant }

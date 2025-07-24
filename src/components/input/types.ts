type InputVariant = 'primary' | 'secondary' | 'tertiary'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholderText?: string
  variant?: InputVariant
}

export type { IInputProps, InputVariant }

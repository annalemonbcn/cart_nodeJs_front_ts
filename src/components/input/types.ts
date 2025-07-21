type InputVariant = 'primary' | 'secondary'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholderText?: string
  variant?: InputVariant
}

export type { IInputProps, InputVariant }

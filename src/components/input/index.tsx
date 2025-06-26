import { StyledInput } from '@/components/input/styles'
import type { IInputProps } from './types'

const Input = ({ name, type }: IInputProps) => <StyledInput type={type} id={name} name={name} />

export default Input

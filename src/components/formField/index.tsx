import type { IFormFieldProps } from './types'
import Text from '@/components/text'
import { capitalize } from '@/utils/string'
import { tokens } from '@/variables/styles'
import FlexContainer from '../flexContainer'
import { ShowPasswordIcon } from './components/showPasswordIcon'
import { StyledLabel } from './styles'

const FormField = ({
  label,
  inputName,
  isRequired = true,
  hasError = false,
  errorMessage,
  children,
  showIcon = false,
  showPassword,
  toggleShowPassword,
  variant = 'primary'
}: IFormFieldProps) => (
  <FlexContainer flexDirection="column" gap={variant === 'primary' ? tokens.space.sm2 : undefined}>
    <FlexContainer justifyContent="space-between" alignItems="center">
      <StyledLabel htmlFor={inputName} variant={variant}>
        {capitalize(label)}
        {isRequired && '*'}
      </StyledLabel>
      {showIcon && showPassword !== undefined && (
        <ShowPasswordIcon showPassword={showPassword} toggleShowPassword={toggleShowPassword} />
      )}
    </FlexContainer>
    {children}
    {hasError && errorMessage && (
      <Text size="s2" color="danger">
        {errorMessage}
      </Text>
    )}
  </FlexContainer>
)

export default FormField

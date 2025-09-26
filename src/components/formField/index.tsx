import type { IFormFieldProps } from './types'
import Text from '@/components/text'
import { capitalize } from '@/utils/string'
import FlexContainer from '../flexContainer'
import { ShowPasswordIcon } from './components/showPasswordIcon'
import { StyledErrorTextContainer, StyledLabel } from './styles'

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
  <FlexContainer flexDirection="column">
    <FlexContainer justifyContent="space-between" alignItems="center">
      <StyledLabel htmlFor={inputName} variant={variant} hasError={hasError}>
        {capitalize(label)}
        {isRequired && '*'}
      </StyledLabel>
      {showIcon && showPassword !== undefined && (
        <ShowPasswordIcon showPassword={showPassword} toggleShowPassword={toggleShowPassword} />
      )}
    </FlexContainer>
    {children}
    {hasError && errorMessage && (
      <StyledErrorTextContainer>
        <Text size="s2" color="danger.800">
          {errorMessage}
        </Text>
      </StyledErrorTextContainer>
    )}
  </FlexContainer>
)

export default FormField

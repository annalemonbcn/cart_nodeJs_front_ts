import type { IFormFieldProps } from './types'
import Text from '@/components/text'
import { capitalize } from '@/utils/string'
import { tokens } from '@/variables'
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
  toggleShowPassword
}: IFormFieldProps) => (
  <FlexContainer flexDirection="column" gap={tokens.space.sm2}>
    <FlexContainer justifyContent="space-between" alignItems="center">
      <StyledLabel htmlFor={inputName}>
        {capitalize(label)}
        {isRequired && '*'}
      </StyledLabel>
      {showIcon && toggleShowPassword !== undefined && showPassword !== undefined && (
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

import type { IFormFieldProps } from './types'
import Text from '@/components/text'
import { capitalize } from '@/utils/string'
import { StyledFormField } from './styles'
import { tokens } from '@/variables'

const FormField = ({
  label,
  isRequired = true,
  hasError = false,
  errorMessage,
  children,
  shouldHide = false
}: IFormFieldProps) => (
  <StyledFormField
    flexDirection="column"
    gap={tokens.space.sm2}
    shouldHide={shouldHide}
    className="FormField"
  >
    <Text as="label" size="s3" color="darkNeutral">
      {capitalize(label)}
      {isRequired && '*'}
    </Text>
    {children}
    {hasError && errorMessage && (
      <Text size="s2" color="danger">
        {errorMessage}
      </Text>
    )}
  </StyledFormField>
)

export default FormField

import FlexContainer from '@/components/flexContainer'
import CustomForm from '..'
import { tokens } from '@/variables/styles'
import type { StandardFormProps } from './types'

const StandardForm = <TFieldValues extends Record<string, unknown>>({
  methods,
  children,
  gap = tokens.space.md
}: StandardFormProps<TFieldValues>) => (
  <CustomForm methods={methods}>
    <FlexContainer flexDirection="column" gap={gap}>
      {children}
    </FlexContainer>
  </CustomForm>
)

export { StandardForm }

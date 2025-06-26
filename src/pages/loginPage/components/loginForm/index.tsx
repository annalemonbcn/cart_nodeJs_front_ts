import { useForm } from 'react-hook-form'
import type { LoginFormType } from './types'
import CustomForm from '@/components/customForm'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables'
import FormField from '@/components/formField'
import Input from '@/components/input'
import { SignInBtn } from '../signInBtn'

const LoginForm = () => {
  const methods = useForm<LoginFormType>()

  // const auxText = <StyledLink href="https://google.com">Forget your password?</StyledLink>

  return (
    <CustomForm methods={methods}>
      <FlexContainer flexDirection="column" gap={tokens.space.md} className="parent">
        <FormField label="Email address">
          <Input name="email" type="text" />
        </FormField>

        <FormField label="Password">
          <Input name="password" type="password" />
        </FormField>
        <SignInBtn /> 
      </FlexContainer>
    </CustomForm>
  )
}

export { LoginForm }

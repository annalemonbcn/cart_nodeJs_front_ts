import { useFormContext, type SubmitHandler } from 'react-hook-form'
import type { LoginFormType } from '../loginForm/types'
import { StyledButton } from './styles'
import Text from '@/components/text'
import Link from '@/components/link'

const SignInBtn = () => {
  const { handleSubmit } = useFormContext<LoginFormType>()

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    // eslint-disable-next-line no-console
    console.log('data', data)
    // TODO: implement API
  }

  const handleClick = handleSubmit(onSubmit)

  return (
    <>
      <StyledButton variant="primary" onClick={handleClick}>
        Sign In
      </StyledButton>
      <Text size="s3" color="darkNeutral">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </Text>
    </>
  )
}

export { SignInBtn }

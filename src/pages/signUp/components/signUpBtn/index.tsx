import { useFormContext } from 'react-hook-form'
import type { SignUpFormType } from '../signUpForm/types'
import { StyledButton } from './styles'
import Text from '@/components/text'
import Link from '@/components/link'
import { type SubmitHandler } from 'react-hook-form'

const SignUpBtn = () => {
  const { handleSubmit } = useFormContext<SignUpFormType>()

  const onSubmit: SubmitHandler<SignUpFormType> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  const handleClick = handleSubmit(onSubmit)

  return (
    <>
      <StyledButton variant="primary" onClick={handleClick}>
        Sign Up
      </StyledButton>
      <Text size="s3" color="darkNeutral">
        Already have an account? <Link to="/login">Log In</Link>
      </Text>
    </>
  )
}

export { SignUpBtn }

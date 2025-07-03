import { useFormContext } from 'react-hook-form'
import { StyledButton } from './styles'
import Text from '@/components/text'
import Link from '@/components/link'
import { type SubmitHandler } from 'react-hook-form'
import type { SignUpFormType } from '../../types'
import { useRegisterUser } from '../../hooks'

const SignUpBtn = () => {
  const { handleSubmit } = useFormContext<SignUpFormType>()

  const { mutate, isPending } = useRegisterUser()

  const onSubmit: SubmitHandler<SignUpFormType> = async (data) => {
    mutate(data)
  }

  return (
    <>
      <StyledButton variant="primary" onClick={handleSubmit(onSubmit)}>
        {isPending ? 'Registering...' : 'Sign Up'}
      </StyledButton>
      <Text size="s3" color="darkNeutral">
        Already have an account? <Link to="/login">Log In</Link>
      </Text>
    </>
  )
}

export { SignUpBtn }

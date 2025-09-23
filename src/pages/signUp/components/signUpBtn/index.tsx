import { useFormContext } from 'react-hook-form'
import { StyledButton } from './styles'
import Text from '@/components/text'
import Link from '@/components/link'
import { type SubmitHandler } from 'react-hook-form'
import type { SignUpFormShape } from '../signUpForm/types'
import { useRegisterUser } from '../../hooks'
import { routeMap } from '@/routes/utils'

const SignUpBtn = () => {
  const { handleSubmit } = useFormContext<SignUpFormShape>()

  const { mutate, isPending } = useRegisterUser()

  const onSubmit: SubmitHandler<SignUpFormShape> = (data) => mutate(data)

  return (
    <>
      <StyledButton variant="primary" onClick={handleSubmit(onSubmit)} disabled={isPending}>
        {isPending ? 'Registering...' : 'Sign Up'}
      </StyledButton>
      <Text size="s3" color="darkNeutral">
        Already have an account? <Link to={routeMap.login.path}>Log In</Link>
      </Text>
    </>
  )
}

export { SignUpBtn }

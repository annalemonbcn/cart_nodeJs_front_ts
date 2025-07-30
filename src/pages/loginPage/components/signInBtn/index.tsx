import { useFormContext, type SubmitHandler } from 'react-hook-form'
import type { LoginFormShape } from '../loginForm/types'
import { StyledButton } from './styles'
import Text from '@/components/text'
import Link from '@/components/link'
import { useLoginUser } from '../../hooks'
import { routeMap } from '@/routes/utils'

const SignInBtn = () => {
  const { handleSubmit } = useFormContext<LoginFormShape>()

  const { mutate, isPending } = useLoginUser()

  const onSubmit: SubmitHandler<LoginFormShape> = (data) => mutate(data)

  const handleClick = handleSubmit(onSubmit)

  return (
    <>
      <StyledButton variant="primary" onClick={handleClick} disabled={isPending}>
        {isPending ? 'Logging in...' : 'Sign In'}
      </StyledButton>
      <Text size="s3" color="darkNeutral">
        Don't have an account? <Link to={routeMap.signUp.path}>Sign Up</Link>
      </Text>
    </>
  )
}

export { SignInBtn }

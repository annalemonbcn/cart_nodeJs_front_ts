import Button from '@/components/button'
import { StyledContainer } from './styles'
import type { IErrorStateProps } from './types'

const ErrorState = ({ message, centerContent = false, actionLabel, onAction }: IErrorStateProps) => (
  <StyledContainer flexDirection="column" alignItems={centerContent ? 'center' : 'flex-start'} gap="xs">
    <p>{message}</p>

    {onAction && actionLabel && (
      <Button onClick={onAction} variant="secondary">
        {actionLabel}
      </Button>
    )}
  </StyledContainer>
)

export default ErrorState

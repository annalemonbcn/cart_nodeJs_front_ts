import type { IErrorStateProps } from './types'
import { tokens } from '@/variables/styles'
import { StyledContainer } from './styles'
import Button from '@/components/button'

const ErrorState = ({ message, centerContent = false, actionLabel, onAction }: IErrorStateProps) => (
  <StyledContainer flexDirection="column" alignItems={centerContent ? 'center' : 'flex-start'} gap={tokens.space.xs}>
    <p>{message}</p>

    {onAction && actionLabel && (
      <Button onClick={onAction} variant="secondary">
        {actionLabel}
      </Button>
    )}
  </StyledContainer>
)

export default ErrorState

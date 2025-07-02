import { StyledSeparator } from './styles'
import type { ISeparatorProps } from './types'
import Text from '@/components/text'

const Separator = ({ displayText = false }: ISeparatorProps) => (
  <StyledSeparator displayText={displayText} justifyContent="center" alignItems="center">
    {displayText && (
      <Text as="span" size="s3">
        OR
      </Text>
    )}
  </StyledSeparator>
)

export { Separator }

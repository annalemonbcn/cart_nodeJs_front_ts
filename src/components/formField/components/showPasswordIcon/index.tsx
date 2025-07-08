import { StyledIcon, StyledShowPasswordIcon } from './styles'
import type { IShowPasswordIconProps } from './types'
import Text from '@/components/text'
import { tokens } from '@/variables/styles'

const ShowPasswordIcon = ({ showPassword, toggleShowPassword }: IShowPasswordIconProps) => {
  const iconSrc = showPassword ? '/icons/eye_hide.svg' : '/icons/eye_show.svg'
  const label = showPassword ? 'Hide' : 'Show'

  return (
    <StyledShowPasswordIcon alignItems="flex-end" gap={tokens.space.xs} onClick={toggleShowPassword}>
      <StyledIcon src={iconSrc} alt={`${label} password icon`} />
      <Text size="s3" underline>
        {label}
      </Text>
    </StyledShowPasswordIcon>
  )
}

export { ShowPasswordIcon }

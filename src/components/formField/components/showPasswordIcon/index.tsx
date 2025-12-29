import Text from '@/components/text'
import { StyledIcon, StyledShowPasswordIcon } from './styles'
import type { IShowPasswordIconProps } from './types'

const ShowPasswordIcon = ({ showPassword, toggleShowPassword }: IShowPasswordIconProps) => {
  const iconSrc = showPassword ? '/icons/eye_hide.svg' : '/icons/eye_show.svg'
  const label = showPassword ? 'Hide' : 'Show'

  return (
    <StyledShowPasswordIcon alignItems="flex-end" gap="xs" onClick={toggleShowPassword}>
      <StyledIcon src={iconSrc} alt={`${label} password icon`} />
      <Text size="s3" underline>
        {label}
      </Text>
    </StyledShowPasswordIcon>
  )
}

export { ShowPasswordIcon }

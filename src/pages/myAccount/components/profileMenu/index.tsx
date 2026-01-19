import Link from '@/components/link'
import Text from '@/components/text'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { theme } from '@/theme'
import { StyledMenuItem, StyledMenuWrapper } from './styles'
import type { ProfileMenuItem, ProfileMenuProps } from './types'

const MenuItem = ({ icon: Icon, label, path, isActive }: ProfileMenuItem) => {
  const isDesktop = useMediaQuery(theme.mq.js.up('md'))

  return (
    <Link to={path} underline={false}>
      <StyledMenuItem alignItems="center" gap="md" isActive={isActive}>
        {isDesktop && <Icon width={16} height={16} />}
        <Text color={isActive ? 'darkNeutral' : 'lightNeutral'} weight={isActive ? 'bold' : 'medium'}>
          {label}
        </Text>
      </StyledMenuItem>
    </Link>
  )
}

const ProfileMenu = ({ options }: ProfileMenuProps) => (
  <StyledMenuWrapper>
    {options.map((option) => (
      <MenuItem key={`menu-item-${option.path}`} {...option} />
    ))}
  </StyledMenuWrapper>
)

export { ProfileMenu }

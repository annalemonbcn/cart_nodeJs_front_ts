import Link from '@/components/link'
import Text from '@/components/text'
import { StyledMenuItem } from '../styles'
import { StyledMenuWrapper } from './styles'
import type { HorizontalMenuOption } from './types'

const MenuItem = ({ label, path, isActive }: HorizontalMenuOption) => (
  <Link to={path} underline={false}>
    <StyledMenuItem alignItems="center" gap="md" isActive={isActive}>
      <Text weight="medium">{label}</Text>
    </StyledMenuItem>
  </Link>
)

const HorizontalMenu = ({ options }: { options: HorizontalMenuOption[] }) => (
  <StyledMenuWrapper wrap="nowrap" gap="sm2">
    {options.map((option) => (
      <MenuItem key={`menu-item-${option.path}`} {...option} />
    ))}
  </StyledMenuWrapper>
)

export { HorizontalMenu }

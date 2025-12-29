import Link from '@/components/link'
import Text from '@/components/text'
import { StyledMenuItem } from '../styles'
import type { VerticalMenuOption } from './types'

const MenuItem = ({ icon: Icon, label, path, isActive }: VerticalMenuOption) => (
  <Link to={path} underline={false}>
    <StyledMenuItem alignItems="center" gap="md" isActive={isActive}>
      <Icon width={16} height={16} />
      <Text weight="medium">{label}</Text>
    </StyledMenuItem>
  </Link>
)

const VerticalMenu = ({ options }: { options: VerticalMenuOption[] }) => (
  <div>
    {options.map((option) => (
      <MenuItem key={`menu-item-${option.path}`} {...option} />
    ))}
  </div>
)

export { VerticalMenu }

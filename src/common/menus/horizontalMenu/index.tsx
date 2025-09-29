import type { HorizontalMenuOption } from './types'
import { tokens } from '@/variables/styles'
import Link from '@/components/link'
import Text from '@/components/text'
import { StyledMenuItem } from '../styles'
import { StyledMenuWrapper } from './styles'

const MenuItem = ({ label, path, isActive }: HorizontalMenuOption) => (
  <Link to={path} underline={false}>
    <StyledMenuItem alignItems="center" gap={tokens.space.md} isActive={isActive}>
      <Text weight="medium">{label}</Text>
    </StyledMenuItem>
  </Link>
)

const HorizontalMenu = ({ options }: { options: HorizontalMenuOption[] }) => (
  <StyledMenuWrapper wrap="nowrap" gap={tokens.space.sm2}>
    {options.map((option) => (
      <MenuItem key={`menu-item-${option.path}`} {...option} />
    ))}
  </StyledMenuWrapper>
)

export { HorizontalMenu }

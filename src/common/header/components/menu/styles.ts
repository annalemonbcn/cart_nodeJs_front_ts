import styled from 'styled-components'
import { colors, tokens } from '@/variables/styles'

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${tokens.space.lg};

  a {
    text-decoration: none;
    color: ${colors.mediumNeutral};
    font-weight: ${tokens.font.weight.medium};
    transition: color 0.2s;

    &:hover {
      color: ${colors.darkNeutral};
    }
  }
`

export { NavLinks }

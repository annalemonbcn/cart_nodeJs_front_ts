import styled from 'styled-components'
import { t } from '@/styles/themeHelpers'

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${t.space('lg')};

  a {
    text-decoration: none;
    color: ${t.color('mediumNeutral')};
    font-weight: ${t.fontWeight('medium')};
    transition: color 0.2s;

    &:hover {
      color: ${t.color('darkNeutral')};
    }
  }
`

export { NavLinks }

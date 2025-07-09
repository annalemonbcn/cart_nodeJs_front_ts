import FlexContainer from '@/components/flexContainer'
import Link from '@/components/link'
import type { FontSize, FontWeight, TextColor } from '@/components/text/types'
import { tokens } from '@/variables/styles'
import { useLocation } from 'react-router'
import { navLinks } from '../../constants'

const Navbar = () => {
  const location = useLocation()
  const { pathname } = location

  return (
    <FlexContainer alignItems="center" gap={tokens.space.xl2}>
      {navLinks.map((link, idx) => {
        const isActive = link.path === pathname

        const linkProps = {
          key: idx,
          to: link.path,
          size: 's4' as FontSize,
          underline: false,
          weight: isActive ? 'bold' : ('regular' as FontWeight),
          color: isActive ? 'darkNeutral' : ('mediumNeutral' as TextColor)
        }

        return <Link {...linkProps}>{link.label}</Link>
      })}
    </FlexContainer>
  )
}

export { Navbar }

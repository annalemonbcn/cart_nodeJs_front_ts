import { useLocation } from 'react-router-dom'
import FlexContainer from '@/components/flexContainer'
import Link from '@/components/link'
import { navLinks } from '../../constants'
import type { ColorToken, FontSizeToken, FontWeightToken } from '@/theme'

const Navbar = () => {
  const location = useLocation()
  const { pathname } = location

  return (
    <FlexContainer alignItems="center" gap="xl2">
      {navLinks.map((link, idx) => {
        const isActive = link.path === pathname

        const linkProps = {
          key: idx,
          to: link.path,
          size: 's4' as FontSizeToken,
          underline: false,
          weight: isActive ? 'bold' : ('regular' as FontWeightToken),
          color: isActive ? 'darkNeutral' : ('mediumNeutral' as ColorToken)
        }

        return <Link {...linkProps}>{link.label}</Link>
      })}
    </FlexContainer>
  )
}

export { Navbar }

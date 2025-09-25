import Text from '@/components/text'
import { StyledFooter } from './styles'
import Link from '@/components/link'

const Footer = () => (
  <StyledFooter justifyContent="center" alignItems="center">
    <Text color="whiteSmoke">
      Copyright © 2025 Anna Esteve - Front-end web development from BCN -{' '}
      <Link to="https://github.com/annalemon" size="s4">
        github.com/annalemon
      </Link>
    </Text>
  </StyledFooter>
)

export default Footer

import FlexContainer from '@/components/flexContainer'
import Link from '@/components/link'
import { tokens } from '@/variables/styles'
import { StyledHighlightedItem } from './styles'
import type { IHighlightedItem } from './types'

const HighlightedItem = ({ icon, path }: IHighlightedItem) => (
  <Link to={path}>
    <StyledHighlightedItem justifyContent="center" alignItems="center">
      <img src={icon} alt="highlight-icon" />
    </StyledHighlightedItem>
  </Link>
)

const Highlights = () => {
  const highlights: IHighlightedItem[] = [
    {
      icon: '/icons/heart.svg',
      path: '/my-account/favourites'
    },
    {
      icon: '/icons/profile.svg',
      path: '/my-account'
    },
    {
      icon: '/icons/cart.svg',
      path: '/cart'
    }
  ]

  return (
    <FlexContainer alignItems="center" gap={tokens.space.sm}>
      {highlights.map((highlight) => {
        const path = highlight.path.split('/')
        const lastPath = path[path.length - 1]

        return <HighlightedItem key={`highlight-item-${lastPath}`} icon={highlight.icon} path={highlight.path} />
      })}
    </FlexContainer>
  )
}

export { Highlights }

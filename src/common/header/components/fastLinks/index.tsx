import { useLocation, useNavigate } from 'react-router-dom'
import FlexContainer from '@/components/flexContainer'
import { StyledButton } from './styles'
import { getHighlights } from './utils'
import type { IHighlightedItem } from './types'
import type { ButtonVariant } from '@/components/button/types'

const HighlightedItem = ({ icon: Icon, path }: IHighlightedItem) => {
  const navigate = useNavigate()

  const location = useLocation()
  const { pathname } = location

  const isActive = path === pathname

  const buttonProps = {
    isActive,
    variant: (isActive ? 'primary' : 'tertiary') as ButtonVariant,
    fitContent: true,
    onClick: () => navigate(path)
  }

  return (
    <StyledButton {...buttonProps}>
      <Icon width={16} height={16} />
    </StyledButton>
  )
}

const FastLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
  const highlights = getHighlights(isMobile)

  return (
    <FlexContainer alignItems="center" gap="sm">
      {highlights.map((highlight) => {
        const path = highlight.path.split('/')
        const lastPath = path[path.length - 1]

        return <HighlightedItem key={`highlight-item-${lastPath}`} icon={highlight.icon} path={highlight.path} />
      })}
    </FlexContainer>
  )
}

export { FastLinks }

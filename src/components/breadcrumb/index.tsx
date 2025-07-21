import { tokens } from '@/variables/styles'
import FlexContainer from '../flexContainer'
import Link from '../link'
import { StyledBreadcrumb } from './styles'
import { useLocation } from 'react-router-dom'
import { useGenerateBreadcrumbSteps } from './hooks'

const Breadcrumb = () => {
  const location = useLocation()
  const { pathname } = location

  const steps = useGenerateBreadcrumbSteps(pathname)

  return (
    <StyledBreadcrumb alignItems="center" gap={tokens.space.xs}>
      {steps.map((step, idx) => {
        const isLast = idx === steps.length - 1

        const linkColor = isLast ? 'darkNeutral' : 'mediumNeutral'

        return (
          <FlexContainer alignItems="center" gap={tokens.space.xs}>
            <Link key={step.name} to={step.linkto} size="s3" underline={false} color={linkColor}>
              {step.name}
            </Link>
            {!isLast && <img src="/icons/chevron-right.svg" alt="chevron-right" style={{ width: tokens.space.md }} />}
          </FlexContainer>
        )
      })}
    </StyledBreadcrumb>
  )
}

export default Breadcrumb

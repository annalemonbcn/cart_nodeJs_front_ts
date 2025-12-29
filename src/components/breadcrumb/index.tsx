import { useLocation } from 'react-router-dom'
import FlexContainer from '../flexContainer'
import Link from '../link'
import { useGenerateBreadcrumbSteps } from './hooks'
import { StyledBreadcrumb } from './styles'

const Breadcrumb = () => {
  const location = useLocation()
  const { pathname } = location

  const steps = useGenerateBreadcrumbSteps(pathname)

  return (
    <StyledBreadcrumb alignItems="center" gap="xs">
      {steps.map((step, idx) => {
        const isLast = idx === steps.length - 1

        const linkColor = isLast ? 'darkNeutral' : 'mediumNeutral'

        return (
          <FlexContainer alignItems="center" gap="xs" key={step.name}>
            <Link to={step.linkto} size="s3" underline={false} color={linkColor}>
              {step.name}
            </Link>
            {!isLast && <img src="/icons/chevron-right.svg" alt="chevron-right" style={{ width: '1rem' }} />}
          </FlexContainer>
        )
      })}
    </StyledBreadcrumb>
  )
}

export default Breadcrumb

import { tokens } from '@/variables/styles'
import FlexContainer from '../flexContainer'
import Link from '../link'

interface IBreadcrumbItem {
  name: string
  linkto: string
}

const Breadcrumb = () => {
  const steps: IBreadcrumbItem[] = [
    {
      name: 'Step1',
      linkto: '/step1'
    },
    {
      name: 'Step2',
      linkto: '/step2'
    },
    {
      name: 'Step3',
      linkto: '/step3'
    }
  ]

  return (
    <FlexContainer alignItems="center" gap={tokens.space.xs}>
      {steps.map((step, idx) => {
        const isLast = idx === steps.length - 1

        const linkColor = isLast ? 'darkNeutral' : 'mediumNeutral'

        return (
          <FlexContainer alignItems="center" gap={tokens.space.xs}>
            <Link key={step.name} to={step.linkto} size="s4" underline={false} color={linkColor}>
              {step.name}
            </Link>
            {!isLast && <img src="/icons/chevron-right.svg" alt="chevron-right" style={{ width: tokens.space.md }} />}
          </FlexContainer>
        )
      })}
    </FlexContainer>
  )
}

export default Breadcrumb

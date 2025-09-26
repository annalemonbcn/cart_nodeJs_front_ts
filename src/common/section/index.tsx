import FlexContainer from '@/components/flexContainer'
import VerticalBarDecorator from '@/components/verticalBarDecorator'
import Title from '../titles/title'
import { tokens } from '@/variables/styles'
import type { ISectionProps } from './types'

const Section = ({ title, children }: ISectionProps) => (
  <FlexContainer flexDirection="column" gap={tokens.space.xl3}>
    <VerticalBarDecorator>
      <Title title={title} />
    </VerticalBarDecorator>

    {children}
  </FlexContainer>
)

export default Section

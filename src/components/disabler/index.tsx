import type { PropsWithChildren } from '@/variables/types/global.types'
import { StyledWrapper, StyledDisabler } from './styles'

const Disabler = ({ children }: PropsWithChildren) => (
  <StyledWrapper>
    {children}
    <StyledDisabler />
  </StyledWrapper>
)

export default Disabler

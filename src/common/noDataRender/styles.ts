import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { t } from '@/styles/themeHelpers'
import type { NoDataProps } from './types'

const StyledContainer = styled(FlexContainer)<Pick<NoDataProps, 'align'>>`
  padding: ${t.borderSize('sm')} dashed ${t.color('lightNeutral')};
  align-items: ${({ align }) => align && align};
`

export { StyledContainer }

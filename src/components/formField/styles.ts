import styled from 'styled-components'
import type { IFormFieldProps } from './types'
import FlexContainer from '../flexContainer'

const StyledFormField = styled(FlexContainer)<Partial<IFormFieldProps>>`
  display: ${({ shouldHide }) => (shouldHide ? 'none' : 'flex')};
`

export { StyledFormField }

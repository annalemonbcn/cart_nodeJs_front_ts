import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { t } from '@/styles/themeHelpers'
import FlexContainer from '../flexContainer'

const StyledLoaderContainer = styled(FlexContainer)`
  margin-top: ${t.space('xl6')};
`

const StyledClipLoader = styled(ClipLoader)`
  color: ${t.color('primary')};
`

export { StyledLoaderContainer, StyledClipLoader }

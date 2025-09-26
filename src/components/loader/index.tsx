import { colors } from '@/variables/styles'
import { ClipLoader } from 'react-spinners'
import { StyledLoaderContainer } from './styles'

const Loader = () => (
  <StyledLoaderContainer justifyContent="center">
    <ClipLoader color={colors.primary} />
  </StyledLoaderContainer>
)

export default Loader

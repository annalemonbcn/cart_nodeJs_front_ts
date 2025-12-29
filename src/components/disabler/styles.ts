import styled from 'styled-components'
import { t } from '@/styles/themeHelpers'

const StyledWrapper = styled.div`
  position: relative;
`

const StyledDisabler = styled.div`
  background-color: ${t.color('lightNeutral')};

  &:hover {
    cursor: not-allowed;
  }

  opacity: 0.5;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: ${t.borderRadius('sm')};
`

export { StyledWrapper, StyledDisabler }

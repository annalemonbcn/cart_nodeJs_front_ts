import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import FilterIcon from '@/icons/filter.svg?react'
import { media } from '@/theme'

const displayNone = css`
  display: none;
`

const StyledMobileFiltersSidePanel = styled(FlexContainer)`
  ${media.tablet(displayNone)}
  ${media.desktop(displayNone)}
`

const StyledFilterIcon = styled(FilterIcon)`
  & path {
    stroke: black;
  }
`

export { StyledMobileFiltersSidePanel, StyledFilterIcon }

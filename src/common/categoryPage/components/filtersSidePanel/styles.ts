import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import FilterIcon from '@/icons/filter.svg?react'

const StyledDesktopFiltersSidePanel = styled(FlexContainer)`
  width: 300px;
`

const StyledFilterIcon = styled(FilterIcon)`
  & path {
    stroke: black;
  }
`

export { StyledDesktopFiltersSidePanel, StyledFilterIcon }

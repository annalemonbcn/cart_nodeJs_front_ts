import { Fragment } from 'react/jsx-runtime'
import { StyledDesktopFiltersSidePanel } from './styles'
import { getFiltersRender } from '../../constants'
import type { DesktopRenderProps } from './types'

const DesktopRender = ({ uniqueFilters, cleanedData }: DesktopRenderProps) => (
  <StyledDesktopFiltersSidePanel flexDirection="column">
    {uniqueFilters.map((filter) => (
      <Fragment key={`filter-${filter}`}>{getFiltersRender(filter, cleanedData)}</Fragment>
    ))}
  </StyledDesktopFiltersSidePanel>
)

export { DesktopRender }

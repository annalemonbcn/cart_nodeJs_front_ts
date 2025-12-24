import { Fragment } from 'react/jsx-runtime'
import { StyledDesktopFiltersSidePanel } from './styles'
import { getFiltersRender } from '../../constants'
import { useGetFiltersData } from '../../hooks'
import type { CommonFilterRenderProps } from '../../types'

const DesktopRender = ({ filters }: CommonFilterRenderProps) => {
  const { data } = useGetFiltersData()

  return (
    <StyledDesktopFiltersSidePanel flexDirection="column">
      {filters.map((filter) => (
        <Fragment key={`filter-${filter}`}>{getFiltersRender(filter, data)}</Fragment>
      ))}
    </StyledDesktopFiltersSidePanel>
  )
}

export { DesktopRender }

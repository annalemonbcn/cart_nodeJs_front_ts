import { Fragment } from 'react/jsx-runtime'
import { Drawer } from '@/common/drawer'
import { useDrawerContext } from '@/hooks/useDrawerContext'
import { getFiltersRender } from '../../../constants'
import type { CleanedFiltersData } from '../../../types'
import type { FiltersUI } from '@/common/filters/types'

const FiltersDrawer = ({ filters, data }: { filters: FiltersUI[]; data: CleanedFiltersData }) => {
  const { isOpen, handleClose } = useDrawerContext()

  return (
    <Drawer isOpen={isOpen} handleClose={handleClose}>
      <Drawer.Header handleClose={handleClose} title="Filters" />
      <Drawer.Body>
        {filters.map((filter) => (
          <Fragment key={`filter-${filter}`}>{getFiltersRender(filter, data)}</Fragment>
        ))}
      </Drawer.Body>
    </Drawer>
  )
}

export { FiltersDrawer }

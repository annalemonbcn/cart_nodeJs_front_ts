import { Drawer } from '@/common/drawer'
import { useDrawerContext } from '@/hooks/useDrawerContext'
import type { PropsWithChildren } from '@/variables/types/global.types'

const FiltersDrawer = ({ children }: PropsWithChildren) => {
  const { isOpen, handleClose } = useDrawerContext()

  return (
    <Drawer isOpen={isOpen} handleClose={handleClose}>
      <Drawer.Header handleClose={handleClose} title="Filters" />
      <Drawer.Body>{children}</Drawer.Body>
    </Drawer>
  )
}

export { FiltersDrawer }

import { Drawer } from '@/common/drawer'
import Text from '@/components/text'
import { useDrawerContext } from '@/hooks/useDrawerContext'

const FiltersDrawer = () => {
  const { isOpen, handleClose } = useDrawerContext()

  return (
    <Drawer isOpen={isOpen} handleClose={handleClose}>
      <Drawer.Header handleClose={handleClose}>
        <Text>Drawer title here</Text>
      </Drawer.Header>
      <Drawer.Body>filters here</Drawer.Body>
      <Drawer.Footer>Footer here</Drawer.Footer>
    </Drawer>
  )
}

export { FiltersDrawer }

import { useContext } from 'react'
import { DrawerContext } from './provider'

const useDrawerContext = () => useContext(DrawerContext)

export { useDrawerContext }

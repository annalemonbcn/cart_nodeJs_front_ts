import { createContext, useState } from 'react'
import { noop } from '@tanstack/react-query'
import type { Noop, PropsWithChildren } from '@/variables/types/global.types'

type DrawerContextType = {
  isOpen: boolean
  handleOpen: Noop
  handleClose: Noop
}

const defaultStateContext: DrawerContextType = {
  isOpen: false,
  handleOpen: noop,
  handleClose: noop
}

const DrawerContext = createContext<DrawerContextType>(defaultStateContext)

const DrawerProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DrawerContext.Provider value={{ isOpen, handleOpen: () => setIsOpen(true), handleClose: () => setIsOpen(false) }}>
      {children}
    </DrawerContext.Provider>
  )
}

export { DrawerContext, DrawerProvider }

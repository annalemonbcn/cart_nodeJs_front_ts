import { createContext, useState } from 'react'
import type { ModalContextProps, MultiModalsState } from './types'
import type { PropsWithChildren } from '@/variables/types/global.types'

const DefaultStateContext: ModalContextProps = {
  modals: {},
  openModal: () => {},
  closeModal: () => {}
}

const MultiModalContext = createContext<ModalContextProps>(DefaultStateContext)

const MultiModalProvider = ({ children }: PropsWithChildren<object>) => {
  const [modals, setModals] = useState<MultiModalsState>({})

  const openModal = (modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: { open: true } }))
  }

  const closeModal = (modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: { ...prev[modalName], open: false } }))
  }

  return <MultiModalContext.Provider value={{ modals, openModal, closeModal }}>{children}</MultiModalContext.Provider>
}

export { MultiModalProvider, MultiModalContext }

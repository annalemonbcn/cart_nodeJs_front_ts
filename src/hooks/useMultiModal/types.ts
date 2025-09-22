/* eslint-disable no-unused-vars */
type MultiModalsState = Record<string, { open: boolean }>

interface ModalContextProps {
  modals: MultiModalsState
  openModal: (modalName: string, onOpen?: () => void) => void
  closeModal: (modalName: string, onClose?: () => void) => void
}

export type { ModalContextProps, MultiModalsState }

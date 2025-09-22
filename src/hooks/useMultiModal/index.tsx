import { useContext } from 'react'
import { MultiModalContext } from './provider'

const useMultiModal = (modalName: string) => {
  const { openModal, closeModal, modals } = useContext(MultiModalContext)

  const isOpen = modals?.[modalName]?.open ?? false

  const handleOpen = () => {
    if (isOpen) return

    openModal(modalName)
  }

  const handleClose = () => {
    if (!isOpen) return

    closeModal(modalName)
  }

  return { isOpen, handleOpen, handleClose }
}

export { useMultiModal }

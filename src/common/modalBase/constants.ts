import Modal from 'react-modal'

const DEFAULT_STYLES: Modal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    zIndex: 100
  },
  content: {
    inset: '50% auto auto 50%',
    border: 'none',
    borderRadius: '16px',
    padding: '0px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '90vh'
  }
}

export { DEFAULT_STYLES }
